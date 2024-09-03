import DecimalApi from "./index";
import Wallet from "../wallet";
import { perpareTimestampAndSignature } from "../utils/walletUtils";

interface AddressBookItem {
  name: string;
  address: string;
  comment: string;
}

export default function updateAddressbookItem(
  api: DecimalApi,
  wallet: Wallet | null
) {
  return async (itemId: number, payload: AddressBookItem) => {
    try {
      if (!wallet) {
        return null;
      }
      const { timestamp, signature } = perpareTimestampAndSignature(wallet);
      const params = { timestamp, signature };
      return api.updateAddressbookItem(itemId, payload, params);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
