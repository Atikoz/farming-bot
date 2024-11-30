const BASE_UNIT = "1000000000000000000";

export function toBaseUnit(value) {
  const floatValue = parseFloat(value);
  const result = BigInt(Math.round(floatValue * parseFloat(BASE_UNIT)));
  return result.toString();
}