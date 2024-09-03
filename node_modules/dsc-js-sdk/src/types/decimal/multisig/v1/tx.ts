/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";

export const protobufPackage = "decimal.multisig.v1";

/** MsgCreateWallet defines a SDK message for creating multisig wallet. */
export interface MsgCreateWallet {
  sender: string;
  owners: string[];
  weights: number[];
  threshold: number;
}

/** MsgCreateWalletResponse defines the Msg/CreateWallet response type. */
export interface MsgCreateWalletResponse {
  wallet: string;
}

/**
 * //////
 * MsgCreateTransaction defines a SDK message for creating multisig transaction in existing wallet.
 */
export interface MsgCreateTransaction {
  sender: string;
  wallet: string;
  content: Any | undefined;
}

/** MsgCreateTransactionResponse defines the MsgCreateTransaction response type. */
export interface MsgCreateTransactionResponse {
  id: string;
}

/** MsgSignTransaction defines a SDK message for signing existing multisig transaction. */
export interface MsgSignTransaction {
  sender: string;
  id: string;
}

/** MsgSignTransactionResponse defines the Msg/SignTransaction response type. */
export interface MsgSignTransactionResponse {
}

function createBaseMsgCreateWallet(): MsgCreateWallet {
  return { sender: "", owners: [], weights: [], threshold: 0 };
}

export const MsgCreateWallet = {
  encode(message: MsgCreateWallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.weights) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.threshold !== 0) {
      writer.uint32(32).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.owners.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weights.push(reader.uint32());
            }
          } else {
            message.weights.push(reader.uint32());
          }
          break;
        case 4:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWallet {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => Number(e)) : [],
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
    };
  },

  toJSON(message: MsgCreateWallet): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map((e) => Math.round(e));
    } else {
      obj.weights = [];
    }
    message.threshold !== undefined && (obj.threshold = Math.round(message.threshold));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateWallet>, I>>(object: I): MsgCreateWallet {
    const message = createBaseMsgCreateWallet();
    message.sender = object.sender ?? "";
    message.owners = object.owners?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseMsgCreateWalletResponse(): MsgCreateWalletResponse {
  return { wallet: "" };
}

export const MsgCreateWalletResponse = {
  encode(message: MsgCreateWalletResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.wallet !== "") {
      writer.uint32(10).string(message.wallet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWalletResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWalletResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wallet = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWalletResponse {
    return { wallet: isSet(object.wallet) ? String(object.wallet) : "" };
  },

  toJSON(message: MsgCreateWalletResponse): unknown {
    const obj: any = {};
    message.wallet !== undefined && (obj.wallet = message.wallet);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateWalletResponse>, I>>(object: I): MsgCreateWalletResponse {
    const message = createBaseMsgCreateWalletResponse();
    message.wallet = object.wallet ?? "";
    return message;
  },
};

function createBaseMsgCreateTransaction(): MsgCreateTransaction {
  return { sender: "", wallet: "", content: undefined };
}

export const MsgCreateTransaction = {
  encode(message: MsgCreateTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wallet = reader.string();
          break;
        case 3:
          message.content = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransaction {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
    };
  },

  toJSON(message: MsgCreateTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    message.content !== undefined && (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTransaction>, I>>(object: I): MsgCreateTransaction {
    const message = createBaseMsgCreateTransaction();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.content = (object.content !== undefined && object.content !== null)
      ? Any.fromPartial(object.content)
      : undefined;
    return message;
  },
};

function createBaseMsgCreateTransactionResponse(): MsgCreateTransactionResponse {
  return { id: "" };
}

export const MsgCreateTransactionResponse = {
  encode(message: MsgCreateTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransactionResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateTransactionResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTransactionResponse>, I>>(object: I): MsgCreateTransactionResponse {
    const message = createBaseMsgCreateTransactionResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgSignTransaction(): MsgSignTransaction {
  return { sender: "", id: "" };
}

export const MsgSignTransaction = {
  encode(message: MsgSignTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignTransaction {
    return { sender: isSet(object.sender) ? String(object.sender) : "", id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgSignTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignTransaction>, I>>(object: I): MsgSignTransaction {
    const message = createBaseMsgSignTransaction();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgSignTransactionResponse(): MsgSignTransactionResponse {
  return {};
}

export const MsgSignTransactionResponse = {
  encode(_: MsgSignTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignTransactionResponse();
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

  fromJSON(_: any): MsgSignTransactionResponse {
    return {};
  },

  toJSON(_: MsgSignTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignTransactionResponse>, I>>(_: I): MsgSignTransactionResponse {
    const message = createBaseMsgSignTransactionResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** CreateWallet defines message for creating multisig wallet. */
  CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse>;
  /** CreateTransaction defines message for creating multisig transaction in existing wallet. */
  CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>;
  /** SignTransaction defines message for signing existing multisig transaction. */
  SignTransaction(request: MsgSignTransaction): Promise<MsgSignTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateWallet = this.CreateWallet.bind(this);
    this.CreateTransaction = this.CreateTransaction.bind(this);
    this.SignTransaction = this.SignTransaction.bind(this);
  }
  CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse> {
    const data = MsgCreateWallet.encode(request).finish();
    const promise = this.rpc.request("decimal.multisig.v1.Msg", "CreateWallet", data);
    return promise.then((data) => MsgCreateWalletResponse.decode(new _m0.Reader(data)));
  }

  CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse> {
    const data = MsgCreateTransaction.encode(request).finish();
    const promise = this.rpc.request("decimal.multisig.v1.Msg", "CreateTransaction", data);
    return promise.then((data) => MsgCreateTransactionResponse.decode(new _m0.Reader(data)));
  }

  SignTransaction(request: MsgSignTransaction): Promise<MsgSignTransactionResponse> {
    const data = MsgSignTransaction.encode(request).finish();
    const promise = this.rpc.request("decimal.multisig.v1.Msg", "SignTransaction", data);
    return promise.then((data) => MsgSignTransactionResponse.decode(new _m0.Reader(data)));
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
