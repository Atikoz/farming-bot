import DecimalApi from "./index";
import Wallet from "../wallet";
import { perpareTimestampAndSignature } from "../utils/walletUtils";

export default function getAddressbook(api: DecimalApi, wallet: Wallet | null) {
  return async () => {
    try {
      if (!wallet) {
        return null;
      }
      const { timestamp, signature } = perpareTimestampAndSignature(wallet);
      const params = { timestamp, signature };
      return api.getAddressbook(params);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
