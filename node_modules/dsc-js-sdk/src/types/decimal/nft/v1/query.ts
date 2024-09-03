/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Collection, SubToken, Token } from "./nft";

export const protobufPackage = "decimal.nft.v1";

/** QueryCollectionsRequest is request type for the Query/Collections RPC method. */
export interface QueryCollectionsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryCollectionsResponse is response type for the Query/Collections RPC method.
 * NOTE: Response does not contain any info about NFT tokens.
 */
export interface QueryCollectionsResponse {
  /** collections contains all the queried collections. */
  collections: Collection[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryCollectionsByCreatorRequest is request type for the Query/CollectionsByCreator RPC method. */
export interface QueryCollectionsByCreatorRequest {
  /** creator defines the NFT collection creator address. */
  creator: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
}

/**
 * QueryCollectionsByCreatorResponse is response type for the Query/CollectionsByCreator RPC method.
 * NOTE: Response does not contain any info about NFT sub-tokens.
 */
export interface QueryCollectionsByCreatorResponse {
  /** collections contains all the queried collections. */
  collections: Collection[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryCollectionRequest is request type for the Query/Collection RPC method. */
export interface QueryCollectionRequest {
  /** creator defines the NFT collection creator address. */
  creator: string;
  /** denom defines NFT collection name. */
  denom: string;
}

/**
 * QueryCollectionResponse is response type for the Query/Collection RPC method.
 * NOTE: Response does not contain any info about NFT sub-tokens.
 */
export interface QueryCollectionResponse {
  /** collection contains the queried NFT collection. */
  collection: Collection | undefined;
}

/** QueryTokenRequest is request type for the Query/Token RPC method. */
export interface QueryTokenRequest {
  /** token_id defines NFT token ID. */
  tokenId: string;
}

/**
 * QueryTokenResponse is response type for the Query/Token RPC method.
 * NOTE: Response contains info about NFT collection and full info about the NFT token with containing NFT sub-tokens.
 */
export interface QueryTokenResponse {
  /** token contains the queried NFT token. */
  token: Token | undefined;
}

/** QuerySubTokenRequest is request type for the Query/SubToken RPC method. */
export interface QuerySubTokenRequest {
  /** token_id defines NFT token ID. */
  tokenId: string;
  /** sub_token_id defines NFT sub-token ID. */
  subTokenId: string;
}

/**
 * QuerySubTokenResponse is response type for the Query/SubToken RPC method.
 * NOTE: Response contains info about single NFT sub-token.
 */
export interface QuerySubTokenResponse {
  /** sub_token contains the queried NFT sub-token. */
  subToken: SubToken | undefined;
}

function createBaseQueryCollectionsRequest(): QueryCollectionsRequest {
  return { pagination: undefined };
}

export const QueryCollectionsRequest = {
  encode(message: QueryCollectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsRequest();
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

  fromJSON(object: any): QueryCollectionsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryCollectionsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionsRequest>, I>>(object: I): QueryCollectionsRequest {
    const message = createBaseQueryCollectionsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionsResponse(): QueryCollectionsResponse {
  return { collections: [], pagination: undefined };
}

export const QueryCollectionsResponse = {
  encode(message: QueryCollectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryCollectionsResponse {
    return {
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCollectionsResponse): unknown {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map((e) => e ? Collection.toJSON(e) : undefined);
    } else {
      obj.collections = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionsResponse>, I>>(object: I): QueryCollectionsResponse {
    const message = createBaseQueryCollectionsResponse();
    message.collections = object.collections?.map((e) => Collection.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionsByCreatorRequest(): QueryCollectionsByCreatorRequest {
  return { creator: "", pagination: undefined };
}

export const QueryCollectionsByCreatorRequest = {
  encode(message: QueryCollectionsByCreatorRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsByCreatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionsByCreatorRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCollectionsByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionsByCreatorRequest>, I>>(
    object: I,
  ): QueryCollectionsByCreatorRequest {
    const message = createBaseQueryCollectionsByCreatorRequest();
    message.creator = object.creator ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionsByCreatorResponse(): QueryCollectionsByCreatorResponse {
  return { collections: [], pagination: undefined };
}

export const QueryCollectionsByCreatorResponse = {
  encode(message: QueryCollectionsByCreatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.collections) {
      Collection.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsByCreatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionsByCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collections.push(Collection.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryCollectionsByCreatorResponse {
    return {
      collections: Array.isArray(object?.collections) ? object.collections.map((e: any) => Collection.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCollectionsByCreatorResponse): unknown {
    const obj: any = {};
    if (message.collections) {
      obj.collections = message.collections.map((e) => e ? Collection.toJSON(e) : undefined);
    } else {
      obj.collections = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionsByCreatorResponse>, I>>(
    object: I,
  ): QueryCollectionsByCreatorResponse {
    const message = createBaseQueryCollectionsByCreatorResponse();
    message.collections = object.collections?.map((e) => Collection.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return { creator: "", denom: "" };
}

export const QueryCollectionRequest = {
  encode(message: QueryCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionRequest>, I>>(object: I): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return { collection: undefined };
}

export const QueryCollectionResponse = {
  encode(message: QueryCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionResponse {
    return { collection: isSet(object.collection) ? Collection.fromJSON(object.collection) : undefined };
  },

  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionResponse>, I>>(object: I): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = (object.collection !== undefined && object.collection !== null)
      ? Collection.fromPartial(object.collection)
      : undefined;
    return message;
  },
};

function createBaseQueryTokenRequest(): QueryTokenRequest {
  return { tokenId: "" };
}

export const QueryTokenRequest = {
  encode(message: QueryTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenRequest {
    return { tokenId: isSet(object.tokenId) ? String(object.tokenId) : "" };
  },

  toJSON(message: QueryTokenRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenRequest>, I>>(object: I): QueryTokenRequest {
    const message = createBaseQueryTokenRequest();
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryTokenResponse(): QueryTokenResponse {
  return { token: undefined };
}

export const QueryTokenResponse = {
  encode(message: QueryTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.token = Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTokenResponse {
    return { token: isSet(object.token) ? Token.fromJSON(object.token) : undefined };
  },

  toJSON(message: QueryTokenResponse): unknown {
    const obj: any = {};
    message.token !== undefined && (obj.token = message.token ? Token.toJSON(message.token) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryTokenResponse>, I>>(object: I): QueryTokenResponse {
    const message = createBaseQueryTokenResponse();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseQuerySubTokenRequest(): QuerySubTokenRequest {
  return { tokenId: "", subTokenId: "" };
}

export const QuerySubTokenRequest = {
  encode(message: QuerySubTokenRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    if (message.subTokenId !== "") {
      writer.uint32(18).string(message.subTokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubTokenRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubTokenRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.subTokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubTokenRequest {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenId: isSet(object.subTokenId) ? String(object.subTokenId) : "",
    };
  },

  toJSON(message: QuerySubTokenRequest): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.subTokenId !== undefined && (obj.subTokenId = message.subTokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubTokenRequest>, I>>(object: I): QuerySubTokenRequest {
    const message = createBaseQuerySubTokenRequest();
    message.tokenId = object.tokenId ?? "";
    message.subTokenId = object.subTokenId ?? "";
    return message;
  },
};

function createBaseQuerySubTokenResponse(): QuerySubTokenResponse {
  return { subToken: undefined };
}

export const QuerySubTokenResponse = {
  encode(message: QuerySubTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subToken !== undefined) {
      SubToken.encode(message.subToken, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubTokenResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subToken = SubToken.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubTokenResponse {
    return { subToken: isSet(object.subToken) ? SubToken.fromJSON(object.subToken) : undefined };
  },

  toJSON(message: QuerySubTokenResponse): unknown {
    const obj: any = {};
    message.subToken !== undefined && (obj.subToken = message.subToken ? SubToken.toJSON(message.subToken) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubTokenResponse>, I>>(object: I): QuerySubTokenResponse {
    const message = createBaseQuerySubTokenResponse();
    message.subToken = (object.subToken !== undefined && object.subToken !== null)
      ? SubToken.fromPartial(object.subToken)
      : undefined;
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Collections queries all NFT collections.
   * Response does not contain any info about NFT tokens.
   */
  Collections(request: QueryCollectionsRequest): Promise<QueryCollectionsResponse>;
  /**
   * CollectionsByCreator queries all NFT collections created by specified creator address.
   * Response does not contain any info about NFT sub-tokens.
   */
  CollectionsByCreator(request: QueryCollectionsByCreatorRequest): Promise<QueryCollectionsByCreatorResponse>;
  /**
   * Collection queries the NFT collection by specified creator address and collection denom.
   * Response does not contain any info about NFT sub-tokens.
   */
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  /**
   * Token queries the NFT token by specified unique token ID.
   * Response contains full info about the NFT token with containing NFT sub-tokens.
   */
  Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
  /**
   * SubToken queries the NFT sub-token by specified unique token ID and sub-token ID.
   * Response contains full info about the NFT sub-tokens.
   */
  SubToken(request: QuerySubTokenRequest): Promise<QuerySubTokenResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Collections = this.Collections.bind(this);
    this.CollectionsByCreator = this.CollectionsByCreator.bind(this);
    this.Collection = this.Collection.bind(this);
    this.Token = this.Token.bind(this);
    this.SubToken = this.SubToken.bind(this);
  }
  Collections(request: QueryCollectionsRequest): Promise<QueryCollectionsResponse> {
    const data = QueryCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Query", "Collections", data);
    return promise.then((data) => QueryCollectionsResponse.decode(new _m0.Reader(data)));
  }

  CollectionsByCreator(request: QueryCollectionsByCreatorRequest): Promise<QueryCollectionsByCreatorResponse> {
    const data = QueryCollectionsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Query", "CollectionsByCreator", data);
    return promise.then((data) => QueryCollectionsByCreatorResponse.decode(new _m0.Reader(data)));
  }

  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Query", "Collection", data);
    return promise.then((data) => QueryCollectionResponse.decode(new _m0.Reader(data)));
  }

  Token(request: QueryTokenRequest): Promise<QueryTokenResponse> {
    const data = QueryTokenRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Query", "Token", data);
    return promise.then((data) => QueryTokenResponse.decode(new _m0.Reader(data)));
  }

  SubToken(request: QuerySubTokenRequest): Promise<QuerySubTokenResponse> {
    const data = QuerySubTokenRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Query", "SubToken", data);
    return promise.then((data) => QuerySubTokenResponse.decode(new _m0.Reader(data)));
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
