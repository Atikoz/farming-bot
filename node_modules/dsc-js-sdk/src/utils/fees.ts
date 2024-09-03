// /* eslint-disable no-unused-vars */
//
// import DecimalNumber from "decimal.js";
//
// import TX_TYPE from "../txTypes";
// import { getAmountFromUNI, getAmountToUNI } from "./math";
// import getCoin from "../api/getCoin";
// import DecimalApi from "../api";
//
// DecimalNumber.set({ precision: 40 });
// // import { prepareTx } from './txUtils';
//
// // 1 unit = 0.001 DEL
// // SendCoin fee is 10 unit.
// // Every byte add additional 2 units.
// const unit = 0.001;
//
// async function getCoinPrice(api: DecimalApi, ticker: any) {
//   const coin = await getCoin(api)(ticker);
//   if (!coin) throw new Error("Coin not found");
//
//   return coin.price;
// }
//
// async function getTxSize() {
//   return 205;
// }
//
// export function getCommission() {
//   return async (tx: any, feeCoin: any) => {
//     const { type } = tx.msg[0];
//     const ticker = feeCoin.toLowerCase();
//     console.log(tx);
//     const textSize = await getTxSize();
//     const feeForText = new DecimalNumber(textSize).times(2);
//     let feeInBase = new DecimalNumber(100).plus(feeForText).plus(20); // 20 - additional commission for the guarantee
//
//     if (type === TX_TYPE.COIN_MULTISEND) {
//       const numberOfParticipants = tx.msg[0].value.sends.length;
//       const feeForParticipants = 5 * (numberOfParticipants - 1);
//       feeInBase = feeInBase.plus(feeForParticipants);
//     }
//
//     if (ticker === "tdel" || ticker === "del") {
//       return { coinPrice: "1", value: feeInBase, base: feeInBase }; // -> base {units}
//     }
//
//     const coinPriceRaw = await getCoinPrice(api, ticker);
//     const coinPrice = new DecimalNumber(coinPriceRaw);
//     const feeInCustom = feeInBase.div(coinPrice.div(unit));
//
//     return {
//       coinPrice,
//       value: new DecimalNumber(feeInCustom.div(unit).toFixed(0)),
//       base: feeInBase,
//     }; // -> custom {units}
//   };
// }
//
// export function setCommission(api) {
//   return async (tx, feeCoin) => {
//     tx.fee.amount = [
//       {
//         denom: feeCoin,
//         amount: "0",
//       },
//     ];
//
//     const fee = await getCommission(api)(tx, feeCoin);
//     console.log("SetCommission -> fee from getCommission: ", fee);
//     const feeAmountSize = Buffer.from(
//       getAmountToUNI(fee.value.times(unit))
//     ).length;
//
//     const feeForFeeAmount = new DecimalNumber(feeAmountSize).times(2); // base {units}
//
//     let totalFee;
//
//     if (feeCoin !== "tdel" && feeCoin !== "del") {
//       const feeForFeeAmountToCustom = feeForFeeAmount.div(fee.coinPrice);
//       totalFee = fee.value.plus(feeForFeeAmountToCustom).times(unit);
//     } else {
//       totalFee = fee.value.plus(feeForFeeAmount).times(unit);
//     }
//
//     tx.fee.amount[0].amount = getAmountToUNI(totalFee);
//     return tx;
//   };
// }
