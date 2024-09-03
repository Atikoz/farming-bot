/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.legacy.v1";

export interface MsgReturnLegacy {
  sender: string;
  publicKey: Uint8Array;
}

export interface MsgReturnLegacyResponse {
}

function createBaseMsgReturnLegacy(): MsgReturnLegacy {
  return { sender: "", publicKey: new Uint8Array() };
}

export const MsgReturnLegacy = {
  encode(message: MsgReturnLegacy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.publicKey.length !== 0) {
      writer.uint32(18).bytes(message.publicKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReturnLegacy {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReturnLegacy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.publicKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgReturnLegacy {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      publicKey: isSet(object.publicKey) ? bytesFromBase64(object.publicKey) : new Uint8Array(),
    };
  },

  toJSON(message: MsgReturnLegacy): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.publicKey !== undefined &&
      (obj.publicKey = base64FromBytes(message.publicKey !== undefined ? message.publicKey : new Uint8Array()));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReturnLegacy>, I>>(object: I): MsgReturnLegacy {
    const message = createBaseMsgReturnLegacy();
    message.sender = object.sender ?? "";
    message.publicKey = object.publicKey ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgReturnLegacyResponse(): MsgReturnLegacyResponse {
  return {};
}

export const MsgReturnLegacyResponse = {
  encode(_: MsgReturnLegacyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgReturnLegacyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgReturnLegacyResponse();
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

  fromJSON(_: any): MsgReturnLegacyResponse {
    return {};
  },

  toJSON(_: MsgReturnLegacyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgReturnLegacyResponse>, I>>(_: I): MsgReturnLegacyResponse {
    const message = createBaseMsgReturnLegacyResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** ReturnLegacy defines message for return coins,nft,wallets by account public key */
  ReturnLegacy(request: MsgReturnLegacy): Promise<MsgReturnLegacyResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ReturnLegacy = this.ReturnLegacy.bind(this);
  }
  ReturnLegacy(request: MsgReturnLegacy): Promise<MsgReturnLegacyResponse> {
    const data = MsgReturnLegacy.encode(request).finish();
    const promise = this.rpc.request("decimal.legacy.v1.Msg", "ReturnLegacy", data);
    return promise.then((data) => MsgReturnLegacyResponse.decode(new _m0.Reader(data)));
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
