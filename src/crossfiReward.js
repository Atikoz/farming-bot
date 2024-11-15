import { Decimal } from '@cosmjs/math'
import got from 'got'

import fromExponential from 'from-exponential';

import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { GasPrice, SigningStargateClient } from '@cosmjs/stargate'
import dd from 'dedent'

import Height from './models/Height.js'
import User from './models/User.js'
import { sendMessage } from './sendMessage.js'

import {
  getRewardAddressByHeight,
  getValidatorDelegations,
} from './crossfiapi.js'
import { cosmjsSalt } from '@cosmjs/proto-signing/build/wallet.js'
import getUserTx from '../function/crossfi/getUserTx.js';
import { stringToPath } from '@cosmjs/crypto';

let {
  ADMIN_ID,
  VALIDATOR_ADDR_CROSSFI,
  VALIDATOR_SEED_CROSSFI,
  START_BLOCK_HEIGHT_CROSSFI,
  NODE_API_CROSSFI,
  COMMISION_PERCENT_VALIDATOR_CROSSFI,
  CASHBACK_PERCENT_CROSSFI,
  REF_PERCENT_CROSSFI,
  REF_PERCENT_1_LVL,
  REF_PERCENT_2_LVL,
  REF_PERCENT_3_LVL,
  CROSSFI_RPC_URL
} = process.env

ADMIN_ID = Number(ADMIN_ID)
COMMISION_PERCENT_VALIDATOR_CROSSFI = Number(
  COMMISION_PERCENT_VALIDATOR_CROSSFI
)
START_BLOCK_HEIGHT_CROSSFI = Number(START_BLOCK_HEIGHT_CROSSFI)
CASHBACK_PERCENT_CROSSFI = Number(CASHBACK_PERCENT_CROSSFI)
REF_PERCENT_CROSSFI = Number(REF_PERCENT_CROSSFI)

const validatorRewardAddress = 'mx1utyfgv6hlj85m06j4p567wca5jcuxztadcq0dh'

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

const GAS_PRICE = {
  mpx: GasPrice.fromString('10000000000000mpx'),
  xfi: GasPrice.fromString('100000000000xfi'),
};

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

  const txs = await getUserTx(validatorRewardAddress);

  const txLatestHeight = txs.find((tx) =>
    tx.events && tx.events.some(event => event.type === 'withdraw_rewards')
  )?.height;

  if (!txLatestHeight) {
    console.log("транзакций не найдено.");
    return;
  }

  if (txLatestHeight <= lastHeightCrossFI) {
    console.log('txLatestHeight <= lastHeightCrossFI', txLatestHeight, lastHeightCrossFI)
    return
  }

  let validatorDelegationsHeight = Object.fromEntries(
    await getValidatorDelegations(VALIDATOR_ADDR_CROSSFI, txLatestHeight)
  )

  const totalReward = await getRewardAddressByHeight(
    validatorRewardAddress
  )
  let fullDelegetionAmount = 0
  Object.entries(validatorDelegationsHeight).forEach(([key, value]) => {
    fullDelegetionAmount += value
  })

  console.log('crossfi totalReward, fullDelegetionAmount - ', totalReward, fullDelegetionAmount)

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
    const referralShare = commision * REF_PERCENT_CROSSFI;

    console.log('reward - ', reward, commision)

    // Знаходимо реферерів для всіх трьох рівнів
    const referrer = await User.findById(user.referrer);
    const referrer2 = await User.findById(user.referrer2);
    const referrer3 = await User.findById(user.referrer3);

    if (
      validatorDelegationsHeight[referrer.addressCrossFi] &&
      referrer._id !== ADMIN_ID
    ) {
      rewardsDelegation[referrer.addressCrossFi].rewardRef = +(
        referralShare * REF_PERCENT_1_LVL
      ).toFixed(8)

      await sendMessage(`Пользователю <i>${referrer._id}</i> с адрессом: ${referrer.addressCrossFi} начисленно ${rewardsDelegation[referrer.addressCrossFi].rewardRef} XFI за реферала по 1 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
    }
    else if (
      validatorDelegationsHeight[referrer2.addressCrossFi] &&
      referrer2._id !== ADMIN_ID
    ) {
      rewardsDelegation[referrer.addressCrossFi].rewardRef = +(
        referralShare * REF_PERCENT_2_LVL
      ).toFixed(8)

      await sendMessage(`Пользователю <i>${referrer2._id}</i> с адрессом: ${referrer2.addressCrossFi} начисленно ${rewardsDelegation[referrer2.addressCrossFi].rewardRef} XFI за реферала по 2 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
    }
    else if (
      validatorDelegationsHeight[referrer3.addressCrossFi] &&
      referrer3._id !== ADMIN_ID
    ) {
      rewardsDelegation[referrer.addressCrossFi].rewardRef = +(
        referralShare * REF_PERCENT_3_LVL
      ).toFixed(8)

      await sendMessage(`Пользователю <i>${referrer3._id}</i> с адрессом: ${referrer3.addressCrossFi} начисленно ${rewardsDelegation[referrer3.addressCrossFi].rewardRef} XFI за реферала по 3 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
    }
    else if (referrer._id === ADMIN_ID || referrer2._id === ADMIN_ID || referrer3._id === ADMIN_ID) {
      // Логування, якщо реферер є адміністратором
      await sendMessage(`Реферальное вознаграждение не начисляется, поскольку реферер является администратором: ${referrer._id}`)
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

  console.log(rewardsDelegation);

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

  const HD_PATHS = [stringToPath("m/44'/118'/0'/0/0"), stringToPath("m/44'/60'/0'/0/0")];
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    VALIDATOR_SEED_CROSSFI,
    {
      prefix: 'mx',
      hdPaths: HD_PATHS
    }
  )
  const [oldAddressAccountData, newAddressAccountData] = await wallet.getAccounts();
  console.log('old address:', oldAddressAccountData.address);
  console.log('new address:', newAddressAccountData.address);

  const gasPrice = GAS_PRICE.mpx

  const clientOptions = {
    gasPrice,
    broadcastTimeoutMs: 5000,
    broadcastPollIntervalMs: 1000,
  };

  const client = await SigningStargateClient.connectWithSigner(
    CROSSFI_RPC_URL,
    wallet,
    clientOptions
  )

  const transactionHash = await client.signAndBroadcastSync(
    validatorRewardAddress,
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
  Object.keys(rewardsDelegation).map(async (d) => {
    const { rewardCashback, rewardRef } = rewardsDelegation[d]
    const amount = (rewardCashback + rewardRef).toFixed(8)
    message +=
      dd`<a href="https://xfiscan.com/addresses/${d}">${d.substring(
        0,
        4
      )}...${d.substring(d.length - 4)}</a> ${amount} XFI`.replace(/\n/g, '') +
      '\n'
    const userData = await User.findOne({ addressCrossFi: d }).select('_id');
    await sendMessage(`Выплата вознаграждения по программе реферального фарминга ${amount} XFI`, userData._id);
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

  const remainingCommission = balance.amount / 1e18;
  await sendMessage(`Возврат остатка комиссии администратору: ${remainingCommission.toFixed(8)} XFI`);
}
