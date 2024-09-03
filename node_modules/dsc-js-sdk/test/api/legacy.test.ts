import SDK from '../../src/index'
// import SDK from "../../lib-esm"

// @ts-ignore
import info from "../_commonInfo"
jest.setTimeout(15000)

describe('legacy', () => {
  test('request', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal } = SDK;
      const decimalWallet = new Wallet(info.menmonics.multisigDev, info.endpoints.backendDevApiEndpoint);
      const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
      decimal.setWallet(decimalWallet);
      const res = await decimal.requestLegacy();
      console.log(res);
    } catch (e) {
      console.log(e)
    }
  });
});

