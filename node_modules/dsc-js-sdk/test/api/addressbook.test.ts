import { NETWORKS } from '../../src/endpoints';
import SDK from '../../src/index'
// import SDK from "../../lib-esm/"

// @ts-ignore
import info from "../_commonInfo"
jest.setTimeout(15000)

describe('addressbook', () => {
	// test('create', async() => {
	// 		try {
	// 				// Sdk.
	// 				const { Wallet, Decimal } = SDK;
	// 				const decimalWallet = new Wallet(info.menmonics.validator[0], info.endpoints.backendDevApiEndpoint);
	// 				const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
	// 				decimal.setWallet(decimalWallet);
	// 				console.log('wallet', decimalWallet)
	// 				// const payload = {
	// 				// 	address: 'dx1fatzsagt96pfglxlq245th252mv3neckvkmf68',
	// 				// 	name: 'Me',
	// 				// 	comment: ''
	// 				// }
	// 				// const res = await decimal.createAddressbookItem(payload);
	// 				// console.log(JSON.stringify(res));
	// 		} catch (e) {
	// 				console.log(e)
	// 		}
	// });
  test('get', async() => {
    try {
      // Sdk.
      const { Wallet, Decimal, DecimalNetworks } = SDK;
      const decimalWallet = new Wallet(info.menmonics.validator[0]);
      const decimal = await Decimal.connect(DecimalNetworks.devnet, true);
      decimal.setWallet(decimalWallet);
      const res = await decimal.getAddressbook();
      console.log(JSON.stringify(res));
    } catch (e) {
      console.log(e)
    }
  });
	// test.skip('update', async() => {
	// 	try {
	// 			// Sdk.
	// 			const { Wallet, Decimal } = SDK;
	// 			const decimalWallet = new Wallet(info.menmonics.validator[0], info.endpoints.backendDevApiEndpoint);
	// 			const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
	// 			decimal.setWallet(decimalWallet);
	// 			const payload = {
	// 				address: 'dx1fatzsagt96pfglxlq245th252mv3neckvkmf68',
	// 				name: 'My address',
	// 				comment: 'Comment'
	// 			}
	// 			const res = await decimal.updateAddressbookItem(2, payload);
	// 			console.log(JSON.stringify(res));
	// 	} catch (e) {
	// 			console.log(e)
	// 	}
	// });
	// test.skip('delete', async() => {
	// 	try {
	// 			// Sdk.
	// 			const { Wallet, Decimal } = SDK;
	// 			const decimalWallet = new Wallet(info.menmonics.validator[0], info.endpoints.backendDevApiEndpoint);
	// 			const decimal = await Decimal.connect(info.endpoints.backendDevRpcEndpoint, info.endpoints.backendDevApiEndpoint);
	// 			decimal.setWallet(decimalWallet);
	// 			const res = await decimal.deleteAddressbookItem(2);
	// 			console.log(JSON.stringify(res));
	// 	} catch (e) {
	// 			console.log(e)
	// 	}
	// });
});

