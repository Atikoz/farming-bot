import { Decimal } from '@cosmjs/math'
import {
  getLastBlockHeight,
  getValidatorCommissionXfi,
  getValidatorDelegations,
} from './cosmosapi.js'

import Height from './models/Height.js'
import Reward from './models/Reward.js'
import User from './models/User.js'

let {
  VALIDATOR_ADDR,
  START_BLOCK_HEIGHT,
  BLOCKS_PER_DAY,
  REWARD_EVERY_BLOCKS,
  CASHBACK_PERCENT,
  REF_PERCENT,
} = process.env

START_BLOCK_HEIGHT = +START_BLOCK_HEIGHT
BLOCKS_PER_DAY = +BLOCKS_PER_DAY
REWARD_EVERY_BLOCKS = +REWARD_EVERY_BLOCKS
CASHBACK_PERCENT = +CASHBACK_PERCENT
REF_PERCENT = +REF_PERCENT

export async function main() {
  try {
    await calc()
  } catch (error) {
    console.log(error)
  }
}

export async function calc() {
  const { lastHeight } = (await Height.findOne({})) || {
    lastHeight: START_BLOCK_HEIGHT,
  }
  const lastBlockHeight = await getLastBlockHeight()

  console.log({
    lastHeight,
    current: lastBlockHeight - lastHeight,
  })

  if (lastBlockHeight - lastHeight < REWARD_EVERY_BLOCKS) {
    return
  }

  await deleteNodelegators(lastHeight + REWARD_EVERY_BLOCKS)
  const dbDelegations = new Map(
    (await User.find({}).lean()).map(({ _id, mpAddress, referrer }) => {
      return [
        mpAddress,
        {
          _id,
          mpAddress,
          referrer,
          delegationBalance: 0,
          rewardAmount: 0,
          rewardCashBackAmount: 0,
        },
      ]
    })
  )

  let fullDelegetionAmount = 0
  let validatorDelegationsLastHeight = Object.fromEntries(
    await getValidatorDelegations(VALIDATOR_ADDR, lastHeight)
  )

  Object.entries(validatorDelegationsLastHeight).forEach(([key, value]) => {
    fullDelegetionAmount += value
    if (dbDelegations.has(key)) {
      const delegator = dbDelegations.get(key)
      delegator.delegationBalance = value
    }
  })

  for (
    let i = lastHeight;
    i < lastHeight + REWARD_EVERY_BLOCKS;
    i += BLOCKS_PER_DAY
  ) {
    try {
      const oneAmount = await getValidatorCommissionXfi(VALIDATOR_ADDR, i)
      const twoAmout = await getValidatorCommissionXfi(
        VALIDATOR_ADDR,
        i + (BLOCKS_PER_DAY - 1)
      )

      const commissionTotalRewards = Decimal.fromAtomics(
        Decimal.fromUserInput(twoAmout, 18)
          .minus(Decimal.fromUserInput(oneAmount, 18).floor())
          .floor()
          .toString(),
        18
      )
        .floor()
        .toString()

      ;[...dbDelegations.keys()].map((delegatorAddr) => {
        const delegator = dbDelegations.get(delegatorAddr)
        const delegationBalance = delegator.delegationBalance
        const rewardAmount =
          (commissionTotalRewards / fullDelegetionAmount) * delegationBalance
        const rewardCashBackAmount = rewardAmount * CASHBACK_PERCENT

        delegator.rewardAmount += rewardAmount
        delegator.rewardCashBackAmount += rewardCashBackAmount
      })
    } catch (error) {}
  }

  for (const key of dbDelegations.keys()) {
    const delegator = dbDelegations.get(key)
    const { _id } = delegator
    const referrals = await User.find({ referrer: _id }).lean()
    if (referrals.length === 0) continue
    referrals.forEach(({ mpAddress: refmpAddress }) => {
      const { rewardAmount } = dbDelegations.get(refmpAddress)
      const refPercent = rewardAmount * REF_PERCENT
      delegator.rewardCashBackAmount += refPercent
    })
  }
  console.log(dbDelegations)

  const session = await User.startSession()
  const a = await session.withTransaction(async () => {
    await Reward.insertMany(
      [...dbDelegations.keys()].map((e) => {
        const { mpAddress, rewardCashBackAmount } = dbDelegations.get(e)
        return {
          mpAddress: mpAddress,
          amount: rewardCashBackAmount,
        }
      })
    )
    await Height.updateOne(
      {},
      { $set: { lastHeight: lastHeight + REWARD_EVERY_BLOCKS } },
      {
        upsert: true,
      }
    )
  })

  console.log(a)
}

async function deleteNodelegators(currentHeight) {
  const dbDelegations = new Map(
    (await User.find({}).lean()).map(({ _id, mpAddress, referrer }) => {
      return [
        mpAddress,
        {
          _id,
          mpAddress,
          referrer,
        },
      ]
    })
  )

  let validatorDelegationsCurrentHeight = Object.fromEntries(
    await getValidatorDelegations(VALIDATOR_ADDR, currentHeight)
  )

  const noDelegators = [...dbDelegations.values()].filter(({ mpAddress }) => {
    if (mpAddress === 'mx1zeacsgfgc39zpt5kk9u7d7zc2708jwrxf4fl76') return false
    if (validatorDelegationsCurrentHeight[mpAddress]) return false
    return true
  })

  if (noDelegators.length !== 0) {
    await User.updateMany(
      {
        mpAddress: noDelegators.map((e) => e.mpAddress),
      },
      {
        $set: {
          delegator: false,
        },
      }
    )

    const users = await User.find({ delegator: false }).lean()
    for (const user of users) {
      let { referrer, _id } = user
      while (true) {
        const ref = await User.findOne({ _id: referrer }).lean()
        if (ref.delegator === false) {
          referrer = ref.referrer
        } else {
          break
        }
      }
      await User.updateMany(
        { referrer: _id },
        {
          $set: {
            referrer: referrer,
          },
        }
      )
    }
    await User.deleteMany({ delegator: false })
  }
}
