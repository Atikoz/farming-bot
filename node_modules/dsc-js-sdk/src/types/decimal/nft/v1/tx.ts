/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "decimal.nft.v1";

/** MsgMintToken defines a SDK message for creating a new NFT token or mint additional NFT sub-tokens. */
export interface MsgMintToken {
  sender: string;
  denom: string;
  tokenId: string;
  tokenUri: string;
  allowMint: boolean;
  recipient: string;
  quantity: number;
  reserve: Coin | undefined;
}

/** MsgMintTokenResponse defines the Msg/MintToken response type. */
export interface MsgMintTokenResponse {
}

/** MsgUpdateToken defines a SDK message for modifying existing NFT token. */
export interface MsgUpdateToken {
  sender: string;
  tokenId: string;
  tokenUri: string;
}

/** MsgUpdateTokenResponse defines the Msg/UpdateToken response type. */
export interface MsgUpdateTokenResponse {
}

/** MsgUpdateReserve defines a SDK message for modifying existing NFT sub-token reserve. */
export interface MsgUpdateReserve {
  sender: string;
  tokenId: string;
  subTokenIds: number[];
  reserve: Coin | undefined;
}

/** MsgUpdateReserveResponse defines the Msg/UpdateReserve response type. */
export interface MsgUpdateReserveResponse {
}

/** MsgSendToken defines a SDK message for transferring NFT sub-token. */
export interface MsgSendToken {
  sender: string;
  tokenId: string;
  subTokenIds: number[];
  recipient: string;
}

/** MsgSendTokenResponse defines the Msg/SendToken response type. */
export interface MsgSendTokenResponse {
}

/** MsgBurnToken defines a SDK message for burning NFT sub-token. */
export interface MsgBurnToken {
  sender: string;
  tokenId: string;
  subTokenIds: number[];
}

/** MsgBurnTokenResponse defines the Msg/BurnToken response type. */
export interface MsgBurnTokenResponse {
}

function createBaseMsgMintToken(): MsgMintToken {
  return {
    sender: "",
    denom: "",
    tokenId: "",
    tokenUri: "",
    allowMint: false,
    recipient: "",
    quantity: 0,
    reserve: undefined,
  };
}

export const MsgMintToken = {
  encode(message: MsgMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    if (message.tokenUri !== "") {
      writer.uint32(34).string(message.tokenUri);
    }
    if (message.allowMint === true) {
      writer.uint32(40).bool(message.allowMint);
    }
    if (message.recipient !== "") {
      writer.uint32(50).string(message.recipient);
    }
    if (message.quantity !== 0) {
      writer.uint32(56).uint32(message.quantity);
    }
    if (message.reserve !== undefined) {
      Coin.encode(message.reserve, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.tokenId = reader.string();
          break;
        case 4:
          message.tokenUri = reader.string();
          break;
        case 5:
          message.allowMint = reader.bool();
          break;
        case 6:
          message.recipient = reader.string();
          break;
        case 7:
          message.quantity = reader.uint32();
          break;
        case 8:
          message.reserve = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      tokenUri: isSet(object.tokenUri) ? String(object.tokenUri) : "",
      allowMint: isSet(object.allowMint) ? Boolean(object.allowMint) : false,
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      quantity: isSet(object.quantity) ? Number(object.quantity) : 0,
      reserve: isSet(object.reserve) ? Coin.fromJSON(object.reserve) : undefined,
    };
  },

  toJSON(message: MsgMintToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    message.allowMint !== undefined && (obj.allowMint = message.allowMint);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.quantity !== undefined && (obj.quantity = Math.round(message.quantity));
    message.reserve !== undefined && (obj.reserve = message.reserve ? Coin.toJSON(message.reserve) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintToken>, I>>(object: I): MsgMintToken {
    const message = createBaseMsgMintToken();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.tokenId = object.tokenId ?? "";
    message.tokenUri = object.tokenUri ?? "";
    message.allowMint = object.allowMint ?? false;
    message.recipient = object.recipient ?? "";
    message.quantity = object.quantity ?? 0;
    message.reserve = (object.reserve !== undefined && object.reserve !== null)
      ? Coin.fromPartial(object.reserve)
      : undefined;
    return message;
  },
};

function createBaseMsgMintTokenResponse(): MsgMintTokenResponse {
  return {};
}

export const MsgMintTokenResponse = {
  encode(_: MsgMintTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintTokenResponse();
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

  fromJSON(_: any): MsgMintTokenResponse {
    return {};
  },

  toJSON(_: MsgMintTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintTokenResponse>, I>>(_: I): MsgMintTokenResponse {
    const message = createBaseMsgMintTokenResponse();
    return message;
  },
};

function createBaseMsgUpdateToken(): MsgUpdateToken {
  return { sender: "", tokenId: "", tokenUri: "" };
}

export const MsgUpdateToken = {
  encode(message: MsgUpdateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    if (message.tokenUri !== "") {
      writer.uint32(26).string(message.tokenUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          message.tokenUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      tokenUri: isSet(object.tokenUri) ? String(object.tokenUri) : "",
    };
  },

  toJSON(message: MsgUpdateToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    message.tokenUri !== undefined && (obj.tokenUri = message.tokenUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateToken>, I>>(object: I): MsgUpdateToken {
    const message = createBaseMsgUpdateToken();
    message.sender = object.sender ?? "";
    message.tokenId = object.tokenId ?? "";
    message.tokenUri = object.tokenUri ?? "";
    return message;
  },
};

function createBaseMsgUpdateTokenResponse(): MsgUpdateTokenResponse {
  return {};
}

export const MsgUpdateTokenResponse = {
  encode(_: MsgUpdateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTokenResponse();
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

  fromJSON(_: any): MsgUpdateTokenResponse {
    return {};
  },

  toJSON(_: MsgUpdateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTokenResponse>, I>>(_: I): MsgUpdateTokenResponse {
    const message = createBaseMsgUpdateTokenResponse();
    return message;
  },
};

function createBaseMsgUpdateReserve(): MsgUpdateReserve {
  return { sender: "", tokenId: "", subTokenIds: [], reserve: undefined };
}

export const MsgUpdateReserve = {
  encode(message: MsgUpdateReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.reserve !== undefined) {
      Coin.encode(message.reserve, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(reader.uint32());
            }
          } else {
            message.subTokenIds.push(reader.uint32());
          }
          break;
        case 5:
          message.reserve = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateReserve {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
      reserve: isSet(object.reserve) ? Coin.fromJSON(object.reserve) : undefined,
    };
  },

  toJSON(message: MsgUpdateReserve): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    message.reserve !== undefined && (obj.reserve = message.reserve ? Coin.toJSON(message.reserve) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateReserve>, I>>(object: I): MsgUpdateReserve {
    const message = createBaseMsgUpdateReserve();
    message.sender = object.sender ?? "";
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    message.reserve = (object.reserve !== undefined && object.reserve !== null)
      ? Coin.fromPartial(object.reserve)
      : undefined;
    return message;
  },
};

function createBaseMsgUpdateReserveResponse(): MsgUpdateReserveResponse {
  return {};
}

export const MsgUpdateReserveResponse = {
  encode(_: MsgUpdateReserveResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateReserveResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateReserveResponse();
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

  fromJSON(_: any): MsgUpdateReserveResponse {
    return {};
  },

  toJSON(_: MsgUpdateReserveResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateReserveResponse>, I>>(_: I): MsgUpdateReserveResponse {
    const message = createBaseMsgUpdateReserveResponse();
    return message;
  },
};

function createBaseMsgSendToken(): MsgSendToken {
  return { sender: "", tokenId: "", subTokenIds: [], recipient: "" };
}

export const MsgSendToken = {
  encode(message: MsgSendToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    writer.uint32(26).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(reader.uint32());
            }
          } else {
            message.subTokenIds.push(reader.uint32());
          }
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgSendToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToken>, I>>(object: I): MsgSendToken {
    const message = createBaseMsgSendToken();
    message.sender = object.sender ?? "";
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgSendTokenResponse(): MsgSendTokenResponse {
  return {};
}

export const MsgSendTokenResponse = {
  encode(_: MsgSendTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendTokenResponse();
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

  fromJSON(_: any): MsgSendTokenResponse {
    return {};
  },

  toJSON(_: MsgSendTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendTokenResponse>, I>>(_: I): MsgSendTokenResponse {
    const message = createBaseMsgSendTokenResponse();
    return message;
  },
};

function createBaseMsgBurnToken(): MsgBurnToken {
  return { sender: "", tokenId: "", subTokenIds: [] };
}

export const MsgBurnToken = {
  encode(message: MsgBurnToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    writer.uint32(26).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(reader.uint32());
            }
          } else {
            message.subTokenIds.push(reader.uint32());
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgBurnToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnToken>, I>>(object: I): MsgBurnToken {
    const message = createBaseMsgBurnToken();
    message.sender = object.sender ?? "";
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgBurnTokenResponse(): MsgBurnTokenResponse {
  return {};
}

export const MsgBurnTokenResponse = {
  encode(_: MsgBurnTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBurnTokenResponse();
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

  fromJSON(_: any): MsgBurnTokenResponse {
    return {};
  },

  toJSON(_: MsgBurnTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBurnTokenResponse>, I>>(_: I): MsgBurnTokenResponse {
    const message = createBaseMsgBurnTokenResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** MintToken defines message for creating new NFT token or minting additional NFT sub-tokens. */
  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
  /** UpdateToken defines message for NFT token modifying. */
  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
  /** UpdateReserve defines message for NFT token reserve updating. */
  UpdateReserve(request: MsgUpdateReserve): Promise<MsgUpdateReserveResponse>;
  /** SendToken defines message for transferring NFT sub-tokens. */
  SendToken(request: MsgSendToken): Promise<MsgSendTokenResponse>;
  /** BurnToken defines message for burning NFT sub-tokens. */
  BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.MintToken = this.MintToken.bind(this);
    this.UpdateToken = this.UpdateToken.bind(this);
    this.UpdateReserve = this.UpdateReserve.bind(this);
    this.SendToken = this.SendToken.bind(this);
    this.BurnToken = this.BurnToken.bind(this);
  }
  MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse> {
    const data = MsgMintToken.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "MintToken", data);
    return promise.then((data) => MsgMintTokenResponse.decode(new _m0.Reader(data)));
  }

  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> {
    const data = MsgUpdateToken.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "UpdateToken", data);
    return promise.then((data) => MsgUpdateTokenResponse.decode(new _m0.Reader(data)));
  }

  UpdateReserve(request: MsgUpdateReserve): Promise<MsgUpdateReserveResponse> {
    const data = MsgUpdateReserve.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "UpdateReserve", data);
    return promise.then((data) => MsgUpdateReserveResponse.decode(new _m0.Reader(data)));
  }

  SendToken(request: MsgSendToken): Promise<MsgSendTokenResponse> {
    const data = MsgSendToken.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "SendToken", data);
    return promise.then((data) => MsgSendTokenResponse.decode(new _m0.Reader(data)));
  }

  BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse> {
    const data = MsgBurnToken.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Msg", "BurnToken", data);
    return promise.then((data) => MsgBurnTokenResponse.decode(new _m0.Reader(data)));
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
