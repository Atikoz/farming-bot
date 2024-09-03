/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Record } from "./legacy";

export const protobufPackage = "decimal.legacy.v1";

/** QueryRecordsRequest is request type for the Query/Records RPC method. */
export interface QueryRecordsRequest {
  pagination: PageRequest | undefined;
}

/** QueryRecordsResponse is response type for the Query/Records RPC method. */
export interface QueryRecordsResponse {
  records: Record[];
  pagination: PageResponse | undefined;
}

/** QueryRecordRequest is request type for the Query/Record RPC method. */
export interface QueryRecordRequest {
  /** legacy_address defines legacy account address to found out the legacy record. */
  legacyAddress: string;
}

/** QueryRecordResponse is response type for the Query/Record RPC method. */
export interface QueryRecordResponse {
  /** record defines legacy record found by the request. */
  record: Record | undefined;
}

/** QueryCheckRequest is request type for the Query/Check RPC method. */
export interface QueryCheckRequest {
  /** pubkey defines account public key as the proof of legacy address authority. */
  pubkey: Uint8Array;
}

/** QueryCheckResponse is response type for the Query/Check RPC method. */
export interface QueryCheckResponse {
  /** record defines legacy record found by the request. */
  record: Record | undefined;
}

function createBaseQueryRecordsRequest(): QueryRecordsRequest {
  return { pagination: undefined };
}

export const QueryRecordsRequest = {
  encode(message: QueryRecordsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryRecordsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordsRequest>, I>>(object: I): QueryRecordsRequest {
    const message = createBaseQueryRecordsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRecordsResponse(): QueryRecordsResponse {
  return { records: [], pagination: undefined };
}

export const QueryRecordsResponse = {
  encode(message: QueryRecordsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.records) {
      Record.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.records.push(Record.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordsResponse {
    return {
      records: Array.isArray(object?.records) ? object.records.map((e: any) => Record.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryRecordsResponse): unknown {
    const obj: any = {};
    if (message.records) {
      obj.records = message.records.map((e) => e ? Record.toJSON(e) : undefined);
    } else {
      obj.records = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordsResponse>, I>>(object: I): QueryRecordsResponse {
    const message = createBaseQueryRecordsResponse();
    message.records = object.records?.map((e) => Record.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryRecordRequest(): QueryRecordRequest {
  return { legacyAddress: "" };
}

export const QueryRecordRequest = {
  encode(message: QueryRecordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyAddress !== "") {
      writer.uint32(10).string(message.legacyAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordRequest {
    return { legacyAddress: isSet(object.legacyAddress) ? String(object.legacyAddress) : "" };
  },

  toJSON(message: QueryRecordRequest): unknown {
    const obj: any = {};
    message.legacyAddress !== undefined && (obj.legacyAddress = message.legacyAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordRequest>, I>>(object: I): QueryRecordRequest {
    const message = createBaseQueryRecordRequest();
    message.legacyAddress = object.legacyAddress ?? "";
    return message;
  },
};

function createBaseQueryRecordResponse(): QueryRecordResponse {
  return { record: undefined };
}

export const QueryRecordResponse = {
  encode(message: QueryRecordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      Record.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryRecordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = Record.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryRecordResponse {
    return { record: isSet(object.record) ? Record.fromJSON(object.record) : undefined };
  },

  toJSON(message: QueryRecordResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? Record.toJSON(message.record) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryRecordResponse>, I>>(object: I): QueryRecordResponse {
    const message = createBaseQueryRecordResponse();
    message.record = (object.record !== undefined && object.record !== null)
      ? Record.fromPartial(object.record)
      : undefined;
    return message;
  },
};

function createBaseQueryCheckRequest(): QueryCheckRequest {
  return { pubkey: new Uint8Array() };
}

export const QueryCheckRequest = {
  encode(message: QueryCheckRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pubkey.length !== 0) {
      writer.uint32(10).bytes(message.pubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCheckRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckRequest {
    return { pubkey: isSet(object.pubkey) ? bytesFromBase64(object.pubkey) : new Uint8Array() };
  },

  toJSON(message: QueryCheckRequest): unknown {
    const obj: any = {};
    message.pubkey !== undefined &&
      (obj.pubkey = base64FromBytes(message.pubkey !== undefined ? message.pubkey : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCheckRequest>, I>>(object: I): QueryCheckRequest {
    const message = createBaseQueryCheckRequest();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
};

function createBaseQueryCheckResponse(): QueryCheckResponse {
  return { record: undefined };
}

export const QueryCheckResponse = {
  encode(message: QueryCheckResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.record !== undefined) {
      Record.encode(message.record, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCheckResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.record = Record.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCheckResponse {
    return { record: isSet(object.record) ? Record.fromJSON(object.record) : undefined };
  },

  toJSON(message: QueryCheckResponse): unknown {
    const obj: any = {};
    message.record !== undefined && (obj.record = message.record ? Record.toJSON(message.record) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCheckResponse>, I>>(object: I): QueryCheckResponse {
    const message = createBaseQueryCheckResponse();
    message.record = (object.record !== undefined && object.record !== null)
      ? Record.fromPartial(object.record)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Records queries all legacy records that should be returned to the actual owners. */
  Records(request: QueryRecordsRequest): Promise<QueryRecordsResponse>;
  /** Record queries complete set of different values that should be returned to the actual owner. */
  Record(request: QueryRecordRequest): Promise<QueryRecordResponse>;
  /** Check queries legacy record by specifiec public key. */
  Check(request: QueryCheckRequest): Promise<QueryCheckResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Records = this.Records.bind(this);
    this.Record = this.Record.bind(this);
    this.Check = this.Check.bind(this);
  }
  Records(request: QueryRecordsRequest): Promise<QueryRecordsResponse> {
    const data = QueryRecordsRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.legacy.v1.Query", "Records", data);
    return promise.then((data) => QueryRecordsResponse.decode(new _m0.Reader(data)));
  }

  Record(request: QueryRecordRequest): Promise<QueryRecordResponse> {
    const data = QueryRecordRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.legacy.v1.Query", "Record", data);
    return promise.then((data) => QueryRecordResponse.decode(new _m0.Reader(data)));
  }

  Check(request: QueryCheckRequest): Promise<QueryCheckResponse> {
    const data = QueryCheckRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.legacy.v1.Query", "Check", data);
    return promise.then((data) => QueryCheckResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
