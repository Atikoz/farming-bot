/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { CoinPrice } from "./fee";
import { Params } from "./params";

export const protobufPackage = "decimal.fee.v1";

/** QueryCoinPricesRequest is request type for the Query/CoinPrices RPC method. */
export interface QueryCoinPricesRequest {
}

/** QueryCoinPricesResponse is response type for the Query/CoinPrices RPC method. */
export interface QueryCoinPricesResponse {
  prices: CoinPrice[];
}

/** QueryCoinPriceRequest is request type for the Query/CoinPrice RPC method. */
export interface QueryCoinPriceRequest {
  /** denom defines the base currency (coin) denomination which is priced. */
  denom: string;
  /** quote defines the quote currency denomination in the pair (USD as the first example). */
  quote: string;
}

/** QueryCoinPriceResponse is response type for the Query/CoinPrice RPC method. */
export interface QueryCoinPriceResponse {
  price: CoinPrice | undefined;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params: Params | undefined;
}

function createBaseQueryCoinPricesRequest(): QueryCoinPricesRequest {
  return {};
}

export const QueryCoinPricesRequest = {
  encode(_: QueryCoinPricesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPricesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinPricesRequest();
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

  fromJSON(_: any): QueryCoinPricesRequest {
    return {};
  },

  toJSON(_: QueryCoinPricesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCoinPricesRequest>, I>>(_: I): QueryCoinPricesRequest {
    const message = createBaseQueryCoinPricesRequest();
    return message;
  },
};

function createBaseQueryCoinPricesResponse(): QueryCoinPricesResponse {
  return { prices: [] };
}

export const QueryCoinPricesResponse = {
  encode(message: QueryCoinPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.prices) {
      CoinPrice.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPricesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(CoinPrice.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinPricesResponse {
    return { prices: Array.isArray(object?.prices) ? object.prices.map((e: any) => CoinPrice.fromJSON(e)) : [] };
  },

  toJSON(message: QueryCoinPricesResponse): unknown {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map((e) => e ? CoinPrice.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCoinPricesResponse>, I>>(object: I): QueryCoinPricesResponse {
    const message = createBaseQueryCoinPricesResponse();
    message.prices = object.prices?.map((e) => CoinPrice.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCoinPriceRequest(): QueryCoinPriceRequest {
  return { denom: "", quote: "" };
}

export const QueryCoinPriceRequest = {
  encode(message: QueryCoinPriceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.quote !== "") {
      writer.uint32(18).string(message.quote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPriceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.quote = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinPriceRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
    };
  },

  toJSON(message: QueryCoinPriceRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.quote !== undefined && (obj.quote = message.quote);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCoinPriceRequest>, I>>(object: I): QueryCoinPriceRequest {
    const message = createBaseQueryCoinPriceRequest();
    message.denom = object.denom ?? "";
    message.quote = object.quote ?? "";
    return message;
  },
};

function createBaseQueryCoinPriceResponse(): QueryCoinPriceResponse {
  return { price: undefined };
}

export const QueryCoinPriceResponse = {
  encode(message: QueryCoinPriceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.price !== undefined) {
      CoinPrice.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPriceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCoinPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = CoinPrice.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCoinPriceResponse {
    return { price: isSet(object.price) ? CoinPrice.fromJSON(object.price) : undefined };
  },

  toJSON(message: QueryCoinPriceResponse): unknown {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? CoinPrice.toJSON(message.price) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCoinPriceResponse>, I>>(object: I): QueryCoinPriceResponse {
    const message = createBaseQueryCoinPriceResponse();
    message.price = (object.price !== undefined && object.price !== null)
      ? CoinPrice.fromPartial(object.price)
      : undefined;
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** CoinPrices queries all available coin prices. */
  CoinPrices(request: QueryCoinPricesRequest): Promise<QueryCoinPricesResponse>;
  /** CoinPrice queries the specified coin price. */
  CoinPrice(request: QueryCoinPriceRequest): Promise<QueryCoinPriceResponse>;
  /** Params queries the module params. */
  ModuleParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CoinPrices = this.CoinPrices.bind(this);
    this.CoinPrice = this.CoinPrice.bind(this);
    this.ModuleParams = this.ModuleParams.bind(this);
  }
  CoinPrices(request: QueryCoinPricesRequest): Promise<QueryCoinPricesResponse> {
    const data = QueryCoinPricesRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.fee.v1.Query", "CoinPrices", data);
    return promise.then((data) => QueryCoinPricesResponse.decode(new _m0.Reader(data)));
  }

  CoinPrice(request: QueryCoinPriceRequest): Promise<QueryCoinPriceResponse> {
    const data = QueryCoinPriceRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.fee.v1.Query", "CoinPrice", data);
    return promise.then((data) => QueryCoinPriceResponse.decode(new _m0.Reader(data)));
  }

  ModuleParams(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.fee.v1.Query", "ModuleParams", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
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
