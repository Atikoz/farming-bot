import EC from "elliptic";
import DecimalApi from "./index";
import Wallet from "../wallet";

import { perpareTimestampAndSignature } from "../utils/walletUtils";

export enum DelegationStatus {
  delegated = "delegated",
  undelegating = "undelegating",
  redelegating = "redelegating",
}
export default function getNftStakesByAddress(
  api: DecimalApi,
  wallet: Wallet | null
) {
  return async (address: string, status: DelegationStatus) => {
    if (!address) {
      throw new Error("The address is required");
    }
    try {
      let params = {};
      // if requested address is yours
      if (address === wallet?.address) {
        const { timestamp, signature } = perpareTimestampAndSignature(wallet);
        params = { ...params, timestamp, signature };
      }
      return api.getNftSpecificStakes(address, status, params);
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
