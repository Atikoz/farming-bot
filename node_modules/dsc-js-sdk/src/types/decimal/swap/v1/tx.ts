/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

/** MsgActivateChain defines a SDK message for activating chain to enable cross-chain swaps. */
export interface MsgActivateChain {
  sender: string;
  id: number;
  name: string;
}

/** MsgActivateChainResponse defines the Msg/ActivateChain response type. */
export interface MsgActivateChainResponse {
}

/** MsgMintToken defines a SDK message for deactivating chain to disable cross-chain swaps. */
export interface MsgDeactivateChain {
  sender: string;
  id: number;
}

/** MsgDeactivateChainResponse defines the Msg/DeactivateChain response type. */
export interface MsgDeactivateChainResponse {
}

/** MsgMintToken defines a SDK message for . */
export interface MsgInitializeSwap {
  sender: string;
  recipient: string;
  amount: string;
  tokenSymbol: string;
  transactionNumber: string;
  fromChain: number;
  destChain: number;
}

/** MsgInitializeSwapResponse defines the Msg/InitializeSwap response type. */
export interface MsgInitializeSwapResponse {
}

/** MsgMintToken defines a SDK message for . */
export interface MsgRedeemSwap {
  sender: string;
  from: string;
  recipient: string;
  amount: string;
  tokenSymbol: string;
  transactionNumber: string;
  fromChain: number;
  destChain: number;
  v: number;
  r: string;
  s: string;
}

/** MsgRedeemSwapResponse defines the Msg/RedeemSwap response type. */
export interface MsgRedeemSwapResponse {
}

function createBaseMsgActivateChain(): MsgActivateChain {
  return { sender: "", id: 0, name: "" };
}

export const MsgActivateChain = {
  encode(message: MsgActivateChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        case 3:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgActivateChain {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: MsgActivateChain): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgActivateChain>, I>>(object: I): MsgActivateChain {
    const message = createBaseMsgActivateChain();
    message.sender = object.sender ?? "";
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseMsgActivateChainResponse(): MsgActivateChainResponse {
  return {};
}

export const MsgActivateChainResponse = {
  encode(_: MsgActivateChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgActivateChainResponse();
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

  fromJSON(_: any): MsgActivateChainResponse {
    return {};
  },

  toJSON(_: MsgActivateChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgActivateChainResponse>, I>>(_: I): MsgActivateChainResponse {
    const message = createBaseMsgActivateChainResponse();
    return message;
  },
};

function createBaseMsgDeactivateChain(): MsgDeactivateChain {
  return { sender: "", id: 0 };
}

export const MsgDeactivateChain = {
  encode(message: MsgDeactivateChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeactivateChain {
    return { sender: isSet(object.sender) ? String(object.sender) : "", id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: MsgDeactivateChain): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateChain>, I>>(object: I): MsgDeactivateChain {
    const message = createBaseMsgDeactivateChain();
    message.sender = object.sender ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseMsgDeactivateChainResponse(): MsgDeactivateChainResponse {
  return {};
}

export const MsgDeactivateChainResponse = {
  encode(_: MsgDeactivateChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeactivateChainResponse();
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

  fromJSON(_: any): MsgDeactivateChainResponse {
    return {};
  },

  toJSON(_: MsgDeactivateChainResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDeactivateChainResponse>, I>>(_: I): MsgDeactivateChainResponse {
    const message = createBaseMsgDeactivateChainResponse();
    return message;
  },
};

function createBaseMsgInitializeSwap(): MsgInitializeSwap {
  return { sender: "", recipient: "", amount: "", tokenSymbol: "", transactionNumber: "", fromChain: 0, destChain: 0 };
}

export const MsgInitializeSwap = {
  encode(message: MsgInitializeSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(34).string(message.tokenSymbol);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(42).string(message.transactionNumber);
    }
    if (message.fromChain !== 0) {
      writer.uint32(48).uint32(message.fromChain);
    }
    if (message.destChain !== 0) {
      writer.uint32(56).uint32(message.destChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializeSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializeSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.tokenSymbol = reader.string();
          break;
        case 5:
          message.transactionNumber = reader.string();
          break;
        case 6:
          message.fromChain = reader.uint32();
          break;
        case 7:
          message.destChain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgInitializeSwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      transactionNumber: isSet(object.transactionNumber) ? String(object.transactionNumber) : "",
      fromChain: isSet(object.fromChain) ? Number(object.fromChain) : 0,
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
    };
  },

  toJSON(message: MsgInitializeSwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    message.transactionNumber !== undefined && (obj.transactionNumber = message.transactionNumber);
    message.fromChain !== undefined && (obj.fromChain = Math.round(message.fromChain));
    message.destChain !== undefined && (obj.destChain = Math.round(message.destChain));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitializeSwap>, I>>(object: I): MsgInitializeSwap {
    const message = createBaseMsgInitializeSwap();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.fromChain = object.fromChain ?? 0;
    message.destChain = object.destChain ?? 0;
    return message;
  },
};

function createBaseMsgInitializeSwapResponse(): MsgInitializeSwapResponse {
  return {};
}

export const MsgInitializeSwapResponse = {
  encode(_: MsgInitializeSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializeSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgInitializeSwapResponse();
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

  fromJSON(_: any): MsgInitializeSwapResponse {
    return {};
  },

  toJSON(_: MsgInitializeSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgInitializeSwapResponse>, I>>(_: I): MsgInitializeSwapResponse {
    const message = createBaseMsgInitializeSwapResponse();
    return message;
  },
};

function createBaseMsgRedeemSwap(): MsgRedeemSwap {
  return {
    sender: "",
    from: "",
    recipient: "",
    amount: "",
    tokenSymbol: "",
    transactionNumber: "",
    fromChain: 0,
    destChain: 0,
    v: 0,
    r: "",
    s: "",
  };
}

export const MsgRedeemSwap = {
  encode(message: MsgRedeemSwap, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(42).string(message.tokenSymbol);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(50).string(message.transactionNumber);
    }
    if (message.fromChain !== 0) {
      writer.uint32(56).uint32(message.fromChain);
    }
    if (message.destChain !== 0) {
      writer.uint32(64).uint32(message.destChain);
    }
    if (message.v !== 0) {
      writer.uint32(72).uint32(message.v);
    }
    if (message.r !== "") {
      writer.uint32(82).string(message.r);
    }
    if (message.s !== "") {
      writer.uint32(90).string(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemSwap {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemSwap();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.tokenSymbol = reader.string();
          break;
        case 6:
          message.transactionNumber = reader.string();
          break;
        case 7:
          message.fromChain = reader.uint32();
          break;
        case 8:
          message.destChain = reader.uint32();
          break;
        case 9:
          message.v = reader.uint32();
          break;
        case 10:
          message.r = reader.string();
          break;
        case 11:
          message.s = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemSwap {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      from: isSet(object.from) ? String(object.from) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      transactionNumber: isSet(object.transactionNumber) ? String(object.transactionNumber) : "",
      fromChain: isSet(object.fromChain) ? Number(object.fromChain) : 0,
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
      v: isSet(object.v) ? Number(object.v) : 0,
      r: isSet(object.r) ? String(object.r) : "",
      s: isSet(object.s) ? String(object.s) : "",
    };
  },

  toJSON(message: MsgRedeemSwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.from !== undefined && (obj.from = message.from);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    message.transactionNumber !== undefined && (obj.transactionNumber = message.transactionNumber);
    message.fromChain !== undefined && (obj.fromChain = Math.round(message.fromChain));
    message.destChain !== undefined && (obj.destChain = Math.round(message.destChain));
    message.v !== undefined && (obj.v = Math.round(message.v));
    message.r !== undefined && (obj.r = message.r);
    message.s !== undefined && (obj.s = message.s);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemSwap>, I>>(object: I): MsgRedeemSwap {
    const message = createBaseMsgRedeemSwap();
    message.sender = object.sender ?? "";
    message.from = object.from ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.fromChain = object.fromChain ?? 0;
    message.destChain = object.destChain ?? 0;
    message.v = object.v ?? 0;
    message.r = object.r ?? "";
    message.s = object.s ?? "";
    return message;
  },
};

function createBaseMsgRedeemSwapResponse(): MsgRedeemSwapResponse {
  return {};
}

export const MsgRedeemSwapResponse = {
  encode(_: MsgRedeemSwapResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemSwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedeemSwapResponse();
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

  fromJSON(_: any): MsgRedeemSwapResponse {
    return {};
  },

  toJSON(_: MsgRedeemSwapResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedeemSwapResponse>, I>>(_: I): MsgRedeemSwapResponse {
    const message = createBaseMsgRedeemSwapResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** ActivateChain defines message for activating chain to enable cross-chain swaps. */
  ActivateChain(request: MsgActivateChain): Promise<MsgActivateChainResponse>;
  /** DeactivateChain defines message for deactivating chain to disable cross-chain swaps. */
  DeactivateChain(request: MsgDeactivateChain): Promise<MsgDeactivateChainResponse>;
  /** InitializeSwap defines message for initializing the cross-chain swap. */
  InitializeSwap(request: MsgInitializeSwap): Promise<MsgInitializeSwapResponse>;
  /** RedeemSwap defines message for redeeming the cross-chain swap initialized before in sorce chain. */
  RedeemSwap(request: MsgRedeemSwap): Promise<MsgRedeemSwapResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ActivateChain = this.ActivateChain.bind(this);
    this.DeactivateChain = this.DeactivateChain.bind(this);
    this.InitializeSwap = this.InitializeSwap.bind(this);
    this.RedeemSwap = this.RedeemSwap.bind(this);
  }
  ActivateChain(request: MsgActivateChain): Promise<MsgActivateChainResponse> {
    const data = MsgActivateChain.encode(request).finish();
    const promise = this.rpc.request("decimal.swap.v1.Msg", "ActivateChain", data);
    return promise.then((data) => MsgActivateChainResponse.decode(new _m0.Reader(data)));
  }

  DeactivateChain(request: MsgDeactivateChain): Promise<MsgDeactivateChainResponse> {
    const data = MsgDeactivateChain.encode(request).finish();
    const promise = this.rpc.request("decimal.swap.v1.Msg", "DeactivateChain", data);
    return promise.then((data) => MsgDeactivateChainResponse.decode(new _m0.Reader(data)));
  }

  InitializeSwap(request: MsgInitializeSwap): Promise<MsgInitializeSwapResponse> {
    const data = MsgInitializeSwap.encode(request).finish();
    const promise = this.rpc.request("decimal.swap.v1.Msg", "InitializeSwap", data);
    return promise.then((data) => MsgInitializeSwapResponse.decode(new _m0.Reader(data)));
  }

  RedeemSwap(request: MsgRedeemSwap): Promise<MsgRedeemSwapResponse> {
    const data = MsgRedeemSwap.encode(request).finish();
    const promise = this.rpc.request("decimal.swap.v1.Msg", "RedeemSwap", data);
    return promise.then((data) => MsgRedeemSwapResponse.decode(new _m0.Reader(data)));
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
