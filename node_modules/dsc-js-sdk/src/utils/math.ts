import DecimalNumber from "decimal.js";

DecimalNumber.set({ precision: 40 });

// eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/explicit-function-return-type
export function getAmountFromUNI(amount: any) {
  return new DecimalNumber(amount)
    .times(new DecimalNumber(10).pow(-18))
    .toFixed();
}

// eslint-disable-next-line @typescript-eslint/naming-convention,@typescript-eslint/explicit-function-return-type
export function getAmountToUNI(amount: any) {
  return new DecimalNumber(amount)
    .times(new DecimalNumber(10).pow(18))
    .toFixed(0);
}

export function getCommissionToUNI(amount: any) {
  return new DecimalNumber(amount)
    .times(new DecimalNumber(10).pow(16))
    .toFixed(0);
}
