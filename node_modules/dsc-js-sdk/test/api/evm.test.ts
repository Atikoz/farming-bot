// import SDK from '../../src/index'
import SDK from "../../lib-esm/"
// @ts-ignore
import info from "../_commonInfo"
import {NETWORKS} from "../../src/endpoints";

jest.setTimeout(15000)

const mnemonic = 'toe drum dance gun cricket hard second deliver awesome wagon industry indicate leader gloom fat culture cost odor frozen throw detail salt blush grant'

describe('evm', () => {
  test('get contract by address', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(mnemonic);
      const decimal = await Decimal.connect(NETWORKS.DEVNET);
      decimal.setWallet(decimalWallet)
      const evm = await decimal.getContract('0x9e714d1a41d68b50fd9f2475002bc257f1f773a4');
      const action = await evm.send('mint', '0x444532f6bdd4fd087e36bfa0c9c359e92b1e0e74', 'test', 'https://galaxyonline.io/images/redesign/station-alpha.png')
      expect(action.transaction.status).toBeTruthy();
    } catch (e) {
      console.log(e)
    }
  });
  test('get balance of evm', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(mnemonic);
      const decimal = await Decimal.connect(NETWORKS.DEVNET);
      decimal.setWallet(decimalWallet)
      const evm = await decimal.getEvmAccountBalance('0x9e714d1a41d68b50fd9f2475002bc257f1f773a4');
      console.log(evm);
    } catch (e) {
      console.log(e)
    }
  });

});

