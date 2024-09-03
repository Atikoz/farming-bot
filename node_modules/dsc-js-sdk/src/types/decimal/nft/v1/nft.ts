/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "decimal.nft.v1";

/** Collection defines NFT collection which is just a set of NFT tokens. */
export interface Collection {
  /** creator defines address of the NFT collection creator. */
  creator: string;
  /** denom defines the NFT collection name. */
  denom: string;
  /** supply defines total count of NFT tokens containing in the collection. */
  supply: number;
  /** tokens defines the list of NFT tokens containing in the NFT collection. */
  tokens: Token[];
}

/** CollectionCounter defines object containing counter of minted NFT tokens in the collection. */
export interface CollectionCounter {
  /** supply defines total count of minted NFT tokens in the collection. */
  supply: number;
}

/** Token defines NFT token. */
export interface Token {
  /** creator defines address of the NFT collection creator. */
  creator: string;
  /** denom defines the NFT collection name. */
  denom: string;
  /** id defines unique NFT token ID. */
  id: string;
  /** uri defines URI to the NFT token metadata. */
  uri: string;
  /** reserve defines default reserve of each minted NFT sub-token. */
  reserve:
    | Coin
    | undefined;
  /** allow_mint defines ability to mint additional NFT sub-tokens. */
  allowMint: boolean;
  /** minted defines total count of minted NFT sub-tokens. */
  minted: number;
  /** burnt defines total count of burnt NFT sub-tokens. */
  burnt: number;
  /** sub_tokens defines the list of NFT sub-tokens existing in the NFT token. */
  subTokens: SubToken[];
}

/** TokenCounter defines object containing counters of minted and burnt NFT sub-tokens. */
export interface TokenCounter {
  /** minted defines total count of minted NFT sub-tokens. */
  minted: number;
  /** burnt defines total count of burnt NFT sub-tokens. */
  burnt: number;
}

/** SubToken defines NFT sub-token. */
export interface SubToken {
  /** id defines NFT sub-token internal ID in the parent NFT token. */
  id: number;
  /** owner defines address of the current owner of the NFT sub-token. */
  owner: string;
  /** reserve defines reserve of the NFT sub-token. */
  reserve: Coin | undefined;
}

function createBaseCollection(): Collection {
  return { creator: "", denom: "", supply: 0, tokens: [] };
}

export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.supply !== 0) {
      writer.uint32(24).uint32(message.supply);
    }
    for (const v of message.tokens) {
      Token.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.supply = reader.uint32();
          break;
        case 4:
          message.tokens.push(Token.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      supply: isSet(object.supply) ? Number(object.supply) : 0,
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => Token.fromJSON(e)) : [],
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e ? Token.toJSON(e) : undefined);
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Collection>, I>>(object: I): Collection {
    const message = createBaseCollection();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.supply = object.supply ?? 0;
    message.tokens = object.tokens?.map((e) => Token.fromPartial(e)) || [];
    return message;
  },
};

function createBaseCollectionCounter(): CollectionCounter {
  return { supply: 0 };
}

export const CollectionCounter = {
  encode(message: CollectionCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.supply !== 0) {
      writer.uint32(8).uint32(message.supply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CollectionCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollectionCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollectionCounter {
    return { supply: isSet(object.supply) ? Number(object.supply) : 0 };
  },

  toJSON(message: CollectionCounter): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CollectionCounter>, I>>(object: I): CollectionCounter {
    const message = createBaseCollectionCounter();
    message.supply = object.supply ?? 0;
    return message;
  },
};

function createBaseToken(): Token {
  return {
    creator: "",
    denom: "",
    id: "",
    uri: "",
    reserve: undefined,
    allowMint: false,
    minted: 0,
    burnt: 0,
    subTokens: [],
  };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(34).string(message.uri);
    }
    if (message.reserve !== undefined) {
      Coin.encode(message.reserve, writer.uint32(42).fork()).ldelim();
    }
    if (message.allowMint === true) {
      writer.uint32(48).bool(message.allowMint);
    }
    if (message.minted !== 0) {
      writer.uint32(56).uint32(message.minted);
    }
    if (message.burnt !== 0) {
      writer.uint32(64).uint32(message.burnt);
    }
    for (const v of message.subTokens) {
      SubToken.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.id = reader.string();
          break;
        case 4:
          message.uri = reader.string();
          break;
        case 5:
          message.reserve = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.allowMint = reader.bool();
          break;
        case 7:
          message.minted = reader.uint32();
          break;
        case 8:
          message.burnt = reader.uint32();
          break;
        case 9:
          message.subTokens.push(SubToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Token {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      reserve: isSet(object.reserve) ? Coin.fromJSON(object.reserve) : undefined,
      allowMint: isSet(object.allowMint) ? Boolean(object.allowMint) : false,
      minted: isSet(object.minted) ? Number(object.minted) : 0,
      burnt: isSet(object.burnt) ? Number(object.burnt) : 0,
      subTokens: Array.isArray(object?.subTokens) ? object.subTokens.map((e: any) => SubToken.fromJSON(e)) : [],
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.id !== undefined && (obj.id = message.id);
    message.uri !== undefined && (obj.uri = message.uri);
    message.reserve !== undefined && (obj.reserve = message.reserve ? Coin.toJSON(message.reserve) : undefined);
    message.allowMint !== undefined && (obj.allowMint = message.allowMint);
    message.minted !== undefined && (obj.minted = Math.round(message.minted));
    message.burnt !== undefined && (obj.burnt = Math.round(message.burnt));
    if (message.subTokens) {
      obj.subTokens = message.subTokens.map((e) => e ? SubToken.toJSON(e) : undefined);
    } else {
      obj.subTokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.reserve = (object.reserve !== undefined && object.reserve !== null)
      ? Coin.fromPartial(object.reserve)
      : undefined;
    message.allowMint = object.allowMint ?? false;
    message.minted = object.minted ?? 0;
    message.burnt = object.burnt ?? 0;
    message.subTokens = object.subTokens?.map((e) => SubToken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseTokenCounter(): TokenCounter {
  return { minted: 0, burnt: 0 };
}

export const TokenCounter = {
  encode(message: TokenCounter, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.minted !== 0) {
      writer.uint32(8).uint32(message.minted);
    }
    if (message.burnt !== 0) {
      writer.uint32(16).uint32(message.burnt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenCounter {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTokenCounter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minted = reader.uint32();
          break;
        case 2:
          message.burnt = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenCounter {
    return {
      minted: isSet(object.minted) ? Number(object.minted) : 0,
      burnt: isSet(object.burnt) ? Number(object.burnt) : 0,
    };
  },

  toJSON(message: TokenCounter): unknown {
    const obj: any = {};
    message.minted !== undefined && (obj.minted = Math.round(message.minted));
    message.burnt !== undefined && (obj.burnt = Math.round(message.burnt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<TokenCounter>, I>>(object: I): TokenCounter {
    const message = createBaseTokenCounter();
    message.minted = object.minted ?? 0;
    message.burnt = object.burnt ?? 0;
    return message;
  },
};

function createBaseSubToken(): SubToken {
  return { id: 0, owner: "", reserve: undefined };
}

export const SubToken = {
  encode(message: SubToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.reserve !== undefined) {
      Coin.encode(message.reserve, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SubToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSubToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.reserve = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SubToken {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      owner: isSet(object.owner) ? String(object.owner) : "",
      reserve: isSet(object.reserve) ? Coin.fromJSON(object.reserve) : undefined,
    };
  },

  toJSON(message: SubToken): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.owner !== undefined && (obj.owner = message.owner);
    message.reserve !== undefined && (obj.reserve = message.reserve ? Coin.toJSON(message.reserve) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SubToken>, I>>(object: I): SubToken {
    const message = createBaseSubToken();
    message.id = object.id ?? 0;
    message.owner = object.owner ?? "";
    message.reserve = (object.reserve !== undefined && object.reserve !== null)
      ? Coin.fromPartial(object.reserve)
      : undefined;
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
