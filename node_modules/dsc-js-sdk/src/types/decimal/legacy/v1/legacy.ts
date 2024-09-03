/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "decimal.legacy.v1";

/** Record defines the legacy record containing set of values that should be returned to the actual owner. */
export interface Record {
  /** legacy_address defines legacy address which is not valid anymore so cannot be used. */
  legacyAddress: string;
  /** coins defines complete list of tokens to be returned. */
  coins: Coin[];
  /** wallets defines complete list of multisig wallets to be returned. */
  wallets: string[];
  /** nfts defines list of token ids to be returned */
  nfts: string[];
}

function createBaseRecord(): Record {
  return { legacyAddress: "", coins: [], wallets: [], nfts: [] };
}

export const Record = {
  encode(message: Record, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyAddress !== "") {
      writer.uint32(10).string(message.legacyAddress);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.wallets) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.nfts) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Record {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyAddress = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.wallets.push(reader.string());
          break;
        case 4:
          message.nfts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Record {
    return {
      legacyAddress: isSet(object.legacyAddress) ? String(object.legacyAddress) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
      wallets: Array.isArray(object?.wallets) ? object.wallets.map((e: any) => String(e)) : [],
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Record): unknown {
    const obj: any = {};
    message.legacyAddress !== undefined && (obj.legacyAddress = message.legacyAddress);
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    if (message.wallets) {
      obj.wallets = message.wallets.map((e) => e);
    } else {
      obj.wallets = [];
    }
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Record>, I>>(object: I): Record {
    const message = createBaseRecord();
    message.legacyAddress = object.legacyAddress ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.wallets = object.wallets?.map((e) => e) || [];
    message.nfts = object.nfts?.map((e) => e) || [];
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
