import SDK from '../../src/index'
// import SDK from "../../lib-esm/"

// @ts-ignore
import { createWallet, sendCoin } from "../../src/interfaces/transactionsMockData"
import { clientMultisigCreateTx, clientMultisigSignTx } from '../../src/interfaces/clientInterfaces'
import txTypesNew from '../../src/txTypesNew'
// import txTypesNew from 'ts-sdk/lib-esm/txTypesNew'

jest.setTimeout(15000)
const options = {
    feeCoin: "",
    message: "sdas",
    txBroadcastMode: "sync",
    accountInfoMode: "blockchain-with-mempool",
    sendTxDirectly: true,
}
describe('multisig', () => {
  test('create', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal, DecimalNetworks } = SDK;
      const decimalWallet = new Wallet('');
      const decimal = await Decimal.connect(DecimalNetworks.devnet);
      decimal.setWallet(decimalWallet);
      console.log(decimalWallet)
      const sender = await decimal.transactionSender();
      const sendCoinMsg = {
        to: "d0184qe86tyhurv5fxlxgvcwa6znfg3ugk8e4sqgw",
        coin: "del",
        amount: "10000",
      };
      const mulsisigSend: clientMultisigCreateTx = {
        from: 'd01tsr90d4gyjl9whk69rkrsx3yeacj9qv7h3amj5',
        type: txTypesNew.COIN_SEND,
        value: sendCoinMsg,
      }
      const res = await sender.multisigCreateTx(mulsisigSend, options);
      console.log(res);

    } catch (e) {
      console.log(e)
    }
  });

  test.skip('sign', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.multisigDev2, info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      console.log(decimalWallet)
      const sender = await decimal.transactionSender();
      // const sendCoinMsg = sendCoin;
      const mulsisigSign: clientMultisigSignTx = {
        txId: 'dxmstx12u554jg3ut08339p230a86sw04y3sm4t30gcur',
      }
      const res = await sender.multisigSignTx(mulsisigSign, options);
      console.log(res);

    } catch (e) {
      console.log(e)
    }
  });

//   test.skip('create', async() => {
//     try {
//       const { Wallet, Decimal } = SDK;
//       const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
//       const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
//       decimal.setWallet(decimalWallet);
//       const data = {
//         crr: "45",
//         identity: "e16110ab10b1ee33caffe726411eb796",
//         initSupply: "2000",
//         maxSupply: "100000",
//         reserve: "1000",
//         ticker: "test",
//         title: "testing"
//       }
//       const memo = 'some send';
//       const sender = await decimal.transactionSender();
//       const res = await sender.createCoin(data, options);
//       console.log(res);
//     } catch (e) {
//       console.log(e)
//     }
//   });

});

