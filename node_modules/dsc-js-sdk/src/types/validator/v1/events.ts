/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Description, Stake } from "./validator";

export const protobufPackage = "decimal.validator.v1";

/** EventCreateValidator defines event emitted when new validator is created. */
export interface EventCreateValidator {
  sender: string;
  validator: string;
  rewardAddress: string;
  consensusPubkey: string;
  description: Description | undefined;
  commission: string;
  stake: Coin | undefined;
}

/** EventEditValidator defines event emitted when existing validator is editted. */
export interface EventEditValidator {
  sender: string;
  validator: string;
  rewardAddress: string;
  description: Description | undefined;
}

/** EventSetOnline defines event emitted when existing validator is turned on into the blockchain consensus. */
export interface EventSetOnline {
  sender: string;
  validator: string;
}

/** EventSetOffline defines event emitted when existing validator is turned off from the blockchain consensus. */
export interface EventSetOffline {
  sender: string;
  validator: string;
}

/** EventDelegate defines event emitted when a coin or NFT is delegated to a validator. */
export interface EventDelegate {
  delegator: string;
  validator: string;
  stake: Stake | undefined;
  amountBase: string;
}

/** EventRedelegate defines event emitted when a coin or NFT is redelegated from a validator to another one. */
export interface EventRedelegate {
  delegator: string;
  validatorSrc: string;
  validatorDst: string;
  stake: Stake | undefined;
  amountBase: string;
  completeAt: Date | undefined;
}

/** EventRedelegateComplete defines event emitted when a redelegation is completed. */
export interface EventRedelegateComplete {
  delegator: string;
  validatorSrc: string;
  validatorDst: string;
  stake: Stake | undefined;
}

/** EventUndelegate defines event emitted when a coin or NFT is undelegated from a validator. */
export interface EventUndelegate {
  delegator: string;
  validator: string;
  stake: Stake | undefined;
  amountBase: string;
  completeAt: Date | undefined;
}

/** EventUndelegateComplete defines event emitted when a undelegation is completed. */
export interface EventUndelegateComplete {
  delegator: string;
  validator: string;
  stake: Stake | undefined;
}

/** EventCancelRedelegation defines event emitted when a redelegated from a validator to another one is cancelled. */
export interface EventCancelRedelegation {
  delegator: string;
  validatorSrc: string;
  validatorDst: string;
  creationHeight: number;
  stake: Stake | undefined;
}

/** EventCancelUndelegation defines event emitted when an undelegated from a validator is cancelled. */
export interface EventCancelUndelegation {
  delegator: string;
  validator: string;
  creationHeight: number;
  stake: Stake | undefined;
}

/** EventEmission defines event emitted when emission for the block is minted. */
export interface EventEmission {
  amount: string;
}

/** EventPayRewards defines event emitted when all accumulated commissions are payed as rewards. */
export interface EventPayRewards {
  validators: ValidatorReward[];
}

/** EventSlash defines event emitted when a validator is slashed. */
export interface EventSlash {
  validator: string;
  delegators: DelegatorSlash[];
}

/** EventLiveness defines event emitted when a validator is missed a block to sign. */
export interface EventLiveness {
  validator: string;
  consensusPubkey: string;
  missedBlocks: number;
}

/** ValidatorReward contains the detailed validator rewards. */
export interface ValidatorReward {
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** dao is the amount of the reward in base coin sent to the DAO. */
  dao: string;
  /** develop is the amount of the reward in base coin sent to the Development. */
  develop: string;
  /** commission is the amount of the reward in base coin sent to the validator as it's commission. */
  commission: string;
  /** accumulated is the total amount of the reward in base coin accumulated for the validator. */
  accumulated: string;
  /** delegators is the complete list of delegator rewards. */
  delegators: DelegatorReward[];
}

/** DelegatorReward contains delegator address and amount of a reward in base coin. */
export interface DelegatorReward {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** amount is the amount of the reward in base coin. */
  amount: string;
}

/** ValidatorSlash contains the detailed validator slash. */
export interface ValidatorSlash {
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** delegators is the complete list of delegator rewards. */
  delegators: DelegatorSlash[];
}

/** DelegatorSlash contains delegator address and amount of a reward in base coin. */
export interface DelegatorSlash {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** coins is the list of NFT slashes. */
  coins: SlashCoin[];
  /** nfts is the list of NFT slashes. */
  nfts: SlashNFT[];
}

/** SlashCoin contains coin slash info. */
export interface SlashCoin {
  /** slash is the slashed coin. */
  slash: Coin | undefined;
}

/** SlashNFT contains NFT slash info. */
export interface SlashNFT {
  /** token_id defines the slashed NFT token ID. */
  tokenId: string;
  /** sub_token_ids defines the slashed NFT sub-tokens. */
  subTokens: SlashNFTSubtoken[];
}

/** SlashNFTSubtoken contains NFT sub-token slash info. */
export interface SlashNFTSubtoken {
  /** id defines the NFT sub-token ID. */
  id: number;
  /** slash is the slashed NFT sub-token reserve. */
  slash:
    | Coin
    | undefined;
  /** reserve is the new NFT sub-token reserve. */
  reserve: Coin | undefined;
}

function createBaseEventCreateValidator(): EventCreateValidator {
  return {
    sender: "",
    validator: "",
    rewardAddress: "",
    consensusPubkey: "",
    description: undefined,
    commission: "",
    stake: undefined,
  };
}

export const EventCreateValidator = {
  encode(message: EventCreateValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.rewardAddress !== "") {
      writer.uint32(26).string(message.rewardAddress);
    }
    if (message.consensusPubkey !== "") {
      writer.uint32(34).string(message.consensusPubkey);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(42).fork()).ldelim();
    }
    if (message.commission !== "") {
      writer.uint32(50).string(message.commission);
    }
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.rewardAddress = reader.string();
          break;
        case 4:
          message.consensusPubkey = reader.string();
          break;
        case 5:
          message.description = Description.decode(reader, reader.uint32());
          break;
        case 6:
          message.commission = reader.string();
          break;
        case 7:
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreateValidator {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      consensusPubkey: isSet(object.consensusPubkey) ? String(object.consensusPubkey) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet(object.commission) ? String(object.commission) : "",
      stake: isSet(object.stake) ? Coin.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: EventCreateValidator): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission);
    message.stake !== undefined && (obj.stake = message.stake ? Coin.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCreateValidator>, I>>(object: I): EventCreateValidator {
    const message = createBaseEventCreateValidator();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.consensusPubkey = object.consensusPubkey ?? "";
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    message.commission = object.commission ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Coin.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseEventEditValidator(): EventEditValidator {
  return { sender: "", validator: "", rewardAddress: "", description: undefined };
}

export const EventEditValidator = {
  encode(message: EventEditValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.rewardAddress !== "") {
      writer.uint32(26).string(message.rewardAddress);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEditValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEditValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        case 3:
          message.rewardAddress = reader.string();
          break;
        case 4:
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEditValidator {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
    };
  },

  toJSON(message: EventEditValidator): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.validator !== undefined && (obj.validator = message.validator);
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEditValidator>, I>>(object: I): EventEditValidator {
    const message = createBaseEventEditValidator();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    return message;
  },
};

function createBaseEventSetOnline(): EventSetOnline {
  return { sender: "", validator: "" };
}

export const EventSetOnline = {
  encode(message: EventSetOnline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOnline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOnline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetOnline {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: EventSetOnline): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetOnline>, I>>(object: I): EventSetOnline {
    const message = createBaseEventSetOnline();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseEventSetOffline(): EventSetOffline {
  return { sender: "", validator: "" };
}

export const EventSetOffline = {
  encode(message: EventSetOffline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOffline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSetOffline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSetOffline {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
    };
  },

  toJSON(message: EventSetOffline): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSetOffline>, I>>(object: I): EventSetOffline {
    const message = createBaseEventSetOffline();
    message.sender = object.sender ?? "";
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseEventDelegate(): EventDelegate {
  return { delegator: "", validator: "", stake: undefined, amountBase: "" };
}

export const EventDelegate = {
  encode(message: EventDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountBase !== "") {
      writer.uint32(34).string(message.amountBase);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventDelegate();
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
        case 4:
          message.amountBase = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDelegate {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
      amountBase: isSet(object.amountBase) ? String(object.amountBase) : "",
    };
  },

  toJSON(message: EventDelegate): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    message.amountBase !== undefined && (obj.amountBase = message.amountBase);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventDelegate>, I>>(object: I): EventDelegate {
    const message = createBaseEventDelegate();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    message.amountBase = object.amountBase ?? "";
    return message;
  },
};

function createBaseEventRedelegate(): EventRedelegate {
  return { delegator: "", validatorSrc: "", validatorDst: "", stake: undefined, amountBase: "", completeAt: undefined };
}

export const EventRedelegate = {
  encode(message: EventRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validatorSrc !== "") {
      writer.uint32(18).string(message.validatorSrc);
    }
    if (message.validatorDst !== "") {
      writer.uint32(26).string(message.validatorDst);
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(34).fork()).ldelim();
    }
    if (message.amountBase !== "") {
      writer.uint32(42).string(message.amountBase);
    }
    if (message.completeAt !== undefined) {
      Timestamp.encode(toTimestamp(message.completeAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedelegate();
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
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        case 5:
          message.amountBase = reader.string();
          break;
        case 6:
          message.completeAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRedelegate {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
      amountBase: isSet(object.amountBase) ? String(object.amountBase) : "",
      completeAt: isSet(object.completeAt) ? fromJsonTimestamp(object.completeAt) : undefined,
    };
  },

  toJSON(message: EventRedelegate): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    message.amountBase !== undefined && (obj.amountBase = message.amountBase);
    message.completeAt !== undefined && (obj.completeAt = message.completeAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRedelegate>, I>>(object: I): EventRedelegate {
    const message = createBaseEventRedelegate();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    message.amountBase = object.amountBase ?? "";
    message.completeAt = object.completeAt ?? undefined;
    return message;
  },
};

function createBaseEventRedelegateComplete(): EventRedelegateComplete {
  return { delegator: "", validatorSrc: "", validatorDst: "", stake: undefined };
}

export const EventRedelegateComplete = {
  encode(message: EventRedelegateComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validatorSrc !== "") {
      writer.uint32(18).string(message.validatorSrc);
    }
    if (message.validatorDst !== "") {
      writer.uint32(26).string(message.validatorDst);
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRedelegateComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRedelegateComplete();
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
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRedelegateComplete {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: EventRedelegateComplete): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventRedelegateComplete>, I>>(object: I): EventRedelegateComplete {
    const message = createBaseEventRedelegateComplete();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseEventUndelegate(): EventUndelegate {
  return { delegator: "", validator: "", stake: undefined, amountBase: "", completeAt: undefined };
}

export const EventUndelegate = {
  encode(message: EventUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(26).fork()).ldelim();
    }
    if (message.amountBase !== "") {
      writer.uint32(34).string(message.amountBase);
    }
    if (message.completeAt !== undefined) {
      Timestamp.encode(toTimestamp(message.completeAt), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUndelegate();
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
        case 4:
          message.amountBase = reader.string();
          break;
        case 5:
          message.completeAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUndelegate {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
      amountBase: isSet(object.amountBase) ? String(object.amountBase) : "",
      completeAt: isSet(object.completeAt) ? fromJsonTimestamp(object.completeAt) : undefined,
    };
  },

  toJSON(message: EventUndelegate): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    message.amountBase !== undefined && (obj.amountBase = message.amountBase);
    message.completeAt !== undefined && (obj.completeAt = message.completeAt.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUndelegate>, I>>(object: I): EventUndelegate {
    const message = createBaseEventUndelegate();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    message.amountBase = object.amountBase ?? "";
    message.completeAt = object.completeAt ?? undefined;
    return message;
  },
};

function createBaseEventUndelegateComplete(): EventUndelegateComplete {
  return { delegator: "", validator: "", stake: undefined };
}

export const EventUndelegateComplete = {
  encode(message: EventUndelegateComplete, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUndelegateComplete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUndelegateComplete();
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

  fromJSON(object: any): EventUndelegateComplete {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: EventUndelegateComplete): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventUndelegateComplete>, I>>(object: I): EventUndelegateComplete {
    const message = createBaseEventUndelegateComplete();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseEventCancelRedelegation(): EventCancelRedelegation {
  return { delegator: "", validatorSrc: "", validatorDst: "", creationHeight: 0, stake: undefined };
}

export const EventCancelRedelegation = {
  encode(message: EventCancelRedelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validatorSrc !== "") {
      writer.uint32(18).string(message.validatorSrc);
    }
    if (message.validatorDst !== "") {
      writer.uint32(26).string(message.validatorDst);
    }
    if (message.creationHeight !== 0) {
      writer.uint32(32).int64(message.creationHeight);
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelRedelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelRedelegation();
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
          message.creationHeight = longToNumber(reader.int64() as Long);
          break;
        case 5:
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCancelRedelegation {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: EventCancelRedelegation): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelRedelegation>, I>>(object: I): EventCancelRedelegation {
    const message = createBaseEventCancelRedelegation();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.creationHeight = object.creationHeight ?? 0;
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseEventCancelUndelegation(): EventCancelUndelegation {
  return { delegator: "", validator: "", creationHeight: 0, stake: undefined };
}

export const EventCancelUndelegation = {
  encode(message: EventCancelUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.creationHeight !== 0) {
      writer.uint32(24).int64(message.creationHeight);
    }
    if (message.stake !== undefined) {
      Stake.encode(message.stake, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelUndelegation();
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
          message.creationHeight = longToNumber(reader.int64() as Long);
          break;
        case 4:
          message.stake = Stake.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCancelUndelegation {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      stake: isSet(object.stake) ? Stake.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: EventCancelUndelegation): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.stake !== undefined && (obj.stake = message.stake ? Stake.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventCancelUndelegation>, I>>(object: I): EventCancelUndelegation {
    const message = createBaseEventCancelUndelegation();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.creationHeight = object.creationHeight ?? 0;
    message.stake = (object.stake !== undefined && object.stake !== null) ? Stake.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseEventEmission(): EventEmission {
  return { amount: "" };
}

export const EventEmission = {
  encode(message: EventEmission, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.amount !== "") {
      writer.uint32(10).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventEmission {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventEmission();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventEmission {
    return { amount: isSet(object.amount) ? String(object.amount) : "" };
  },

  toJSON(message: EventEmission): unknown {
    const obj: any = {};
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventEmission>, I>>(object: I): EventEmission {
    const message = createBaseEventEmission();
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseEventPayRewards(): EventPayRewards {
  return { validators: [] };
}

export const EventPayRewards = {
  encode(message: EventPayRewards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.validators) {
      ValidatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventPayRewards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventPayRewards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(ValidatorReward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventPayRewards {
    return {
      validators: Array.isArray(object?.validators)
        ? object.validators.map((e: any) => ValidatorReward.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventPayRewards): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e ? ValidatorReward.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventPayRewards>, I>>(object: I): EventPayRewards {
    const message = createBaseEventPayRewards();
    message.validators = object.validators?.map((e) => ValidatorReward.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventSlash(): EventSlash {
  return { validator: "", delegators: [] };
}

export const EventSlash = {
  encode(message: EventSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    for (const v of message.delegators) {
      DelegatorSlash.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.delegators.push(DelegatorSlash.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSlash {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      delegators: Array.isArray(object?.delegators)
        ? object.delegators.map((e: any) => DelegatorSlash.fromJSON(e))
        : [],
    };
  },

  toJSON(message: EventSlash): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.delegators) {
      obj.delegators = message.delegators.map((e) => e ? DelegatorSlash.toJSON(e) : undefined);
    } else {
      obj.delegators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventSlash>, I>>(object: I): EventSlash {
    const message = createBaseEventSlash();
    message.validator = object.validator ?? "";
    message.delegators = object.delegators?.map((e) => DelegatorSlash.fromPartial(e)) || [];
    return message;
  },
};

function createBaseEventLiveness(): EventLiveness {
  return { validator: "", consensusPubkey: "", missedBlocks: 0 };
}

export const EventLiveness = {
  encode(message: EventLiveness, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.consensusPubkey !== "") {
      writer.uint32(18).string(message.consensusPubkey);
    }
    if (message.missedBlocks !== 0) {
      writer.uint32(24).uint32(message.missedBlocks);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventLiveness {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLiveness();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.consensusPubkey = reader.string();
          break;
        case 3:
          message.missedBlocks = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLiveness {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      consensusPubkey: isSet(object.consensusPubkey) ? String(object.consensusPubkey) : "",
      missedBlocks: isSet(object.missedBlocks) ? Number(object.missedBlocks) : 0,
    };
  },

  toJSON(message: EventLiveness): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.consensusPubkey !== undefined && (obj.consensusPubkey = message.consensusPubkey);
    message.missedBlocks !== undefined && (obj.missedBlocks = Math.round(message.missedBlocks));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLiveness>, I>>(object: I): EventLiveness {
    const message = createBaseEventLiveness();
    message.validator = object.validator ?? "";
    message.consensusPubkey = object.consensusPubkey ?? "";
    message.missedBlocks = object.missedBlocks ?? 0;
    return message;
  },
};

function createBaseValidatorReward(): ValidatorReward {
  return { validator: "", dao: "", develop: "", commission: "", accumulated: "", delegators: [] };
}

export const ValidatorReward = {
  encode(message: ValidatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    if (message.dao !== "") {
      writer.uint32(18).string(message.dao);
    }
    if (message.develop !== "") {
      writer.uint32(26).string(message.develop);
    }
    if (message.commission !== "") {
      writer.uint32(34).string(message.commission);
    }
    if (message.accumulated !== "") {
      writer.uint32(42).string(message.accumulated);
    }
    for (const v of message.delegators) {
      DelegatorReward.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 2:
          message.dao = reader.string();
          break;
        case 3:
          message.develop = reader.string();
          break;
        case 4:
          message.commission = reader.string();
          break;
        case 5:
          message.accumulated = reader.string();
          break;
        case 6:
          message.delegators.push(DelegatorReward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorReward {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      dao: isSet(object.dao) ? String(object.dao) : "",
      develop: isSet(object.develop) ? String(object.develop) : "",
      commission: isSet(object.commission) ? String(object.commission) : "",
      accumulated: isSet(object.accumulated) ? String(object.accumulated) : "",
      delegators: Array.isArray(object?.delegators)
        ? object.delegators.map((e: any) => DelegatorReward.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorReward): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    message.dao !== undefined && (obj.dao = message.dao);
    message.develop !== undefined && (obj.develop = message.develop);
    message.commission !== undefined && (obj.commission = message.commission);
    message.accumulated !== undefined && (obj.accumulated = message.accumulated);
    if (message.delegators) {
      obj.delegators = message.delegators.map((e) => e ? DelegatorReward.toJSON(e) : undefined);
    } else {
      obj.delegators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorReward>, I>>(object: I): ValidatorReward {
    const message = createBaseValidatorReward();
    message.validator = object.validator ?? "";
    message.dao = object.dao ?? "";
    message.develop = object.develop ?? "";
    message.commission = object.commission ?? "";
    message.accumulated = object.accumulated ?? "";
    message.delegators = object.delegators?.map((e) => DelegatorReward.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegatorReward(): DelegatorReward {
  return { delegator: "", amount: "" };
}

export const DelegatorReward = {
  encode(message: DelegatorReward, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorReward {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorReward();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegatorReward {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: DelegatorReward): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegatorReward>, I>>(object: I): DelegatorReward {
    const message = createBaseDelegatorReward();
    message.delegator = object.delegator ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseValidatorSlash(): ValidatorSlash {
  return { validator: "", delegators: [] };
}

export const ValidatorSlash = {
  encode(message: ValidatorSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    for (const v of message.delegators) {
      DelegatorSlash.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        case 6:
          message.delegators.push(DelegatorSlash.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ValidatorSlash {
    return {
      validator: isSet(object.validator) ? String(object.validator) : "",
      delegators: Array.isArray(object?.delegators)
        ? object.delegators.map((e: any) => DelegatorSlash.fromJSON(e))
        : [],
    };
  },

  toJSON(message: ValidatorSlash): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    if (message.delegators) {
      obj.delegators = message.delegators.map((e) => e ? DelegatorSlash.toJSON(e) : undefined);
    } else {
      obj.delegators = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ValidatorSlash>, I>>(object: I): ValidatorSlash {
    const message = createBaseValidatorSlash();
    message.validator = object.validator ?? "";
    message.delegators = object.delegators?.map((e) => DelegatorSlash.fromPartial(e)) || [];
    return message;
  },
};

function createBaseDelegatorSlash(): DelegatorSlash {
  return { delegator: "", coins: [], nfts: [] };
}

export const DelegatorSlash = {
  encode(message: DelegatorSlash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    for (const v of message.coins) {
      SlashCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nfts) {
      SlashNFT.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorSlash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorSlash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.coins.push(SlashCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nfts.push(SlashNFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegatorSlash {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => SlashCoin.fromJSON(e)) : [],
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => SlashNFT.fromJSON(e)) : [],
    };
  },

  toJSON(message: DelegatorSlash): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    if (message.coins) {
      obj.coins = message.coins.map((e) => e ? SlashCoin.toJSON(e) : undefined);
    } else {
      obj.coins = [];
    }
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? SlashNFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegatorSlash>, I>>(object: I): DelegatorSlash {
    const message = createBaseDelegatorSlash();
    message.delegator = object.delegator ?? "";
    message.coins = object.coins?.map((e) => SlashCoin.fromPartial(e)) || [];
    message.nfts = object.nfts?.map((e) => SlashNFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSlashCoin(): SlashCoin {
  return { slash: undefined };
}

export const SlashCoin = {
  encode(message: SlashCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.slash !== undefined) {
      Coin.encode(message.slash, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slash = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SlashCoin {
    return { slash: isSet(object.slash) ? Coin.fromJSON(object.slash) : undefined };
  },

  toJSON(message: SlashCoin): unknown {
    const obj: any = {};
    message.slash !== undefined && (obj.slash = message.slash ? Coin.toJSON(message.slash) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SlashCoin>, I>>(object: I): SlashCoin {
    const message = createBaseSlashCoin();
    message.slash = (object.slash !== undefined && object.slash !== null) ? Coin.fromPartial(object.slash) : undefined;
    return message;
  },
};

function createBaseSlashNFT(): SlashNFT {
  return { tokenId: "", subTokens: [] };
}

export const SlashNFT = {
  encode(message: SlashNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tokenId !== "") {
      writer.uint32(10).string(message.tokenId);
    }
    for (const v of message.subTokens) {
      SlashNFTSubtoken.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tokenId = reader.string();
          break;
        case 2:
          message.subTokens.push(SlashNFTSubtoken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SlashNFT {
    return {
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokens: Array.isArray(object?.subTokens) ? object.subTokens.map((e: any) => SlashNFTSubtoken.fromJSON(e)) : [],
    };
  },

  toJSON(message: SlashNFT): unknown {
    const obj: any = {};
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokens) {
      obj.subTokens = message.subTokens.map((e) => e ? SlashNFTSubtoken.toJSON(e) : undefined);
    } else {
      obj.subTokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SlashNFT>, I>>(object: I): SlashNFT {
    const message = createBaseSlashNFT();
    message.tokenId = object.tokenId ?? "";
    message.subTokens = object.subTokens?.map((e) => SlashNFTSubtoken.fromPartial(e)) || [];
    return message;
  },
};

function createBaseSlashNFTSubtoken(): SlashNFTSubtoken {
  return { id: 0, slash: undefined, reserve: undefined };
}

export const SlashNFTSubtoken = {
  encode(message: SlashNFTSubtoken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.slash !== undefined) {
      Coin.encode(message.slash, writer.uint32(18).fork()).ldelim();
    }
    if (message.reserve !== undefined) {
      Coin.encode(message.reserve, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SlashNFTSubtoken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSlashNFTSubtoken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint32();
          break;
        case 2:
          message.slash = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.reserve = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SlashNFTSubtoken {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      slash: isSet(object.slash) ? Coin.fromJSON(object.slash) : undefined,
      reserve: isSet(object.reserve) ? Coin.fromJSON(object.reserve) : undefined,
    };
  },

  toJSON(message: SlashNFTSubtoken): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.slash !== undefined && (obj.slash = message.slash ? Coin.toJSON(message.slash) : undefined);
    message.reserve !== undefined && (obj.reserve = message.reserve ? Coin.toJSON(message.reserve) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SlashNFTSubtoken>, I>>(object: I): SlashNFTSubtoken {
    const message = createBaseSlashNFTSubtoken();
    message.id = object.id ?? 0;
    message.slash = (object.slash !== undefined && object.slash !== null) ? Coin.fromPartial(object.slash) : undefined;
    message.reserve = (object.reserve !== undefined && object.reserve !== null)
      ? Coin.fromPartial(object.reserve)
      : undefined;
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
