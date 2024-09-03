/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "decimal.validator.v1";

/** Params defines the parameters for the module. */
export interface Params {
  /** max_validators defines the maximum number of validators can be bounded at the same time. */
  maxValidators: number;
  /** max_delegations defines the maximum number of delegations per validator at be bounded at the same time. */
  maxDelegations: number;
  /** max_entries defines the max entries for single undelegation/redelegation (per pair/trio). */
  maxEntries: number;
  /** historical_entries defines the number of historical entries to persist. */
  historicalEntries: number;
  /** redelegation_time defines the time duration of redelegation a stake (moving to the other validator). */
  redelegationTime:
    | Duration
    | undefined;
  /** undelegation_time defines the time duration of undelegation a stake (unbonding from the validator). */
  undelegationTime: Duration | undefined;
}

function createBaseParams(): Params {
  return {
    maxValidators: 0,
    maxDelegations: 0,
    maxEntries: 0,
    historicalEntries: 0,
    redelegationTime: undefined,
    undelegationTime: undefined,
  };
}

export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.maxValidators !== 0) {
      writer.uint32(8).uint32(message.maxValidators);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(16).uint32(message.maxDelegations);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.redelegationTime !== undefined) {
      Duration.encode(message.redelegationTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.undelegationTime !== undefined) {
      Duration.encode(message.undelegationTime, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxValidators = reader.uint32();
          break;
        case 2:
          message.maxDelegations = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.redelegationTime = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.undelegationTime = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      maxValidators: isSet(object.maxValidators) ? Number(object.maxValidators) : 0,
      maxDelegations: isSet(object.maxDelegations) ? Number(object.maxDelegations) : 0,
      maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
      historicalEntries: isSet(object.historicalEntries) ? Number(object.historicalEntries) : 0,
      redelegationTime: isSet(object.redelegationTime) ? Duration.fromJSON(object.redelegationTime) : undefined,
      undelegationTime: isSet(object.undelegationTime) ? Duration.fromJSON(object.undelegationTime) : undefined,
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.maxValidators !== undefined && (obj.maxValidators = Math.round(message.maxValidators));
    message.maxDelegations !== undefined && (obj.maxDelegations = Math.round(message.maxDelegations));
    message.maxEntries !== undefined && (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== undefined && (obj.historicalEntries = Math.round(message.historicalEntries));
    message.redelegationTime !== undefined &&
      (obj.redelegationTime = message.redelegationTime ? Duration.toJSON(message.redelegationTime) : undefined);
    message.undelegationTime !== undefined &&
      (obj.undelegationTime = message.undelegationTime ? Duration.toJSON(message.undelegationTime) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.maxValidators = object.maxValidators ?? 0;
    message.maxDelegations = object.maxDelegations ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.redelegationTime = (object.redelegationTime !== undefined && object.redelegationTime !== null)
      ? Duration.fromPartial(object.redelegationTime as any)
      : undefined;
    message.undelegationTime = (object.undelegationTime !== undefined && object.undelegationTime !== null)
      ? Duration.fromPartial(object.undelegationTime as any)
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
