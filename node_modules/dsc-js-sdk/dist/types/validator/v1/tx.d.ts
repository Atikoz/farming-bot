import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
import { Description } from "./validator";
export declare const protobufPackage = "decimal.validator.v1";
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
export declare const MsgCreateValidator: {
    encode(message: MsgCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidator;
    fromJSON(object: any): MsgCreateValidator;
    toJSON(message: MsgCreateValidator): unknown;
    fromPartial<I extends {
        operatorAddress?: string | undefined;
        rewardAddress?: string | undefined;
        consensusPubkey?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            securityContact?: string | undefined;
            details?: string | undefined;
        } | undefined;
        commission?: string | undefined;
        stake?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        operatorAddress?: string | undefined;
        rewardAddress?: string | undefined;
        consensusPubkey?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["consensusPubkey"], keyof Any>]: never; }) | undefined;
        description?: ({
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            securityContact?: string | undefined;
            details?: string | undefined;
        } & {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            securityContact?: string | undefined;
            details?: string | undefined;
        } & { [K_1 in Exclude<keyof I["description"], keyof Description>]: never; }) | undefined;
        commission?: string | undefined;
        stake?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Coin>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgCreateValidator>]: never; }>(object: I): MsgCreateValidator;
};
export declare const MsgCreateValidatorResponse: {
    encode(_: MsgCreateValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateValidatorResponse;
    fromJSON(_: any): MsgCreateValidatorResponse;
    toJSON(_: MsgCreateValidatorResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCreateValidatorResponse;
};
export declare const MsgEditValidator: {
    encode(message: MsgEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidator;
    fromJSON(object: any): MsgEditValidator;
    toJSON(message: MsgEditValidator): unknown;
    fromPartial<I extends {
        operatorAddress?: string | undefined;
        rewardAddress?: string | undefined;
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            securityContact?: string | undefined;
            details?: string | undefined;
        } | undefined;
    } & {
        operatorAddress?: string | undefined;
        rewardAddress?: string | undefined;
        description?: ({
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            securityContact?: string | undefined;
            details?: string | undefined;
        } & {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            securityContact?: string | undefined;
            details?: string | undefined;
        } & { [K in Exclude<keyof I["description"], keyof Description>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgEditValidator>]: never; }>(object: I): MsgEditValidator;
};
export declare const MsgEditValidatorResponse: {
    encode(_: MsgEditValidatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgEditValidatorResponse;
    fromJSON(_: any): MsgEditValidatorResponse;
    toJSON(_: MsgEditValidatorResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgEditValidatorResponse;
};
export declare const MsgSetOnline: {
    encode(message: MsgSetOnline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOnline;
    fromJSON(object: any): MsgSetOnline;
    toJSON(message: MsgSetOnline): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
    } & {
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, "validator">]: never; }>(object: I): MsgSetOnline;
};
export declare const MsgSetOnlineResponse: {
    encode(_: MsgSetOnlineResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOnlineResponse;
    fromJSON(_: any): MsgSetOnlineResponse;
    toJSON(_: MsgSetOnlineResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSetOnlineResponse;
};
export declare const MsgSetOffline: {
    encode(message: MsgSetOffline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOffline;
    fromJSON(object: any): MsgSetOffline;
    toJSON(message: MsgSetOffline): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
    } & {
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, "validator">]: never; }>(object: I): MsgSetOffline;
};
export declare const MsgSetOfflineResponse: {
    encode(_: MsgSetOfflineResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetOfflineResponse;
    fromJSON(_: any): MsgSetOfflineResponse;
    toJSON(_: MsgSetOfflineResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSetOfflineResponse;
};
export declare const MsgDelegate: {
    encode(message: MsgDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegate;
    fromJSON(object: any): MsgDelegate;
    toJSON(message: MsgDelegate): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgDelegate>]: never; }>(object: I): MsgDelegate;
};
export declare const MsgDelegateResponse: {
    encode(_: MsgDelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateResponse;
    fromJSON(_: any): MsgDelegateResponse;
    toJSON(_: MsgDelegateResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgDelegateResponse;
};
export declare const MsgDelegateNFT: {
    encode(message: MsgDelegateNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateNFT;
    fromJSON(object: any): MsgDelegateNFT;
    toJSON(message: MsgDelegateNFT): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgDelegateNFT>]: never; }>(object: I): MsgDelegateNFT;
};
export declare const MsgDelegateNFTResponse: {
    encode(_: MsgDelegateNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegateNFTResponse;
    fromJSON(_: any): MsgDelegateNFTResponse;
    toJSON(_: MsgDelegateNFTResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgDelegateNFTResponse;
};
export declare const MsgRedelegate: {
    encode(message: MsgRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegate;
    fromJSON(object: any): MsgRedelegate;
    toJSON(message: MsgRedelegate): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgRedelegate>]: never; }>(object: I): MsgRedelegate;
};
export declare const MsgRedelegateResponse: {
    encode(message: MsgRedelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateResponse;
    fromJSON(object: any): MsgRedelegateResponse;
    toJSON(message: MsgRedelegateResponse): unknown;
    fromPartial<I extends {
        completionTime?: Date | undefined;
    } & {
        completionTime?: Date | undefined;
    } & { [K in Exclude<keyof I, "completionTime">]: never; }>(object: I): MsgRedelegateResponse;
};
export declare const MsgRedelegateNFT: {
    encode(message: MsgRedelegateNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateNFT;
    fromJSON(object: any): MsgRedelegateNFT;
    toJSON(message: MsgRedelegateNFT): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgRedelegateNFT>]: never; }>(object: I): MsgRedelegateNFT;
};
export declare const MsgRedelegateNFTResponse: {
    encode(message: MsgRedelegateNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedelegateNFTResponse;
    fromJSON(object: any): MsgRedelegateNFTResponse;
    toJSON(message: MsgRedelegateNFTResponse): unknown;
    fromPartial<I extends {
        completionTime?: Date | undefined;
    } & {
        completionTime?: Date | undefined;
    } & { [K in Exclude<keyof I, "completionTime">]: never; }>(object: I): MsgRedelegateNFTResponse;
};
export declare const MsgUndelegate: {
    encode(message: MsgUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegate;
    fromJSON(object: any): MsgUndelegate;
    toJSON(message: MsgUndelegate): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgUndelegate>]: never; }>(object: I): MsgUndelegate;
};
export declare const MsgUndelegateResponse: {
    encode(message: MsgUndelegateResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateResponse;
    fromJSON(object: any): MsgUndelegateResponse;
    toJSON(message: MsgUndelegateResponse): unknown;
    fromPartial<I extends {
        completionTime?: Date | undefined;
    } & {
        completionTime?: Date | undefined;
    } & { [K in Exclude<keyof I, "completionTime">]: never; }>(object: I): MsgUndelegateResponse;
};
export declare const MsgUndelegateNFT: {
    encode(message: MsgUndelegateNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateNFT;
    fromJSON(object: any): MsgUndelegateNFT;
    toJSON(message: MsgUndelegateNFT): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgUndelegateNFT>]: never; }>(object: I): MsgUndelegateNFT;
};
export declare const MsgUndelegateNFTResponse: {
    encode(message: MsgUndelegateNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegateNFTResponse;
    fromJSON(object: any): MsgUndelegateNFTResponse;
    toJSON(message: MsgUndelegateNFTResponse): unknown;
    fromPartial<I extends {
        completionTime?: Date | undefined;
    } & {
        completionTime?: Date | undefined;
    } & { [K in Exclude<keyof I, "completionTime">]: never; }>(object: I): MsgUndelegateNFTResponse;
};
export declare const MsgCancelRedelegation: {
    encode(message: MsgCancelRedelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegation;
    fromJSON(object: any): MsgCancelRedelegation;
    toJSON(message: MsgCancelRedelegation): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        creationHeight?: number | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        creationHeight?: number | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgCancelRedelegation>]: never; }>(object: I): MsgCancelRedelegation;
};
export declare const MsgCancelRedelegationResponse: {
    encode(_: MsgCancelRedelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegationResponse;
    fromJSON(_: any): MsgCancelRedelegationResponse;
    toJSON(_: MsgCancelRedelegationResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCancelRedelegationResponse;
};
export declare const MsgCancelRedelegationNFT: {
    encode(message: MsgCancelRedelegationNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegationNFT;
    fromJSON(object: any): MsgCancelRedelegationNFT;
    toJSON(message: MsgCancelRedelegationNFT): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        creationHeight?: number | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        creationHeight?: number | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgCancelRedelegationNFT>]: never; }>(object: I): MsgCancelRedelegationNFT;
};
export declare const MsgCancelRedelegationNFTResponse: {
    encode(_: MsgCancelRedelegationNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelRedelegationNFTResponse;
    fromJSON(_: any): MsgCancelRedelegationNFTResponse;
    toJSON(_: MsgCancelRedelegationNFTResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCancelRedelegationNFTResponse;
};
export declare const MsgCancelUndelegation: {
    encode(message: MsgCancelUndelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegation;
    fromJSON(object: any): MsgCancelUndelegation;
    toJSON(message: MsgCancelUndelegation): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        creationHeight?: number | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        creationHeight?: number | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgCancelUndelegation>]: never; }>(object: I): MsgCancelUndelegation;
};
export declare const MsgCancelUndelegationResponse: {
    encode(_: MsgCancelUndelegationResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegationResponse;
    fromJSON(_: any): MsgCancelUndelegationResponse;
    toJSON(_: MsgCancelUndelegationResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCancelUndelegationResponse;
};
export declare const MsgCancelUndelegationNFT: {
    encode(message: MsgCancelUndelegationNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegationNFT;
    fromJSON(object: any): MsgCancelUndelegationNFT;
    toJSON(message: MsgCancelUndelegationNFT): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        creationHeight?: number | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        creationHeight?: number | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgCancelUndelegationNFT>]: never; }>(object: I): MsgCancelUndelegationNFT;
};
export declare const MsgCancelUndelegationNFTResponse: {
    encode(_: MsgCancelUndelegationNFTResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelUndelegationNFTResponse;
    fromJSON(_: any): MsgCancelUndelegationNFTResponse;
    toJSON(_: MsgCancelUndelegationNFTResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCancelUndelegationNFTResponse;
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateValidator(request: MsgCreateValidator): Promise<MsgCreateValidatorResponse>;
    EditValidator(request: MsgEditValidator): Promise<MsgEditValidatorResponse>;
    SetOnline(request: MsgSetOnline): Promise<MsgSetOnlineResponse>;
    SetOffline(request: MsgSetOffline): Promise<MsgSetOfflineResponse>;
    Delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
    DelegateNFT(request: MsgDelegateNFT): Promise<MsgDelegateNFTResponse>;
    Redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
    RedelegateNFT(request: MsgRedelegateNFT): Promise<MsgRedelegateNFTResponse>;
    Undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
    UndelegateNFT(request: MsgUndelegateNFT): Promise<MsgUndelegateNFTResponse>;
    CancelRedelegation(request: MsgCancelRedelegation): Promise<MsgCancelRedelegationResponse>;
    CancelRedelegationNFT(request: MsgCancelRedelegationNFT): Promise<MsgCancelRedelegationNFTResponse>;
    CancelUndelegation(request: MsgCancelUndelegation): Promise<MsgCancelUndelegationResponse>;
    CancelUndelegationNFT(request: MsgCancelUndelegationNFT): Promise<MsgCancelUndelegationNFTResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
