/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Description } from "./validator";

/* eslint-disable */
export const protobufPackage = "decimal.validator.v1";

/** MsgCreateValidator defines a SDK message for creating a new validator. */
export interface MsgCreateValidator {
  operatorAddress: string;
  rewardAddress: string;
  consensusPubkey: Any | undefined;
  description: Description | undefined;
  commission: string;
  stake: Coin | undefined;
}

/** MsgCreateValidatorResponse defines the Msg/CreateValidator response type. */
export interface MsgCreateValidatorResponse {
}

/** MsgEditValidator defines a SDK message for editing an existing validator. */
export interface MsgEditValidator {
  operatorAddress: string;
  rewardAddress: string;
  description: Description | undefined;
}

/** MsgEditValidatorResponse defines the Msg/EditValidator response type. */
export interface MsgEditValidatorResponse {
}

/** MsgSetOnline defines a SDK message for turning on a validator into the blockchain consensus. */
export interface MsgSetOnline {
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
}

/** MsgSetOnlineResponse defines the Msg/SetOnline response type. */
export interface MsgSetOnlineResponse {
}

/** MsgSetOffline defines a SDK message for turning off a validator from the blockchain consensus. */
export interface MsgSetOffline {
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
}

/** MsgSetOfflineResponse defines the Msg/SetOffline response type. */
export interface MsgSetOfflineResponse {
}

/** MsgDelegate defines a SDK message for performing a delegation of coins from a delegator to a validator. */
export interface MsgDelegate {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** coin defines amount of the coin to delegate. */
  coin: Coin | undefined;
}

/** MsgDelegateResponse defines the Msg/Delegate response type. */
export interface MsgDelegateResponse {
}

/** MsgDelegateNFT defines a SDK message for performing a delegation of NFTs from a delegator to a validator. */
export interface MsgDelegateNFT {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** token_id defines the NFT token ID. */
  tokenId: string;
  /** sub_token_ids defines list of NFT sub-token IDs. */
  subTokenIds: number[];
}

/** MsgDelegateNFTResponse defines the Msg/DelegateNFT response type. */
export interface MsgDelegateNFTResponse {
}

/**
 * MsgRedelegate defines a SDK message for performing a redelegation
 * of coins from a delegator and source validator to a destination validator.
 */
export interface MsgRedelegate {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator_src is the bech32-encoded address of the source validator. */
  validatorSrc: string;
  /** validator_dst is the bech32-encoded address of the destination validator. */
  validatorDst: string;
  /** coin defines amount of the coin to redelegate. */
  coin: Coin | undefined;
}

/** MsgRedelegateResponse defines the Msg/Redelegate response type. */
export interface MsgRedelegateResponse {
  completionTime: Date | undefined;
}

/**
 * MsgRedelegateNFT defines a SDK message for performing a redelegation
 * of NFTs from a delegator and source validator to a destination validator.
 */
export interface MsgRedelegateNFT {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator_src is the bech32-encoded address of the source validator. */
  validatorSrc: string;
  /** validator_dst is the bech32-encoded address of the destination validator. */
  validatorDst: string;
  /** token_id defines the NFT token ID. */
  tokenId: string;
  /** sub_token_ids defines list of NFT sub-token IDs. */
  subTokenIds: number[];
}

/** MsgRedelegateNFTResponse defines the Msg/RedelegateNFT response type. */
export interface MsgRedelegateNFTResponse {
  completionTime: Date | undefined;
}

/**
 * MsgUndelegate defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegate {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** coin defines amount of the coin to undelegate. */
  coin: Coin | undefined;
}

/** MsgUndelegateResponse defines the Msg/Undelegate response type. */
export interface MsgUndelegateResponse {
  completionTime: Date | undefined;
}

/**
 * MsgUndelegateNFT defines a SDK message for performing an undelegation from a
 * delegate and a validator.
 */
export interface MsgUndelegateNFT {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** token_id defines the NFT token ID. */
  tokenId: string;
  /** sub_token_ids defines list of NFT sub-token IDs. */
  subTokenIds: number[];
}

/** MsgUndelegateNFTResponse defines the Msg/UndelegateNFT response type. */
export interface MsgUndelegateNFTResponse {
  completionTime: Date | undefined;
}

/** MsgCancelRedelegation defines the SDK message for performing a cancel redelegation for delegator. */
export interface MsgCancelRedelegation {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator_src is the bech32-encoded address of the source validator. */
  validatorSrc: string;
  /** validator_dst is the bech32-encoded address of the destination validator. */
  validatorDst: string;
  /** creation_height defines number of the block at which redelegation was beginned. */
  creationHeight: number;
  /** coin defines amount of the coin to cancel from redelegation. */
  coin: Coin | undefined;
}

/** MsgCancelRedelegationResponse */
export interface MsgCancelRedelegationResponse {
}

/** MsgCancelRedelegationNFT defines the SDK message for performing a cancel redelegation for delegator. */
export interface MsgCancelRedelegationNFT {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator_src is the bech32-encoded address of the source validator. */
  validatorSrc: string;
  /** validator_dst is the bech32-encoded address of the destination validator. */
  validatorDst: string;
  /** creation_height defines number of the block at which redelegation was beginned. */
  creationHeight: number;
  /** token_id defines the NFT token ID. */
  tokenId: string;
  /** sub_token_ids defines list of NFT sub-token IDs. */
  subTokenIds: number[];
}

/** MsgCancelRedelegationNFTResponse */
export interface MsgCancelRedelegationNFTResponse {
}

/** MsgCancelUndelegation defines the SDK message for performing a cancel undelegation for delegator. */
export interface MsgCancelUndelegation {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** creation_height defines number of the block at which undelegation was beginned. */
  creationHeight: number;
  /** coin defines amount of the coin to cancel from undelegation. */
  coin: Coin | undefined;
}

/** MsgCancelUndelegationResponse */
export interface MsgCancelUndelegationResponse {
}

/** MsgCancelUndelegationNFT defines the SDK message for performing a cancel undelegation for delegator. */
export interface MsgCancelUndelegationNFT {
  /** delegator is the bech32-encoded address of the delegator. */
  delegator: string;
  /** validator is the bech32-encoded address of the validator. */
  validator: string;
  /** creation_height defines number of the block at which undelegation was beginned. */
  creationHeight: number;
  /** token_id defines the NFT token ID. */
  tokenId: string;
  /** sub_token_ids defines list of NFT sub-token IDs. */
  subTokenIds: number[];
}

/** MsgCancelUndelegationNFTResponse */
export interface MsgCancelUndelegationNFTResponse {
}

function createBaseMsgCreateValidator(): MsgCreateValidator {
  return {
    operatorAddress: "",
    rewardAddress: "",
    consensusPubkey: undefined,
    description: undefined,
    commission: "",
    stake: undefined,
  };
}

export const MsgCreateValidator = {
  encode(message: MsgCreateValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.stake !== undefined) {
      Coin.encode(message.stake, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidator();
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
          message.stake = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateValidator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      consensusPubkey: isSet(object.consensusPubkey) ? Any.fromJSON(object.consensusPubkey) : undefined,
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
      commission: isSet(object.commission) ? String(object.commission) : "",
      stake: isSet(object.stake) ? Coin.fromJSON(object.stake) : undefined,
    };
  },

  toJSON(message: MsgCreateValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    message.consensusPubkey !== undefined &&
      (obj.consensusPubkey = message.consensusPubkey ? Any.toJSON(message.consensusPubkey) : undefined);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    message.commission !== undefined && (obj.commission = message.commission);
    message.stake !== undefined && (obj.stake = message.stake ? Coin.toJSON(message.stake) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidator>, I>>(object: I): MsgCreateValidator {
    const message = createBaseMsgCreateValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.consensusPubkey = (object.consensusPubkey !== undefined && object.consensusPubkey !== null)
      ? Any.fromPartial(object.consensusPubkey)
      : undefined;
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    message.commission = object.commission ?? "";
    message.stake = (object.stake !== undefined && object.stake !== null) ? Coin.fromPartial(object.stake) : undefined;
    return message;
  },
};

function createBaseMsgCreateValidatorResponse(): MsgCreateValidatorResponse {
  return {};
}

export const MsgCreateValidatorResponse = {
  encode(_: MsgCreateValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateValidatorResponse();
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

  fromJSON(_: any): MsgCreateValidatorResponse {
    return {};
  },

  toJSON(_: MsgCreateValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateValidatorResponse>, I>>(_: I): MsgCreateValidatorResponse {
    const message = createBaseMsgCreateValidatorResponse();
    return message;
  },
};

function createBaseMsgEditValidator(): MsgEditValidator {
  return { operatorAddress: "", rewardAddress: "", description: undefined };
}

export const MsgEditValidator = {
  encode(message: MsgEditValidator, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.rewardAddress !== "") {
      writer.uint32(18).string(message.rewardAddress);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidator();
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
          message.description = Description.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgEditValidator {
    return {
      operatorAddress: isSet(object.operatorAddress) ? String(object.operatorAddress) : "",
      rewardAddress: isSet(object.rewardAddress) ? String(object.rewardAddress) : "",
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined,
    };
  },

  toJSON(message: MsgEditValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    message.rewardAddress !== undefined && (obj.rewardAddress = message.rewardAddress);
    message.description !== undefined &&
      (obj.description = message.description ? Description.toJSON(message.description) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidator>, I>>(object: I): MsgEditValidator {
    const message = createBaseMsgEditValidator();
    message.operatorAddress = object.operatorAddress ?? "";
    message.rewardAddress = object.rewardAddress ?? "";
    message.description = (object.description !== undefined && object.description !== null)
      ? Description.fromPartial(object.description)
      : undefined;
    return message;
  },
};

function createBaseMsgEditValidatorResponse(): MsgEditValidatorResponse {
  return {};
}

export const MsgEditValidatorResponse = {
  encode(_: MsgEditValidatorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditValidatorResponse();
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

  fromJSON(_: any): MsgEditValidatorResponse {
    return {};
  },

  toJSON(_: MsgEditValidatorResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgEditValidatorResponse>, I>>(_: I): MsgEditValidatorResponse {
    const message = createBaseMsgEditValidatorResponse();
    return message;
  },
};

function createBaseMsgSetOnline(): MsgSetOnline {
  return { validator: "" };
}

export const MsgSetOnline = {
  encode(message: MsgSetOnline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOnline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOnline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOnline {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: MsgSetOnline): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOnline>, I>>(object: I): MsgSetOnline {
    const message = createBaseMsgSetOnline();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgSetOnlineResponse(): MsgSetOnlineResponse {
  return {};
}

export const MsgSetOnlineResponse = {
  encode(_: MsgSetOnlineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOnlineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOnlineResponse();
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

  fromJSON(_: any): MsgSetOnlineResponse {
    return {};
  },

  toJSON(_: MsgSetOnlineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOnlineResponse>, I>>(_: I): MsgSetOnlineResponse {
    const message = createBaseMsgSetOnlineResponse();
    return message;
  },
};

function createBaseMsgSetOffline(): MsgSetOffline {
  return { validator: "" };
}

export const MsgSetOffline = {
  encode(message: MsgSetOffline, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.validator !== "") {
      writer.uint32(10).string(message.validator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOffline {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOffline();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetOffline {
    return { validator: isSet(object.validator) ? String(object.validator) : "" };
  },

  toJSON(message: MsgSetOffline): unknown {
    const obj: any = {};
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOffline>, I>>(object: I): MsgSetOffline {
    const message = createBaseMsgSetOffline();
    message.validator = object.validator ?? "";
    return message;
  },
};

function createBaseMsgSetOfflineResponse(): MsgSetOfflineResponse {
  return {};
}

export const MsgSetOfflineResponse = {
  encode(_: MsgSetOfflineResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOfflineResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetOfflineResponse();
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

  fromJSON(_: any): MsgSetOfflineResponse {
    return {};
  },

  toJSON(_: MsgSetOfflineResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetOfflineResponse>, I>>(_: I): MsgSetOfflineResponse {
    const message = createBaseMsgSetOfflineResponse();
    return message;
  },
};

function createBaseMsgDelegate(): MsgDelegate {
  return { delegator: "", validator: "", coin: undefined };
}

export const MsgDelegate = {
  encode(message: MsgDelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegate();
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
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegate {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgDelegate): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegate>, I>>(object: I): MsgDelegate {
    const message = createBaseMsgDelegate();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgDelegateResponse(): MsgDelegateResponse {
  return {};
}

export const MsgDelegateResponse = {
  encode(_: MsgDelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateResponse();
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

  fromJSON(_: any): MsgDelegateResponse {
    return {};
  },

  toJSON(_: MsgDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateResponse>, I>>(_: I): MsgDelegateResponse {
    const message = createBaseMsgDelegateResponse();
    return message;
  },
};

function createBaseMsgDelegateNFT(): MsgDelegateNFT {
  return { delegator: "", validator: "", tokenId: "", subTokenIds: [] };
}

export const MsgDelegateNFT = {
  encode(message: MsgDelegateNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateNFT();
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
          message.tokenId = reader.string();
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

  fromJSON(object: any): MsgDelegateNFT {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgDelegateNFT): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateNFT>, I>>(object: I): MsgDelegateNFT {
    const message = createBaseMsgDelegateNFT();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgDelegateNFTResponse(): MsgDelegateNFTResponse {
  return {};
}

export const MsgDelegateNFTResponse = {
  encode(_: MsgDelegateNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateNFTResponse();
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

  fromJSON(_: any): MsgDelegateNFTResponse {
    return {};
  },

  toJSON(_: MsgDelegateNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegateNFTResponse>, I>>(_: I): MsgDelegateNFTResponse {
    const message = createBaseMsgDelegateNFTResponse();
    return message;
  },
};

function createBaseMsgRedelegate(): MsgRedelegate {
  return { delegator: "", validatorSrc: "", validatorDst: "", coin: undefined };
}

export const MsgRedelegate = {
  encode(message: MsgRedelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validatorSrc !== "") {
      writer.uint32(18).string(message.validatorSrc);
    }
    if (message.validatorDst !== "") {
      writer.uint32(26).string(message.validatorDst);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegate();
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
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedelegate {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgRedelegate): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedelegate>, I>>(object: I): MsgRedelegate {
    const message = createBaseMsgRedelegate();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgRedelegateResponse(): MsgRedelegateResponse {
  return { completionTime: undefined };
}

export const MsgRedelegateResponse = {
  encode(message: MsgRedelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedelegateResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgRedelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedelegateResponse>, I>>(object: I): MsgRedelegateResponse {
    const message = createBaseMsgRedelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgRedelegateNFT(): MsgRedelegateNFT {
  return { delegator: "", validatorSrc: "", validatorDst: "", tokenId: "", subTokenIds: [] };
}

export const MsgRedelegateNFT = {
  encode(message: MsgRedelegateNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validatorSrc !== "") {
      writer.uint32(18).string(message.validatorSrc);
    }
    if (message.validatorDst !== "") {
      writer.uint32(26).string(message.validatorDst);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    writer.uint32(42).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateNFT();
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
          message.tokenId = reader.string();
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

  fromJSON(object: any): MsgRedelegateNFT {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgRedelegateNFT): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedelegateNFT>, I>>(object: I): MsgRedelegateNFT {
    const message = createBaseMsgRedelegateNFT();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgRedelegateNFTResponse(): MsgRedelegateNFTResponse {
  return { completionTime: undefined };
}

export const MsgRedelegateNFTResponse = {
  encode(message: MsgRedelegateNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRedelegateNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedelegateNFTResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgRedelegateNFTResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRedelegateNFTResponse>, I>>(object: I): MsgRedelegateNFTResponse {
    const message = createBaseMsgRedelegateNFTResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgUndelegate(): MsgUndelegate {
  return { delegator: "", validator: "", coin: undefined };
}

export const MsgUndelegate = {
  encode(message: MsgUndelegate, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegate();
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
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegate {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgUndelegate): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegate>, I>>(object: I): MsgUndelegate {
    const message = createBaseMsgUndelegate();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgUndelegateResponse(): MsgUndelegateResponse {
  return { completionTime: undefined };
}

export const MsgUndelegateResponse = {
  encode(message: MsgUndelegateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegateResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgUndelegateResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegateResponse>, I>>(object: I): MsgUndelegateResponse {
    const message = createBaseMsgUndelegateResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgUndelegateNFT(): MsgUndelegateNFT {
  return { delegator: "", validator: "", tokenId: "", subTokenIds: [] };
}

export const MsgUndelegateNFT = {
  encode(message: MsgUndelegateNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.tokenId !== "") {
      writer.uint32(26).string(message.tokenId);
    }
    writer.uint32(34).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateNFT();
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
          message.tokenId = reader.string();
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

  fromJSON(object: any): MsgUndelegateNFT {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgUndelegateNFT): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegateNFT>, I>>(object: I): MsgUndelegateNFT {
    const message = createBaseMsgUndelegateNFT();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgUndelegateNFTResponse(): MsgUndelegateNFTResponse {
  return { completionTime: undefined };
}

export const MsgUndelegateNFTResponse = {
  encode(message: MsgUndelegateNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.completionTime !== undefined) {
      Timestamp.encode(toTimestamp(message.completionTime), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.completionTime = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegateNFTResponse {
    return { completionTime: isSet(object.completionTime) ? fromJsonTimestamp(object.completionTime) : undefined };
  },

  toJSON(message: MsgUndelegateNFTResponse): unknown {
    const obj: any = {};
    message.completionTime !== undefined && (obj.completionTime = message.completionTime.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegateNFTResponse>, I>>(object: I): MsgUndelegateNFTResponse {
    const message = createBaseMsgUndelegateNFTResponse();
    message.completionTime = object.completionTime ?? undefined;
    return message;
  },
};

function createBaseMsgCancelRedelegation(): MsgCancelRedelegation {
  return { delegator: "", validatorSrc: "", validatorDst: "", creationHeight: 0, coin: undefined };
}

export const MsgCancelRedelegation = {
  encode(message: MsgCancelRedelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRedelegation();
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
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelRedelegation {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgCancelRedelegation): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelRedelegation>, I>>(object: I): MsgCancelRedelegation {
    const message = createBaseMsgCancelRedelegation();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.creationHeight = object.creationHeight ?? 0;
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgCancelRedelegationResponse(): MsgCancelRedelegationResponse {
  return {};
}

export const MsgCancelRedelegationResponse = {
  encode(_: MsgCancelRedelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRedelegationResponse();
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

  fromJSON(_: any): MsgCancelRedelegationResponse {
    return {};
  },

  toJSON(_: MsgCancelRedelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelRedelegationResponse>, I>>(_: I): MsgCancelRedelegationResponse {
    const message = createBaseMsgCancelRedelegationResponse();
    return message;
  },
};

function createBaseMsgCancelRedelegationNFT(): MsgCancelRedelegationNFT {
  return { delegator: "", validatorSrc: "", validatorDst: "", creationHeight: 0, tokenId: "", subTokenIds: [] };
}

export const MsgCancelRedelegationNFT = {
  encode(message: MsgCancelRedelegationNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.tokenId !== "") {
      writer.uint32(42).string(message.tokenId);
    }
    writer.uint32(50).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegationNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRedelegationNFT();
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
          message.tokenId = reader.string();
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

  fromJSON(object: any): MsgCancelRedelegationNFT {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validatorSrc: isSet(object.validatorSrc) ? String(object.validatorSrc) : "",
      validatorDst: isSet(object.validatorDst) ? String(object.validatorDst) : "",
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgCancelRedelegationNFT): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validatorSrc !== undefined && (obj.validatorSrc = message.validatorSrc);
    message.validatorDst !== undefined && (obj.validatorDst = message.validatorDst);
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelRedelegationNFT>, I>>(object: I): MsgCancelRedelegationNFT {
    const message = createBaseMsgCancelRedelegationNFT();
    message.delegator = object.delegator ?? "";
    message.validatorSrc = object.validatorSrc ?? "";
    message.validatorDst = object.validatorDst ?? "";
    message.creationHeight = object.creationHeight ?? 0;
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCancelRedelegationNFTResponse(): MsgCancelRedelegationNFTResponse {
  return {};
}

export const MsgCancelRedelegationNFTResponse = {
  encode(_: MsgCancelRedelegationNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegationNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelRedelegationNFTResponse();
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

  fromJSON(_: any): MsgCancelRedelegationNFTResponse {
    return {};
  },

  toJSON(_: MsgCancelRedelegationNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelRedelegationNFTResponse>, I>>(
    _: I,
  ): MsgCancelRedelegationNFTResponse {
    const message = createBaseMsgCancelRedelegationNFTResponse();
    return message;
  },
};

function createBaseMsgCancelUndelegation(): MsgCancelUndelegation {
  return { delegator: "", validator: "", creationHeight: 0, coin: undefined };
}

export const MsgCancelUndelegation = {
  encode(message: MsgCancelUndelegation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.creationHeight !== 0) {
      writer.uint32(24).int64(message.creationHeight);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegation {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUndelegation();
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
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelUndelegation {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      coin: isSet(object.coin) ? Coin.fromJSON(object.coin) : undefined,
    };
  },

  toJSON(message: MsgCancelUndelegation): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.coin !== undefined && (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUndelegation>, I>>(object: I): MsgCancelUndelegation {
    const message = createBaseMsgCancelUndelegation();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.creationHeight = object.creationHeight ?? 0;
    message.coin = (object.coin !== undefined && object.coin !== null) ? Coin.fromPartial(object.coin) : undefined;
    return message;
  },
};

function createBaseMsgCancelUndelegationResponse(): MsgCancelUndelegationResponse {
  return {};
}

export const MsgCancelUndelegationResponse = {
  encode(_: MsgCancelUndelegationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegationResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUndelegationResponse();
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

  fromJSON(_: any): MsgCancelUndelegationResponse {
    return {};
  },

  toJSON(_: MsgCancelUndelegationResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUndelegationResponse>, I>>(_: I): MsgCancelUndelegationResponse {
    const message = createBaseMsgCancelUndelegationResponse();
    return message;
  },
};

function createBaseMsgCancelUndelegationNFT(): MsgCancelUndelegationNFT {
  return { delegator: "", validator: "", creationHeight: 0, tokenId: "", subTokenIds: [] };
}

export const MsgCancelUndelegationNFT = {
  encode(message: MsgCancelUndelegationNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.validator !== "") {
      writer.uint32(18).string(message.validator);
    }
    if (message.creationHeight !== 0) {
      writer.uint32(24).int64(message.creationHeight);
    }
    if (message.tokenId !== "") {
      writer.uint32(34).string(message.tokenId);
    }
    writer.uint32(42).fork();
    for (const v of message.subTokenIds) {
      writer.uint32(v);
    }
    writer.ldelim();
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegationNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUndelegationNFT();
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
          message.tokenId = reader.string();
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

  fromJSON(object: any): MsgCancelUndelegationNFT {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      validator: isSet(object.validator) ? String(object.validator) : "",
      creationHeight: isSet(object.creationHeight) ? Number(object.creationHeight) : 0,
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
      subTokenIds: Array.isArray(object?.subTokenIds) ? object.subTokenIds.map((e: any) => Number(e)) : [],
    };
  },

  toJSON(message: MsgCancelUndelegationNFT): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.validator !== undefined && (obj.validator = message.validator);
    message.creationHeight !== undefined && (obj.creationHeight = Math.round(message.creationHeight));
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    if (message.subTokenIds) {
      obj.subTokenIds = message.subTokenIds.map((e) => Math.round(e));
    } else {
      obj.subTokenIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUndelegationNFT>, I>>(object: I): MsgCancelUndelegationNFT {
    const message = createBaseMsgCancelUndelegationNFT();
    message.delegator = object.delegator ?? "";
    message.validator = object.validator ?? "";
    message.creationHeight = object.creationHeight ?? 0;
    message.tokenId = object.tokenId ?? "";
    message.subTokenIds = object.subTokenIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgCancelUndelegationNFTResponse(): MsgCancelUndelegationNFTResponse {
  return {};
}

export const MsgCancelUndelegationNFTResponse = {
  encode(_: MsgCancelUndelegationNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegationNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUndelegationNFTResponse();
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

  fromJSON(_: any): MsgCancelUndelegationNFTResponse {
    return {};
  },

  toJSON(_: MsgCancelUndelegationNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelUndelegationNFTResponse>, I>>(
    _: I,
  ): MsgCancelUndelegationNFTResponse {
    const message = createBaseMsgCancelUndelegationNFTResponse();
    return message;
  },
};

/** Msg defines the module Msg service. */
export interface Msg {
  /** CreateValidator defines a method for creating a new validator. */
  CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
  /** EditValidator defines a method for editing an existing validator. */
  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
  /** SetOnline defines a method for turning on a validator into the blockchain consensus. */
  SetOnline(request: MsgSetOnline): Promise<MsgSetOnlineResponse>;
  /** SetOffline defines a method for turning off a validator from the blockchain consensus. */
  SetOffline(request: MsgSetOffline): Promise<MsgSetOfflineResponse>;
  /** Delegate defines a method for performing a delegation of coins from a delegator to a validator. */
  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /** DelegateNFT defines a method for performing a delegation of NFTs from a delegator to a validator. */
  DelegateNFT(request: MsgDelegateNFT): Promise<MsgDelegateNFTResponse>;
  /** Redelegate defines a method for performing a redelegation of coins from a source validator to destination one. */
  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  /** RedelegateNFT defines a method for performing a redelegation of NFTs from a source validator to destination one. */
  RedelegateNFT(request: MsgRedelegateNFT): Promise<MsgRedelegateNFTResponse>;
  /** Undelegate defines a method for performing an undelegation of coins from a validator. */
  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /** UndelegateNFT defines a method for performing an undelegation of NFTs from a validator. */
  UndelegateNFT(request: MsgUndelegateNFT): Promise<MsgUndelegateNFTResponse>;
  /** CancelRedelegation defines a method for canceling the redelegation and delegate back the validator. */
  CancelRedelegation(request: MsgCancelRedelegation): Promise<MsgCancelRedelegationResponse>;
  /** CancelRedelegationNFT defines a method for canceling the redelegation and delegate back the validator. */
  CancelRedelegationNFT(request: MsgCancelRedelegationNFT): Promise<MsgCancelRedelegationNFTResponse>;
  /** CancelUndelegation defines a method for canceling the undelegation and delegate back to the validator. */
  CancelUndelegation(request: MsgCancelUndelegation): Promise<MsgCancelUndelegationResponse>;
  /** CancelUndelegationNFT defines a method for canceling the undelegation and delegate back to the validator. */
  CancelUndelegationNFT(request: MsgCancelUndelegationNFT): Promise<MsgCancelUndelegationNFTResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateValidator = this.CreateValidator.bind(this);
    this.EditValidator = this.EditValidator.bind(this);
    this.SetOnline = this.SetOnline.bind(this);
    this.SetOffline = this.SetOffline.bind(this);
    this.Delegate = this.Delegate.bind(this);
    this.DelegateNFT = this.DelegateNFT.bind(this);
    this.Redelegate = this.Redelegate.bind(this);
    this.RedelegateNFT = this.RedelegateNFT.bind(this);
    this.Undelegate = this.Undelegate.bind(this);
    this.UndelegateNFT = this.UndelegateNFT.bind(this);
    this.CancelRedelegation = this.CancelRedelegation.bind(this);
    this.CancelRedelegationNFT = this.CancelRedelegationNFT.bind(this);
    this.CancelUndelegation = this.CancelUndelegation.bind(this);
    this.CancelUndelegationNFT = this.CancelUndelegationNFT.bind(this);
  }
  CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse> {
    const data = MsgCreateValidator.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "CreateValidator", data);
    return promise.then((data) => MsgCreateValidatorResponse.decode(new _m0.Reader(data)));
  }

  EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse> {
    const data = MsgEditValidator.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "EditValidator", data);
    return promise.then((data) => MsgEditValidatorResponse.decode(new _m0.Reader(data)));
  }

  SetOnline(request: MsgSetOnline): Promise<MsgSetOnlineResponse> {
    const data = MsgSetOnline.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "SetOnline", data);
    return promise.then((data) => MsgSetOnlineResponse.decode(new _m0.Reader(data)));
  }

  SetOffline(request: MsgSetOffline): Promise<MsgSetOfflineResponse> {
    const data = MsgSetOffline.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "SetOffline", data);
    return promise.then((data) => MsgSetOfflineResponse.decode(new _m0.Reader(data)));
  }

  Delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "Delegate", data);
    return promise.then((data) => MsgDelegateResponse.decode(new _m0.Reader(data)));
  }

  DelegateNFT(request: MsgDelegateNFT): Promise<MsgDelegateNFTResponse> {
    const data = MsgDelegateNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "DelegateNFT", data);
    return promise.then((data) => MsgDelegateNFTResponse.decode(new _m0.Reader(data)));
  }

  Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse> {
    const data = MsgRedelegate.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "Redelegate", data);
    return promise.then((data) => MsgRedelegateResponse.decode(new _m0.Reader(data)));
  }

  RedelegateNFT(request: MsgRedelegateNFT): Promise<MsgRedelegateNFTResponse> {
    const data = MsgRedelegateNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "RedelegateNFT", data);
    return promise.then((data) => MsgRedelegateNFTResponse.decode(new _m0.Reader(data)));
  }

  Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "Undelegate", data);
    return promise.then((data) => MsgUndelegateResponse.decode(new _m0.Reader(data)));
  }

  UndelegateNFT(request: MsgUndelegateNFT): Promise<MsgUndelegateNFTResponse> {
    const data = MsgUndelegateNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "UndelegateNFT", data);
    return promise.then((data) => MsgUndelegateNFTResponse.decode(new _m0.Reader(data)));
  }

  CancelRedelegation(request: MsgCancelRedelegation): Promise<MsgCancelRedelegationResponse> {
    const data = MsgCancelRedelegation.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "CancelRedelegation", data);
    return promise.then((data) => MsgCancelRedelegationResponse.decode(new _m0.Reader(data)));
  }

  CancelRedelegationNFT(request: MsgCancelRedelegationNFT): Promise<MsgCancelRedelegationNFTResponse> {
    const data = MsgCancelRedelegationNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "CancelRedelegationNFT", data);
    return promise.then((data) => MsgCancelRedelegationNFTResponse.decode(new _m0.Reader(data)));
  }

  CancelUndelegation(request: MsgCancelUndelegation): Promise<MsgCancelUndelegationResponse> {
    const data = MsgCancelUndelegation.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "CancelUndelegation", data);
    return promise.then((data) => MsgCancelUndelegationResponse.decode(new _m0.Reader(data)));
  }

  CancelUndelegationNFT(request: MsgCancelUndelegationNFT): Promise<MsgCancelUndelegationNFTResponse> {
    const data = MsgCancelUndelegationNFT.encode(request).finish();
    const promise = this.rpc.request("decimal.validator.v1.Msg", "CancelUndelegationNFT", data);
    return promise.then((data) => MsgCancelUndelegationNFTResponse.decode(new _m0.Reader(data)));
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
