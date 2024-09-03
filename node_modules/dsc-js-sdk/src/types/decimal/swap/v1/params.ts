/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /** locked_time_out defines somewhat we are only expecting to find out... TODO */
  lockedTimeOut: number;
  /** locked_time_in defines somewhat we are only expecting to find out... TODO */
  lockedTimeIn: number;
  /** service_address defines somewhat we are only expecting to find out... TODO */
  serviceAddress: string;
  /** checking_address defines somewhat we are only expecting to find out... TODO */
  checkingAddress: string;
}

function createBaseParams(): Params {
  return { lockedTimeOut: 0, lockedTimeIn: 0, serviceAddress: "", checkingAddress: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.lockedTimeOut !== 0) {
      writer.uint32(8).int64(message.lockedTimeOut);
    }
    if (message.lockedTimeIn !== 0) {
      writer.uint32(16).int64(message.lockedTimeIn);
    }
    if (message.serviceAddress !== "") {
      writer.uint32(26).string(message.serviceAddress);
    }
    if (message.checkingAddress !== "") {
      writer.uint32(34).string(message.checkingAddress);
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
          message.lockedTimeOut = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.lockedTimeIn = longToNumber(reader.int64() as Long);
          break;
        case 3:
          message.serviceAddress = reader.string();
          break;
        case 4:
          message.checkingAddress = reader.string();
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
      lockedTimeOut: isSet(object.lockedTimeOut) ? Number(object.lockedTimeOut) : 0,
      lockedTimeIn: isSet(object.lockedTimeIn) ? Number(object.lockedTimeIn) : 0,
      serviceAddress: isSet(object.serviceAddress) ? String(object.serviceAddress) : "",
      checkingAddress: isSet(object.checkingAddress) ? String(object.checkingAddress) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.lockedTimeOut !== undefined && (obj.lockedTimeOut = Math.round(message.lockedTimeOut));
    message.lockedTimeIn !== undefined && (obj.lockedTimeIn = Math.round(message.lockedTimeIn));
    message.serviceAddress !== undefined && (obj.serviceAddress = message.serviceAddress);
    message.checkingAddress !== undefined && (obj.checkingAddress = message.checkingAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.lockedTimeOut = object.lockedTimeOut ?? 0;
    message.lockedTimeIn = object.lockedTimeIn ?? 0;
    message.serviceAddress = object.serviceAddress ?? "";
    message.checkingAddress = object.checkingAddress ?? "";
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
