import DecimalApi from "./index";
import Wallet from "../wallet";

export default function getAddress(api: DecimalApi, wallet: Wallet | null) {
  return async () => {
    try {
      if (!wallet) {
        throw new Error("Wallet required");
      }
      const pubKey = Buffer.from(wallet.publicKey).toString("base64");
      const res = await api.returnLegacy({ pubKey });
      return res;
    } catch (e) {
      console.error(e);
      return null;
    }
  };
}
