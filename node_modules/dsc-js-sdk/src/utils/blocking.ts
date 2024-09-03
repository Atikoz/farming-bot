const STRING_MODIFIER_OFFSET = 1;
interface BlockingSignatures {
  signatureA: string;
  signatureB: string;
}
export const SUCCESS_CHECK_CODE = 100;
export const FAIL_CHECK_CODE = 101;
function encodeAddressesArray(addressesArray: string[]): string {
  let tmpString = "[";
  addressesArray.forEach((el) => {
    tmpString += `"${el}",`;
  });
  if (tmpString !== "[") {
    tmpString = tmpString.slice(0, -1);
  }
  tmpString += "]";
  const shiftedCharsArray = [];
  for (let i = 0; i < tmpString.length; i++) {
    shiftedCharsArray.push(tmpString.charCodeAt(i) - STRING_MODIFIER_OFFSET);
  }
  const shiftedString = String.fromCharCode(...shiftedCharsArray);
  const encodedString = Buffer.from(shiftedString).toString("base64");
  return encodedString;
}
export function createBlockCheckSignatures(
  walletAddress: string,
  messageValue: Record<any, any>
): BlockingSignatures {
  const outgoingAddresses = [
    walletAddress,
    messageValue?.issuer,
    messageValue?.sender,
    messageValue?.delegator,
    messageValue?.proposer,
    messageValue?.from,
  ].filter(Boolean);

  const incomingAddresses = [
    messageValue?.receiver,
    messageValue?.recipient,
    messageValue?.to,
    messageValue?.validator,
    messageValue?.operatorAddress,
    messageValue?.rewardAddress,
  ].filter(Boolean);
  if (messageValue?.sends) {
    messageValue?.sends.forEach((el: any) => {
      incomingAddresses.push(el.recipient);
    });
  }
  const signatureA = encodeAddressesArray(outgoingAddresses);
  const signatureB = encodeAddressesArray(incomingAddresses);
  return { signatureA, signatureB };
}

export function decodeAddressesArray(signature: string): string[] {
  const shiftedString = Buffer.from(signature, "base64").toString();
  const unshiftedCharsArray = [];
  for (let i = 0; i < shiftedString.length; i++) {
    unshiftedCharsArray.push(
      shiftedString.charCodeAt(i) + STRING_MODIFIER_OFFSET
    );
  }
  const unshiftedString = String.fromCharCode(...unshiftedCharsArray);
  const addressesArray = JSON.parse(unshiftedString);
  return addressesArray;
}
