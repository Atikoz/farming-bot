/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "decimal.legacy.v1";

/** EventReturnLegacyCoins defines event emitted when the coins are returned to the actual owner. */
export interface EventReturnLegacyCoins {
  legacyOwner: string;
  owner: string;
  coins: Coin[];
}

/** EventReturnLegacySubToken defines event emitted when the NFT sub-token is returned to the actual owner. */
export interface EventReturnLegacySubToken {
  legacyOwner: string;
  owner: string;
  denom: string;
  id: string;
  subTokenIds: number[];
}

/** EventReturnMultisigWallet defines event emitted when the multisig wallet is returned to the actual owner. */
export interface EventReturnMultisigWallet {
  legacyOwner: string;
  owner: string;
  wallet: string;
}

function createBaseEventReturnLegacyCoins(): EventReturnLegacyCoins {
  return { legacyOwner: "", owner: "", coins: [] };
}

export const EventReturnLegacyCoins = {
  encode(message: EventReturnLegacyCoins, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyOwner !== "") {
      writer.uint32(10).string(message.legacyOwner);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReturnLegacyCoins {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReturnLegacyCoins();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyOwner = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventReturnLegacyCoins {
    return {
      legacyOwner: isSet(object.legacyOwner) ? String(object.legacyOwner) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : [],
    };
  },

  toJSON(message: EventReturnLegacyCoins): unknown {
    const obj: any = {};
    message.legacyOwner !== undefined && (obj.legacyOwner = message.legacyOwner);
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventReturnLegacyCoins>, I>>(object: I): EventReturnLegacyCoins {
    const message = createBaseEventReturnLegacyCoins();
    message.legacyOwner = object.legacyOwner ?? "";
    message.owner = object.owner ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventReturnLegacySubToken(): EventReturnLegacySubToken {
  return { legacyOwner: "", owner: "", denom: "", id: "", subTokenIds: [] };
}

export const EventReturnLegacySubToken = {
  encode(message: EventReturnLegacySubToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyOwner !== "") {
      writer.uint32(10).string(message.legacyOwner);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.id !== "") {
      writer.uint32(34).string(message.id);
    }
    writer.uint32(42).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReturnLegacySubToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReturnLegacySubToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyOwner = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.id = reader.string();
          break;
        case 5:
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

  fromJSON(object: any): EventReturnLegacySubToken {
    return {
      legacyOwner: isSet(object.legacyOwner) ? String(object.legacyOwner) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      id: isSet(object.id) ? String(object.id) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: EventReturnLegacySubToken): unknown {
    const obj: any = {};
    message.legacyOwner !== undefined && (obj.legacyOwner = message.legacyOwner);
    message.owner !== undefined && (obj.owner = message.owner);
    message.denom !== undefined && (obj.denom = message.denom);
    message.id !== undefined && (obj.id = message.id);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventReturnLegacySubToken>, I>>(object: I): EventReturnLegacySubToken {
    const message = createBaseEventReturnLegacySubToken();
    message.legacyOwner = object.legacyOwner ?? "";
    message.owner = object.owner ?? "";
    message.denom = object.denom ?? "";
    message.id = object.id ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventReturnMultisigWallet(): EventReturnMultisigWallet {
  return { legacyOwner: "", owner: "", wallet: "" };
}

export const EventReturnMultisigWallet = {
  encode(message: EventReturnMultisigWallet, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.legacyOwner !== "") {
      writer.uint32(10).string(message.legacyOwner);
    }
    if (message.owner !== "") {
      writer.uint32(18).string(message.owner);
    }
    if (message.wallet !== "") {
      writer.uint32(26).string(message.wallet);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventReturnMultisigWallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventReturnMultisigWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.legacyOwner = reader.string();
          break;
        case 2:
          message.owner = reader.string();
          break;
        case 3:
          message.wallet = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventReturnMultisigWallet {
    return {
      legacyOwner: isSet(object.legacyOwner) ? String(object.legacyOwner) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
    };
  },

  toJSON(message: EventReturnMultisigWallet): unknown {
    const obj: any = {};
    message.legacyOwner !== undefined && (obj.legacyOwner = message.legacyOwner);
    message.owner !== undefined && (obj.owner = message.owner);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventReturnMultisigWallet>, I>>(object: I): EventReturnMultisigWallet {
    const message = createBaseEventReturnMultisigWallet();
    message.legacyOwner = object.legacyOwner ?? "";
    message.owner = object.owner ?? "";
    message.wallet = object.wallet ?? "";
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
