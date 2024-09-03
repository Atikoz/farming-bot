import SDK from '../../src/index'
// import SDK from "../../lib-esm/"

// @ts-ignore
import info from "../_commonInfo"
// import { createWallet, sendCoin } from "../../src/interfaces/transactionsMockData"
import { clientCreateValidator, clientMsgDelegate, clientMsgUndelegate, clientMultisigCreateTx, clientMultisigSignTx, clientRedelegationData } from '../../src/interfaces/clientInterfaces'
// import txTypesNew from '../../src/txTypesNew'
// import txTypesNew from 'ts-sdk/lib-esm/txTypesNew'

jest.setTimeout(15000)
const options = {
    feeCoin: "",
    message: "sdas",
    txBroadcastMode: "sync",
    accountInfoMode: "blockchain-with-mempool",
    sendTxDirectly: true,
}
describe('validator', () => {
  test('create', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.multisigDev, info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      const sender = await decimal.transactionSender();
      // const sendCoinMsg = sendCoin;
      const createValidator: clientCreateValidator = {
        "rewardAddress": "dx1f3u25rnvchz7hwys034kgt74kptn9t6508snwq",
        "coin": "DEL",
        "stake": "100",
        "pubKey": "sGXp6gFz+uis4Q4SnVSGIiGcHOUAOKznI/j6pStp5n4=",
        "commission": "10",
        "description": {
            "moniker": "testname",
            "identity": "7b6fabb54dfb2d53736ea6eaac59ee01",
            "website": "testsite.ru",
            "securityContact": "test@mail.ru",
            "details": "testdiscription"
        }
    }
      const res = await sender.createValidator(createValidator, options, true);
      console.log(res);

    } catch (e) {
      console.log(e)
    }
  });

  test.skip('delegate', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.validator[0], info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      const sender = await decimal.transactionSender();
      // const sendCoinMsg = sendCoin;
      const msg: clientMsgDelegate = {
        validatorAddress: "dxvaloper14elhyzmq95f98wrkvujtsr5cyudffp6qk9wmzm",
        coin: "del",
        stake: "100",
      }
      const res1 = await sender.delegate(msg, options);
      const res2 = await sender.delegate(msg, options);
      const res3 = await sender.delegate(msg, options);

      console.log(res1);
      console.log(res2);
      console.log(res3);
    } catch (e) {
      console.log(e)
    }
  });

  test.skip('undelegate', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.validator[0], info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      const sender = await decimal.transactionSender();
      // const sendCoinMsg = sendCoin;
      const msg: clientMsgUndelegate = {
        validatorAddress: "dxvaloper14elhyzmq95f98wrkvujtsr5cyudffp6qk9wmzm",
        coin: "del",
        stake: "10",
      }
      const res1 = await sender.unbond(msg, options);
      // const res2 = await sender.unbond(msg, options);
      // const res3 = await sender.unbond(msg, options);

      console.log(res1);
      // console.log(res2);
      // console.log(res3);
    } catch (e) {
      console.log(e)
    }
  });

  test.skip('redelegate', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.validator[0], info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      const sender = await decimal.transactionSender();
      // const sendCoinMsg = sendCoin;
      const msg: clientRedelegationData = {
        validatorFrom: "dxvaloper14elhyzmq95f98wrkvujtsr5cyudffp6qk9wmzm",
        validatorTo: "dxvaloper1yvgq6uh35a395hexhxcde2zfpwwafzpaxvupmc",
        coin: "del",
        stake: "10",
      }
      const res1 = await sender.redelegate(msg, options);

      console.log(res1);
    } catch (e) {
      console.log(e)
    }
  });
});

