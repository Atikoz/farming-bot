import DecimalApi from "./index";
import Wallet from "../wallet";

export default function getMyCoins(api: DecimalApi, wallet: Wallet | null) {
  return (limit = 10, offset = 0) => {
    const params = { limit, offset };
    if (!wallet) {
      throw new Error("Wallet undefined");
    }
    return api.getCoinsByAddress(wallet.address, params);
  };
}
