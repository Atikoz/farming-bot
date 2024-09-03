import DecimalApi from "./index";
import Wallet from "../wallet";
import { perpareTimestampAndSignature } from "../utils/walletUtils";

export default function getAddress(api: DecimalApi, wallet: Wallet | null) {
  return async (address: string, txLimit = 10) => {
    try {
      let params: any = { txLimit };

      if (!address) {
        throw new Error("The address is required");
      }

      // if requested address is yours
      if (address === wallet?.address) {
        const { timestamp, signature } = perpareTimestampAndSignature(wallet);
        params = { ...params, timestamp, signature };
      }

      return api.getAddress(address, params);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
