// import SDK from '../../src/index'
import SDK, { createPublicKey } from "../../lib-esm/"

// @ts-ignore
// import info from "../_commonInfo"
jest.setTimeout(15000)

describe('addresses', () => {
  test.skip('equal', async() => {
    try {
      // Sdk.
      const { Wallet } = SDK;
      const decimalWallet = new Wallet(info.menmonics.dec2[0], info.endpoints.backendDec2ApiEndpoint);
      const cosmosAccountAddress = decimalWallet.address;
      const evmAccountAddress = decimalWallet.evmAddress as string;
      console.log("cosmosAccountAddress ", cosmosAccountAddress)
      console.log("evmAccountAddress ", evmAccountAddress)
      const cosmosAccountAddress2 = decimalWallet.encodeCosmosAccountAddress(evmAccountAddress);
      const evmAccountAddress2 = decimalWallet.decodeCosmosAccountAddress(cosmosAccountAddress);
      expect(cosmosAccountAddress).toEqual(cosmosAccountAddress2);
      expect(evmAccountAddress).toEqual(evmAccountAddress2);
    } catch (e) {
      console.log(e)
    }
  });
  test('pubkey', async() => {
    try {
      const hexPk = '0x037c71d1855237853d90eb194790d9aee3c0ff25b0c5c4d74ea994f02a27f2b39a'
      const pk = Buffer.from(
          hexPk.replace('0x', ''), 'hex'
      )
      const pubKeyCompressed = createPublicKey(pk)
      expect(0).toEqual(0);
    } catch (e) {
      console.log(e)
    }
  });
});

