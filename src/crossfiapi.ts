import { Decimal } from '@cosmjs/math'
import { getUserBalance } from '../function/crossfi/getUserBalance';
import envSchema from './models/zodEnvSchemaSchema';

const env = envSchema.parse(process.env);

const { NODE_API_CROSSFI } = env;

if (!process.env.NODE_API_CROSSFI) throw new Error('NODE_API_CROSSFI is not defined');

interface Delegation {
  delegator_address: string;
  shares: string;
}

interface DelegationResponse {
  delegation: Delegation;
}

interface GetValidatorDelegationsApiResponse {
  delegation_responses: DelegationResponse[];
}

interface Coin {
  denom: string;
  amount: string;
}

interface UserBalance {
  balances: Coin[];
}

export async function getRewardAddressByHeight(address: string, txLatestHeight?: number): Promise<number> {
  try {
    let { balances: beforeCoins }: UserBalance = await getUserBalance(address);
    const beforeBalance = beforeCoins.find((e) => e.denom === 'xfi')?.amount || '0';

    console.log('beforeBalance', beforeBalance);

    return +beforeBalance / 1e18
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return 0
  }
}

export async function getLastBlockHeight(): Promise<number> {
  try {
    const response = await fetch(`${process.env.NODE_API_CROSSFI}cosmos/base/tendermint/v1beta1/blocks/latest`);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const { block: { header: { height } } } = data;

    return +height
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return 0
  }
}

export async function getValidatorDelegations(
  validator_addr: string,
  height: string | number = 'latest'
): Promise<[string, number][]> {
  try {
    if (height === 'latest') {
      height = await getLastBlockHeight()
    }

    const requestOptions = {
      method: "GET",
      redirect: "follow" as RequestRedirect
    };

    const response = await fetch(`https://cosmos-api.mainnet.ms/cosmos/staking/v1beta1/validators/${validator_addr}/delegations?pagination.limit=100000`, requestOptions)

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const resultApi: GetValidatorDelegationsApiResponse = await response.json();

    const { delegation_responses } = resultApi;

    return delegation_responses.map(({ delegation }) => {
      const amount = Decimal.fromAtomics(
        Decimal.fromUserInput(delegation.shares, 18).toString(),
        18
      ).toString()

      const a = [delegation.delegator_address, parseInt(amount)] as [string, number];
      console.log(a);
      return a
    })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.error('Unexpected error:', error);
    }

    return []
  }
}

export async function getValidatorCommissionXfi(
  validator_addr: string,
  height: string | number = 'latest'
): Promise<number> {
  try {
    if (height === 'latest') {
      getValidatorDelegations
      height = await getLastBlockHeight()
    }

    const response = await fetch(`${process.env.NODE_API_CROSSFI}cosmos/distribution/v1beta1/validators/${validator_addr}/commission`)

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    const { commission: { commission } } = data;

    const xfiCommission = commission.find((e: { denom: string }) => e.denom === 'xfi');

    if (!xfiCommission) {
      throw new Error('XFI commission not found');
    }

    return +xfiCommission.amount
  } catch (error) {
    console.error(error.message);

    return 0
  }
}
