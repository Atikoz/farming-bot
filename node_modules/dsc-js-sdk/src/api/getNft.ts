import { perpareTimestampAndSignature } from "../utils/walletUtils";
import DecimalApi from "./index";
import Wallet from "../wallet";

export default function getNft(api: DecimalApi, wallet: Wallet | null) {
  return (id: number) => {
    if (!id) {
      throw new Error("Nft id is required");
    }
    if (!wallet) {
      throw new Error("Wallet id is required");
    }
    try {
      const { timestamp, signature } = perpareTimestampAndSignature(wallet);

      const params = {
        timestamp,
        signature,
      };
      return api.getNftById(id, params);
    } catch (e) {
      console.error(e);

      return null;
    }
  };
}
