import { DelegationStatus } from '../../src/api/getNftStakes';
import SDK from '../../src/index'
// import SDK from "../../lib-esm/"

// @ts-ignore
import info from "../_commonInfo"
jest.setTimeout(15000)

describe('stakes', () => {
  test('delegated coin', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.validator[0], info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      const address = decimalWallet.address;
      const res = await decimal.getStakesByAddress(address, DelegationStatus.redelegating);
      // const res = await decimal.getNfts(address);
      console.log(JSON.stringify(res));
    } catch (e) {
      console.log(e)
    }
  });
  test.skip('delegated nft', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dev[0], info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      const address = decimalWallet.address;
      const res = await decimal.getNftStakesByAddress(address, DelegationStatus.delegated);
      // const res = await decimal.getNfts(address);
      console.log(JSON.stringify(res));
    } catch (e) {
      console.log(e)
    }
  });
});

