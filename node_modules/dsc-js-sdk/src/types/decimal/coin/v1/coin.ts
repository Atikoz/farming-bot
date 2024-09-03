/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin as Coin1 } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "decimal.coin.v1";

/** Coin defines the coin. */
export interface Coin {
  /** denom defines the coin denomination. */
  denom: string;
  /** title defines the coin title. */
  title: string;
  /** creator defines the address of the account created the coin. */
  creator: string;
  /** crr defines the coin constant reserve ratio determining coin tokenomics. */
  crr: number;
  /** limit_volume defines maximum allowed supply for the coin. */
  limitVolume: string;
  /** identity is a string containing any other information related to the coin. */
  identity: string;
  /**
   * volume defines the coin supply.
   * NOTE: actual values are stored as CoinVR records in KVStore.
   */
  volume: string;
  /**
   * reserve defines the coin reserve in base coin.
   * NOTE: actual values are stored as CoinVR records in KVStore.
   */
  reserve: string;
  /**
   * min_volume defines optional minimal allowed supply for the coin.
   * NOTE: when value is zero it means that the coin does not support minimal supply limitations.
   */
  minVolume: string;
}

/** Check defines the redeemed check. */
export interface Check {
  /** chain_id defines the chain ID for which the check was issued. */
  chainId: string;
  /** coin defines the coin attached to the check. */
  coin:
    | Coin1
    | undefined;
  /** nonce defines nonce used for the check. */
  nonce: Uint8Array;
  /** due_block defines block number after which the check becomes expired. */
  dueBlock: number;
  /** lock defines specific data needed to ensure the check correctness. */
  lock: Uint8Array;
  /** v defines `v` value of the check signature. */
  v: string;
  /** r defines `r` value of the check signature. */
  r: string;
  /** s defines `s` value of the check signature. */
  s: string;
}

/** CoinVR defines object containing just volume and reserve of the coin. */
export interface CoinVR {
  /** volume defines the coin supply. */
  volume: string;
  /** reserve defines the coin reserve in base coin. */
  reserve: string;
}

function createBaseCoin(): Coin {
  return {
    denom: "",
    title: "",
    creator: "",
    crr: 0,
    limitVolume: "",
    identity: "",
    volume: "",
    reserve: "",
    minVolume: "",
  };
}

export const Coin = {
  encode(message: Coin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.title !== "") {
      writer.uint32(18).string(message.title);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.crr !== 0) {
      writer.uint32(32).uint32(message.crr);
    }
    if (message.limitVolume !== "") {
      writer.uint32(42).string(message.limitVolume);
    }
    if (message.identity !== "") {
      writer.uint32(50).string(message.identity);
    }
    if (message.volume !== "") {
      writer.uint32(58).string(message.volume);
    }
    if (message.reserve !== "") {
      writer.uint32(66).string(message.reserve);
    }
    if (message.minVolume !== "") {
      writer.uint32(74).string(message.minVolume);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.title = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.crr = reader.uint32();
          break;
        case 5:
          message.limitVolume = reader.string();
          break;
        case 6:
          message.identity = reader.string();
          break;
        case 7:
          message.volume = reader.string();
          break;
        case 8:
          message.reserve = reader.string();
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

  fromJSON(object: any): Coin {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      title: isSet(object.title) ? String(object.title) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      crr: isSet(object.crr) ? Number(object.crr) : 0,
      limitVolume: isSet(object.limitVolume) ? String(object.limitVolume) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      volume: isSet(object.volume) ? String(object.volume) : "",
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
      minVolume: isSet(object.minVolume) ? String(object.minVolume) : "",
    };
  },

  toJSON(message: Coin): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.title !== undefined && (obj.title = message.title);
    message.creator !== undefined && (obj.creator = message.creator);
    message.crr !== undefined && (obj.crr = Math.round(message.crr));
    message.limitVolume !== undefined && (obj.limitVolume = message.limitVolume);
    message.identity !== undefined && (obj.identity = message.identity);
    message.volume !== undefined && (obj.volume = message.volume);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    message.minVolume !== undefined && (obj.minVolume = message.minVolume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Coin>, I>>(object: I): Coin {
    const message = createBaseCoin();
    message.denom = object.denom ?? "";
    message.title = object.title ?? "";
    message.creator = object.creator ?? "";
    message.crr = object.crr ?? 0;
    message.limitVolume = object.limitVolume ?? "";
    message.identity = object.identity ?? "";
    message.volume = object.volume ?? "";
    message.reserve = object.reserve ?? "";
    message.minVolume = object.minVolume ?? "";
    return message;
  },
};

function createBaseCheck(): Check {
  return {
    chainId: "",
    coin: undefined,
    nonce: new Uint8Array(),
    dueBlock: 0,
    lock: new Uint8Array(),
    v: "",
    r: "",
    s: "",
  };
}

export const Check = {
  encode(message: Check, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.coin !== undefined) {
      Coin1.encode(message.coin, writer.uint32(18).fork()).ldelim();
    }
    if (message.nonce.length !== 0) {
      writer.uint32(26).bytes(message.nonce);
    }
    if (message.dueBlock !== 0) {
      writer.uint32(32).uint64(message.dueBlock);
    }
    if (message.lock.length !== 0) {
      writer.uint32(42).bytes(message.lock);
    }
    if (message.v !== "") {
      writer.uint32(50).string(message.v);
    }
    if (message.r !== "") {
      writer.uint32(58).string(message.r);
    }
    if (message.s !== "") {
      writer.uint32(66).string(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Check {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCheck();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.coin = Coin1.decode(reader, reader.uint32());
          break;
        case 3:
          message.nonce = reader.bytes();
          break;
        case 4:
          message.dueBlock = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.lock = reader.bytes();
          break;
        case 6:
          message.v = reader.string();
          break;
        case 7:
          message.r = reader.string();
          break;
        case 8:
          message.s = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Check {
    return {
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      coin: isSet(object.coin) ? Coin1.fromJSON(object.coin) : undefined,
      nonce: isSet(object.nonce) ? bytesFromBase64(object.nonce) : new Uint8Array(),
      dueBlock: isSet(object.dueBlock) ? Number(object.dueBlock) : 0,
      lock: isSet(object.lock) ? bytesFromBase64(object.lock) : new Uint8Array(),
      v: isSet(object.v) ? String(object.v) : "",
      r: isSet(object.r) ? String(object.r) : "",
      s: isSet(object.s) ? String(object.s) : "",
    };
  },

  toJSON(message: Check): unknown {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.coin !== undefined && (obj.coin = message.coin ? Coin1.toJSON(message.coin) : undefined);
    message.nonce !== undefined &&
      (obj.nonce = base64FromBytes(message.nonce !== undefined ? message.nonce : new Uint8Array()));
    message.dueBlock !== undefined && (obj.dueBlock = Math.round(message.dueBlock));
    message.lock !== undefined &&
      (obj.lock = base64FromBytes(message.lock !== undefined ? message.lock : new Uint8Array()));
    message.v !== undefined && (obj.v = message.v);
    message.r !== undefined && (obj.r = message.r);
    message.s !== undefined && (obj.s = message.s);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Check>, I>>(object: I): Check {
    const message = createBaseCheck();
    message.chainId = object.chainId ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin1.fromPartial(object.coin) : undefined;
    message.nonce = object.nonce ?? new Uint8Array();
    message.dueBlock = object.dueBlock ?? 0;
    message.lock = object.lock ?? new Uint8Array();
    message.v = object.v ?? "";
    message.r = object.r ?? "";
    message.s = object.s ?? "";
    return message;
  },
};

function createBaseCoinVR(): CoinVR {
  return { volume: "", reserve: "" };
}

export const CoinVR = {
  encode(message: CoinVR, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.volume !== "") {
      writer.uint32(10).string(message.volume);
    }
    if (message.reserve !== "") {
      writer.uint32(18).string(message.reserve);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CoinVR {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoinVR();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.volume = reader.string();
          break;
        case 2:
          message.reserve = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CoinVR {
    return {
      volume: isSet(object.volume) ? String(object.volume) : "",
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
    };
  },

  toJSON(message: CoinVR): unknown {
    const obj: any = {};
    message.volume !== undefined && (obj.volume = message.volume);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CoinVR>, I>>(object: I): CoinVR {
    const message = createBaseCoinVR();
    message.volume = object.volume ?? "";
    message.reserve = object.reserve ?? "";
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

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

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
