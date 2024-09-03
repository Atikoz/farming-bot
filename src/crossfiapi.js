import { Decimal } from '@cosmjs/math'
import got from 'got'

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
  let { balances: beforeBalance } = await http(
    `cosmos/bank/v1beta1/balances/${address}`,
    {
      headers: {
        'x-cosmos-block-height': +txLatestHeight,
      },
    }
  ).json()
  beforeBalance = beforeBalance.find((e) => e.denom === 'xfi').amount
  let { balances: afterBalance } = await http(
    `cosmos/bank/v1beta1/balances/${address}`,
    {
      headers: {
        'x-cosmos-block-height': +txLatestHeight - 1,
      },
    }
  ).json()

  console.log('afterBalance', afterBalance)

  afterBalance = afterBalance.find((e) => e.denom === 'xfi')?.amount || '10000'

  console.log('afterBalance', afterBalance)

  const reward = Decimal.fromAtomics(beforeBalance, 18)
    .minus(Decimal.fromAtomics(afterBalance, 18))
    .toFloatApproximation()
  return reward
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

  const { delegation_responses } = await http
    .get(
      `cosmos/staking/v1beta1/validators/${validator_addr}/delegations?pagination.limit=100000`,
      {
        headers: {
          'x-cosmos-block-height': height,
        },
      }
    )
    .json()

  return delegation_responses.map(({ delegation }) => {
    const amount = Decimal.fromAtomics(
      Decimal.fromUserInput(delegation.shares, 18).toString(),
      18
    ).toString()
    return [delegation.delegator_address, parseInt(amount)]
  })
}

export async function getValidatorCommissionXfi(
  validator_addr,
  height = 'latest'
) {
  if (height === 'latest') {
    height = await getLastBlockHeight()
  }

  const {
    commission: { commission },
  } = await http
    .get(
      `cosmos/distribution/v1beta1/validators/${validator_addr}/commission`,
      {
        headers: {
          'x-cosmos-block-height': height,
        },
      }
    )
    .json()

  return commission.filter((e) => e.denom === 'xfi')[0].amount
}
