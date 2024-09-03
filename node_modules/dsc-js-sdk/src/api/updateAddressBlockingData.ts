import { perpareTimestampAndSignature } from "../utils/walletUtils";
import DecimalApi from "./index";
import Wallet from "../wallet";

// constants
const BLOCK_TYPES = ["incoming", "outgoing", "both"];

export default function updateAddressBlockingData(
  api: DecimalApi,
  wallet: Wallet | null
) {
  return (
    address: string,
    isBlocked: boolean,
    type: string,
    reason?: string
  ) => {
    if (!address || isBlocked === null) {
      throw new Error("The address and isBlocked fields are required");
    }

    if (!BLOCK_TYPES.includes(type)) {
      throw new Error(
        `Blocking type should be one of ${BLOCK_TYPES.join("|")}`
      );
    }
    if (!wallet) {
      throw new Error("Wallet id is required");
    }
    try {
      const { timestamp, signature } = perpareTimestampAndSignature(wallet);
      const payload = {
        isBlocked,
        type,
        timestamp,
        signature: JSON.stringify(signature),
        reason,
      };

      return api.updateAddressBlockingData(address, payload);
    } catch (e) {
      console.error(e);

      return null;
    }
  };
}
