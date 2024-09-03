/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

/** EventActivateChain defines event emitted when chain is activated for swaps. */
export interface EventActivateChain {
  sender: string;
  id: number;
  name: string;
}

/** EventDeactivateChain defines event emitted when chain is deactivated for swaps. */
export interface EventDeactivateChain {
  sender: string;
  id: number;
}

/** EventInitializeSwap defines event emitted when cross-chain swap is initialized. */
export interface EventInitializeSwap {
  sender: string;
  recipient: string;
  amount: string;
  tokenSymbol: string;
  transactionNumber: string;
  fromChain: number;
  destChain: number;
}

/** EventRedeemSwap defines event emitted when cross-chain swap is redeemed. */
export interface EventRedeemSwap {
  sender: string;
  from: string;
  recipient: string;
  amount: string;
  tokenSymbol: string;
  transactionNumber: string;
  fromChain: number;
  destChain: number;
  hashRedeem: string;
  v: string;
  r: string;
  s: string;
}

function createBaseEventActivateChain(): EventActivateChain {
  return { sender: "", id: 0, name: "" };
}

export const EventActivateChain = {
  encode(message: EventActivateChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventActivateChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventActivateChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventActivateChain {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: EventActivateChain): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventActivateChain>, I>>(object: I): EventActivateChain {
    const message = createBaseEventActivateChain();
    message.sender = object.sender ?? "";
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseEventDeactivateChain(): EventDeactivateChain {
  return { sender: "", id: 0 };
}

export const EventDeactivateChain = {
  encode(message: EventDeactivateChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDeactivateChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDeactivateChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeactivateChain {
    return { sender: isSet(object.sender) ? String(object.sender) : "", id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: EventDeactivateChain): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDeactivateChain>, I>>(object: I): EventDeactivateChain {
    const message = createBaseEventDeactivateChain();
    message.sender = object.sender ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseEventInitializeSwap(): EventInitializeSwap {
  return { sender: "", recipient: "", amount: "", tokenSymbol: "", transactionNumber: "", fromChain: 0, destChain: 0 };
}

export const EventInitializeSwap = {
  encode(message: EventInitializeSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(42).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(66).string(message.tokenSymbol);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(58).string(message.transactionNumber);
    }
    if (message.fromChain !== 0) {
      writer.uint32(24).uint32(message.fromChain);
    }
    if (message.destChain !== 0) {
      writer.uint32(32).uint32(message.destChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventInitializeSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventInitializeSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 5:
          message.recipient = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 8:
          message.tokenSymbol = reader.string();
          break;
        case 7:
          message.transactionNumber = reader.string();
          break;
        case 3:
          message.fromChain = reader.uint32();
          break;
        case 4:
          message.destChain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventInitializeSwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      transactionNumber: isSet(object.transactionNumber) ? String(object.transactionNumber) : "",
      fromChain: isSet(object.fromChain) ? Number(object.fromChain) : 0,
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
    };
  },

  toJSON(message: EventInitializeSwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    message.transactionNumber !== undefined && (obj.transactionNumber = message.transactionNumber);
    message.fromChain !== undefined && (obj.fromChain = Math.round(message.fromChain));
    message.destChain !== undefined && (obj.destChain = Math.round(message.destChain));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventInitializeSwap>, I>>(object: I): EventInitializeSwap {
    const message = createBaseEventInitializeSwap();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.fromChain = object.fromChain ?? 0;
    message.destChain = object.destChain ?? 0;
    return message;
  },
};

function createBaseEventRedeemSwap(): EventRedeemSwap {
  return {
    sender: "",
    from: "",
    recipient: "",
    amount: "",
    tokenSymbol: "",
    transactionNumber: "",
    fromChain: 0,
    destChain: 0,
    hashRedeem: "",
    v: "",
    r: "",
    s: "",
  };
}

export const EventRedeemSwap = {
  encode(message: EventRedeemSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(42).string(message.tokenSymbol);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(50).string(message.transactionNumber);
    }
    if (message.fromChain !== 0) {
      writer.uint32(56).uint32(message.fromChain);
    }
    if (message.destChain !== 0) {
      writer.uint32(64).uint32(message.destChain);
    }
    if (message.hashRedeem !== "") {
      writer.uint32(74).string(message.hashRedeem);
    }
    if (message.v !== "") {
      writer.uint32(82).string(message.v);
    }
    if (message.r !== "") {
      writer.uint32(90).string(message.r);
    }
    if (message.s !== "") {
      writer.uint32(98).string(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedeemSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedeemSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.tokenSymbol = reader.string();
          break;
        case 6:
          message.transactionNumber = reader.string();
          break;
        case 7:
          message.fromChain = reader.uint32();
          break;
        case 8:
          message.destChain = reader.uint32();
          break;
        case 9:
          message.hashRedeem = reader.string();
          break;
        case 10:
          message.v = reader.string();
          break;
        case 11:
          message.r = reader.string();
          break;
        case 12:
          message.s = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRedeemSwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      from: isSet(object.from) ? String(object.from) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      transactionNumber: isSet(object.transactionNumber) ? String(object.transactionNumber) : "",
      fromChain: isSet(object.fromChain) ? Number(object.fromChain) : 0,
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
      hashRedeem: isSet(object.hashRedeem) ? String(object.hashRedeem) : "",
      v: isSet(object.v) ? String(object.v) : "",
      r: isSet(object.r) ? String(object.r) : "",
      s: isSet(object.s) ? String(object.s) : "",
    };
  },

  toJSON(message: EventRedeemSwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.from !== undefined && (obj.from = message.from);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    message.transactionNumber !== undefined && (obj.transactionNumber = message.transactionNumber);
    message.fromChain !== undefined && (obj.fromChain = Math.round(message.fromChain));
    message.destChain !== undefined && (obj.destChain = Math.round(message.destChain));
    message.hashRedeem !== undefined && (obj.hashRedeem = message.hashRedeem);
    message.v !== undefined && (obj.v = message.v);
    message.r !== undefined && (obj.r = message.r);
    message.s !== undefined && (obj.s = message.s);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRedeemSwap>, I>>(object: I): EventRedeemSwap {
    const message = createBaseEventRedeemSwap();
    message.sender = object.sender ?? "";
    message.from = object.from ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.fromChain = object.fromChain ?? 0;
    message.destChain = object.destChain ?? 0;
    message.hashRedeem = object.hashRedeem ?? "";
    message.v = object.v ?? "";
    message.r = object.r ?? "";
    message.s = object.s ?? "";
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
