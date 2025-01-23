import Big from "big.js";

const BASE_UNIT = "1000000000000000000";

export function toBaseUnit(value: string | number): string {
  const floatValue = new Big(value);
  const baseUnit = new Big(BASE_UNIT);
  const result = floatValue.times(baseUnit);
  
  return result.toFixed(0); 
}