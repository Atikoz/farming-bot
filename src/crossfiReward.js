import { Decimal } from '@cosmjs/math'
import got from 'got'

import fromExponential from 'from-exponential';

import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { SigningStargateClient } from '@cosmjs/stargate'
import dd from 'dedent'

import Height from './models/Height.js'
import User from './models/User.js'
import { sendMessage } from './sendMessage.js'

import {
  getRewardAddressByHeight,
  getValidatorDelegations,
} from './crossfiapi.js'
import { cosmjsSalt } from '@cosmjs/proto-signing/build/wallet.js'

let {
  ADMIN_ID,
  VALIDATOR_ADDR_CROSSFI,
  VALIDATOR_SEED_CROSSFI,
  START_BLOCK_HEIGHT_CROSSFI,
  NODE_API_CROSSFI,
  COMMISION_PERCENT_VALIDATOR_CROSSFI,
  CASHBACK_PERCENT_CROSSFI,
  REF_PERCENT_CROSSFI,
} = process.env

ADMIN_ID = Number(ADMIN_ID)
COMMISION_PERCENT_VALIDATOR_CROSSFI = Number(
  COMMISION_PERCENT_VALIDATOR_CROSSFI
)
START_BLOCK_HEIGHT_CROSSFI = Number(START_BLOCK_HEIGHT_CROSSFI)
CASHBACK_PERCENT_CROSSFI = Number(CASHBACK_PERCENT_CROSSFI)
REF_PERCENT_CROSSFI = Number(REF_PERCENT_CROSSFI)

const validatorRewardAddress = 'mx1gkqazfgq8tmc6r69u6s6wzlvcz7lufy75n2qtt'

const http = got.extend({
  prefixUrl: NODE_API_CROSSFI,
  responseType: 'json',
  headers: {
    accept: 'application/json',
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36',
  },
  timeout: {
    request: 10000,
  },
  retry: {
    limit: 10,
  },
  hooks: {
    beforeRetry: [
      (error, count) => {
        console.log(error, count)
      },
    ],
  },
})

export async function run() {
  console.log('run crossfi')
  while (true) {
    try {
      await calc()
      break
    } catch (error) {
      console.log(error)
    }
    await new Promise((resolve) => setTimeout(resolve, 900000))
  }
}

export async function calc() {
  let { lastHeightCrossFI } = await Height.findOne({})
  lastHeightCrossFI = lastHeightCrossFI || START_BLOCK_HEIGHT_CROSSFI

  console.log(lastHeightCrossFI)
  const { txs } = await got(
    `https://xfiscan.com/cosmos-rpc/api/txs?address=${validatorRewardAddress}&page=1`
  ).json()

  const txLatestHeight = txs.find((tx) => {
    if (JSON.stringify(tx).includes('withdraw_rewards')) return true
    return false
  }).height

  if (txLatestHeight <= lastHeightCrossFI) {
    console.log('txLatestHeight <= lastHeightCrossFI', txLatestHeight, lastHeightCrossFI)
    return
  }

  let validatorDelegationsHeight = Object.fromEntries(
    await getValidatorDelegations(VALIDATOR_ADDR_CROSSFI, txLatestHeight)
  )

  const totalReward = await getRewardAddressByHeight(
    'mx1gkqazfgq8tmc6r69u6s6wzlvcz7lufy75n2qtt',
    txLatestHeight
  )
  let fullDelegetionAmount = 0
  Object.entries(validatorDelegationsHeight).forEach(([key, value]) => {
    fullDelegetionAmount += value
  })

  console.log('rossfi totalReward, fullDelegetionAmount - ', totalReward, fullDelegetionAmount)

  const rewardsDelegation = {}
  let users = await User.find({
    addressCrossFi: { $ne: null },
  }).lean()

  users.map((user) => {
    validatorDelegationsHeight[user.addressCrossFi]
    user.delegator = true
    rewardsDelegation[user.addressCrossFi] = {
      reward: 0,
      commision: 0,
      rewardCashback: 0,
      rewardRef: 0,
    }
  })

  users = users.filter(({ delegator }) => delegator === true)
  for (let user of users) {
    if (user._id === ADMIN_ID) continue

    console.log(`get rewards ${user._id} - ${user.addressCrossFi}`)

    if (!validatorDelegationsHeight[user.addressCrossFi]) {
      console.log(`not rewards ${user._id} - ${user.addressCrossFi}`)
      continue
    }

    const reward =
      (totalReward / fullDelegetionAmount) *
      validatorDelegationsHeight[user.addressCrossFi]



    const commision = reward * COMMISION_PERCENT_VALIDATOR_CROSSFI
    const referrer = await User.findById(user.referrer)

    console.log('reward - ', reward, commision)

    if (
      validatorDelegationsHeight[referrer.addressCrossFi] &&
      referrer._id !== ADMIN_ID
    ) {
      rewardsDelegation[referrer.addressCrossFi].rewardRef = +(
        commision * REF_PERCENT_CROSSFI
      ).toFixed(8)
    }

    rewardsDelegation[user.addressCrossFi].reward = reward
    rewardsDelegation[user.addressCrossFi].commision = commision
    rewardsDelegation[user.addressCrossFi].rewardCashback = +(
      commision * CASHBACK_PERCENT_CROSSFI
    ).toFixed(8)
  }

  let totalRewardDelegation = 0
  Object.keys(rewardsDelegation).map((k) => {
    if (rewardsDelegation[k].rewardCashback === 0) {
      delete rewardsDelegation[k]
      return
    }

    totalRewardDelegation +=
      rewardsDelegation[k].rewardCashback + rewardsDelegation[k].rewardRef

    console.log(rewardsDelegation[k].rewardCashback, rewardsDelegation[k].rewardRef)
  })

  console.log('totalRewardDelegation', totalRewardDelegation)

  const msgMultiSend = [
    {
      typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend',
      value: {
        inputs: [
          {
            address: validatorRewardAddress,
            coins: [
              {
                amount: Decimal.fromUserInput(
                  totalRewardDelegation.toFixed(18),
                  18
                ).atomics,
                denom: 'xfi',
              },
            ],
          },
        ],
        outputs: Object.keys(rewardsDelegation).map((d) => {


          console.log('amountrewardsDelegation ', rewardsDelegation[d].rewardCashback, rewardsDelegation[d].rewardRef, fromExponential(
            rewardsDelegation[d].rewardCashback +
            rewardsDelegation[d].rewardRef
          ).toString())

          const a = fromExponential(rewardsDelegation[d].rewardCashback +
            rewardsDelegation[d].rewardRef)
          const b = a.toString().slice(0, 21)
          console.log(a, b)

          const amount = Decimal.fromUserInput(
            b,
            18
          ).atomics
          return {
            address: d,
            coins: [
              {
                amount,
                denom: 'xfi',
              },
            ],
          }
        }),
      },
    },
  ]

  console.log(JSON.stringify(msgMultiSend, '', 4))

  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    VALIDATOR_SEED_CROSSFI,
    {
      prefix: 'mx',
    }
  )
  const rpcEndpoint = 'https://tendermint.mineplex.io/'
  const client = await SigningStargateClient.connectWithSigner(
    rpcEndpoint,
    wallet,
    {
      gasPrice: '10000000000000mpx',
    }
  )

  const transactionHash = await client.signAndBroadcastSync(
    'mx1gkqazfgq8tmc6r69u6s6wzlvcz7lufy75n2qtt',
    msgMultiSend,
    'auto',
    'Выплата вознаграждения по программе реферального фарминга https://t.me/BazerFarming_bot'
  )

  console.log('transactionHash ', transactionHash)

  await Height.updateMany(
    {},
    { $set: { lastHeightCrossFI: txLatestHeight } },
    { upsert: true }
  )

  let message =
    'Выплата вознаграждения по программе реферального фарминга @BazerFarming_bot\n\n' +
    '<a href="https://xfiscan.com/txs/' +
    transactionHash +
    '">🏷Мультисенд CrossFI</a>\n'
  Object.keys(rewardsDelegation).map((d) => {
    const { rewardCashback, rewardRef } = rewardsDelegation[d]
    const amount = (rewardCashback + rewardRef).toFixed(8)
    message +=
      dd`<a href="https://xfiscan.com/addresses/${d}">${d.substring(
        0,
        4
      )}...${d.substring(d.length - 4)}</a> ${amount} XFI`.replace(/\n/g, '') +
      '\n'
  })
  await sendMessage(message)
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const balance = await client.getBalance(validatorRewardAddress, 'xfi')
  console.log(
    await client.sendTokens(
      validatorRewardAddress,
      'mx1zeacsgfgc39zpt5kk9u7d7zc2708jwrxf4fl76',
      [{ denom: 'xfi', amount: balance.amount }],
      'auto', 'Возврат суммы по программе реферального фарминга https://t.me/BAZERREFFARMING'
    )
  )
}
