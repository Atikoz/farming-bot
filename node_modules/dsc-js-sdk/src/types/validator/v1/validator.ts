/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Header } from "../../tendermint/types/types";

export const protobufPackage = "decimal.validator.v1";

/** BondStatus is the status of a validator. */
export enum BondStatus {
  /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
  BOND_STATUS_UNSPECIFIED = 0,
  /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
  BOND_STATUS_UNBONDED = 1,
  /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
  BOND_STATUS_UNBONDING = 2,
  /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
  BOND_STATUS_BONDED = 3,
  UNRECOGNIZED = -1,
}

export function bondStatusFromJSON(object: any): BondStatus {
  switch (object) {
    case 0:
    case "BOND_STATUS_UNSPECIFIED":
      return BondStatus.BOND_STATUS_UNSPECIFIED;
    case 1:
    case "BOND_STATUS_UNBONDED":
      return BondStatus.BOND_STATUS_UNBONDED;
    case 2:
    case "BOND_STATUS_UNBONDING":
      return BondStatus.BOND_STATUS_UNBONDING;
    case 3:
    case "BOND_STATUS_BONDED":
      return BondStatus.BOND_STATUS_BONDED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return BondStatus.UNRECOGNIZED;
  }
}

export function bondStatusToJSON(object: BondStatus): string {
  switch (object) {
    case BondStatus.BOND_STATUS_UNSPECIFIED:
      return "BOND_STATUS_UNSPECIFIED";
    case BondStatus.BOND_STATUS_UNBONDED:
      return "BOND_STATUS_UNBONDED";
    case BondStatus.BOND_STATUS_UNBONDING:
      return "BOND_STATUS_UNBONDING";
    case BondStatus.BOND_STATUS_BONDED:
      return "BOND_STATUS_BONDED";
    case BondStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** StakeType is the type of a delegation stake. */
export enum StakeType {
  /** STAKE_TYPE_UNSPECIFIED - UNSPECIFIED defines an invalid stake type. */
  STAKE_TYPE_UNSPECIFIED = 0,
  /** STAKE_TYPE_COIN - COIN defines the type for stakes in coin. */
  STAKE_TYPE_COIN = 1,
  /** STAKE_TYPE_NFT - NFT defines the type for stakes in NFT. */
  STAKE_TYPE_NFT = 2,
  UNRECOGNIZED = -1,
}

export function stakeTypeFromJSON(object: any): StakeType {
  switch (object) {
    case 0:
    case "STAKE_TYPE_UNSPECIFIED":
      return StakeType.STAKE_TYPE_UNSPECIFIED;
    case 1:
    case "STAKE_TYPE_COIN":
      return StakeType.STAKE_TYPE_COIN;
    case 2:
    case "STAKE_TYPE_NFT":
      return StakeType.STAKE_TYPE_NFT;
    case -1:
    case "UNRECOGNIZED":
    default:
      return StakeType.UNRECOGNIZED;
  }
}

export function stakeTypeToJSON(object: StakeType): string {
  switch (object) {
    case StakeType.STAKE_TYPE_UNSPECIFIED:
      return "STAKE_TYPE_UNSPECIFIED";
    case StakeType.STAKE_TYPE_COIN:
      return "STAKE_TYPE_COIN";
    case StakeType.STAKE_TYPE_NFT:
      return "STAKE_TYPE_NFT";
    case StakeType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

/** Validator defines a validator. */
export interface Validator {
  /** operator_address defines the address of the validator's operator (bech encoded in JSON). */
  operatorAddress: string;
  /** reward_address defines the address of the account for withdrawing rewards (bech encoded in JSON). */
  rewardAddress: string;
  /** consensus_pubkey is the consensus public key of the validator (as google.protobuf.Any). */
  consensusPubkey:
    | Any
    | undefined;
  /** description defines the description terms for the validator. */
  description:
    | Description
    | undefined;
  /** commission defines the commission rate, as a fraction. */
  commission: string;
  /** status is the validator status (bonded/unbonding/unbonded). */
  status: BondStatus;
  /** online is true if the validator participates in the consensus (validator is bonded). */
  online: boolean;
  /** jailed defined whether the validator has been jailed from bonded status or not. */
  jailed: boolean;
  /** unbonding_height defines, if unbonding, the height at which this validator has begun unbonding. */
  unbondingHeight: number;
  /** unbonding_time defines, if unbonding, the min time for the validator to complete unbonding. */
  unbondingTime:
    | Date
    | undefined;
  /**
   * rewards defines accumulated amount of collected rewards that are not yet distributed to a delegators.
   * NOTE: It is stored separately in the KVStore.
   */
  rewards: string;
  /**
   * total_rewards defines total amount of all collected rewards.
   * NOTE: It is stored separately in the KVStore.
   */
  totalRewards: string;
}

/** ValAddresses defines a repeated set of validator addresses. */
export interface ValAddresses {
  addresses: string[];
}

/** Description defines a validator description. */
export interface Description {
  /** moniker defines a human-readable name for the validator. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  securityContact: string;
  /** details define other optional details. */
  details: string;
}

/** Stake contains all necessary info about a delegation stake. */
export interface Stake {
  /** type defines type of the stake. */
  type: StakeType;
  /**
   * id defines the stake ID.
   * For stake in Coin: contains coin denom value.
   * For stake in NFT: contains NFT token ID value.
   */
  id: string;
  /**
   * stake defines amount of the coin delegated.
   * For stake in Coin: contains actually delegated coin.
   * For stake in NFT: contains total reserve of delegated NFT sub-tokens.
   */
  stake:
    | Coin
    | undefined;
  /** sub_token_ids defines list of NFT sub-token IDs. */
  subTokenIds: number[];
}

/**
 * Delegation represents the bond with coins/NTFs held by an account.
 * It is owned by particular delegator, and is associated with the voting power of particular validator.
 */
export interface Delegation {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** stake defines the object describing the stake completely. */
  stake: Stake | undefined;
}

/**
 * Redelegation contains the list of a particular delegator's redelegating bonds
 * from a particular source validator to a particular destination validator.
 */
export interface Redelegation {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator_src is the validator redelegation source operator address. */
  validatorSrc: string;
  /** validator_dst is the validator redelegation destination operator address. */
  validatorDst: string;
  /** entries are the redelegation entries. */
  entries: RedelegationEntry[];
}

/** RedelegationEntry defines a redelegation object with relevant metadata. */
export interface RedelegationEntry {
  /** creation_height defines the height at which the redelegation took place. */
  creationHeight: number;
  /** completion_time defines the unix time for redelegation completion. */
  completionTime:
    | Date
    | undefined;
  /** stake defines the object describing the stake completely. */
  stake: Stake | undefined;
}

/**
 * Undelegation stores all of a single delegator's unbonding bonds
 * for a single validator in an time-ordered list.
 */
export interface Undelegation {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** entries are the unbonding delegation entries. */
  entries: UndelegationEntry[];
}

/** UndelegationEntry defines an undelegation object with relevant metadata. */
export interface UndelegationEntry {
  /** creation_height defines the height at which the undelegation took place. */
  creationHeight: number;
  /** completion_time defines the unix time for undelegation completion. */
  completionTime:
    | Date
    | undefined;
  /** stake defines the object describing the stake completely. */
  stake: Stake | undefined;
}

/**
 * HistoricalInfo contains header and validator information for a given block.
 * It is stored as part of validator module's state, which persists the `n` most recent HistoricalInfo
 * (`n` is set by the validator module's `historical_entries` parameter).
 */
export interface HistoricalInfo {
  header: Header | undefined;
  valset: Validator[];
}

/** Pool is used for tracking bonded and not-bonded token supply of the bond denomination. */
export interface Pool {
  notBondedTokens: string;
  bondedTokens: string;
}

function createBaseValidator(): Validator {
  return {
    operatorAddress: "",
    rewardAddress: "",
    consensusPubkey: undefined,
    description: undefined,
    commission: "",
    status: 0,
    online: false,
    jailed: false,
    unbondingHeight: 0,
    unbondingTime: undefined,
    rewards: "",
    totalRewards: "",
  };
}

export const Validator = {
  encode(message: Validator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.rewardAddress !== "") {
      writer.uint32(18).string(message.rewardAddress);
    }
    if (message.consensusPubkey !== undefined) {
      Any.encode(message.consensusPubkey, writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(34).fork()).ldelim();
    }
    if (message.commission !== "") {
      writer.uint32(42).string(message.commission);
    }
    if (message.status !== 0) {
      writer.uint32(48).int32(message.status);
    }
    if (message.online === true) {
      writer.uint32(56).bool(message.online);
    }
    if (message.jailed === true) {
      writer.uint32(64).bool(message.jailed);
    }
    if (message.unbondingHeight !== 0) {
      writer.uint32(72).int64(message.unbondingHeight);
    }
    if (message.unbondingTime !== undefined) {
      Timestamp.encode(toTimestamp(message.unbondingTime), writer.uint32(82).fork()).ldelim();
    }
    if (message.rewards !== "") {
      writer.uint32(90).string(message.rewards);
    }
    if (message.totalRewards !== "") {
      writer.uint32(98).string(message.totalRewards);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Validator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.rewardAddress = reader.string();
          break;
        case 3:
          message.consensusPubkey = Any.decode(reader, reader.uint32());
          break;
        case 4:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 5:
          message.commission = reader.string();
          break;
        case 6:
          message.status = reader.int32() as any;
          break;
        case 7:
          message.online = reader.bool();
          break;
        case 8:
          message.jailed = reader.bool();
          break;
        case 9:
          message.unbondingHeight = longToNumber(reader.int64() as Long);
          break;
        case 10:
          message.unbondingTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 11:
          message.rewards = reader.string();
          break;
        case 12:
          message.totalRewards = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Validator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet(object.commission) ? String(object.commission) : "",
      status: isSet(object.status) ? bondStatusFromJSON(object.status) : 0,
      online: isSet(object.online) ? Boolean(object.online) : false,
      jailed: isSet(object.jailed) ? Boolean(object.jailed) : false,
      unbondingHeight: isSet(object.unbondingHeight) ? Number(object.unbondingHeight) : 0,
      unbondingTime: isSet(object.unbondingTime) ? fromJsonTimestamp(object.unbondingTime) : undefined,
      rewards: isSet(object.rewards) ? String(object.rewards) : "",
      totalRewards: isSet(object.totalRewards) ? String(object.totalRewards) : "",
    };
  },

  toJSON(message: Validator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    message.consensusPubkey !== undefined &&
      (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission);
    message.status !== undefined && (obj.status = bondStatusToJSON(message.status));
    message.online !== undefined && (obj.online = message.online);
    message.jailed !== undefined && (obj.jailed = message.jailed);
    message.unbondingHeight !== undefined && (obj.unbondingHeight = Math.round(message.unbondingHeight));
    message.unbondingTime !== undefined && (obj.unbondingTime = message.unbondingTime.toISOString());
    message.rewards !== undefined && (obj.rewards = message.rewards);
    message.totalRewards !== undefined && (obj.totalRewards = message.totalRewards);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Validator>, I>>(object: I): Validator {
    const message = createBaseValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.consensusPubkey = (object.consensusPubkey !== undefined && object.consensusPubkey !== null)
      ? Any.fromPartial(object.consensusPubkey)
      : undefined;
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    message.commission = object.commission ?? "";
    message.status = object.status ?? 0;
    message.online = object.online ?? false;
    message.jailed = object.jailed ?? false;
    message.unbondingHeight = object.unbondingHeight ?? 0;
    message.unbondingTime = object.unbondingTime ?? undefined;
    message.rewards = object.rewards ?? "";
    message.totalRewards = object.totalRewards ?? "";
    return message;
  },
};

function createBaseValAddresses(): ValAddresses {
  return { addresses: [] };
}

export const ValAddresses = {
  encode(message: ValAddresses, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValAddresses();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValAddresses {
    return { addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [] };
  },

  toJSON(message: ValAddresses): unknown {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValAddresses>, I>>(object: I): ValAddresses {
    const message = createBaseValAddresses();
    message.addresses = object.addresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseDescription(): Description {
  return { moniker: "", identity: "", website: "", securityContact: "", details: "" };
}

export const Description = {
  encode(message: Description, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Description {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Description {
    return {
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      securityContact: isSet(object.securityContact) ? String(object.securityContact) : "",
      details: isSet(object.details) ? String(object.details) : "",
    };
  },

  toJSON(message: Description): unknown {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Description>, I>>(object: I): Description {
    const message = createBaseDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
};

function createBaseStake(): Stake {
  return { type: 0, id: "", stake: undefined, subTokenIds: [] };
}

export const Stake = {
  encode(message: Stake, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.type !== 0) {
      writer.uint32(8).int32(message.type);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(26).fork()).ldelim();
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.int64(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Stake {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStake();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.int32() as any;
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.subTokenIds.push(longToNumber(reader.int64() as Long));
            }
          } else {
            message.subTokenIds.push(longToNumber(reader.int64() as Long));
          }
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Stake {
    return {
      type: isSet(object.type) ? stakeTypeFromJSON(object.type) : 0,
      id: isSet(object.id) ? String(object.id) : "",
      stake: isSet(object.stake) ? Coin.fromJSON(object.stake) : undefined,
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: Stake): unknown {
    const obj: any = {};
    message.type !== undefined && (obj.type = stakeTypeToJSON(message.type));
    message.id !== undefined && (obj.id = message.id);
    message.stake !== undefined && (obj.stake = message.stake ? Coin.toJSON(message.stake) : undefined);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Stake>, I>>(object: I): Stake {
    const message = createBaseStake();
    message.type = object.type ?? 0;
    message.id = object.id ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Coin.fromPartial(object.stake) : undefined;
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDelegation(): Delegation {
  return { delegator: "", validator: "", stake: undefined };
}

export const Delegation = {
  encode(message: Delegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegation {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: Delegation): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegation>, I>>(object: I): Delegation {
    const message = createBaseDelegation();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseRedelegation(): Redelegation {
  return { delegator: "", validatorSrc: "", validatorDst: "", entries: [] };
}

export const Redelegation = {
  encode(message: Redelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validatorSrc !== "") {
      writer.uint32(18).string(message.validatorSrc);
    }
    if (message.validatorDst !== "") {
      writer.uint32(26).string(message.validatorDst);
    }
    for (const v of message.entries) {
      RedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.validatorSrc = reader.string();
          break;
        case 3:
          message.validatorDst = reader.string();
          break;
        case 4:
          message.entries.push(RedelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Redelegation {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => RedelegationEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: Redelegation): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? RedelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Redelegation>, I>>(object: I): Redelegation {
    const message = createBaseRedelegation();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.entries = object.entries?.map((e) => RedelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseRedelegationEntry(): RedelegationEntry {
  return { creationHeight: 0, completionTime: undefined, stake: undefined };
}

export const RedelegationEntry = {
  encode(message: RedelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creationHeight !== 0) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRedelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RedelegationEntry {
    return {
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: RedelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<RedelegationEntry>, I>>(object: I): RedelegationEntry {
    const message = createBaseRedelegationEntry();
    message.creationHeight = object.creationHeight ?? 0;
    message.completionTime = object.completionTime ?? undefined;
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseUndelegation(): Undelegation {
  return { delegator: "", validator: "", entries: [] };
}

export const Undelegation = {
  encode(message: Undelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    for (const v of message.entries) {
      UndelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.entries.push(UndelegationEntry.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Undelegation {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      entries: Array.isArray(object?.entries) ? object.entries.map((e: any) => UndelegationEntry.fromJSON(e)) : [],
    };
  },

  toJSON(message: Undelegation): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.entries) {
      obj.entries = message.entries.map((e) => e ? UndelegationEntry.toJSON(e) : undefined);
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Undelegation>, I>>(object: I): Undelegation {
    const message = createBaseUndelegation();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.entries = object.entries?.map((e) => UndelegationEntry.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUndelegationEntry(): UndelegationEntry {
  return { creationHeight: 0, completionTime: undefined, stake: undefined };
}

export const UndelegationEntry = {
  encode(message: UndelegationEntry, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creationHeight !== 0) {
      writer.uint32(8).int64(message.creationHeight);
    }
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(18).fork()).ldelim();
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UndelegationEntry {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUndelegationEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creationHeight = longToNumber(reader.int64() as Long);
          break;
        case 2:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 3:
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UndelegationEntry {
    return {
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined,
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: UndelegationEntry): unknown {
    const obj: any = {};
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UndelegationEntry>, I>>(object: I): UndelegationEntry {
    const message = createBaseUndelegationEntry();
    message.creationHeight = object.creationHeight ?? 0;
    message.completionTime = object.completionTime ?? undefined;
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseHistoricalInfo(): HistoricalInfo {
  return { header: undefined, valset: [] };
}

export const HistoricalInfo = {
  encode(message: HistoricalInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.header !== undefined) {
      Header.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.valset) {
      Validator.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHistoricalInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = Header.decode(reader, reader.uint32());
          break;
        case 2:
          message.valset.push(Validator.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HistoricalInfo {
    return {
      header: isSet(object.header) ? Header.fromJSON(object.header) : undefined,
      valset: Array.isArray(object?.valset) ? object.valset.map((e: any) => Validator.fromJSON(e)) : [],
    };
  },

  toJSON(message: HistoricalInfo): unknown {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? Header.toJSON(message.header) : undefined);
    if (message.valset) {
      obj.valset = message.valset.map((e) => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.valset = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HistoricalInfo>, I>>(object: I): HistoricalInfo {
    const message = createBaseHistoricalInfo();
    message.header = (object.header !== undefined && object.header !== null)
      ? Header.fromPartial(object.header as any)
      : undefined;
    message.valset = object.valset?.map((e) => Validator.fromPartial(e)) || [];
    return message;
  },
};

function createBasePool(): Pool {
  return { notBondedTokens: "", bondedTokens: "" };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.notBondedTokens !== "") {
      writer.uint32(10).string(message.notBondedTokens);
    }
    if (message.bondedTokens !== "") {
      writer.uint32(18).string(message.bondedTokens);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.notBondedTokens = reader.string();
          break;
        case 2:
          message.bondedTokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      notBondedTokens: isSet(object.notBondedTokens) ? String(object.notBondedTokens) : "",
      bondedTokens: isSet(object.bondedTokens) ? String(object.bondedTokens) : "",
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.notBondedTokens !== undefined && (obj.notBondedTokens = message.notBondedTokens);
    message.bondedTokens !== undefined && (obj.bondedTokens = message.bondedTokens);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.notBondedTokens = object.notBondedTokens ?? "";
    message.bondedTokens = object.bondedTokens ?? "";
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

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
