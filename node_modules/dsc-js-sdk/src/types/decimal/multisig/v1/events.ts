/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.multisig.v1";

/** EventCreateWallet defines event emitted when new multisig wallet is created. */
export interface EventCreateWallet {
  sender: string;
  wallet: string;
  owners: string[];
  weights: number[];
  threshold: number;
}

export interface EventCreateTransaction {
  sender: string;
  wallet: string;
  transaction: string;
}

export interface EventSignTransaction {
  sender: string;
  wallet: string;
  transaction: string;
  signerWeight: number;
  confirmations: number;
  confirmed: boolean;
}

function createBaseEventCreateWallet(): EventCreateWallet {
  return { sender: "", wallet: "", owners: [], weights: [], threshold: 0 };
}

export const EventCreateWallet = {
  encode(message: EventCreateWallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    for (const v of message.owners) {
      writer.uint32(26).string(v!);
    }
    writer.uint32(34).fork();
    for (const v of message.weights) {
      writer.uint32(v);
    }
    writer.ldelim();
    if (message.threshold !== 0) {
      writer.uint32(40).uint32(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateWallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateWallet();
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
          message.owners.push(reader.string());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weights.push(reader.uint32());
            }
          } else {
            message.weights.push(reader.uint32());
          }
          break;
        case 5:
          message.threshold = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateWallet {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      owners: Array.isArray(object?.owners) ? object.owners.map((e: any) => String(e)) : [],
      weights: Array.isArray(object?.weights) ? object.weights.map((e: any) => Number(e)) : [],
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
    };
  },

  toJSON(message: EventCreateWallet): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
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

  fromPartial<I extends Exact<DeepPartial<EventCreateWallet>, I>>(object: I): EventCreateWallet {
    const message = createBaseEventCreateWallet();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.owners = object.owners?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseEventCreateTransaction(): EventCreateTransaction {
  return { sender: "", wallet: "", transaction: "" };
}

export const EventCreateTransaction = {
  encode(message: EventCreateTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    if (message.transaction !== "") {
      writer.uint32(34).string(message.transaction);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wallet = reader.string();
          break;
        case 4:
          message.transaction = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateTransaction {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      transaction: isSet(object.transaction) ? String(object.transaction) : "",
    };
  },

  toJSON(message: EventCreateTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    message.transaction !== undefined && (obj.transaction = message.transaction);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateTransaction>, I>>(object: I): EventCreateTransaction {
    const message = createBaseEventCreateTransaction();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.transaction = object.transaction ?? "";
    return message;
  },
};

function createBaseEventSignTransaction(): EventSignTransaction {
  return { sender: "", wallet: "", transaction: "", signerWeight: 0, confirmations: 0, confirmed: false };
}

export const EventSignTransaction = {
  encode(message: EventSignTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    if (message.transaction !== "") {
      writer.uint32(26).string(message.transaction);
    }
    if (message.signerWeight !== 0) {
      writer.uint32(32).uint32(message.signerWeight);
    }
    if (message.confirmations !== 0) {
      writer.uint32(40).uint32(message.confirmations);
    }
    if (message.confirmed === true) {
      writer.uint32(48).bool(message.confirmed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSignTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSignTransaction();
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
          message.transaction = reader.string();
          break;
        case 4:
          message.signerWeight = reader.uint32();
          break;
        case 5:
          message.confirmations = reader.uint32();
          break;
        case 6:
          message.confirmed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSignTransaction {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      transaction: isSet(object.transaction) ? String(object.transaction) : "",
      signerWeight: isSet(object.signerWeight) ? Number(object.signerWeight) : 0,
      confirmations: isSet(object.confirmations) ? Number(object.confirmations) : 0,
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
    };
  },

  toJSON(message: EventSignTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    message.transaction !== undefined && (obj.transaction = message.transaction);
    message.signerWeight !== undefined && (obj.signerWeight = Math.round(message.signerWeight));
    message.confirmations !== undefined && (obj.confirmations = Math.round(message.confirmations));
    message.confirmed !== undefined && (obj.confirmed = message.confirmed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSignTransaction>, I>>(object: I): EventSignTransaction {
    const message = createBaseEventSignTransaction();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.transaction = object.transaction ?? "";
    message.signerWeight = object.signerWeight ?? 0;
    message.confirmations = object.confirmations ?? 0;
    message.confirmed = object.confirmed ?? false;
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
