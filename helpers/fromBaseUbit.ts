import Big from 'big.js';

function fromBaseUnit(value: string): string {
  const floatValue = new Big(value);
  const baseUnit = new Big(BASE_UNIT);
  const result = floatValue.div(baseUnit);

  return result.toFixed();
}

const BASE_UNIT = "1000000000000000000";

export default fromBaseUnit