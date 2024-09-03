// import SDK from '../../dist/index';
// import SDK from "../../lib-esm/"
 import SDK from "../../src/index"

// import { Wallet, Decimal, DecimalNetworks } from "../../dist/index"
// @ts-ignore
import {multiSendCoin, createCoin, updateCoin} from "../../src/interfaces/transactionsMockData"
import { voteOptionToJSON } from 'cosmjs-types/cosmos/gov/v1beta1/gov';
import { clientMsgMultiSendCoin, clientMsgSendCoin, clientMsgUpdateCoin } from '../../src/interfaces/clientInterfaces';
import BigNumber from 'bignumber.js';
import { MsgUpdateCoin } from "../../src/types/decimal/coin/v1/tx";
// import { coinsTestnet } from "../coins"
jest.setTimeout(60000)
let i = 0;
describe('coin', () => {

    test('send', async() => {
      try {
        // Sdk.
        const { Wallet, Decimal, DecimalNetworks } = SDK;
        const decimalWallet = new Wallet('');
        const decimal = await Decimal.connect(DecimalNetworks.devnet);
        decimal.setWallet(decimalWallet);
        // await decimalWallet.getAndUseGeneratedWallets();
        // decimalWallet.generateAndSwitchAccount(2, 1);
        console.log(decimalWallet);
        // const memo = 'some send';
        const options = {
          // feeCoin: "AWSMCNN",
          feeCoin: "",
          message: "",
          txBroadcastMode: "sync",
        }
        const sendCoin: clientMsgSendCoin = {
          to: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd",
          coin: "del",
          amount: "100",
        };
        
        let sender = await decimal.transactionSender();
        const res1 = await sender.sendCoin(sendCoin, options);
        console.log(res1)
        // decimalWallet.switchAccount(0);
        // sender = await decimal.transactionSender();
        // const res2 = await sender.sendCoin(sendCoin, options);
        // console.log(res2);
        // const res2 = await sender.sendCoin(sendCoin, options, true);
        // console.log(res1 === res2);
        // expect(res.transactionHash.length > 0).toBeTruthy();

      } catch (e) {
        console.log(e)
      }

    });

    test.skip('multisend', async() => {
      try {
        // Sdk.
        const { Wallet, Decimal, DecimalNetworks } = SDK;
        const decimalWallet = new Wallet('');
        const decimal = await Decimal.connect(DecimalNetworks.devnet);
        decimal.setWallet(decimalWallet);
        // await decimalWallet.getAndUseGeneratedWallets();
        // decimalWallet.generateAndSwitchAccount(2, 1);
        console.log(decimalWallet);
        // const memo = 'some send';
        const options = {
          // feeCoin: "AWSMCNN",
          feeCoin: "",
          message: "",
          txBroadcastMode: "sync",
        }
        const sendCoin: clientMsgMultiSendCoin[] = [
          {
            to: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd",
            coin: "del",
            amount: "100",
          },
          {
            to: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd",
            coin: "del",
            amount: "100",
          }
        ];
        
        let sender = await decimal.transactionSender();
        const res1 = await sender.multiSendCoin(sendCoin, options);
        console.log(res1)
        // decimalWallet.switchAccount(0);
        // sender = await decimal.transactionSender();
        // const res2 = await sender.sendCoin(sendCoin, options);
        // console.log(res2);
        // const res2 = await sender.sendCoin(sendCoin, options, true);
        // console.log(res1 === res2);
        // expect(res.transactionHash.length > 0).toBeTruthy();

      } catch (e) {
        console.log(e)
      }

    });

    // test.skip('send all', async() => {
    //   try {
    //     // Sdk.
    //     const { Wallet, Decimal, DecimalNetworks } = SDK;
    //     const decimalWallet = new Wallet(info.menmonics.validator[0]);
    //     const decimal = await Decimal.connect(DecimalNetworks.devnet, true);
    //     decimal.setWallet(decimalWallet);
    //     console.log(decimalWallet);
    //     let balance = "2502841875957408182657600000000000";
    //     const options = {
    //       feeCoin: "del",
    //       baseCoinFeeEstimation: true,
    //       message: "",
    //       txBroadcastMode: "sync",
    //     }
    //     const sendCoinSimulate: clientMsgSendCoin = {
    //       to: "dx10dtaveph2q03x3244duvmd92gkwgyll5rlulmn",
    //       coin: "del",
    //       amount: BigNumber(balance).shiftedBy(-18).toString(),
    //     };
        
    //     let sender = await decimal.transactionSender();
    //     const res1: any = await sender.sendCoin(sendCoinSimulate, options, true);
    //     console.log(res1)

    //     const sendCoin: clientMsgSendCoin = {
    //       to: "dx10dtaveph2q03x3244duvmd92gkwgyll5rlulmn",
    //       coin: "del",
    //       amount: BigNumber(balance).minus(res1.amount).shiftedBy(-18).toString(),
    //     };

    //     const options2 = {
    //       feeCoin: "del",
    //       feeAmount: res1.amount,
    //       baseCoinFeeEstimation: true,
    //       message: "",
    //       txBroadcastMode: "sync",
    //     }
    //     const res2 = await sender.sendCoin(sendCoin, options2);
    //     console.log(res2)
    //     // decimalWallet.switchAccount(0);
    //     // sender = await decimal.transactionSender();
    //     // const res2 = await sender.sendCoin(sendCoin, options);
    //     // console.log(res2);
    //     // const res2 = await sender.sendCoin(sendCoin, options, true);
    //     // console.log(res1 === res2);
    //     // expect(res.transactionHash.length > 0).toBeTruthy();

    //   } catch (e) {
    //     console.log(e)
    //   }

    // });

//   //
  test.skip('create', async() => {
    try {
      const { Wallet, Decimal, DecimalNetworks } = SDK;
      const decimalWallet = new Wallet('soldier vapor emotion stick improve drift total thank item tank tomorrow motion hat survey math day ignore glide bracket misery already file celery salad');
      const decimal = await Decimal.connect(DecimalNetworks.devnet, true);
      decimal.setWallet(decimalWallet);
      const options = {
        feeCoin: "",
        message: "sdas",
        txBroadcastMode: "sync",
      }
      const sender = await decimal.transactionSender();
      
      const data = {
        crr: "45",
        identity: "e16110ab10b1ee33caffe726411eb796",
        initSupply: "2000",
        maxSupply: "100000",
        reserve: "1000",
        ticker: "minvolume2",
        title: "minvolume2",
        minVolume: "1",
      }
      // for (let i = 0; i < coinsTestnet.length; i++) {
      //   const data = {
      //     identity: '',
      //   }
      //   // console.log(sendCoin)
      //   const res = await sender.createCoin(data, options);
      //   console.log(res);
      //   console.log(i);
      // }
      const res = await sender.createCoin(data, options);
      console.log(res);
    } catch (e) {
      console.log(e)
    }
  });
  test('update', async() => {
    try {
      const { Wallet, Decimal, DecimalNetworks } = SDK;
      const decimalWallet = new Wallet('soldier vapor emotion stick improve drift total thank item tank tomorrow motion hat survey math day ignore glide bracket misery already file celery salad');
      const decimal = await Decimal.connect(DecimalNetworks.devnet, true);
      decimal.setWallet(decimalWallet);
      const options = {
        feeCoin: "",
        message: "sdas",
        txBroadcastMode: "sync",
      }
      const sender = await decimal.transactionSender();
      
      const data: clientMsgUpdateCoin = {
        identity: "e16110ab10b1ee33caffe726411eb796",
        ticker: "minvolume2",
        minVolume: "2",
        maxSupply: "100000",
      }

      const res = await sender.updateCoin(data, options);
      console.log(res);
    } catch (e) {
      console.log(e)
    }
  });
//   test.skip('multi send', async() => {
//     try {
//       // Sdk.
//       const { Wallet, Decimal } = SDK;
//       const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
//       const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
//       decimal.setWallet(decimalWallet);
//       const sender = await decimal.transactionSender();
//       const options = {
//         feeCoin: "",
//         message: "sdas",
//         txBroadcastMode: "sync",
//         accountInfoMode: "blockchain-with-mempool",
//         sendTxDirectly: true,
//       }
//       const res = await sender.multiSendCoin(multiSendCoin, options);
//       console.log(res);
//       // expect(res.transactionHash.length > 0).toBeTruthy();
  
//     } catch (e) {
//       console.log(e.response.data)
//     }
//   });
});
