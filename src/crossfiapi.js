import { Decimal } from '@cosmjs/math'
import got from 'got'
import { getUserBalance } from '../function/crossfi/getUserBalance.js';

const http = got.extend({
  prefixUrl: process.env.NODE_API_CROSSFI,
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

export async function getRewardAddressByHeight(address, txLatestHeight) {
  let { balances: beforeCoins } = await getUserBalance(address);
  let beforeBalance = beforeCoins.find((e) => e.denom === 'xfi')?.amount || '0';

  // Отримуємо оновлений баланс
  let { balances: afterCoins } = await getUserBalance(address);
  let afterBalance = afterCoins.find((e) => e.denom === 'xfi')?.amount || '0';

  // Логування балансу для відладки
  console.log('beforeBalance', beforeBalance);
  console.log('afterBalance', afterBalance);

  // Обчислення винагороди
  const reward = Decimal.fromAtomics(beforeBalance, 18)
    .minus(Decimal.fromAtomics(afterBalance, 18))
    .toFloatApproximation();
  return +afterBalance / 1e18
}

export async function getLastBlockHeight() {
  const {
    block: {
      header: { height },
    },
  } = await http.get('cosmos/base/tendermint/v1beta1/blocks/latest').json()
  return height
}

export async function getValidatorDelegations(
  validator_addr,
  height = 'latest'
) {
  if (height === 'latest') {
    height = await getLastBlockHeight()
  }

  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };

  const response = await fetch(`https://cosmos-api.mainnet.ms/cosmos/staking/v1beta1/validators/${validator_addr}/delegations?pagination.limit=100000`, requestOptions)

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const resultApi = await response.json();

  const { delegation_responses } = resultApi;

  return delegation_responses.map(({ delegation }) => {
    const amount = Decimal.fromAtomics(
      Decimal.fromUserInput(delegation.shares, 18).toString(),
      18
    ).toString()

    const a = [delegation.delegator_address, parseInt(amount)];
    console.log(a);
    return a
  })
}

export async function getValidatorCommissionXfi(
  validator_addr,
  height = 'latest'
) {
  if (height === 'latest') {getValidatorDelegations
    height = await getLastBlockHeight()
  }

  const {
    commission: { commission },
  } = await http
    .get(
      `cosmos/distribution/v1beta1/validators/${validator_addr}/commission`
    )
    .json()

  return commission.filter((e) => e.denom === 'xfi')[0].amount
}
