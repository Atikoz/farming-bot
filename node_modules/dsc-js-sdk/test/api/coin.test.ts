// // import SDK from '../../src/index'
// import SDK from "../../lib-esm/"

// // @ts-ignore
// import info from "../_commonInfo"
// jest.setTimeout(15000)

// describe('coin', () => {
//   test.skip('get', async() => {
//     try {
//       // Sdk.
//       const { Wallet, Decimal } = SDK;
//       const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
//       const decimal = await Decimal.connect(info.endpoints.backendDec2RpcEndpoint, info.endpoints.backendDec2ApiEndpoint);
//       decimal.setWallet(decimalWallet);
//       const existedCoin = 'del';
//       const notExistedCoin = 'notExistedCoin'
//       const existedRes = await decimal.getCoin(existedCoin);
//       const notExistedRes = await decimal.getCoin(notExistedCoin);
//       expect(notExistedRes).toBeFalsy();
//       expect(existedRes.symbol).toEqual(existedCoin);
//     } catch (e) {
//       console.log(e)
//     }
//   });
// });

