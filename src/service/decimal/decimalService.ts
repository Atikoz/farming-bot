import 'dotenv/config'
import SDK from 'dsc-js-sdk'
const { DecimalNetworks, DecimalEVM, Wallet } = SDK;
import fromBaseUnit from '../../../helpers/fromBaseUbit';
import envSchema from '../../models/zodEnvSchemaSchema';
import { RewardsDelegation } from './delRewards';

const env = envSchema.parse(process.env);

const { VALIDATOR_SEED_DECIMAL, VALIDATOR_REWARD_ADDR_DECIMAL } = env;

interface IBalance {
  [key: string]: number
}

interface ICoinData {
  coin_symbol: string,
  delegatedCoins: string,
  delegatePrice?: string
}

interface ICoinList {
  items: ICoinData[];
}

interface IRewardAmountInCashback {
  amount: number,
  priceCashback: number
}

interface IMultSign {
  status: boolean,
  hash: string
}

class DecimalService {
  public validatorAddress: string;
  private wallet: InstanceType<typeof Wallet>
  private decimalEVM: InstanceType<typeof DecimalEVM>

  constructor() {
    this.validatorAddress = '0x15192aac9d3b2400eee6e36a605c93ec95ab8124';
    this.wallet = new Wallet(VALIDATOR_SEED_DECIMAL);
    this.decimalEVM = new DecimalEVM(this.wallet, DecimalNetworks.mainnet);
  }

  async getBalance(address: string): Promise<IBalance> {
    try {
      const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch(`https://decimal.bazerwallet.com/account/balanceAccount?address=${address}`, requestOptions)
      const resultApi = await response.json();

      return resultApi
    } catch (error) {
      // console.error(`error get balance decimal: ${error.message}`);

      return {}
    }
  }

  async getTokenAddresBySymbol(symbol: string) {
    try {
      const result = await this.decimalEVM.getAddressTokenBySymbol(symbol);

      return result
    } catch (error) {
      console.error(`error get token address: ${error.message}`)
    }
  }

  async getTotalStakeValidator(): Promise<number> {
    try {
      const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch(`https://api.decimalchain.com/api/v1/validators/validators/${this.validatorAddress}`, requestOptions);
      const resultApi = await response.json();

      const totalStake = fromBaseUnit(resultApi.Result.stake)

      return +totalStake
    } catch (error) {
      console.error(error.message);

      return 0
    }
  }

  async getStakesUser(address: string) {
    try {
      const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch(`https://api.decimalchain.com/api/v1/validators/wallet/${address}/stakes/coins`, requestOptions);

      const resultApi = await response.json();
      const result = resultApi.Result.items;

      const cashback = result.find((item) => item.validator.address === this.validatorAddress);

      return cashback ? cashback : null
    } catch (error) {
      console.error(`error get stake user: ${error.message}`);

      return null
    }
  }

  async getTotalUserStake(address: string) {
    try {
      const validatorStakes: ICoinList = await this.getStakesUser(address);

      if (!validatorStakes) {
        return {
          status: false,
          amount: 0
        }
      }

      const cashbackCoin = validatorStakes.items.find((el) => el.coin_symbol === 'cashback');

      if (!cashbackCoin) {
        return {
          status: false,
          amount: 0
        }
      }

      const amount = this.calculateTotalStake(validatorStakes)

      return {
        status: true,
        amount
      }
    } catch (error) {
      console.error(`error get total stake user: ${error}`);

      return {
        status: false,
        amount: 0
      }
    }
  }

  calculateTotalStake(coinArray: ICoinList) {
    let amount = 0;

    const coinList = coinArray.items;

    for (const item of coinList) {
      if (item.coin_symbol === 'DEL') {
        amount += +fromBaseUnit(item.delegatedCoins)

        continue
      }

      const amountDel = +fromBaseUnit(item.delegatePrice) * +fromBaseUnit(item.delegatedCoins);
      amount += amountDel
    }

    return amount
  }

  async sellCoin(amount: number): Promise<boolean> {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "mnemonic": VALIDATOR_SEED_DECIMAL,
        "amountOut": amount,
        "coinInput": "cashback",
        "estimateGas": true
      });

      const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch("https://decimal.bazerwallet.com/conversion/buyExactTokenForDel", requestOptions);
      const resultApi = await response.json()
      console.log(resultApi)

      return true
    } catch (error) {
      console.error(`error sell decimal coin: ${error}`);

      return false
    }
  }

  async getCashbackRate(): Promise<number> {
    try {
      const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch('https://api.decimalchain.com/api/v1/coins/coins?limit=1000&offset=0', requestOptions)
      const resultApi = await response.json();

      const coinList = resultApi.Result[0].coins;
      const cashback = coinList.find((coin) => coin.symbol === 'cashback');

      if (!cashback) {
        console.log('cashback not find in coin list')

        return 0
      }

      const price = fromBaseUnit(cashback.current_price)

      return +price
    } catch (error) {
      console.error(`error get cashback rate: ${error.message}`);

      return 0
    }
  }

  async getRewardAmountInCashback(delAmount: number): Promise<IRewardAmountInCashback> {
    try {
      const priceCashback = await this.getCashbackRate();
      const amount = delAmount / priceCashback;

      return {
        amount,
        priceCashback
      }
    } catch (error) {
      console.error(`error geting reward amoint in cashback: ${error.message}`)

      return {
        amount: 0,
        priceCashback: 0
      }
    }
  }

  async multiSign(rewardsDelegation: RewardsDelegation): Promise<IMultSign> {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const data = [];

      Object.keys(rewardsDelegation).forEach((wallet) => {
        const { rewardInCashback } = rewardsDelegation[wallet];

        data.push({
          token: "cashback",
          to: wallet,
          amount: rewardInCashback.toFixed(10),
        });
      });

      const raw = JSON.stringify({
        "mnemonic": VALIDATOR_SEED_DECIMAL,
        "memo": "Выплата вознаграждения по программе реферального фарминга https://t.me/BazerFarming_bot",
        "data": data,
        "estimateGas": false
      });

      const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch("https://decimal.bazerwallet.com/send/multiSendToken", requestOptions);
      const resultApi = await response.json();

      console.log(resultApi)

      return {
        status: true,
        hash: resultApi.typedData.transactionHash
      }
    } catch (error) {
      console.error(`error multi sign rewards: ${error.message}`);

      return {
        status: false,
        hash: ''
      }
    }
  }

  async sendCoin(address: string, amount: number, coin: string): Promise<boolean> {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "mnemonic": VALIDATOR_SEED_DECIMAL,
        "addressTo": address,
        "amount": amount,
        "coin": coin,
        "estimateGas": true
      });

      const requestOptions: RequestInit = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch("https://decimal.bazerwallet.com/send/sendCoins", requestOptions);
      const resultApi = await response.json();

      if (resultApi.hasOwnProperty('error')) {
        throw new Error(resultApi.reason);
      } else {
        return true
      }

    } catch (error) {
      console.error(`error send coins decimal: ${error.message}`);

      return false
    }
  }

  async getValidatorDelegators(validatorAddress: string): Promise<any> {
    try {
      const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow" as RequestRedirect
      };

      const response = await fetch(`https://api.decimalchain.com/api/v1/validators/validators/${validatorAddress}/delegators`, requestOptions);
      const resultApi = await response.json();

      return resultApi.Result.items
    } catch (error) {
      console.error(`error get validator delegators: ${error.message}`);

      return []
    }

  }
}

export default new DecimalService