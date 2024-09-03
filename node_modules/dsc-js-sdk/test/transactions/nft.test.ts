import SDK from '../../src/index'
// import SDK from "../../lib-esm/"
// @ts-ignore
import info from "../_commonInfo"
import {nftBurn, nftMint, nftTransfer} from "../../src/interfaces/transactionsMockData"

jest.setTimeout(15000)
const options = {
  feeCoin: "",
  message: "sdas",
  txBroadcastMode: "sync",
  accountInfoMode: "blockchain-with-mempool",
  sendTxDirectly: true,
}
describe('nft', () => {
  test.skip('mint', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
      decimal.setWallet(decimalWallet);
      const sender = await decimal.transactionSender();
      const res = await sender.mintNft(nftMint, options);
      console.log(res);
    } catch (e) {
      console.log(e)
    }
  });

  test('transfer', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.nftTest[0], info.endpoints.backendTestApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendTestRpcEndpoint, info.endpoints.backendTestApiEndpoint);
      decimal.setWallet(decimalWallet);
      // const memo = 'some send';
      const sender = await decimal.transactionSender('tdel');
      const res = await sender.transferNft(nftTransfer, options);
      console.log(res);
      const res2 = await sender.transferNft(nftTransfer, options);
      console.log(res2);
    } catch (e) {
      console.log(e)
    }
  });

  test.skip('burn', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.nftTest[0], info.endpoints.backendTestApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendTestRpcEndpoint, info.endpoints.backendTestApiEndpoint);
      decimal.setWallet(decimalWallet);
      const sender = await decimal.transactionSender();
      const res = await sender.burnNft(nftBurn, options);
      console.log(res);

    } catch (e) {
      console.log(e.response.data.data)
    }
  });

});

