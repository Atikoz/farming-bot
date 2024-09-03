/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { CoinPrice } from "./fee";

export const protobufPackage = "decimal.fee.v1";

/** EventUpdateCoinPrices defines event emitted when coin prices are updated. */
export interface EventUpdateCoinPrices {
  oracle: string;
  prices: CoinPrice[];
}

export interface EventPayCommission {
  payer: string;
  coins: Coin[];
}

function createBaseEventUpdateCoinPrices(): EventUpdateCoinPrices {
  return { oracle: "", prices: [] };
}

export const EventUpdateCoinPrices = {
  encode(message: EventUpdateCoinPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== "") {
      writer.uint32(10).string(message.oracle);
    }
    for (const v of message.prices) {
      CoinPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCoinPrices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCoinPrices();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.oracle = reader.string();
          break;
        case 2:
          message.prices.push(CoinPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateCoinPrices {
    return {
      oracle: isSet(object.oracle) ? String(object.oracle) : "",
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => CoinPrice.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventUpdateCoinPrices): unknown {
    const obj: any = {};
    message.oracle !== undefined && (obj.oracle = message.oracle);
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? CoinPrice.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateCoinPrices>, I>>(object: I): EventUpdateCoinPrices {
    const message = createBaseEventUpdateCoinPrices();
    message.oracle = object.oracle ?? "";
    message.prices = object.prices?.map((e) => CoinPrice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventPayCommission(): EventPayCommission {
  return { payer: "", coins: [] };
}

export const EventPayCommission = {
  encode(message: EventPayCommission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.payer !== "") {
      writer.uint32(10).string(message.payer);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPayCommission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPayCommission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.payer = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPayCommission {
    return {
      payer: isSet(object.payer) ? String(object.payer) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventPayCommission): unknown {
    const obj: any = {};
    message.payer !== undefined && (obj.payer = message.payer);
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPayCommission>, I>>(object: I): EventPayCommission {
    const message = createBaseEventPayCommission();
    message.payer = object.payer ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
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
