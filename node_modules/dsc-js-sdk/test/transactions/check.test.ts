import SDK from '../../src/index'
// import SDK from "../../lib-esm/"
// @ts-ignore
import {checkIssue, nftBurn, nftMint, nftTransfer} from "../../src/interfaces/transactionsMockData"
import {clientRedeemCheck} from "../../src/interfaces/clientInterfaces";

jest.setTimeout(15000)

describe('check', () => {
  test('issue and redeem', async() => {
    
    try {
      // Sdk.
      const { Wallet, Decimal, DecimalNetworks } = SDK;
        const decimalWallet = new Wallet('');
        const decimal = await Decimal.connect(DecimalNetworks.devnet);
        decimal.setWallet(decimalWallet);
      const options = {
          feeCoin: "",
          message: "sdas",
          txBroadcastMode: "sync",
          accountInfoMode: "blockchain-with-mempool",
          sendTxDirectly: true,
      }
      const sender = await decimal.transactionSender();
      const res = await sender.issueCheck(checkIssue);
      console.log(res);
      // const checkRedeem: clientRedeemCheck = {
      //     check: res,
      //     password: "admin",
      // };
      // const decimalWallet2 = new Wallet(info.menmonics.dec2[1], info.endpoints.backendDevApiEndpoint);
      // const decimal2 =  await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      // decimal2.setWallet(decimalWallet2);
      // const sender2 = await decimal2.transactionSender();
      // const redeemRes = await sender2.redeemCheck(checkRedeem, options);
      // console.log(redeemRes);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }
  });

  // test.skip('transfer', async() => {
  //   try {
  //     // Sdk.
  //     const { Wallet, Decimal } = SDK;
  //     const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
  //     const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
  //     decimal.setWallet(decimalWallet);
  //     const memo = 'some send';
  //     const sender = await decimal.transactionSender();
  //     const res = await sender.transferNft(nftTransfer, memo);
  //     console.log(res);
  //     expect(res.transactionHash.length > 0).toBeTruthy();
  //
  //   } catch (e) {
  //     console.log(e)
  //   }
  // });

});

