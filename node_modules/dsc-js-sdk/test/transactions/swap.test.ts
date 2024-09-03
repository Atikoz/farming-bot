import SDK from '../../src/index'
// import SDK from "../../lib-esm/"
// import SDK from "../../lib-cjs"
// @ts-ignore
import info from "../_commonInfo"

jest.setTimeout(20000)
let i = 0;
async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const rawTransaction = {
  from: '0xa618F8E2b953593c1F08F2b3dcE2A963Ce130916',
  recipient: 'dx15cv03c4e2dvnc8cg72eaec4fv08pxzgkmr255d',
  amount: '10000000000000000000',
  tokenSymbol: 'del',
  transactionNumber: '1665712075273',
  fromChain: '2',
  destChain: '1',
  v: '0x1c',
  r: '0xfdf806d32704a21a8e9aa057e472f904d2717bd597e1930d4d9fa49aa945cdbf',
  s: '0x15350d9ef070dcb2f947d230ef66c905f70dee6643aa35bf3c7552a8d50ec341'
}
describe('swap', () => {

  test('redeem', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.owner[0], info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      console.log(decimalWallet.evmAddress)
      // const memo = 'some send';
      const options = {
        // feeCoin: "AWSMCNN",
        feeCoin: "",
        message: "",
        txBroadcastMode: "sync",
        accountInfoMode: "blockchain-with-mempool",
        sendTxDirectly: true,
      }
      const sender = await decimal.transactionSender();
      const res1 = await sender.msgSwapRedeem(rawTransaction, options);
      console.log(res1)
      // const res2 = await sender.sendCoin(sendCoin, options, true);
      // console.log(res1 === res2);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }

  });
})
