/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.fee.v1";

/** Params defines transaction fees calculation constants for the entire application. */
export interface Params {
  /** tx common fee depends on raw transaction size in bytes */
  txByteFee: string;
  /** coin creation special fee depends on coin ticker length */
  coinCreateTicker3: string;
  coinCreateTicker4: string;
  coinCreateTicker5: string;
  coinCreateTicker6: string;
  coinCreateTicker7: string;
  /** coin fees */
  coinCreate: string;
  coinUpdate: string;
  coinSend: string;
  coinSendAdd: string;
  coinBuy: string;
  coinSell: string;
  coinRedeemCheck: string;
  coinBurn: string;
  /** multisig fees */
  multisigCreateWallet: string;
  multisigCreateTransaction: string;
  multisigSignTransaction: string;
  /** nft fees */
  nftMintToken: string;
  nftUpdateToken: string;
  nftUpdateReserve: string;
  nftSendToken: string;
  nftBurnToken: string;
  /** swap fees */
  swapActivateChain: string;
  swapDeactivateChain: string;
  swapInitialize: string;
  swapRedeem: string;
  /** validator fees */
  validatorCreateValidator: string;
  validatorEditValidator: string;
  validatorDelegate: string;
  validatorDelegateNft: string;
  validatorRedelegate: string;
  validatorRedelegateNft: string;
  validatorUndelegate: string;
  validatorUndelegateNft: string;
  validatorSetOnline: string;
  validatorSetOffline: string;
  /** evm tx commissions */
  evmGasPrice: string;
  /** oracle defines address empowered to update coin prices. */
  oracle: string;
}

function createBaseParams(): Params {
  return {
    txByteFee: "",
    coinCreateTicker3: "",
    coinCreateTicker4: "",
    coinCreateTicker5: "",
    coinCreateTicker6: "",
    coinCreateTicker7: "",
    coinCreate: "",
    coinUpdate: "",
    coinSend: "",
    coinSendAdd: "",
    coinBuy: "",
    coinSell: "",
    coinRedeemCheck: "",
    coinBurn: "",
    multisigCreateWallet: "",
    multisigCreateTransaction: "",
    multisigSignTransaction: "",
    nftMintToken: "",
    nftUpdateToken: "",
    nftUpdateReserve: "",
    nftSendToken: "",
    nftBurnToken: "",
    swapActivateChain: "",
    swapDeactivateChain: "",
    swapInitialize: "",
    swapRedeem: "",
    validatorCreateValidator: "",
    validatorEditValidator: "",
    validatorDelegate: "",
    validatorDelegateNft: "",
    validatorRedelegate: "",
    validatorRedelegateNft: "",
    validatorUndelegate: "",
    validatorUndelegateNft: "",
    validatorSetOnline: "",
    validatorSetOffline: "",
    evmGasPrice: "",
    oracle: "",
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.txByteFee !== "") {
      writer.uint32(10).string(message.txByteFee);
    }
    if (message.coinCreateTicker3 !== "") {
      writer.uint32(26).string(message.coinCreateTicker3);
    }
    if (message.coinCreateTicker4 !== "") {
      writer.uint32(34).string(message.coinCreateTicker4);
    }
    if (message.coinCreateTicker5 !== "") {
      writer.uint32(42).string(message.coinCreateTicker5);
    }
    if (message.coinCreateTicker6 !== "") {
      writer.uint32(50).string(message.coinCreateTicker6);
    }
    if (message.coinCreateTicker7 !== "") {
      writer.uint32(58).string(message.coinCreateTicker7);
    }
    if (message.coinCreate !== "") {
      writer.uint32(90).string(message.coinCreate);
    }
    if (message.coinUpdate !== "") {
      writer.uint32(98).string(message.coinUpdate);
    }
    if (message.coinSend !== "") {
      writer.uint32(106).string(message.coinSend);
    }
    if (message.coinSendAdd !== "") {
      writer.uint32(114).string(message.coinSendAdd);
    }
    if (message.coinBuy !== "") {
      writer.uint32(122).string(message.coinBuy);
    }
    if (message.coinSell !== "") {
      writer.uint32(130).string(message.coinSell);
    }
    if (message.coinRedeemCheck !== "") {
      writer.uint32(138).string(message.coinRedeemCheck);
    }
    if (message.coinBurn !== "") {
      writer.uint32(146).string(message.coinBurn);
    }
    if (message.multisigCreateWallet !== "") {
      writer.uint32(170).string(message.multisigCreateWallet);
    }
    if (message.multisigCreateTransaction !== "") {
      writer.uint32(178).string(message.multisigCreateTransaction);
    }
    if (message.multisigSignTransaction !== "") {
      writer.uint32(186).string(message.multisigSignTransaction);
    }
    if (message.nftMintToken !== "") {
      writer.uint32(250).string(message.nftMintToken);
    }
    if (message.nftUpdateToken !== "") {
      writer.uint32(258).string(message.nftUpdateToken);
    }
    if (message.nftUpdateReserve !== "") {
      writer.uint32(266).string(message.nftUpdateReserve);
    }
    if (message.nftSendToken !== "") {
      writer.uint32(274).string(message.nftSendToken);
    }
    if (message.nftBurnToken !== "") {
      writer.uint32(282).string(message.nftBurnToken);
    }
    if (message.swapActivateChain !== "") {
      writer.uint32(330).string(message.swapActivateChain);
    }
    if (message.swapDeactivateChain !== "") {
      writer.uint32(338).string(message.swapDeactivateChain);
    }
    if (message.swapInitialize !== "") {
      writer.uint32(346).string(message.swapInitialize);
    }
    if (message.swapRedeem !== "") {
      writer.uint32(354).string(message.swapRedeem);
    }
    if (message.validatorCreateValidator !== "") {
      writer.uint32(410).string(message.validatorCreateValidator);
    }
    if (message.validatorEditValidator !== "") {
      writer.uint32(418).string(message.validatorEditValidator);
    }
    if (message.validatorDelegate !== "") {
      writer.uint32(426).string(message.validatorDelegate);
    }
    if (message.validatorDelegateNft !== "") {
      writer.uint32(434).string(message.validatorDelegateNft);
    }
    if (message.validatorRedelegate !== "") {
      writer.uint32(442).string(message.validatorRedelegate);
    }
    if (message.validatorRedelegateNft !== "") {
      writer.uint32(450).string(message.validatorRedelegateNft);
    }
    if (message.validatorUndelegate !== "") {
      writer.uint32(458).string(message.validatorUndelegate);
    }
    if (message.validatorUndelegateNft !== "") {
      writer.uint32(466).string(message.validatorUndelegateNft);
    }
    if (message.validatorSetOnline !== "") {
      writer.uint32(474).string(message.validatorSetOnline);
    }
    if (message.validatorSetOffline !== "") {
      writer.uint32(482).string(message.validatorSetOffline);
    }
    if (message.evmGasPrice !== "") {
      writer.uint32(490).string(message.evmGasPrice);
    }
    if (message.oracle !== "") {
      writer.uint32(498).string(message.oracle);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txByteFee = reader.string();
          break;
        case 3:
          message.coinCreateTicker3 = reader.string();
          break;
        case 4:
          message.coinCreateTicker4 = reader.string();
          break;
        case 5:
          message.coinCreateTicker5 = reader.string();
          break;
        case 6:
          message.coinCreateTicker6 = reader.string();
          break;
        case 7:
          message.coinCreateTicker7 = reader.string();
          break;
        case 11:
          message.coinCreate = reader.string();
          break;
        case 12:
          message.coinUpdate = reader.string();
          break;
        case 13:
          message.coinSend = reader.string();
          break;
        case 14:
          message.coinSendAdd = reader.string();
          break;
        case 15:
          message.coinBuy = reader.string();
          break;
        case 16:
          message.coinSell = reader.string();
          break;
        case 17:
          message.coinRedeemCheck = reader.string();
          break;
        case 18:
          message.coinBurn = reader.string();
          break;
        case 21:
          message.multisigCreateWallet = reader.string();
          break;
        case 22:
          message.multisigCreateTransaction = reader.string();
          break;
        case 23:
          message.multisigSignTransaction = reader.string();
          break;
        case 31:
          message.nftMintToken = reader.string();
          break;
        case 32:
          message.nftUpdateToken = reader.string();
          break;
        case 33:
          message.nftUpdateReserve = reader.string();
          break;
        case 34:
          message.nftSendToken = reader.string();
          break;
        case 35:
          message.nftBurnToken = reader.string();
          break;
        case 41:
          message.swapActivateChain = reader.string();
          break;
        case 42:
          message.swapDeactivateChain = reader.string();
          break;
        case 43:
          message.swapInitialize = reader.string();
          break;
        case 44:
          message.swapRedeem = reader.string();
          break;
        case 51:
          message.validatorCreateValidator = reader.string();
          break;
        case 52:
          message.validatorEditValidator = reader.string();
          break;
        case 53:
          message.validatorDelegate = reader.string();
          break;
        case 54:
          message.validatorDelegateNft = reader.string();
          break;
        case 55:
          message.validatorRedelegate = reader.string();
          break;
        case 56:
          message.validatorRedelegateNft = reader.string();
          break;
        case 57:
          message.validatorUndelegate = reader.string();
          break;
        case 58:
          message.validatorUndelegateNft = reader.string();
          break;
        case 59:
          message.validatorSetOnline = reader.string();
          break;
        case 60:
          message.validatorSetOffline = reader.string();
          break;
        case 61:
          message.evmGasPrice = reader.string();
          break;
        case 62:
          message.oracle = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      txByteFee: isSet(object.txByteFee) ? String(object.txByteFee) : "",
      coinCreateTicker3: isSet(object.coinCreateTicker3) ? String(object.coinCreateTicker3) : "",
      coinCreateTicker4: isSet(object.coinCreateTicker4) ? String(object.coinCreateTicker4) : "",
      coinCreateTicker5: isSet(object.coinCreateTicker5) ? String(object.coinCreateTicker5) : "",
      coinCreateTicker6: isSet(object.coinCreateTicker6) ? String(object.coinCreateTicker6) : "",
      coinCreateTicker7: isSet(object.coinCreateTicker7) ? String(object.coinCreateTicker7) : "",
      coinCreate: isSet(object.coinCreate) ? String(object.coinCreate) : "",
      coinUpdate: isSet(object.coinUpdate) ? String(object.coinUpdate) : "",
      coinSend: isSet(object.coinSend) ? String(object.coinSend) : "",
      coinSendAdd: isSet(object.coinSendAdd) ? String(object.coinSendAdd) : "",
      coinBuy: isSet(object.coinBuy) ? String(object.coinBuy) : "",
      coinSell: isSet(object.coinSell) ? String(object.coinSell) : "",
      coinRedeemCheck: isSet(object.coinRedeemCheck) ? String(object.coinRedeemCheck) : "",
      coinBurn: isSet(object.coinBurn) ? String(object.coinBurn) : "",
      multisigCreateWallet: isSet(object.multisigCreateWallet) ? String(object.multisigCreateWallet) : "",
      multisigCreateTransaction: isSet(object.multisigCreateTransaction)
        ? String(object.multisigCreateTransaction)
        : "",
      multisigSignTransaction: isSet(object.multisigSignTransaction) ? String(object.multisigSignTransaction) : "",
      nftMintToken: isSet(object.nftMintToken) ? String(object.nftMintToken) : "",
      nftUpdateToken: isSet(object.nftUpdateToken) ? String(object.nftUpdateToken) : "",
      nftUpdateReserve: isSet(object.nftUpdateReserve) ? String(object.nftUpdateReserve) : "",
      nftSendToken: isSet(object.nftSendToken) ? String(object.nftSendToken) : "",
      nftBurnToken: isSet(object.nftBurnToken) ? String(object.nftBurnToken) : "",
      swapActivateChain: isSet(object.swapActivateChain) ? String(object.swapActivateChain) : "",
      swapDeactivateChain: isSet(object.swapDeactivateChain) ? String(object.swapDeactivateChain) : "",
      swapInitialize: isSet(object.swapInitialize) ? String(object.swapInitialize) : "",
      swapRedeem: isSet(object.swapRedeem) ? String(object.swapRedeem) : "",
      validatorCreateValidator: isSet(object.validatorCreateValidator) ? String(object.validatorCreateValidator) : "",
      validatorEditValidator: isSet(object.validatorEditValidator) ? String(object.validatorEditValidator) : "",
      validatorDelegate: isSet(object.validatorDelegate) ? String(object.validatorDelegate) : "",
      validatorDelegateNft: isSet(object.validatorDelegateNft) ? String(object.validatorDelegateNft) : "",
      validatorRedelegate: isSet(object.validatorRedelegate) ? String(object.validatorRedelegate) : "",
      validatorRedelegateNft: isSet(object.validatorRedelegateNft) ? String(object.validatorRedelegateNft) : "",
      validatorUndelegate: isSet(object.validatorUndelegate) ? String(object.validatorUndelegate) : "",
      validatorUndelegateNft: isSet(object.validatorUndelegateNft) ? String(object.validatorUndelegateNft) : "",
      validatorSetOnline: isSet(object.validatorSetOnline) ? String(object.validatorSetOnline) : "",
      validatorSetOffline: isSet(object.validatorSetOffline) ? String(object.validatorSetOffline) : "",
      evmGasPrice: isSet(object.evmGasPrice) ? String(object.evmGasPrice) : "",
      oracle: isSet(object.oracle) ? String(object.oracle) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.txByteFee !== undefined && (obj.txByteFee = message.txByteFee);
    message.coinCreateTicker3 !== undefined && (obj.coinCreateTicker3 = message.coinCreateTicker3);
    message.coinCreateTicker4 !== undefined && (obj.coinCreateTicker4 = message.coinCreateTicker4);
    message.coinCreateTicker5 !== undefined && (obj.coinCreateTicker5 = message.coinCreateTicker5);
    message.coinCreateTicker6 !== undefined && (obj.coinCreateTicker6 = message.coinCreateTicker6);
    message.coinCreateTicker7 !== undefined && (obj.coinCreateTicker7 = message.coinCreateTicker7);
    message.coinCreate !== undefined && (obj.coinCreate = message.coinCreate);
    message.coinUpdate !== undefined && (obj.coinUpdate = message.coinUpdate);
    message.coinSend !== undefined && (obj.coinSend = message.coinSend);
    message.coinSendAdd !== undefined && (obj.coinSendAdd = message.coinSendAdd);
    message.coinBuy !== undefined && (obj.coinBuy = message.coinBuy);
    message.coinSell !== undefined && (obj.coinSell = message.coinSell);
    message.coinRedeemCheck !== undefined && (obj.coinRedeemCheck = message.coinRedeemCheck);
    message.coinBurn !== undefined && (obj.coinBurn = message.coinBurn);
    message.multisigCreateWallet !== undefined && (obj.multisigCreateWallet = message.multisigCreateWallet);
    message.multisigCreateTransaction !== undefined &&
      (obj.multisigCreateTransaction = message.multisigCreateTransaction);
    message.multisigSignTransaction !== undefined && (obj.multisigSignTransaction = message.multisigSignTransaction);
    message.nftMintToken !== undefined && (obj.nftMintToken = message.nftMintToken);
    message.nftUpdateToken !== undefined && (obj.nftUpdateToken = message.nftUpdateToken);
    message.nftUpdateReserve !== undefined && (obj.nftUpdateReserve = message.nftUpdateReserve);
    message.nftSendToken !== undefined && (obj.nftSendToken = message.nftSendToken);
    message.nftBurnToken !== undefined && (obj.nftBurnToken = message.nftBurnToken);
    message.swapActivateChain !== undefined && (obj.swapActivateChain = message.swapActivateChain);
    message.swapDeactivateChain !== undefined && (obj.swapDeactivateChain = message.swapDeactivateChain);
    message.swapInitialize !== undefined && (obj.swapInitialize = message.swapInitialize);
    message.swapRedeem !== undefined && (obj.swapRedeem = message.swapRedeem);
    message.validatorCreateValidator !== undefined && (obj.validatorCreateValidator = message.validatorCreateValidator);
    message.validatorEditValidator !== undefined && (obj.validatorEditValidator = message.validatorEditValidator);
    message.validatorDelegate !== undefined && (obj.validatorDelegate = message.validatorDelegate);
    message.validatorDelegateNft !== undefined && (obj.validatorDelegateNft = message.validatorDelegateNft);
    message.validatorRedelegate !== undefined && (obj.validatorRedelegate = message.validatorRedelegate);
    message.validatorRedelegateNft !== undefined && (obj.validatorRedelegateNft = message.validatorRedelegateNft);
    message.validatorUndelegate !== undefined && (obj.validatorUndelegate = message.validatorUndelegate);
    message.validatorUndelegateNft !== undefined && (obj.validatorUndelegateNft = message.validatorUndelegateNft);
    message.validatorSetOnline !== undefined && (obj.validatorSetOnline = message.validatorSetOnline);
    message.validatorSetOffline !== undefined && (obj.validatorSetOffline = message.validatorSetOffline);
    message.evmGasPrice !== undefined && (obj.evmGasPrice = message.evmGasPrice);
    message.oracle !== undefined && (obj.oracle = message.oracle);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.txByteFee = object.txByteFee ?? "";
    message.coinCreateTicker3 = object.coinCreateTicker3 ?? "";
    message.coinCreateTicker4 = object.coinCreateTicker4 ?? "";
    message.coinCreateTicker5 = object.coinCreateTicker5 ?? "";
    message.coinCreateTicker6 = object.coinCreateTicker6 ?? "";
    message.coinCreateTicker7 = object.coinCreateTicker7 ?? "";
    message.coinCreate = object.coinCreate ?? "";
    message.coinUpdate = object.coinUpdate ?? "";
    message.coinSend = object.coinSend ?? "";
    message.coinSendAdd = object.coinSendAdd ?? "";
    message.coinBuy = object.coinBuy ?? "";
    message.coinSell = object.coinSell ?? "";
    message.coinRedeemCheck = object.coinRedeemCheck ?? "";
    message.coinBurn = object.coinBurn ?? "";
    message.multisigCreateWallet = object.multisigCreateWallet ?? "";
    message.multisigCreateTransaction = object.multisigCreateTransaction ?? "";
    message.multisigSignTransaction = object.multisigSignTransaction ?? "";
    message.nftMintToken = object.nftMintToken ?? "";
    message.nftUpdateToken = object.nftUpdateToken ?? "";
    message.nftUpdateReserve = object.nftUpdateReserve ?? "";
    message.nftSendToken = object.nftSendToken ?? "";
    message.nftBurnToken = object.nftBurnToken ?? "";
    message.swapActivateChain = object.swapActivateChain ?? "";
    message.swapDeactivateChain = object.swapDeactivateChain ?? "";
    message.swapInitialize = object.swapInitialize ?? "";
    message.swapRedeem = object.swapRedeem ?? "";
    message.validatorCreateValidator = object.validatorCreateValidator ?? "";
    message.validatorEditValidator = object.validatorEditValidator ?? "";
    message.validatorDelegate = object.validatorDelegate ?? "";
    message.validatorDelegateNft = object.validatorDelegateNft ?? "";
    message.validatorRedelegate = object.validatorRedelegate ?? "";
    message.validatorRedelegateNft = object.validatorRedelegateNft ?? "";
    message.validatorUndelegate = object.validatorUndelegate ?? "";
    message.validatorUndelegateNft = object.validatorUndelegateNft ?? "";
    message.validatorSetOnline = object.validatorSetOnline ?? "";
    message.validatorSetOffline = object.validatorSetOffline ?? "";
    message.evmGasPrice = object.evmGasPrice ?? "";
    message.oracle = object.oracle ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
