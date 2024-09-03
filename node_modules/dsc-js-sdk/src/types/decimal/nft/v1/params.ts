/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /** max_collection_size defines maximum allowed count of NFT tokens per a NFT collection. */
  maxCollectionSize: number;
  /** max_token_quantity defines maximum allowed count of NFT sub-tokens per a NFT token. */
  maxTokenQuantity: number;
  /** min_reserve_amount defines minimum allowed reserve for a NFT sub-token in the base coin. */
  minReserveAmount: string;
}

function createBaseParams(): Params {
  return { maxCollectionSize: 0, maxTokenQuantity: 0, minReserveAmount: "" };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxCollectionSize !== 0) {
      writer.uint32(8).uint32(message.maxCollectionSize);
    }
    if (message.maxTokenQuantity !== 0) {
      writer.uint32(16).uint32(message.maxTokenQuantity);
    }
    if (message.minReserveAmount !== "") {
      writer.uint32(26).string(message.minReserveAmount);
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
          message.maxCollectionSize = reader.uint32();
          break;
        case 2:
          message.maxTokenQuantity = reader.uint32();
          break;
        case 3:
          message.minReserveAmount = reader.string();
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
      maxCollectionSize: isSet(object.maxCollectionSize) ? Number(object.maxCollectionSize) : 0,
      maxTokenQuantity: isSet(object.maxTokenQuantity) ? Number(object.maxTokenQuantity) : 0,
      minReserveAmount: isSet(object.minReserveAmount) ? String(object.minReserveAmount) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxCollectionSize !== undefined && (obj.maxCollectionSize = Math.round(message.maxCollectionSize));
    message.maxTokenQuantity !== undefined && (obj.maxTokenQuantity = Math.round(message.maxTokenQuantity));
    message.minReserveAmount !== undefined && (obj.minReserveAmount = message.minReserveAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxCollectionSize = object.maxCollectionSize ?? 0;
    message.maxTokenQuantity = object.maxTokenQuantity ?? 0;
    message.minReserveAmount = object.minReserveAmount ?? "";
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
