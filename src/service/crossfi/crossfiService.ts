import { StargateClient } from "@cosmjs/stargate"
import { CrossfiBalanceWallet, GetValidatorDelegationsApiResponse, ICrossfiTransaction, UserBalance } from "../../../interface/CrossfiInterfaces"
import { Decimal } from '@cosmjs/math';

const CROSSFI_RPC_URL = process.env.CROSSFI_RPC_URL;
const NODE_API_CROSSFI = process.env.NODE_API_CROSSFI;


class CrossfiService {
  private readonly rpcUrl: string = CROSSFI_RPC_URL as string
  private client: StargateClient | null = null

  async initializeStargateClient() {
    try {
      this.client = await StargateClient.connect(this.rpcUrl);
    } catch (error) {
      console.error('initialize rpc connection error:', error)
    }
  }

  async ensureInitializedStargateClient() {
    if (!this.client) {
      await this.initializeStargateClient();
    }
  }

  async getUserTx(address: string): Promise<ICrossfiTransaction[]> {
    try {
      await this.ensureInitializedStargateClient();
      
      const sentTransactions = await this.client.searchTx([
        { key: "message.sender", value: address }
      ]);

      const receivedTransactions = await this.client.searchTx([
        { key: "transfer.recipient", value: address }
      ]);

      const allTransactions = [...sentTransactions, ...receivedTransactions];

      return allTransactions;
    } catch (error) {
      console.error(`error geting crossfi tx: ${error.message}`);

      return []
    }
  }

  async getUserBalance(address: string): Promise<CrossfiBalanceWallet> {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow" as RequestRedirect
    };

    const response = await fetch(
      `https://cosmos-api.mainnet.ms/cosmos/bank/v1beta1/balances/${address}`,
      requestOptions
    );

    const resultApi = await response.json();

    return resultApi
  }

  async getRewardAddressByHeight(address: string, txLatestHeight?: number): Promise<number> {
    try {
      let { balances: beforeCoins }: UserBalance = await this.getUserBalance(address);
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

  async getLastBlockHeight(): Promise<number> {
    try {
      const response = await fetch(`${NODE_API_CROSSFI}cosmos/base/tendermint/v1beta1/blocks/latest`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      const { block: { header: { height } } } = data;

      return +height
    } catch (error) {
      console.error('getLastBlockHeight crossfi error:', error);

      return 0
    }
  }

  async getValidatorDelegations(
    validator_addr: string,
    height: string | number = 'latest'
  ): Promise<[string, number][]> {
    try {
      if (height === 'latest') {
        height = await this.getLastBlockHeight()
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

        const arrayDelegators = [delegation.delegator_address, parseInt(amount)] as [string, number];

        return arrayDelegators
      })
    } catch (error) {
      console.error('getValidatorDelegations crossfi error:', error.message);

      return []
    }
  }

  async getValidatorCommissionXfi(
    validator_addr: string,
    height: string | number = 'latest'
  ): Promise<number> {
    try {
      if (height === 'latest') {
        height = await this.getLastBlockHeight()
      }

      const response = await fetch(`${NODE_API_CROSSFI}cosmos/distribution/v1beta1/validators/${validator_addr}/commission`)

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
      console.error(`error geting crossfi commission: ${error.message}`);

      return 0
    }
  }
}

export default new CrossfiService;