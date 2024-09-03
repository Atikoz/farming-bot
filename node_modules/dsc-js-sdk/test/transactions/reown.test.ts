import SDK from '../../src/index'
// import SDK from "../../lib-esm/"

// @ts-ignore
import info from "../_commonInfo"

jest.setTimeout(15000)
const options = {
    feeCoin: "",
    message: "sdas",
    txBroadcastMode: "sync",
    accountInfoMode: "blockchain-with-mempool",
    sendTxDirectly: true,
}
describe('legacy', () => {
  test('reown', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.multisigDev, '');
      const decimal = await Decimal.connect('https://devnet-val.decimalchain.com/rpc/','');
      decimal.setWallet(decimalWallet);
      console.log(decimalWallet)
      const sender = await decimal.transactionSender();
      const msg = {
        pubKey: 'A8AfLx5VtkVqg0uMRQ9omvwUppsmnVOQJjgtGMNuXzMq',
      }
      const res = await sender.returnLegacy(msg, options);
      console.log(res);

    } catch (e) {
      console.log(e)
    }
  });

});

