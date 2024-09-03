import DecimalApi from "./index";
import Wallet from "../wallet";
import { perpareTimestampAndSignature } from "../utils/walletUtils";

export default function deleteAddressbookItem(
  api: DecimalApi,
  wallet: Wallet | null
) {
  return async (itemId: number) => {
    try {
      if (!wallet) {
        return null;
      }
      const { timestamp, signature } = perpareTimestampAndSignature(wallet);
      const params = { timestamp, signature };
      return api.deleteAddressbookItem(itemId, params);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
