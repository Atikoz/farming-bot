import { perpareTimestampAndSignature } from "../utils/walletUtils";
import DecimalApi from "./index";
import Wallet from "../wallet";

export default function getBlockedAddresses(
  api: DecimalApi,
  wallet: Wallet | null
) {
  return (limit = 10, offset = 0, type?: object, q?: object) => {
    if (!wallet) {
      throw new Error("Wallet id is required");
    }
    try {
      const { timestamp, signature } = perpareTimestampAndSignature(wallet);
      const params: any = {
        limit,
        offset,
        timestamp,
        signature,
        ...(type && { type }),
        ...(q && { q }),
      };

      return api.getBlockedAddresses(params);
    } catch (e) {
      console.error(e);

      return null;
    }
  };
}
