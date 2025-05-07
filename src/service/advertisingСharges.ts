import { GasPrice, SigningStargateClient } from "@cosmjs/stargate";
import User from "../models/User";
import crossfiService from "./crossfi/crossfiService";
import { stringToPath } from "@cosmjs/crypto";
import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { toBaseUnit } from "../../helpers/toBaseUnit";
import decimalService from "./decimal/decimalService";

const VALIDATOR_ADDR_CROSSFI = process.env.VALIDATOR_ADDR_CROSSFI;
const VALIDATOR_REWARD_ADDR_CROSSFI = process.env.VALIDATOR_REWARD_ADDR_CROSSFI;
const VALIDATOR_SEED_CROSSFI = process.env.VALIDATOR_SEED_CROSSFI;
const CROSSFI_RPC_URL = process.env.CROSSFI_RPC_URL;

const VALIDATOR_ADDR_DECIMAL = process.env.VALIDATOR_ADDR_DECIMAL;

const GAS_PRICE = {
  mpx: GasPrice.fromString('10000000000000mpx'),
  xfi: GasPrice.fromString('100000000000xfi'),
};


class AdvertisingCharges {
  async dispatchCrossFi(): Promise<void> {
    try {
      const [validatotDelegatorsData, users] = await Promise.all([
        crossfiService.getValidatorDelegations(VALIDATOR_ADDR_CROSSFI),
        User.find({ addressCrossFi: { $ne: null } })
      ]);

      const listDelegators = validatotDelegatorsData.map(([key]) => key);
      const nonUsersFarming = listDelegators.filter((item) => !users.some((user) => user.addressCrossFi === item));

      const amountPerUser = 0.00000001;
      const totalAmount = (nonUsersFarming.length * amountPerUser).toFixed(8);

      const msgMultiSend = [
        {
          typeUrl: '/cosmos.bank.v1beta1.MsgMultiSend',
          value: {
            inputs: [
              {
                address: VALIDATOR_REWARD_ADDR_CROSSFI,
                coins: [
                  {
                    amount: toBaseUnit(totalAmount),
                    denom: 'xfi',
                  },
                ],
              },
            ],
            outputs: nonUsersFarming.map((add) => {
              return {
                address: add,
                coins: [
                  {
                    amount: toBaseUnit(0.00000001),
                    denom: 'xfi',
                  },
                ],
              }
            }),
          },
        },
      ];

      const HD_PATHS = [stringToPath("m/44'/118'/0'/0/0"), stringToPath("m/44'/60'/0'/0/0")];
      const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
        VALIDATOR_SEED_CROSSFI,
        {
          prefix: 'mx',
          hdPaths: HD_PATHS
        }
      )

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

      const addMessage = `Дополнительный доход от стейкинга: https://t.me/BAZERREFFARMING
Отслеживание дополнительных начислений: https://t.me/p2plogsp2p`

      const transactionHash = await client.signAndBroadcastSync(
        VALIDATOR_REWARD_ADDR_CROSSFI,
        msgMultiSend,
        'auto',
        addMessage
      )

      console.log('transactionHash ', transactionHash)

    } catch (error) {
      console.error(`error in dispatch CrossFi: ${error}`);
    }
  }

  async dispatchDecimal(): Promise<void> {
    try {
      const [users, validatotDelegatorsData] = await Promise.all([
        User.find({ addressDecimal: { $ne: null } }),
        decimalService.getValidatorDelegators(VALIDATOR_ADDR_DECIMAL)
      ])
    } catch (error) {
      console.error(`error in dispatch Decimal: ${error}`);
    }
  }
}

export default new AdvertisingCharges;