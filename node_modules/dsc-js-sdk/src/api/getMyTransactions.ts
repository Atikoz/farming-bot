import DecimalApi from "./index";
import Wallet from "../wallet";

export default function getMyTransactions(
  api: DecimalApi,
  wallet: Wallet | null
) {
  return (limit = 10, offset = 0, types: any, coins: any) => {
    if (!wallet) {
      throw new Error("Wallet id is required");
    }
    const params: any = { limit, offset };
    if (types) {
      params.types = types;
    }
    if (coins) {
      params.coins = coins;
    }

    return api.getTransactionsByAddress(wallet.address, params);
  };
}
