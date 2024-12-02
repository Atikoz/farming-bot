import { Decimal as DecimalCosm } from '@cosmjs/math'
import got from 'got'
import pkg from 'dsc-js-sdk'
const { Wallet, Decimal, DecimalNetworks } = pkg

import dd from 'dedent'
import Height from './models/Height.js'
import User from './models/User.js'
import { sendMessage } from './sendMessage.js'

let {
  ADMIN_ID,
  VALIDATOR_ADDR_DECIMAL,
  VALIDATOR_SEED_DECIMAL,
  START_DATE_HEIGHT_DECIMAL,
  NODE_API_DECIMAL,
  COMMISION_PERCENT_VALIDATOR_DECIMAL,
  CASHBACK_PERCENT_DECIMAL,
  REF_PERCENT_DECIMAL,
} = process.env

ADMIN_ID = Number(ADMIN_ID)
COMMISION_PERCENT_VALIDATOR_DECIMAL = Number(
  COMMISION_PERCENT_VALIDATOR_DECIMAL
)
CASHBACK_PERCENT_DECIMAL = Number(CASHBACK_PERCENT_DECIMAL)
REF_PERCENT_DECIMAL = Number(REF_PERCENT_DECIMAL)

const http = got.extend({
  prefixUrl: NODE_API_DECIMAL,
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
    limit: 5,
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
  console.log('run decimal')
  let rewardsDelegation = {}
  while (true) {
    try {
      rewardsDelegation = await calcRewards()
      break
    } catch (error) {
      console.log(error)
    }
    await new Promise((resolve) => setTimeout(resolve, 900000))
  }

  const decimal = await Decimal.connect(DecimalNetworks.mainnet)
  const decimalWallet = new Wallet(VALIDATOR_SEED_DECIMAL)
  decimal.setWallet(decimalWallet)
  const sender = await decimal.transactionSender()

  while (true) {
    try {
      const totalReward = Object.values(rewardsDelegation).reduce((a, b) => {
        console.log(a, b)
        return a + (b.rewardCashback + b.rewardRef)
      }, 0)

      console.log('Buy cashback coin')

      const r = await sender.sellCoins(
        {
          sellCoin: 'DEL',
          amount: totalReward,
          getCoin: 'CASHBACK',
        },
        { txBroadcastMode: 'sync', message: 'buy cashback', feeCoin: 'DEL' }
      )

      console.log(r)

      const { price } = await decimal.getCoin('CASHBACK')
      Object.keys(rewardsDelegation).map((k) => {
        const { rewardCashback, rewardRef } = rewardsDelegation[k]
        const rewardCashbackCoin = (rewardCashback + rewardRef) / price
        console.log(`rewardCashbackCoin ${k} ${rewardCashbackCoin}`)
        rewardsDelegation[k].rewardCashbackCoin = rewardCashbackCoin
      })

      const multiSendMsg = Object.keys(rewardsDelegation)
        .map((k) => {
          const { rewardCashbackCoin } = rewardsDelegation[k]
          if (rewardCashbackCoin === 0) return false
          return {
            to: k,
            coin: 'CASHBACK',
            amount: rewardCashbackCoin,
          }
        })
        .filter(Boolean)
      console.log(multiSendMsg)
      const { transactionHash } = await sender.multiSendCoin(multiSendMsg, {
        txBroadcastMode: 'sync',
        feeCoin: 'DEL',
        message: `Выплата вознаграждения по программе реферального фарминга https://t.me/BazerFarming_bot`,
      })

      console.log(transactionHash);

      await Height.updateMany(
        {},
        { $set: { lastHeightDecimal: new Date().toISOString() } },
        { upsert: true }
      )

      let message =
        'Выплата вознаграждения по программе реферального фарминга @BazerFarming_bot\n\n' +
        '<a href="https://explorer.decimalchain.com/transactions/' +
        transactionHash +
        '">🏷Мультисенд Decimal</a>\n'
      multiSendMsg.map((m) => {
        const { to, amount, coin } = m
        message +=
          dd`<a href="https://explorer.decimalchain.com/address/${to}">${to.substring(
            0,
            4
          )}...${to.substring(to.length - 4)}</a> ${amount} ${coin}`.replace(
            /\n/g,
            ''
          ) + '\n'
      })
      await sendMessage(message)
      await new Promise((resolve) => setTimeout(resolve, 5000))
      const rr = await decimal.getAddressBalances(decimalWallet.address)
      const new1 = rr.del.amount.slice(-18)
      let new2 = rr.del.amount.slice(0, -18)
      new2 = (Number(new2) - 10).toString() + new1
      console.log('amount', rr.del.amount, new2)
      console.log(
        await sender.sendCoin(
          {
            amount: DecimalCosm.fromAtomics(
              new2,
              18
            ).toFloatApproximation(),
            coin: 'DEL',
            to: '0x5ca7c29db9f366bbe9c84880fc1c8c0538fa21bc',

          },
          { feeCoin: 'DEL', txBroadcastMode: 'sync', message: 'Возврат суммы по программе реферального фарминга https://t.me/BAZERREFFARMING' }
        )
      )
      break
    } catch (error) {
      console.log(error)
    }
    await new Promise((resolve) => setTimeout(resolve, 900000))
  }
}

async function calcRewards() {
  const rewardsDelegation = {}
  let { lastHeightDecimal } = await Height.findOne({})
  lastHeightDecimal = lastHeightDecimal || START_DATE_HEIGHT_DECIMAL

  let users = await User.find({
    addressDecimal: { $ne: null },
  }).lean()

  for (let user of users) {
    try {
      console.log(`get stakes ${user._id} - ${user.addressDecimal}`)

      const {
        body: { Result: { rewards: result } },
      } = await http(`api/v1/rewards/${user.addressDecimal}?limit=50&offset=0`)

      if (result === null) {
        console.log('user.delegator = false')
        user.delegator = false
        continue
      }

      if (result.some((r) => r.validator_address === VALIDATOR_ADDR_DECIMAL)) {
        user.delegator = true
        rewardsDelegation[user.addressDecimal] = {
          reward: 0,
          commision: 0,
          rewardCashback: 0,
          rewardRef: 0,
        }
      }
    } catch (e) {
      console.log('get stakes error')
    }

  }

  users = users.filter(({ delegator }) => delegator === true)

  for (let user of users) {
    try {
      if (user._id === ADMIN_ID) continue

      console.log(`get rewards ${user._id} - ${user.addressDecimal}`)

      const {
        body: {
          Result: { rewards },
        },
      } = await http(`api/v1/rewards/${user.addressDecimal}?limit=300&offset=0`)

      let reward = rewards
        .filter(({ date, validator_address }) => {
          if (
            new Date(date).getTime() > new Date(lastHeightDecimal).getTime() &&
            validator_address === VALIDATOR_ADDR_DECIMAL
          )
            return true
        })
        .reduce((a, { value: b }) => {
          return DecimalCosm.fromAtomics(b, 18)
            .plus(DecimalCosm.fromUserInput(a.toString(), 18))
            .toString()
        }, 0)

      console.log(`reward ${user._id} - ${user.addressDecimal} ${reward}`)

      reward = DecimalCosm.fromUserInput(reward, 18).toFloatApproximation()
      const commision = reward * COMMISION_PERCENT_VALIDATOR_DECIMAL
      const referrer = await User.findById(user.referrer)
      if (
        rewardsDelegation[referrer.addressDecimal] &&
        referrer._id !== ADMIN_ID
      ) {
        rewardsDelegation[referrer.addressDecimal].rewardRef = +(
          commision * REF_PERCENT_DECIMAL
        ).toFixed(8)
      }

      rewardsDelegation[user.addressDecimal].reward = reward
      rewardsDelegation[user.addressDecimal].commision = commision
      rewardsDelegation[user.addressDecimal].rewardCashback = +(
        commision * CASHBACK_PERCENT_DECIMAL
      ).toFixed(8)
    } catch (e) { }

  }

  console.log(rewardsDelegation)
  return rewardsDelegation
}
