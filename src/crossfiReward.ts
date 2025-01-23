import fromExponential from 'from-exponential';

import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing'
import { GasPrice, SigningStargateClient } from '@cosmjs/stargate'
import dd from 'dedent'

import Height from './models/Height'
import User from './models/User'
import { sendMessage } from './sendMessage'

import {
  getRewardAddressByHeight,
  getValidatorDelegations,
} from './crossfiapi.js'

import getUserTx from '../function/crossfi/getUserTx';
import { stringToPath } from '@cosmjs/crypto';
import { toBaseUnit } from '../helpers/toBaseUnit';
import envSchema from './models/zodEnvSchemaSchema';

const env = envSchema.parse(process.env);

const {
  ADMIN_ID,
  VALIDATOR_ADDR_CROSSFI,
  VALIDATOR_SEED_CROSSFI,
  START_BLOCK_HEIGHT_CROSSFI,
  COMMISION_PERCENT_VALIDATOR_CROSSFI,
  CASHBACK_PERCENT_CROSSFI,
  REF_PERCENT_CROSSFI,
  REF_PERCENT_1_LVL,
  REF_PERCENT_2_LVL,
  REF_PERCENT_3_LVL,
  CROSSFI_RPC_URL,
  VALIDATOR_REWARD_ADDR_CROSSFI
} = env;

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
  const heightDoc = await Height.findOne({});

  if (!heightDoc) {
    throw new Error('Height document not found');
  }

  let { lastHeightCrossFI } = heightDoc;
  lastHeightCrossFI = lastHeightCrossFI || START_BLOCK_HEIGHT_CROSSFI

  console.log(lastHeightCrossFI)

  const txs = await getUserTx(VALIDATOR_REWARD_ADDR_CROSSFI);

  const txLatestHeight = txs.find((tx) =>
    tx.events && tx.events.some(event => event.type === 'withdraw_rewards')
  )?.height;

  if (!txLatestHeight) {
    console.log("транзакций не найдено.");
    return;
  }

  if (txLatestHeight <= lastHeightCrossFI) {
    console.log('txLatestHeight <= lastHeightCrossFI', txLatestHeight, lastHeightCrossFI)
    // return
  }

  let validatorDelegationsHeight = Object.fromEntries(
    await getValidatorDelegations(VALIDATOR_ADDR_CROSSFI, txLatestHeight)
  )

  const totalReward = await getRewardAddressByHeight(
    VALIDATOR_REWARD_ADDR_CROSSFI
  )

  if (totalReward < 1) {
    return console.log('totalReward', totalReward)
  }

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
      // console.log(`Пользователю <i>${referrer._id}</i> с адрессом: ${referrer.addressCrossFi} начисленно ${rewardsDelegation[referrer.addressCrossFi].rewardRef} XFI за реферала по 1 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
      await sendMessage(`Пользователю <i>${referrer._id}</i> с адрессом: ${referrer.addressCrossFi} начисленно ${rewardsDelegation[referrer.addressCrossFi].rewardRef} XFI за реферала по 1 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
    }

    if (
      validatorDelegationsHeight[referrer2.addressCrossFi] &&
      referrer2._id !== ADMIN_ID
    ) {
      rewardsDelegation[referrer.addressCrossFi].rewardRef = +(
        referralShare * REF_PERCENT_2_LVL
      ).toFixed(8)
      // console.log(`Пользователю <i>${referrer2._id}</i> с адрессом: ${referrer2.addressCrossFi} начисленно ${rewardsDelegation[referrer2.addressCrossFi].rewardRef} XFI за реферала по 2 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
      await sendMessage(`Пользователю <i>${referrer2._id}</i> с адрессом: ${referrer2.addressCrossFi} начисленно ${rewardsDelegation[referrer2.addressCrossFi].rewardRef} XFI за реферала по 2 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
    }

    if (
      validatorDelegationsHeight[referrer3.addressCrossFi] &&
      referrer3._id !== ADMIN_ID
    ) {
      rewardsDelegation[referrer.addressCrossFi].rewardRef = +(
        referralShare * REF_PERCENT_3_LVL
      ).toFixed(8)
      // console.log(`Пользователю <i>${referrer3._id}</i> с адрессом: ${referrer3.addressCrossFi} начисленно ${rewardsDelegation[referrer3.addressCrossFi].rewardRef} XFI за реферала по 3 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
      await sendMessage(`Пользователю <i>${referrer3._id}</i> с адрессом: ${referrer3.addressCrossFi} начисленно ${rewardsDelegation[referrer3.addressCrossFi].rewardRef} XFI за реферала по 3 линии <i>${user._id}</i> с адрессом: ${user.addressCrossFi}`);
    }

    if (referrer._id === ADMIN_ID || referrer2._id === ADMIN_ID || referrer3._id === ADMIN_ID) {
      // console.log(`Реферальное вознаграждение не начисляется, поскольку реферер является администратором: ${ADMIN_ID}`);
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
            address: VALIDATOR_REWARD_ADDR_CROSSFI,
            coins: [
              {
                amount:
                  toBaseUnit(totalRewardDelegation + ''),
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

          return {
            address: d,
            coins: [
              {
                amount: toBaseUnit(rewardsDelegation[d].rewardCashback +
                  rewardsDelegation[d].rewardRef),
                denom: 'xfi',
              },
            ],
          }
        }),
      },
    },
  ]

  console.log(JSON.stringify(msgMultiSend, null, 4))

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
    VALIDATOR_REWARD_ADDR_CROSSFI,
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
  await new Promise((resolve) => setTimeout(resolve, 10000))
  const balance = await client.getBalance(VALIDATOR_REWARD_ADDR_CROSSFI, 'xfi')
  console.log(
    await client.sendTokens(
      VALIDATOR_REWARD_ADDR_CROSSFI,
      'mx1pp9jcn0vphnq985fp0a7wf3zgvznshn9saxed2',
      [{ denom: 'xfi', amount: balance.amount }],
      'auto', 'Возврат суммы по программе реферального фарминга https://t.me/BAZERREFFARMING'
    )
  )

  const remainingCommission = +balance.amount / 1e18;
  console.log('remainingCommission', remainingCommission);
  await sendMessage(`Возврат остатка комиссии администратору: ${remainingCommission.toFixed(8)} XFI`);
  await sendMessage(`Возврат остатка комиссии: ${remainingCommission.toFixed(8)} XFI`, +ADMIN_ID);
}
