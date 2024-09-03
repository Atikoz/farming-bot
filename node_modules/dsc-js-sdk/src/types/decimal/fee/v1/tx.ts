/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { CoinPrice } from "./fee";

export const protobufPackage = "decimal.fee.v1";

/** MsgUpdateCoinPrices defines a SDK message for updating specified coin prices. */
export interface MsgUpdateCoinPrices {
  /** oracle defines address empowered to update coin prices. */
  oracle: string;
  /** prices defines the coin prices requested to update. */
  prices: CoinPrice[];
}

/** MsgUpdateCoinPricesResponse defines the Msg/UpdateCoinPrices response type. */
export interface MsgUpdateCoinPricesResponse {
}

function createBaseMsgUpdateCoinPrices(): MsgUpdateCoinPrices {
  return { oracle: "", prices: [] };
}

export const MsgUpdateCoinPrices = {
  encode(message: MsgUpdateCoinPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.oracle !== "") {
      writer.uint32(10).string(message.oracle);
    }
    for (const v of message.prices) {
      CoinPrice.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoinPrices {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCoinPrices();
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

  fromJSON(object: any): MsgUpdateCoinPrices {
    return {
      oracle: isSet(object.oracle) ? String(object.oracle) : "",
      prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => CoinPrice.fromJSON(e)) : [],
    };
  },

  toJSON(message: MsgUpdateCoinPrices): unknown {
    const obj: any = {};
    message.oracle !== undefined && (obj.oracle = message.oracle);
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? CoinPrice.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCoinPrices>, I>>(object: I): MsgUpdateCoinPrices {
    const message = createBaseMsgUpdateCoinPrices();
    message.oracle = object.oracle ?? "";
    message.prices = object.prices?.map((e) => CoinPrice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgUpdateCoinPricesResponse(): MsgUpdateCoinPricesResponse {
  return {};
}

export const MsgUpdateCoinPricesResponse = {
  encode(_: MsgUpdateCoinPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoinPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateCoinPricesResponse();
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

  fromJSON(_: any): MsgUpdateCoinPricesResponse {
    return {};
  },

  toJSON(_: MsgUpdateCoinPricesResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateCoinPricesResponse>, I>>(_: I): MsgUpdateCoinPricesResponse {
    const message = createBaseMsgUpdateCoinPricesResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** UpdateCoinPrices defines message for updating a coin prices. */
  UpdateCoinPrices(request: MsgUpdateCoinPrices): Promise<MsgUpdateCoinPricesResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.UpdateCoinPrices = this.UpdateCoinPrices.bind(this);
  }
  UpdateCoinPrices(request: MsgUpdateCoinPrices): Promise<MsgUpdateCoinPricesResponse> {
    const data = MsgUpdateCoinPrices.encode(request).finish();
    const promise = this.rpc.request("decimal.fee.v1.Msg", "UpdateCoinPrices", data);
    return promise.then((data) => MsgUpdateCoinPricesResponse.decode(new _m0.Reader(data)));
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
