// import SDK from '../../src/index'
import SDK from "../../lib-esm/"
// @ts-ignore
// import info from "../_commonInfo"

jest.setTimeout(15000)


describe('user', () => {
  test.skip('get by address', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
      const user = await decimal.getAddress(decimalWallet.address);
      console.log(user);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }
  });

  test('generate wallets', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet('toe drum dance gun cricket hard second deliver awesome wagon industry indicate leader gloom fat culture cost odor frozen throw detail salt blush grant');
      // const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
      decimalWallet.setGateUrl('http://localhost:3000/api/');
      const user = await decimalWallet.sendAndSaveGeneratedWallets();
      console.log(user);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }
  });

  test.skip('multisigs by address', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
      const res = await decimal.getMultisigsByAddress(decimalWallet.address);
      console.log(res);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }
  });

  test.skip('stakes by address', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
      const res = await decimal.getStakesByAddress(decimalWallet.address);
      console.log(res);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }
  });

  test.skip('nft stakes by address', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
      const res = await decimal.getNftStakesByAddress(decimalWallet.address);
      console.log(res);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }
  });

  test.skip('get and use generated wallets', async() => {
    try {
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
      decimal.setWallet(decimalWallet);
      const res = await decimalWallet.getAndUseGeneratedWallets();
      console.log(res);
      // expect(res.transactionHash.length > 0).toBeTruthy();

    } catch (e) {
      console.log(e)
    }
  });
});

