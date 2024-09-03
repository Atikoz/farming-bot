/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.coin.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /** base_denom defines denomination of the base coin. */
  baseDenom: string;
  /** base_title defines title of the base coin. */
  baseTitle: string;
  /** base_volume defines initial volume of the base coin. */
  baseVolume: string;
}

function createBaseParams(): Params {
  return { baseDenom: "", baseTitle: "", baseVolume: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.baseDenom !== "") {
      writer.uint32(10).string(message.baseDenom);
    }
    if (message.baseTitle !== "") {
      writer.uint32(18).string(message.baseTitle);
    }
    if (message.baseVolume !== "") {
      writer.uint32(26).string(message.baseVolume);
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
          message.baseDenom = reader.string();
          break;
        case 2:
          message.baseTitle = reader.string();
          break;
        case 3:
          message.baseVolume = reader.string();
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
      baseDenom: isSet(object.baseDenom) ? String(object.baseDenom) : "",
      baseTitle: isSet(object.baseTitle) ? String(object.baseTitle) : "",
      baseVolume: isSet(object.baseVolume) ? String(object.baseVolume) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.baseDenom !== undefined && (obj.baseDenom = message.baseDenom);
    message.baseTitle !== undefined && (obj.baseTitle = message.baseTitle);
    message.baseVolume !== undefined && (obj.baseVolume = message.baseVolume);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.baseDenom = object.baseDenom ?? "";
    message.baseTitle = object.baseTitle ?? "";
    message.baseVolume = object.baseVolume ?? "";
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
