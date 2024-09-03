import { NETWORKS } from '../../src/endpoints';
import SDK from '../../src/index'

// @ts-ignore
jest.setTimeout(15000)

describe('blocking', () => {
  test('get', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal, DecimalNetworks } = SDK;
      const decimalWallet = new Wallet('');
      const decimal = await Decimal.connect(DecimalNetworks.devnet, true);
      decimal.setWallet(decimalWallet);
      const res = await decimal.getBlockedAddresses();
      console.log(JSON.stringify(res));
    } catch (e) {
      console.log(e)
    }
  });
    test.skip('update', async() => {
		try {
				// Sdk.
				const { Wallet, Decimal, DecimalNetworks } = SDK;
                const decimalWallet = new Wallet('');
                const decimal = await Decimal.connect(DecimalNetworks.devnet, true);
                decimal.setWallet(decimalWallet);
                const res = await decimal.updateAddressBlockingData('d01fatzsagt96pfglxlq245th252mv3neckg3cu3c', true, 'outgoing');
                console.log(JSON.stringify(res));
		} catch (e) {
				console.log(e)
		}
	});

});

