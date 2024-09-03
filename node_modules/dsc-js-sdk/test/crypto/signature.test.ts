import SDK from '../../src/index'
// @ts-ignore
// import info from "../_commonInfo"
import { getWalletAddressFromSignature } from "../../src/utils/walletUtils"
import getNft from "../../src/api/getNft"
import DecimalApi from '../../src/api'
import {EncoderDecoder} from "../../src/utils/encoderDecoder";
import {PubKey} from "../../lib-esm/types/ethermint/crypto/v1/ethsecp256k1/keys";
jest.setTimeout(20000)
let i = 0;
describe('coin', () => {

    test.skip('send', async() => {
      try {
        // Sdk.
        const { Wallet, Decimal } = SDK;
        const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
        const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
        decimal.setWallet(decimalWallet);
        const res = await getNft(decimal.getApiInstance() as DecimalApi, decimalWallet)(1)
        console.log(res);
        console.log(decimalWallet.getPublicKey(0, true))

        if (res) {
          const { timestamp, signature } = res;
          const data = {
            timestamp
          }
          getWalletAddressFromSignature(data, JSON.stringify(signature));
        }
        // expect(res.transactionHash.length > 0).toBeTruthy();

      } catch (e) {
        console.log(e)
      }

    });

    test('web3tx', async() => {
      try {
        // Sdk.

        const encoder = new EncoderDecoder()
        const pubKeyDecoded = Buffer.from('037c71d1855237853d90eb194790d9aee3c0ff25b0c5c4d74ea994f02a27f2b39a', 'hex')
        const pubKeyEncoded = encoder.encodePubKey(
            PubKey.fromPartial({ key: pubKeyDecoded })
        )

        console.log(encoder.encodeWeb3Tx({
          typeUrl: '/ethermint.types.v1.ExtensionOptionsWeb3Tx',
          typedDataChainID: 20202020,
          feePayer: 'd012vrppfv9rfnw43nmg4lrzzf4m5m7nek53urnnt',
          feePayerSig: pubKeyEncoded
        } as any));


      } catch (e) {
        console.log(e)
      }

    });
});

