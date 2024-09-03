import { perpareTimestampAndSignature } from "../utils/walletUtils";
import DecimalApi from "./index";
import Wallet from "../wallet";

export default function getNfts(api: DecimalApi, wallet: Wallet | null) {
  return (address: string, limit = 10, offset = 0, query = null) => {
    try {
      let params: any = query ? { query, limit, offset } : { limit, offset };

      if (!address) {
        throw new Error("The address is required");
      }

      // if requested address is yours
      if (address === wallet?.address) {
        const { timestamp, signature } = perpareTimestampAndSignature(wallet);
        params = { ...params, timestamp, signature };
      }

      return api.getNfts(address, params);
    } catch (e) {
      console.error(e);

      return null;
    }
  };
}
