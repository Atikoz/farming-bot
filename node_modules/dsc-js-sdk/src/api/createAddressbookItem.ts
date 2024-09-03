import DecimalApi from "./index";
import Wallet from "../wallet";
import { perpareTimestampAndSignature } from "../utils/walletUtils";

export interface AddressBookItem {
  name: string;
  address: string;
  comment: string;
}

export default function createAddressbookItem(
  api: DecimalApi,
  wallet: Wallet | null
) {
  return async (payload: AddressBookItem) => {
    try {
      if (!wallet) {
        return null;
      }
      const { timestamp, signature } = perpareTimestampAndSignature(wallet);
      const params = { timestamp, signature };
      return api.createAddressbookItem(payload, params);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
