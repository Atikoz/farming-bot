/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.coin.v1";

/** EventCreateCoin defines event emitted when new coin is created. */
export interface EventCreateCoin {
  sender: string;
  denom: string;
  title: string;
  crr: number;
  initialVolume: string;
  initialReserve: string;
  limitVolume: string;
  identity: string;
  commissionCreateCoin: string;
}

/** EventUpdateCoin defines event emitted when existing coin is updated. */
export interface EventUpdateCoin {
  sender: string;
  denom: string;
  limitVolume: string;
  identity: string;
}

/** EventUpdateCoinVR defines event emitted when volume or reserve of existing coin is updated. */
export interface EventUpdateCoinVR {
  denom: string;
  volume: string;
  reserve: string;
}

/** EventSendCoin defines event emitted when a coin is transferred. */
export interface EventSendCoin {
  sender: string;
  recipient: string;
  coin: string;
}

/** EventBuySellCoin defines event emitted when a coin is traded. */
export interface EventBuySellCoin {
  sender: string;
  coinToBuy: string;
  coinToSell: string;
  amountInBaseCoin: string;
}

/** EventBurnCoin defines event emitted when a coin is burnt. */
export interface EventBurnCoin {
  sender: string;
  coin: string;
}

/** EventRedeemCheck defines event emitted when a check is redeemed. */
export interface EventRedeemCheck {
  sender: string;
  issuer: string;
  coin: string;
  nonce: string;
  dueBlock: string;
  commissionRedeemCheck: string;
}

function createBaseEventCreateCoin(): EventCreateCoin {
  return {
    sender: "",
    denom: "",
    title: "",
    crr: 0,
    initialVolume: "",
    initialReserve: "",
    limitVolume: "",
    identity: "",
    commissionCreateCoin: "",
  };
}

export const EventCreateCoin = {
  encode(message: EventCreateCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.commissionCreateCoin !== "") {
      writer.uint32(74).string(message.commissionCreateCoin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCoin();
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
          message.commissionCreateCoin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      title: isSet(object.title) ? String(object.title) : "",
      crr: isSet(object.crr) ? Number(object.crr) : 0,
      initialVolume: isSet(object.initialVolume) ? String(object.initialVolume) : "",
      initialReserve: isSet(object.initialReserve) ? String(object.initialReserve) : "",
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      commissionCreateCoin: isSet(object.commissionCreateCoin) ? String(object.commissionCreateCoin) : "",
    };
  },

  toJSON(message: EventCreateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.title !== undefined && (obj.title = message.title);
    message.crr !== undefined && (obj.crr = Math.round(message.crr));
    message.initialVolume !== undefined && (obj.initialVolume = message.initialVolume);
    message.initialReserve !== undefined && (obj.initialReserve = message.initialReserve);
    message.limitVolume !== undefined && (obj.limitVolume = message.limitVolume);
    message.identity !== undefined && (obj.identity = message.identity);
    message.commissionCreateCoin !== undefined && (obj.commissionCreateCoin = message.commissionCreateCoin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateCoin>, I>>(object: I): EventCreateCoin {
    const message = createBaseEventCreateCoin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.title = object.title ?? "";
    message.crr = object.crr ?? 0;
    message.initialVolume = object.initialVolume ?? "";
    message.initialReserve = object.initialReserve ?? "";
    message.limitVolume = object.limitVolume ?? "";
    message.identity = object.identity ?? "";
    message.commissionCreateCoin = object.commissionCreateCoin ?? "";
    return message;
  },
};

function createBaseEventUpdateCoin(): EventUpdateCoin {
  return { sender: "", denom: "", limitVolume: "", identity: "" };
}

export const EventUpdateCoin = {
  encode(message: EventUpdateCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCoin();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
    };
  },

  toJSON(message: EventUpdateCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.limitVolume !== undefined && (obj.limitVolume = message.limitVolume);
    message.identity !== undefined && (obj.identity = message.identity);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateCoin>, I>>(object: I): EventUpdateCoin {
    const message = createBaseEventUpdateCoin();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.limitVolume = object.limitVolume ?? "";
    message.identity = object.identity ?? "";
    return message;
  },
};

function createBaseEventUpdateCoinVR(): EventUpdateCoinVR {
  return { denom: "", volume: "", reserve: "" };
}

export const EventUpdateCoinVR = {
  encode(message: EventUpdateCoinVR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.volume !== "") {
      writer.uint32(18).string(message.volume);
    }
    if (message.reserve !== "") {
      writer.uint32(26).string(message.reserve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCoinVR {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCoinVR();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.volume = reader.string();
          break;
        case 3:
          message.reserve = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateCoinVR {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      volume: isSet(object.volume) ? String(object.volume) : "",
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
    };
  },

  toJSON(message: EventUpdateCoinVR): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.volume !== undefined && (obj.volume = message.volume);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateCoinVR>, I>>(object: I): EventUpdateCoinVR {
    const message = createBaseEventUpdateCoinVR();
    message.denom = object.denom ?? "";
    message.volume = object.volume ?? "";
    message.reserve = object.reserve ?? "";
    return message;
  },
};

function createBaseEventSendCoin(): EventSendCoin {
  return { sender: "", recipient: "", coin: "" };
}

export const EventSendCoin = {
  encode(message: EventSendCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.coin !== "") {
      writer.uint32(26).string(message.coin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSendCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendCoin();
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
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSendCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
    };
  },

  toJSON(message: EventSendCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSendCoin>, I>>(object: I): EventSendCoin {
    const message = createBaseEventSendCoin();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
};

function createBaseEventBuySellCoin(): EventBuySellCoin {
  return { sender: "", coinToBuy: "", coinToSell: "", amountInBaseCoin: "" };
}

export const EventBuySellCoin = {
  encode(message: EventBuySellCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coinToBuy !== "") {
      writer.uint32(18).string(message.coinToBuy);
    }
    if (message.coinToSell !== "") {
      writer.uint32(26).string(message.coinToSell);
    }
    if (message.amountInBaseCoin !== "") {
      writer.uint32(34).string(message.amountInBaseCoin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuySellCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuySellCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coinToBuy = reader.string();
          break;
        case 3:
          message.coinToSell = reader.string();
          break;
        case 4:
          message.amountInBaseCoin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBuySellCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coinToBuy: isSet(object.coinToBuy) ? String(object.coinToBuy) : "",
      coinToSell: isSet(object.coinToSell) ? String(object.coinToSell) : "",
      amountInBaseCoin: isSet(object.amountInBaseCoin) ? String(object.amountInBaseCoin) : "",
    };
  },

  toJSON(message: EventBuySellCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coinToBuy !== undefined && (obj.coinToBuy = message.coinToBuy);
    message.coinToSell !== undefined && (obj.coinToSell = message.coinToSell);
    message.amountInBaseCoin !== undefined && (obj.amountInBaseCoin = message.amountInBaseCoin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBuySellCoin>, I>>(object: I): EventBuySellCoin {
    const message = createBaseEventBuySellCoin();
    message.sender = object.sender ?? "";
    message.coinToBuy = object.coinToBuy ?? "";
    message.coinToSell = object.coinToSell ?? "";
    message.amountInBaseCoin = object.amountInBaseCoin ?? "";
    return message;
  },
};

function createBaseEventBurnCoin(): EventBurnCoin {
  return { sender: "", coin: "" };
}

export const EventBurnCoin = {
  encode(message: EventBurnCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coin !== "") {
      writer.uint32(18).string(message.coin);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.coin = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurnCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
    };
  },

  toJSON(message: EventBurnCoin): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.coin !== undefined && (obj.coin = message.coin);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnCoin>, I>>(object: I): EventBurnCoin {
    const message = createBaseEventBurnCoin();
    message.sender = object.sender ?? "";
    message.coin = object.coin ?? "";
    return message;
  },
};

function createBaseEventRedeemCheck(): EventRedeemCheck {
  return { sender: "", issuer: "", coin: "", nonce: "", dueBlock: "", commissionRedeemCheck: "" };
}

export const EventRedeemCheck = {
  encode(message: EventRedeemCheck, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    if (message.coin !== "") {
      writer.uint32(26).string(message.coin);
    }
    if (message.nonce !== "") {
      writer.uint32(34).string(message.nonce);
    }
    if (message.dueBlock !== "") {
      writer.uint32(42).string(message.dueBlock);
    }
    if (message.commissionRedeemCheck !== "") {
      writer.uint32(50).string(message.commissionRedeemCheck);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedeemCheck {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedeemCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.issuer = reader.string();
          break;
        case 3:
          message.coin = reader.string();
          break;
        case 4:
          message.nonce = reader.string();
          break;
        case 5:
          message.dueBlock = reader.string();
          break;
        case 6:
          message.commissionRedeemCheck = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRedeemCheck {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      coin: isSet(object.coin) ? String(object.coin) : "",
      nonce: isSet(object.nonce) ? String(object.nonce) : "",
      dueBlock: isSet(object.dueBlock) ? String(object.dueBlock) : "",
      commissionRedeemCheck: isSet(object.commissionRedeemCheck) ? String(object.commissionRedeemCheck) : "",
    };
  },

  toJSON(message: EventRedeemCheck): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.issuer !== undefined && (obj.issuer = message.issuer);
    message.coin !== undefined && (obj.coin = message.coin);
    message.nonce !== undefined && (obj.nonce = message.nonce);
    message.dueBlock !== undefined && (obj.dueBlock = message.dueBlock);
    message.commissionRedeemCheck !== undefined && (obj.commissionRedeemCheck = message.commissionRedeemCheck);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRedeemCheck>, I>>(object: I): EventRedeemCheck {
    const message = createBaseEventRedeemCheck();
    message.sender = object.sender ?? "";
    message.issuer = object.issuer ?? "";
    message.coin = object.coin ?? "";
    message.nonce = object.nonce ?? "";
    message.dueBlock = object.dueBlock ?? "";
    message.commissionRedeemCheck = object.commissionRedeemCheck ?? "";
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
