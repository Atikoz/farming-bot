/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

/** EventCreateCollection defines event emitted when new NFT collection is created. */
export interface EventCreateCollection {
  creator: string;
  denom: string;
  supply: number;
}

/** EventUpdateCollection defines event emitted when new NFT token is added to existing NFT collection. */
export interface EventUpdateCollection {
  creator: string;
  denom: string;
  supply: number;
}

/** EventCreateToken defines event emitted when new NFT token is created. */
export interface EventCreateToken {
  creator: string;
  denom: string;
  id: string;
  uri: string;
  allowMint: boolean;
  reserve: string;
  recipient: string;
  subTokenIds: number[];
}

/** EventMintToken defines event emitted when new NFT sub-tokens are created. */
export interface EventMintToken {
  creator: string;
  denom: string;
  id: string;
  reserve: string;
  recipient: string;
  subTokenIds: number[];
}

/** EventUpdateToken defines event emitted when existed NFT token is changed. */
export interface EventUpdateToken {
  sender: string;
  id: string;
  uri: string;
}

/** EventUpdateReserve defines event emitted when existed NFT sub-token reserve is changed. */
export interface EventUpdateReserve {
  sender: string;
  id: string;
  /** coin that defines new reserve for all updating NFT-subtokens */
  reserve: string;
  /** coin that was added in total per transaction for all NFT sub-tokens */
  refill: string;
  subTokenIds: number[];
}

/** EventSendToken defines event emitted when existed NFT sub-tokens are transferred. */
export interface EventSendToken {
  sender: string;
  id: string;
  recipient: string;
  subTokenIds: number[];
}

/** EventBurnToken defines event emitted when existed NFT sub-tokens are burnt. */
export interface EventBurnToken {
  sender: string;
  id: string;
  /** coin that was returned in total per transaction for all NFT sub-tokens */
  return: string;
  subTokenIds: number[];
}

function createBaseEventCreateCollection(): EventCreateCollection {
  return { creator: "", denom: "", supply: 0 };
}

export const EventCreateCollection = {
  encode(message: EventCreateCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.supply !== 0) {
      writer.uint32(24).uint32(message.supply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateCollection();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateCollection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      supply: isSet(object.supply) ? Number(object.supply) : 0,
    };
  },

  toJSON(message: EventCreateCollection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateCollection>, I>>(object: I): EventCreateCollection {
    const message = createBaseEventCreateCollection();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.supply = object.supply ?? 0;
    return message;
  },
};

function createBaseEventUpdateCollection(): EventUpdateCollection {
  return { creator: "", denom: "", supply: 0 };
}

export const EventUpdateCollection = {
  encode(message: EventUpdateCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.supply !== 0) {
      writer.uint32(24).uint32(message.supply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateCollection();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateCollection {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      supply: isSet(object.supply) ? Number(object.supply) : 0,
    };
  },

  toJSON(message: EventUpdateCollection): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateCollection>, I>>(object: I): EventUpdateCollection {
    const message = createBaseEventUpdateCollection();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.supply = object.supply ?? 0;
    return message;
  },
};

function createBaseEventCreateToken(): EventCreateToken {
  return { creator: "", denom: "", id: "", uri: "", allowMint: false, reserve: "", recipient: "", subTokenIds: [] };
}

export const EventCreateToken = {
  encode(message: EventCreateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.allowMint === true) {
      writer.uint32(40).bool(message.allowMint);
    }
    if (message.reserve !== "") {
      writer.uint32(50).string(message.reserve);
    }
    if (message.recipient !== "") {
      writer.uint32(58).string(message.recipient);
    }
    writer.uint32(66).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateToken();
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
          message.allowMint = reader.bool();
          break;
        case 6:
          message.reserve = reader.string();
          break;
        case 7:
          message.recipient = reader.string();
          break;
        case 8:
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

  fromJSON(object: any): EventCreateToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
      allowMint: isSet(object.allowMint) ? Boolean(object.allowMint) : false,
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: EventCreateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.id !== undefined && (obj.id = message.id);
    message.uri !== undefined && (obj.uri = message.uri);
    message.allowMint !== undefined && (obj.allowMint = message.allowMint);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateToken>, I>>(object: I): EventCreateToken {
    const message = createBaseEventCreateToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    message.allowMint = object.allowMint ?? false;
    message.reserve = object.reserve ?? "";
    message.recipient = object.recipient ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventMintToken(): EventMintToken {
  return { creator: "", denom: "", id: "", reserve: "", recipient: "", subTokenIds: [] };
}

export const EventMintToken = {
  encode(message: EventMintToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.id !== "") {
      writer.uint32(26).string(message.id);
    }
    if (message.reserve !== "") {
      writer.uint32(34).string(message.reserve);
    }
    if (message.recipient !== "") {
      writer.uint32(42).string(message.recipient);
    }
    writer.uint32(50).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventMintToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventMintToken();
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
          message.reserve = reader.string();
          break;
        case 5:
          message.recipient = reader.string();
          break;
        case 6:
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

  fromJSON(object: any): EventMintToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      id: isSet(object.id) ? String(object.id) : "",
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: EventMintToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.id !== undefined && (obj.id = message.id);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventMintToken>, I>>(object: I): EventMintToken {
    const message = createBaseEventMintToken();
    message.creator = object.creator ?? "";
    message.denom = object.denom ?? "";
    message.id = object.id ?? "";
    message.reserve = object.reserve ?? "";
    message.recipient = object.recipient ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventUpdateToken(): EventUpdateToken {
  return { sender: "", id: "", uri: "" };
}

export const EventUpdateToken = {
  encode(message: EventUpdateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.uri !== "") {
      writer.uint32(26).string(message.uri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.uri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      uri: isSet(object.uri) ? String(object.uri) : "",
    };
  },

  toJSON(message: EventUpdateToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.uri !== undefined && (obj.uri = message.uri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateToken>, I>>(object: I): EventUpdateToken {
    const message = createBaseEventUpdateToken();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.uri = object.uri ?? "";
    return message;
  },
};

function createBaseEventUpdateReserve(): EventUpdateReserve {
  return { sender: "", id: "", reserve: "", refill: "", subTokenIds: [] };
}

export const EventUpdateReserve = {
  encode(message: EventUpdateReserve, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.reserve !== "") {
      writer.uint32(26).string(message.reserve);
    }
    if (message.refill !== "") {
      writer.uint32(34).string(message.refill);
    }
    writer.uint32(42).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateReserve {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateReserve();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.reserve = reader.string();
          break;
        case 4:
          message.refill = reader.string();
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

  fromJSON(object: any): EventUpdateReserve {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      reserve: isSet(object.reserve) ? String(object.reserve) : "",
      refill: isSet(object.refill) ? String(object.refill) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: EventUpdateReserve): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.reserve !== undefined && (obj.reserve = message.reserve);
    message.refill !== undefined && (obj.refill = message.refill);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUpdateReserve>, I>>(object: I): EventUpdateReserve {
    const message = createBaseEventUpdateReserve();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.reserve = object.reserve ?? "";
    message.refill = object.refill ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventSendToken(): EventSendToken {
  return { sender: "", id: "", recipient: "", subTokenIds: [] };
}

export const EventSendToken = {
  encode(message: EventSendToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSendToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSendToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSendToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: EventSendToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSendToken>, I>>(object: I): EventSendToken {
    const message = createBaseEventSendToken();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.recipient = object.recipient ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseEventBurnToken(): EventBurnToken {
  return { sender: "", id: "", return: "", subTokenIds: [] };
}

export const EventBurnToken = {
  encode(message: EventBurnToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.return !== "") {
      writer.uint32(26).string(message.return);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBurnToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.return = reader.string();
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBurnToken {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      id: isSet(object.id) ? String(object.id) : "",
      return: isSet(object.return) ? String(object.return) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: EventBurnToken): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.id !== undefined && (obj.id = message.id);
    message.return !== undefined && (obj.return = message.return);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventBurnToken>, I>>(object: I): EventBurnToken {
    const message = createBaseEventBurnToken();
    message.sender = object.sender ?? "";
    message.id = object.id ?? "";
    message.return = object.return ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
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
