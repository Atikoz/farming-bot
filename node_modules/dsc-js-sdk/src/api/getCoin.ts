import DecimalNumber from "decimal.js";
import { getAmountFromUNI } from "../utils/math";
import DecimalApi from "./index";

function calcPrice(coin: any) {
  const reserve = getAmountFromUNI(coin.reserve);
  const supply = getAmountFromUNI(coin.volume);
  const crr = coin.crr / 100;

  const amount = Math.min(Number(supply), 1);

  // if (supply === 0) {
  //   return 0;
  // }

  let result = new DecimalNumber(amount).div(supply);
  result = new DecimalNumber(1).minus(result);
  result = result.pow(new DecimalNumber(1).div(crr));
  result = new DecimalNumber(1).minus(result).times(reserve);

  return result.toNumber();
}

export default function getCoin(api: DecimalApi) {
  return async (symbol: any) => {
    if (!symbol) {
      throw new Error("The coin symbol is required");
    }

    try {
      const coin = await api.getCoin(symbol);
      coin.price = calcPrice(coin);
      return coin;
    } catch (e) {
      return null;
    }
  };
}
