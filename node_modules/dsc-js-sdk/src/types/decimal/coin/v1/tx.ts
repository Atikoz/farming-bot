/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "decimal.coin.v1";

export interface ExtOptionsWeb3Tx {
  typedDataChainID: number;
  feePayer: string;
  feePayerSig: Uint8Array;
}

function createBaseWeb3Tx (): ExtOptionsWeb3Tx {
  return { typedDataChainID: 0, feePayer: '', feePayerSig: new Uint8Array() }
}

function longToNumber (long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

export const Web3Tx = {
  encode (message: ExtOptionsWeb3Tx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.typedDataChainID !== 0) {
      writer.uint32(8).int64(message.typedDataChainID)
    }
    if (message.feePayer !== '') {
      writer.uint32(18).string(message.feePayer)
    }
    if (message.feePayerSig.length !== 0) {
      writer.uint32(26).bytes(message.feePayerSig)
    }
    return writer
  },

  decode (input: _m0.Reader | Uint8Array, length?: number): ExtOptionsWeb3Tx {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input)
    const end = length === undefined ? reader.len : reader.pos + length
    const message = createBaseWeb3Tx()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.typedDataChainID = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.feePayer = reader.string()
          break
        case 3:
          message.feePayerSig = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromPartial<I extends Exact<DeepPartial<ExtOptionsWeb3Tx>, I>> (object: I): ExtOptionsWeb3Tx {
    const message = createBaseWeb3Tx()
    message.typedDataChainID = object.typedDataChainID ?? 0
    message.feePayer = object.feePayer ?? ''
    message.feePayerSig = object.feePayerSig ?? new Uint8Array()
    return message
  }
}

/** MsgCreateCoin defines a SDK message for creating a new coin. */
export interface MsgCreateCoin {
  sender: string;
  denom: string;
  title: string;
  crr: number;
  initialVolume: string;
  initialReserve: string;
  limitVolume: string;
  identity: string;
  /**
   * min_volume defines optional minimal allowed supply for the coin.
   * NOTE: when value is zero it means that the coin does not support minimal supply limitations.
   */
  minVolume: string;
}

/** MsgCreateCoinResponse defines the Msg/CreateCoin response type. */
export interface MsgCreateCoinResponse {
}

/** MsgUpdateCoin defines a SDK message for modifying existing coin. */
export interface MsgUpdateCoin {
  sender: string;
  denom: string;
  limitVolume: string;
  identity: string;
  /**
   * min_volume defines optional minimal allowed supply for the coin.
   * NOTE: when value is zero it means that the coin does not support minimal supply limitations.
   */
  minVolume: string;
}

/** MsgUpdateCoinResponse defines the Msg/UpdateCoin response type. */
export interface MsgUpdateCoinResponse {
}

/** MsgSendCoin defines a SDK message for transferring a coin. */
export interface MsgSendCoin {
  sender: string;
  recipient: string;
  coin: Coin | undefined;
}

/** MsgSendCoinResponse defines the Msg/SendCoin response type. */
export interface MsgSendCoinResponse {
}

/** MultiSendEntry defines a single entry of MsgMultiSendCoin message. */
export interface MultiSendEntry {
  recipient: string;
  coin: Coin | undefined;
}

/** MsgMultiSendCoin defines a SDK message for multiple transferring coins as a batch. */
export interface MsgMultiSendCoin {
  sender: string;
  sends: MultiSendEntry[];
}

/** MsgMultiSendCoinResponse defines the Msg/MultiSendCoin response type. */
export interface MsgMultiSendCoinResponse {
}

/** MsgBuyCoin defines a SDK message for buying a coin. */
export interface MsgBuyCoin {
  sender: string;
  coinToBuy: Coin | undefined;
  maxCoinToSell: Coin | undefined;
}

/** MsgBuyCoinResponse defines the Msg/BuyCoin response type. */
export interface MsgBuyCoinResponse {
}

/** MsgSellCoin defines a SDK message for selling a coin. */
export interface MsgSellCoin {
  sender: string;
  coinToSell: Coin | undefined;
  minCoinToBuy: Coin | undefined;
}

/** MsgSellCoinResponse defines the Msg/SellCoin response type. */
export interface MsgSellCoinResponse {
}

/** MsgSellAllCoin defines a SDK message for selling a coin completely (to sell all having amount of a coin) */
export interface MsgSellAllCoin {
  sender: string;
  coinDenomToSell: string;
  minCoinToBuy: Coin | undefined;
}

/** MsgSellAllCoinResponse defines the Msg/SellAllCoin response type. */
export interface MsgSellAllCoinResponse {
}

/** MsgBurnCoin defines a SDK message for burning a coin. */
export interface MsgBurnCoin {
  sender: string;
  coin: Coin | undefined;
}

/** MsgBurnCoinResponse defines the Msg/BurnCoin response type. */
export interface MsgBurnCoinResponse {
}

/** MsgRedeemCheck defines a SDK message for redeeming a check. */
export interface MsgRedeemCheck {
  sender: string;
  check: string;
  proof: string;
}

/** MsgRedeemCheckResponse defines the Msg/RedeemCheck response type. */
export interface MsgRedeemCheckResponse {
}

function createBaseMsgCreateCoin(): MsgCreateCoin {
  return {
    sender: "",
    denom: "",
    title: "",
    crr: 0,
    initialVolume: "",
    initialReserve: "",
    limitVolume: "",
    identity: "",
    minVolume: "",
  };
}

export const MsgCreateCoin = {
  encode(message: MsgCreateCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.title !== "") {
      writer.uint32(26).string(message.title);
    }
    if (message.crr !== 0) {
      writer.uint32(32).uint32(message.crr);
    }
    if (message.initialVolume !== "") {
      writer.uint32(42).string(message.initialVolume);
    }
    if (message.initialReserve !== "") {
      writer.uint32(50).string(message.initialReserve);
    }
    if (message.limitVolume !== "") {
      writer.uint32(58).string(message.limitVolume);
    }
    if (message.identity !== "") {
      writer.uint32(66).string(message.identity);
    }
    if (message.minVolume !== "") {
      writer.uint32(74).string(message.minVolume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.title = reader.string();
          break;
        case 4:
          message.crr = reader.uint32();
          break;
        case 5:
          message.initialVolume = reader.string();
          break;
        case 6:
          message.initialReserve = reader.string();
          break;
        case 7:
          message.limitVolume = reader.string();
          break;
        case 8:
          message.identity = reader.string();
          break;
        case 9:
          message.minVolume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      title: isSet(object.title) ? String(object.title) : "",
      crr: isSet(object.crr) ? Number(object.crr) : 0,
      initialVolume: isSet(object.initialVolume) ? String(object.initialVolume) : "",
      initialReserve: isSet(object.initialReserve) ? String(object.initialReserve) : "",
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      minVolume: isSet(object.minVolume) ? String(object.minVolume) : "",
    };
  },

  toJSON(message: MsgCreateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.title !== undefined && (obj.title = message.title);
    message.crr !== undefined && (obj.crr = Math.round(message.crr));
    message.initialVolume !== undefined && (obj.initialVolume = message.initialVolume);
    message.initialReserve !== undefined && (obj.initialReserve = message.initialReserve);
    message.limitVolume !== undefined && (obj.limitVolume = message.limitVolume);
    message.identity !== undefined && (obj.identity = message.identity);
    message.minVolume !== undefined && (obj.minVolume = message.minVolume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCoin>, I>>(object: I): MsgCreateCoin {
    const message = createBaseMsgCreateCoin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.title = object.title ?? "";
    message.crr = object.crr ?? 0;
    message.initialVolume = object.initialVolume ?? "";
    message.initialReserve = object.initialReserve ?? "";
    message.limitVolume = object.limitVolume ?? "";
    message.identity = object.identity ?? "";
    message.minVolume = object.minVolume ?? "";
    return message;
  },
};

function createBaseMsgCreateCoinResponse(): MsgCreateCoinResponse {
  return {};
}

export const MsgCreateCoinResponse = {
  encode(_: MsgCreateCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCoinResponse {
    return {};
  },

  toJSON(_: MsgCreateCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCoinResponse>, I>>(_: I): MsgCreateCoinResponse {
    const message = createBaseMsgCreateCoinResponse();
    return message;
  },
};

function createBaseMsgUpdateCoin(): MsgUpdateCoin {
  return { sender: "", denom: "", limitVolume: "", identity: "", minVolume: "" };
}

export const MsgUpdateCoin = {
  encode(message: MsgUpdateCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.limitVolume !== "") {
      writer.uint32(26).string(message.limitVolume);
    }
    if (message.identity !== "") {
      writer.uint32(34).string(message.identity);
    }
    if (message.minVolume !== "") {
      writer.uint32(42).string(message.minVolume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.limitVolume = reader.string();
          break;
        case 4:
          message.identity = reader.string();
          break;
        case 5:
          message.minVolume = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      minVolume: isSet(object.minVolume) ? String(object.minVolume) : "",
    };
  },

  toJSON(message: MsgUpdateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.limitVolume !== undefined && (obj.limitVolume = message.limitVolume);
    message.identity !== undefined && (obj.identity = message.identity);
    message.minVolume !== undefined && (obj.minVolume = message.minVolume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCoin>, I>>(object: I): MsgUpdateCoin {
    const message = createBaseMsgUpdateCoin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.limitVolume = object.limitVolume ?? "";
    message.identity = object.identity ?? "";
    message.minVolume = object.minVolume ?? "";
    return message;
  },
};

function createBaseMsgUpdateCoinResponse(): MsgUpdateCoinResponse {
  return {};
}

export const MsgUpdateCoinResponse = {
  encode(_: MsgUpdateCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateCoinResponse {
    return {};
  },

  toJSON(_: MsgUpdateCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCoinResponse>, I>>(_: I): MsgUpdateCoinResponse {
    const message = createBaseMsgUpdateCoinResponse();
    return message;
  },
};

function createBaseMsgSendCoin(): MsgSendCoin {
  return { sender: "", recipient: "", coin: undefined };
}

export const MsgSendCoin = {
  encode(message: MsgSendCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgSendCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendCoin>, I>>(object: I): MsgSendCoin {
    const message = createBaseMsgSendCoin();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgSendCoinResponse(): MsgSendCoinResponse {
  return {};
}

export const MsgSendCoinResponse = {
  encode(_: MsgSendCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendCoinResponse {
    return {};
  },

  toJSON(_: MsgSendCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendCoinResponse>, I>>(_: I): MsgSendCoinResponse {
    const message = createBaseMsgSendCoinResponse();
    return message;
  },
};

function createBaseMultiSendEntry(): MultiSendEntry {
  return { recipient: "", coin: undefined };
}

export const MultiSendEntry = {
  encode(message: MultiSendEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.recipient !== "") {
      writer.uint32(10).string(message.recipient);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MultiSendEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMultiSendEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.recipient = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MultiSendEntry {
    return {
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MultiSendEntry): unknown {
    const obj: any = {};
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MultiSendEntry>, I>>(object: I): MultiSendEntry {
    const message = createBaseMultiSendEntry();
    message.recipient = object.recipient ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgMultiSendCoin(): MsgMultiSendCoin {
  return { sender: "", sends: [] };
}

export const MsgMultiSendCoin = {
  encode(message: MsgMultiSendCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.sends) {
      MultiSendEntry.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.sends.push(MultiSendEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiSendCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      sends: Array.isArray(object?.sends) ? object.sends.map((e: any) => MultiSendEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgMultiSendCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.sends) {
      obj.sends = message.sends.map((e) => e ? MultiSendEntry.toJSON(e) : undefined);
    } else {
      obj.sends = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiSendCoin>, I>>(object: I): MsgMultiSendCoin {
    const message = createBaseMsgMultiSendCoin();
    message.sender = object.sender ?? "";
    message.sends = object.sends?.map((e) => MultiSendEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgMultiSendCoinResponse(): MsgMultiSendCoinResponse {
  return {};
}

export const MsgMultiSendCoinResponse = {
  encode(_: MsgMultiSendCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMultiSendCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMultiSendCoinResponse {
    return {};
  },

  toJSON(_: MsgMultiSendCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMultiSendCoinResponse>, I>>(_: I): MsgMultiSendCoinResponse {
    const message = createBaseMsgMultiSendCoinResponse();
    return message;
  },
};

function createBaseMsgBuyCoin(): MsgBuyCoin {
  return { sender: "", coinToBuy: undefined, maxCoinToSell: undefined };
}

export const MsgBuyCoin = {
  encode(message: MsgBuyCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinToBuy !== undefined) {
      Coin.encode(message.coinToBuy, writer.uint32(18).fork()).ldelim();
    }
    if (message.maxCoinToSell !== undefined) {
      Coin.encode(message.maxCoinToSell, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinToBuy = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.maxCoinToSell = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinToBuy: isSet(object.coinToBuy) ? Coin.fromJSON(object.coinToBuy) : undefined,
      maxCoinToSell: isSet(object.maxCoinToSell) ? Coin.fromJSON(object.maxCoinToSell) : undefined,
    };
  },

  toJSON(message: MsgBuyCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinToBuy !== undefined && (obj.coinToBuy = message.coinToBuy ? Coin.toJSON(message.coinToBuy) : undefined);
    message.maxCoinToSell !== undefined &&
      (obj.maxCoinToSell = message.maxCoinToSell ? Coin.toJSON(message.maxCoinToSell) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCoin>, I>>(object: I): MsgBuyCoin {
    const message = createBaseMsgBuyCoin();
    message.sender = object.sender ?? "";
    message.coinToBuy = (object.coinToBuy !== undefined && object.coinToBuy !== null)
      ? Coin.fromPartial(object.coinToBuy)
      : undefined;
    message.maxCoinToSell = (object.maxCoinToSell !== undefined && object.maxCoinToSell !== null)
      ? Coin.fromPartial(object.maxCoinToSell)
      : undefined;
    return message;
  },
};

function createBaseMsgBuyCoinResponse(): MsgBuyCoinResponse {
  return {};
}

export const MsgBuyCoinResponse = {
  encode(_: MsgBuyCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBuyCoinResponse {
    return {};
  },

  toJSON(_: MsgBuyCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyCoinResponse>, I>>(_: I): MsgBuyCoinResponse {
    const message = createBaseMsgBuyCoinResponse();
    return message;
  },
};

function createBaseMsgSellCoin(): MsgSellCoin {
  return { sender: "", coinToSell: undefined, minCoinToBuy: undefined };
}

export const MsgSellCoin = {
  encode(message: MsgSellCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinToSell !== undefined) {
      Coin.encode(message.coinToSell, writer.uint32(18).fork()).ldelim();
    }
    if (message.minCoinToBuy !== undefined) {
      Coin.encode(message.minCoinToBuy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinToSell = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.minCoinToBuy = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinToSell: isSet(object.coinToSell) ? Coin.fromJSON(object.coinToSell) : undefined,
      minCoinToBuy: isSet(object.minCoinToBuy) ? Coin.fromJSON(object.minCoinToBuy) : undefined,
    };
  },

  toJSON(message: MsgSellCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinToSell !== undefined &&
      (obj.coinToSell = message.coinToSell ? Coin.toJSON(message.coinToSell) : undefined);
    message.minCoinToBuy !== undefined &&
      (obj.minCoinToBuy = message.minCoinToBuy ? Coin.toJSON(message.minCoinToBuy) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellCoin>, I>>(object: I): MsgSellCoin {
    const message = createBaseMsgSellCoin();
    message.sender = object.sender ?? "";
    message.coinToSell = (object.coinToSell !== undefined && object.coinToSell !== null)
      ? Coin.fromPartial(object.coinToSell)
      : undefined;
    message.minCoinToBuy = (object.minCoinToBuy !== undefined && object.minCoinToBuy !== null)
      ? Coin.fromPartial(object.minCoinToBuy)
      : undefined;
    return message;
  },
};

function createBaseMsgSellCoinResponse(): MsgSellCoinResponse {
  return {};
}

export const MsgSellCoinResponse = {
  encode(_: MsgSellCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSellCoinResponse {
    return {};
  },

  toJSON(_: MsgSellCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellCoinResponse>, I>>(_: I): MsgSellCoinResponse {
    const message = createBaseMsgSellCoinResponse();
    return message;
  },
};

function createBaseMsgSellAllCoin(): MsgSellAllCoin {
  return { sender: "", coinDenomToSell: "", minCoinToBuy: undefined };
}

export const MsgSellAllCoin = {
  encode(message: MsgSellAllCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinDenomToSell !== "") {
      writer.uint32(18).string(message.coinDenomToSell);
    }
    if (message.minCoinToBuy !== undefined) {
      Coin.encode(message.minCoinToBuy, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellAllCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellAllCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinDenomToSell = reader.string();
          break;
        case 3:
          message.minCoinToBuy = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellAllCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinDenomToSell: isSet(object.coinDenomToSell) ? String(object.coinDenomToSell) : "",
      minCoinToBuy: isSet(object.minCoinToBuy) ? Coin.fromJSON(object.minCoinToBuy) : undefined,
    };
  },

  toJSON(message: MsgSellAllCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinDenomToSell !== undefined && (obj.coinDenomToSell = message.coinDenomToSell);
    message.minCoinToBuy !== undefined &&
      (obj.minCoinToBuy = message.minCoinToBuy ? Coin.toJSON(message.minCoinToBuy) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellAllCoin>, I>>(object: I): MsgSellAllCoin {
    const message = createBaseMsgSellAllCoin();
    message.sender = object.sender ?? "";
    message.coinDenomToSell = object.coinDenomToSell ?? "";
    message.minCoinToBuy = (object.minCoinToBuy !== undefined && object.minCoinToBuy !== null)
      ? Coin.fromPartial(object.minCoinToBuy)
      : undefined;
    return message;
  },
};

function createBaseMsgSellAllCoinResponse(): MsgSellAllCoinResponse {
  return {};
}

export const MsgSellAllCoinResponse = {
  encode(_: MsgSellAllCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellAllCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellAllCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSellAllCoinResponse {
    return {};
  },

  toJSON(_: MsgSellAllCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellAllCoinResponse>, I>>(_: I): MsgSellAllCoinResponse {
    const message = createBaseMsgSellAllCoinResponse();
    return message;
  },
};

function createBaseMsgBurnCoin(): MsgBurnCoin {
  return { sender: "", coin: undefined };
}

export const MsgBurnCoin = {
  encode(message: MsgBurnCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgBurnCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnCoin>, I>>(object: I): MsgBurnCoin {
    const message = createBaseMsgBurnCoin();
    message.sender = object.sender ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgBurnCoinResponse(): MsgBurnCoinResponse {
  return {};
}

export const MsgBurnCoinResponse = {
  encode(_: MsgBurnCoinResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoinResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnCoinResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBurnCoinResponse {
    return {};
  },

  toJSON(_: MsgBurnCoinResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnCoinResponse>, I>>(_: I): MsgBurnCoinResponse {
    const message = createBaseMsgBurnCoinResponse();
    return message;
  },
};

function createBaseMsgRedeemCheck(): MsgRedeemCheck {
  return { sender: "", check: "", proof: "" };
}

export const MsgRedeemCheck = {
  encode(message: MsgRedeemCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.check !== "") {
      writer.uint32(18).string(message.check);
    }
    if (message.proof !== "") {
      writer.uint32(26).string(message.proof);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCheck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.check = reader.string();
          break;
        case 3:
          message.proof = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemCheck {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      check: isSet(object.check) ? String(object.check) : "",
      proof: isSet(object.proof) ? String(object.proof) : "",
    };
  },

  toJSON(message: MsgRedeemCheck): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.check !== undefined && (obj.check = message.check);
    message.proof !== undefined && (obj.proof = message.proof);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCheck>, I>>(object: I): MsgRedeemCheck {
    const message = createBaseMsgRedeemCheck();
    message.sender = object.sender ?? "";
    message.check = object.check ?? "";
    message.proof = object.proof ?? "";
    return message;
  },
};

function createBaseMsgRedeemCheckResponse(): MsgRedeemCheckResponse {
  return {};
}

export const MsgRedeemCheckResponse = {
  encode(_: MsgRedeemCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRedeemCheckResponse {
    return {};
  },

  toJSON(_: MsgRedeemCheckResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemCheckResponse>, I>>(_: I): MsgRedeemCheckResponse {
    const message = createBaseMsgRedeemCheckResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** CreateCoin defines message for creating a new coin. */
  CreateCoin(request: MsgCreateCoin): Promise<MsgCreateCoinResponse>;
  /** UpdateCoin defines message for modifying existing coin. */
  UpdateCoin(request: MsgUpdateCoin): Promise<MsgUpdateCoinResponse>;
  /** SendCoin defines message for transferring a coin. */
  SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse>;
  /** MultiSendCoin defines message for multiple transferring coins as a batch. */
  MultiSendCoin(request: MsgMultiSendCoin): Promise<MsgMultiSendCoinResponse>;
  /** BuyCoin defines message for buying a coin. */
  BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse>;
  /** SellCoin defines message for selling a coin. */
  SellCoin(request: MsgSellCoin): Promise<MsgSellCoinResponse>;
  /** SellAllCoin defines message for selling a coin completely (to sell all having amount of a coin). */
  SellAllCoin(request: MsgSellAllCoin): Promise<MsgSellAllCoinResponse>;
  /** BurnCoin defines message for burning a coin. */
  BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse>;
  /** RedeemCheck defines message for redeeming checks. */
  RedeemCheck(request: MsgRedeemCheck): Promise<MsgRedeemCheckResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateCoin = this.CreateCoin.bind(this);
    this.UpdateCoin = this.UpdateCoin.bind(this);
    this.SendCoin = this.SendCoin.bind(this);
    this.MultiSendCoin = this.MultiSendCoin.bind(this);
    this.BuyCoin = this.BuyCoin.bind(this);
    this.SellCoin = this.SellCoin.bind(this);
    this.SellAllCoin = this.SellAllCoin.bind(this);
    this.BurnCoin = this.BurnCoin.bind(this);
    this.RedeemCheck = this.RedeemCheck.bind(this);
  }
  CreateCoin(request: MsgCreateCoin): Promise<MsgCreateCoinResponse> {
    const data = MsgCreateCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "CreateCoin", data);
    return promise.then((data) => MsgCreateCoinResponse.decode(new _m0.Reader(data)));
  }

  UpdateCoin(request: MsgUpdateCoin): Promise<MsgUpdateCoinResponse> {
    const data = MsgUpdateCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "UpdateCoin", data);
    return promise.then((data) => MsgUpdateCoinResponse.decode(new _m0.Reader(data)));
  }

  SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse> {
    const data = MsgSendCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "SendCoin", data);
    return promise.then((data) => MsgSendCoinResponse.decode(new _m0.Reader(data)));
  }

  MultiSendCoin(request: MsgMultiSendCoin): Promise<MsgMultiSendCoinResponse> {
    const data = MsgMultiSendCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "MultiSendCoin", data);
    return promise.then((data) => MsgMultiSendCoinResponse.decode(new _m0.Reader(data)));
  }

  BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse> {
    const data = MsgBuyCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "BuyCoin", data);
    return promise.then((data) => MsgBuyCoinResponse.decode(new _m0.Reader(data)));
  }

  SellCoin(request: MsgSellCoin): Promise<MsgSellCoinResponse> {
    const data = MsgSellCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "SellCoin", data);
    return promise.then((data) => MsgSellCoinResponse.decode(new _m0.Reader(data)));
  }

  SellAllCoin(request: MsgSellAllCoin): Promise<MsgSellAllCoinResponse> {
    const data = MsgSellAllCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "SellAllCoin", data);
    return promise.then((data) => MsgSellAllCoinResponse.decode(new _m0.Reader(data)));
  }

  BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse> {
    const data = MsgBurnCoin.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "BurnCoin", data);
    return promise.then((data) => MsgBurnCoinResponse.decode(new _m0.Reader(data)));
  }

  RedeemCheck(request: MsgRedeemCheck): Promise<MsgRedeemCheckResponse> {
    const data = MsgRedeemCheck.encode(request).finish();
    const promise = this.rpc.request("decimal.coin.v1.Msg", "RedeemCheck", data);
    return promise.then((data) => MsgRedeemCheckResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
