import { Account } from "../accounts";
import { txOptions } from "../interfaces/clientInterfaces";
import BigNumber from "bignumber.js";

export function generateTypes(msgValues: object): any {
  const types = {
    EIP712Domain: [
      { name: "name", type: "string" },
      { name: "version", type: "string" },
      { name: "chainId", type: "uint256" },
      { name: "verifyingContract", type: "string" },
      { name: "salt", type: "string" },
    ],
    Tx: [
      { name: "account_number", type: "string" },
      { name: "chain_id", type: "string" },
      { name: "fee", type: "Fee" },
      { name: "memo", type: "string" },
      { name: "msgs", type: "Msg[]" },
      { name: "sequence", type: "string" },
    ],
    Fee: [
      { name: "feePayer", type: "string" },
      { name: "amount", type: "Coin[]" },
      { name: "gas", type: "string" },
    ],
    Coin: [
      { name: "denom", type: "string" },
      { name: "amount", type: "string" },
    ],
    Msg: [
      { name: "type", type: "string" },
      { name: "value", type: "MsgValue" },
    ],
  };
  Object.assign(types, msgValues);
  return types;
}

export const MSG_SEND_COIN_TYPES = {
  MsgValue: [
    { name: "sender", type: "string" },
    { name: "recipient", type: "string" },
    { name: "coin", type: "TypeCoin" },
  ],
  TypeCoin: [
    { name: "denom", type: "string" },
    { name: "amount", type: "string" },
  ],
};

export const MSG_DELEGATE_TYPES = {
  MsgValue: [
    { name: "delegator", type: "string" },
    { name: "validator", type: "string" },
    { name: "coin", type: "TypeCoin" },
  ],
  TypeCoin: [
    { name: "denom", type: "string" },
    { name: "amount", type: "string" },
  ],
};

export const MSG_UNBOND_TYPES = {
  MsgValue: [
    { name: "delegator", type: "string" },
    { name: "validator", type: "string" },
    { name: "coin", type: "TypeCoin" },
  ],
  TypeCoin: [
    { name: "denom", type: "string" },
    { name: "amount", type: "string" },
  ],
};

export const MSG_REDELEGATE_TYPES = {
  MsgValue: [
    { name: "delegator", type: "string" },
    { name: "validatorSrc", type: "string" },
    { name: "validatorDst", type: "string" },
    { name: "coin", type: "TypeCoin" },
  ],
  TypeCoin: [
    { name: "denom", type: "string" },
    { name: "amount", type: "string" },
  ],
};

export interface Fee {
  amount: string;
  denom: string;
  gas: string;
}

export function generateFee(
  amount: string,
  denom: string,
  gas: string,
  feePayer: string
): any {
  return {
    amount: [
      {
        amount,
        denom,
      },
    ],
    feePayer,
    gas,
    gas_limit: 8000,
  };
}

export function generateMessageEip712(
  accountNumber: string,
  sequence: string,
  chainCosmosId: string,
  memo: string,
  fee: object,
  msgs: object[]
): any {
  return {
    account_number: accountNumber,
    chain_id: chainCosmosId,
    fee,
    memo,
    msgs,
    sequence,
  };
}

export function createEIP712Payload(
  types: object,
  account: Account,
  chainId: string,
  options: txOptions,
  fee: Fee,
  message: object
): any {
  const feeObject = generateFee(
    fee.amount,
    fee.denom,
    fee.gas,
    account.address
  );

  const messages = generateMessageEip712(
    account.accountNumber.toString(),
    account.sequence.toString(),
    chainId,
    options.message,
    feeObject,
    [message]
  );
  const chainIdNumber = chainId.replace("decimal_", "").split("-")[0];
  return {
    types,
    primaryType: "Tx",
    domain: {
      name: "Cosmos Web3",
      version: "1.0.0",
      chainId: BigNumber(chainIdNumber).toNumber(),
      verifyingContract: "cosmos",
      salt: "0",
    },
    message: messages,
  };
}
