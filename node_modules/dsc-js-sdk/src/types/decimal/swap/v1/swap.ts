/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

/** Chain defines a chain. */
export interface Chain {
  /** id defines the chain number ID. */
  id: number;
  /** name defines the chain name. */
  name: string;
  /** active defines status of the chain. */
  active: boolean;
}

/** Swap defines a cross-chain swap. */
export interface Swap {
  /** hashed_secret defines the hash of secret used during cross-chain swap. */
  hashedSecret: string;
  /** from defines address used to initialize swap. */
  from: string;
  /** recipient defines address of the recipient swapped coins. */
  recipient: string;
  /** amount defines amount of coins the swap initialized. */
  amount: string;
  /** timestamp defines time moment when the swap was initialized. */
  timestamp: number;
  /** redeemed defines if the swap was redeemed. */
  redeemed: boolean;
  /** refunded defines if the swap was refunded. */
  refunded: boolean;
}

function createBaseChain(): Chain {
  return { id: 0, name: "", active: false };
}

export const Chain = {
  encode(message: Chain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.active === true) {
      writer.uint32(24).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Chain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.active = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chain {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: Chain): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.active !== undefined && (obj.active = message.active);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Chain>, I>>(object: I): Chain {
    const message = createBaseChain();
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

function createBaseSwap(): Swap {
  return { hashedSecret: "", from: "", recipient: "", amount: "", timestamp: 0, redeemed: false, refunded: false };
}

export const Swap = {
  encode(message: Swap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hashedSecret !== "") {
      writer.uint32(10).string(message.hashedSecret);
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
    if (message.timestamp !== 0) {
      writer.uint32(40).uint64(message.timestamp);
    }
    if (message.redeemed === true) {
      writer.uint32(48).bool(message.redeemed);
    }
    if (message.refunded === true) {
      writer.uint32(56).bool(message.refunded);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Swap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashedSecret = reader.string();
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
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.redeemed = reader.bool();
          break;
        case 7:
          message.refunded = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Swap {
    return {
      hashedSecret: isSet(object.hashedSecret) ? String(object.hashedSecret) : "",
      from: isSet(object.from) ? String(object.from) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      redeemed: isSet(object.redeemed) ? Boolean(object.redeemed) : false,
      refunded: isSet(object.refunded) ? Boolean(object.refunded) : false,
    };
  },

  toJSON(message: Swap): unknown {
    const obj: any = {};
    message.hashedSecret !== undefined && (obj.hashedSecret = message.hashedSecret);
    message.from !== undefined && (obj.from = message.from);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.redeemed !== undefined && (obj.redeemed = message.redeemed);
    message.refunded !== undefined && (obj.refunded = message.refunded);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Swap>, I>>(object: I): Swap {
    const message = createBaseSwap();
    message.hashedSecret = object.hashedSecret ?? "";
    message.from = object.from ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.timestamp = object.timestamp ?? 0;
    message.redeemed = object.redeemed ?? false;
    message.refunded = object.refunded ?? false;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
