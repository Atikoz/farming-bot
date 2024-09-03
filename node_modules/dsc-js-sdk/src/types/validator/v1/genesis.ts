/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Delegation, Redelegation, Undelegation, Validator } from "./validator";

export const protobufPackage = "decimal.validator.v1";

/** GenesisState defines the module's genesis state. */
export interface GenesisState {
  /** validators defines the validator set at genesis. */
  validators: Validator[];
  /** delegations defines the delegations bonded to validators at genesis. */
  delegations: Delegation[];
  /** undelegations defines the undelegations active at genesis. */
  undelegations: Undelegation[];
  /** redelegations defines the redelegations active at genesis. */
  redelegations: Redelegation[];
  /** last_validator_powers defines a historical list of the last-block's bonded validators. */
  lastValidatorPowers: LastValidatorPower[];
  /** last_total_power tracks the total amounts of validators power recorded during the previous end block. */
  lastTotalPower: number;
  /** params defines all the module's parameters. */
  params:
    | Params
    | undefined;
  /** exported is true if genesis was exported from the state. */
  exported: boolean;
}

/** LastValidatorPower defines an object containing a pair of validator address and it's voting power. */
export interface LastValidatorPower {
  /** address is the address of the validator. */
  address: string;
  /** power defines the voting power of the validator. */
  power: number;
}

function createBaseGenesisState(): GenesisState {
  return {
    validators: [],
    delegations: [],
    undelegations: [],
    redelegations: [],
    lastValidatorPowers: [],
    lastTotalPower: 0,
    params: undefined,
    exported: false,
  };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.delegations) {
      Delegation.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.undelegations) {
      Undelegation.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.redelegations) {
      Redelegation.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.lastValidatorPowers) {
      LastValidatorPower.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastTotalPower !== 0) {
      writer.uint32(48).int64(message.lastTotalPower);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(58).fork()).ldelim();
    }
    if (message.exported === true) {
      writer.uint32(64).bool(message.exported);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.delegations.push(Delegation.decode(reader, reader.uint32()));
          break;
        case 3:
          message.undelegations.push(Undelegation.decode(reader, reader.uint32()));
          break;
        case 4:
          message.redelegations.push(Redelegation.decode(reader, reader.uint32()));
          break;
        case 5:
          message.lastValidatorPowers.push(LastValidatorPower.decode(reader, reader.uint32()));
          break;
        case 6:
          message.lastTotalPower = longToNumber(reader.int64() as Long);
          break;
        case 7:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 8:
          message.exported = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      validators: Array.isArray(object?.validators) ? object.validators.map((e: any) => Validator.fromJSON(e)) : [],
      delegations: Array.isArray(object?.delegations) ? object.delegations.map((e: any) => Delegation.fromJSON(e)) : [],
      undelegations: Array.isArray(object?.undelegations)
        ? object.undelegations.map((e: any) => Undelegation.fromJSON(e))
        : [],
      redelegations: Array.isArray(object?.redelegations)
        ? object.redelegations.map((e: any) => Redelegation.fromJSON(e))
        : [],
      lastValidatorPowers: Array.isArray(object?.lastValidatorPowers)
        ? object.lastValidatorPowers.map((e: any) => LastValidatorPower.fromJSON(e))
        : [],
      lastTotalPower: isSet(object.lastTotalPower) ? Number(object.lastTotalPower) : 0,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      exported: isSet(object.exported) ? Boolean(object.exported) : false,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) => e ? Delegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    if (message.undelegations) {
      obj.undelegations = message.undelegations.map((e) => e ? Undelegation.toJSON(e) : undefined);
    } else {
      obj.undelegations = [];
    }
    if (message.redelegations) {
      obj.redelegations = message.redelegations.map((e) => e ? Redelegation.toJSON(e) : undefined);
    } else {
      obj.redelegations = [];
    }
    if (message.lastValidatorPowers) {
      obj.lastValidatorPowers = message.lastValidatorPowers.map((e) => e ? LastValidatorPower.toJSON(e) : undefined);
    } else {
      obj.lastValidatorPowers = [];
    }
    message.lastTotalPower !== undefined && (obj.lastTotalPower = Math.round(message.lastTotalPower));
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.exported !== undefined && (obj.exported = message.exported);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.validators = object.validators?.map((e) => Validator.fromPartial(e)) || [];
    message.delegations = object.delegations?.map((e) => Delegation.fromPartial(e)) || [];
    message.undelegations = object.undelegations?.map((e) => Undelegation.fromPartial(e)) || [];
    message.redelegations = object.redelegations?.map((e) => Redelegation.fromPartial(e)) || [];
    message.lastValidatorPowers = object.lastValidatorPowers?.map((e) => LastValidatorPower.fromPartial(e)) || [];
    message.lastTotalPower = object.lastTotalPower ?? 0;
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.exported = object.exported ?? false;
    return message;
  },
};

function createBaseLastValidatorPower(): LastValidatorPower {
  return { address: "", power: 0 };
}

export const LastValidatorPower = {
  encode(message: LastValidatorPower, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.power !== 0) {
      writer.uint32(16).int64(message.power);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastValidatorPower();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.power = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LastValidatorPower {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      power: isSet(object.power) ? Number(object.power) : 0,
    };
  },

  toJSON(message: LastValidatorPower): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.power !== undefined && (obj.power = Math.round(message.power));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LastValidatorPower>, I>>(object: I): LastValidatorPower {
    const message = createBaseLastValidatorPower();
    message.address = object.address ?? "";
    message.power = object.power ?? 0;
    return message;
  },
};

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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
