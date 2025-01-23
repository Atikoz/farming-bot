import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Header } from "../../tendermint/types/types";
export declare const protobufPackage = "decimal.validator.v1";
/** BondStatus is the status of a validator. */
export declare enum BondStatus {
    /** BOND_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid validator status. */
    BOND_STATUS_UNSPECIFIED = 0,
    /** BOND_STATUS_UNBONDED - UNBONDED defines a validator that is not bonded. */
    BOND_STATUS_UNBONDED = 1,
    /** BOND_STATUS_UNBONDING - UNBONDING defines a validator that is unbonding. */
    BOND_STATUS_UNBONDING = 2,
    /** BOND_STATUS_BONDED - BONDED defines a validator that is bonded. */
    BOND_STATUS_BONDED = 3,
    UNRECOGNIZED = -1
}
export declare function bondStatusFromJSON(object: any): BondStatus;
export declare function bondStatusToJSON(object: BondStatus): string;
/** StakeType is the type of a delegation stake. */
export declare enum StakeType {
    /** STAKE_TYPE_UNSPECIFIED - UNSPECIFIED defines an invalid stake type. */
    STAKE_TYPE_UNSPECIFIED = 0,
    /** STAKE_TYPE_COIN - COIN defines the type for stakes in coin. */
    STAKE_TYPE_COIN = 1,
    /** STAKE_TYPE_NFT - NFT defines the type for stakes in NFT. */
    STAKE_TYPE_NFT = 2,
    UNRECOGNIZED = -1
}
export declare function stakeTypeFromJSON(object: any): StakeType;
export declare function stakeTypeToJSON(object: StakeType): string;
/** Validator defines a validator. */
export interface Validator {
    /** operator_address defines the address of the validator's operator (bech encoded in JSON). */
    operatorAddress: string;
    /** reward_address defines the address of the account for withdrawing rewards (bech encoded in JSON). */
    rewardAddress: string;
    /** consensus_pubkey is the consensus public key of the validator (as google.protobuf.Any). */
    consensusPubkey: Any | undefined;
    /** description defines the description terms for the validator. */
    description: Description | undefined;
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
    unbondingTime: Date | undefined;
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
    stake: Coin | undefined;
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
    completionTime: Date | undefined;
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
    completionTime: Date | undefined;
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
export declare const Validator: {
    encode(message: Validator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Validator;
    fromJSON(object: any): Validator;
    toJSON(message: Validator): unknown;
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
        status?: BondStatus | undefined;
        online?: boolean | undefined;
        jailed?: boolean | undefined;
        unbondingHeight?: number | undefined;
        unbondingTime?: Date | undefined;
        rewards?: string | undefined;
        totalRewards?: string | undefined;
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
        status?: BondStatus | undefined;
        online?: boolean | undefined;
        jailed?: boolean | undefined;
        unbondingHeight?: number | undefined;
        unbondingTime?: Date | undefined;
        rewards?: string | undefined;
        totalRewards?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Validator>]: never; }>(object: I): Validator;
};
export declare const ValAddresses: {
    encode(message: ValAddresses, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValAddresses;
    fromJSON(object: any): ValAddresses;
    toJSON(message: ValAddresses): unknown;
    fromPartial<I extends {
        addresses?: string[] | undefined;
    } & {
        addresses?: (string[] & string[] & { [K in Exclude<keyof I["addresses"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "addresses">]: never; }>(object: I): ValAddresses;
};
export declare const Description: {
    encode(message: Description, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Description;
    fromJSON(object: any): Description;
    toJSON(message: Description): unknown;
    fromPartial<I extends {
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
    } & { [K in Exclude<keyof I, keyof Description>]: never; }>(object: I): Description;
};
export declare const Stake: {
    encode(message: Stake, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Stake;
    fromJSON(object: any): Stake;
    toJSON(message: Stake): unknown;
    fromPartial<I extends {
        type?: StakeType | undefined;
        id?: string | undefined;
        stake?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        type?: StakeType | undefined;
        id?: string | undefined;
        stake?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["stake"], keyof Coin>]: never; }) | undefined;
        subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Stake>]: never; }>(object: I): Stake;
};
export declare const Delegation: {
    encode(message: Delegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegation;
    fromJSON(object: any): Delegation;
    toJSON(message: Delegation): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        stake?: {
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            subTokenIds?: number[] | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        stake?: ({
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            subTokenIds?: number[] | undefined;
        } & {
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Delegation>]: never; }>(object: I): Delegation;
};
export declare const Redelegation: {
    encode(message: Redelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Redelegation;
    fromJSON(object: any): Redelegation;
    toJSON(message: Redelegation): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        entries?: {
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        entries?: ({
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] & ({
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        } & {
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: ({
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } & {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["entries"][number]["stake"]["stake"], keyof Coin>]: never; }) | undefined;
                subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["entries"][number]["stake"], keyof Stake>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["entries"][number], keyof RedelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["entries"], keyof {
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Redelegation>]: never; }>(object: I): Redelegation;
};
export declare const RedelegationEntry: {
    encode(message: RedelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RedelegationEntry;
    fromJSON(object: any): RedelegationEntry;
    toJSON(message: RedelegationEntry): unknown;
    fromPartial<I extends {
        creationHeight?: number | undefined;
        completionTime?: Date | undefined;
        stake?: {
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            subTokenIds?: number[] | undefined;
        } | undefined;
    } & {
        creationHeight?: number | undefined;
        completionTime?: Date | undefined;
        stake?: ({
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            subTokenIds?: number[] | undefined;
        } & {
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof RedelegationEntry>]: never; }>(object: I): RedelegationEntry;
};
export declare const Undelegation: {
    encode(message: Undelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Undelegation;
    fromJSON(object: any): Undelegation;
    toJSON(message: Undelegation): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        entries?: {
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        delegator?: string | undefined;
        validator?: string | undefined;
        entries?: ({
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] & ({
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        } & {
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: ({
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } & {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["entries"][number]["stake"]["stake"], keyof Coin>]: never; }) | undefined;
                subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["entries"][number]["stake"], keyof Stake>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["entries"][number], keyof UndelegationEntry>]: never; })[] & { [K_4 in Exclude<keyof I["entries"], keyof {
            creationHeight?: number | undefined;
            completionTime?: Date | undefined;
            stake?: {
                type?: StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Undelegation>]: never; }>(object: I): Undelegation;
};
export declare const UndelegationEntry: {
    encode(message: UndelegationEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UndelegationEntry;
    fromJSON(object: any): UndelegationEntry;
    toJSON(message: UndelegationEntry): unknown;
    fromPartial<I extends {
        creationHeight?: number | undefined;
        completionTime?: Date | undefined;
        stake?: {
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            subTokenIds?: number[] | undefined;
        } | undefined;
    } & {
        creationHeight?: number | undefined;
        completionTime?: Date | undefined;
        stake?: ({
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            subTokenIds?: number[] | undefined;
        } & {
            type?: StakeType | undefined;
            id?: string | undefined;
            stake?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof UndelegationEntry>]: never; }>(object: I): UndelegationEntry;
};
export declare const HistoricalInfo: {
    encode(message: HistoricalInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): HistoricalInfo;
    fromJSON(object: any): HistoricalInfo;
    toJSON(message: HistoricalInfo): unknown;
    fromPartial<I extends {
        header?: {
            version?: {
                block?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                app?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
            } | undefined;
            chainId?: string | undefined;
            height?: {
                high?: number | undefined;
                low?: number | undefined;
                unsigned?: boolean | undefined;
                add?: ((addend: string | number | Long) => Long) | undefined;
                and?: ((other: string | number | Long) => Long) | undefined;
                compare?: ((other: string | number | Long) => number) | undefined;
                comp?: ((other: string | number | Long) => number) | undefined;
                divide?: ((divisor: string | number | Long) => Long) | undefined;
                div?: ((divisor: string | number | Long) => Long) | undefined;
                equals?: ((other: string | number | Long) => boolean) | undefined;
                eq?: ((other: string | number | Long) => boolean) | undefined;
                getHighBits?: (() => number) | undefined;
                getHighBitsUnsigned?: (() => number) | undefined;
                getLowBits?: (() => number) | undefined;
                getLowBitsUnsigned?: (() => number) | undefined;
                getNumBitsAbs?: (() => number) | undefined;
                greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                gt?: ((other: string | number | Long) => boolean) | undefined;
                greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                gte?: ((other: string | number | Long) => boolean) | undefined;
                ge?: ((other: string | number | Long) => boolean) | undefined;
                isEven?: (() => boolean) | undefined;
                isNegative?: (() => boolean) | undefined;
                isOdd?: (() => boolean) | undefined;
                isPositive?: (() => boolean) | undefined;
                isZero?: (() => boolean) | undefined;
                eqz?: (() => boolean) | undefined;
                lessThan?: ((other: string | number | Long) => boolean) | undefined;
                lt?: ((other: string | number | Long) => boolean) | undefined;
                lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                lte?: ((other: string | number | Long) => boolean) | undefined;
                le?: ((other: string | number | Long) => boolean) | undefined;
                modulo?: ((other: string | number | Long) => Long) | undefined;
                mod?: ((other: string | number | Long) => Long) | undefined;
                rem?: ((other: string | number | Long) => Long) | undefined;
                multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                mul?: ((multiplier: string | number | Long) => Long) | undefined;
                negate?: (() => Long) | undefined;
                neg?: (() => Long) | undefined;
                not?: (() => Long) | undefined;
                countLeadingZeros?: (() => number) | undefined;
                clz?: (() => number) | undefined;
                countTrailingZeros?: (() => number) | undefined;
                ctz?: (() => number) | undefined;
                notEquals?: ((other: string | number | Long) => boolean) | undefined;
                neq?: ((other: string | number | Long) => boolean) | undefined;
                ne?: ((other: string | number | Long) => boolean) | undefined;
                or?: ((other: string | number | Long) => Long) | undefined;
                shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                shl?: ((numBits: number | Long) => Long) | undefined;
                shiftRight?: ((numBits: number | Long) => Long) | undefined;
                shr?: ((numBits: number | Long) => Long) | undefined;
                shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                shru?: ((numBits: number | Long) => Long) | undefined;
                shr_u?: ((numBits: number | Long) => Long) | undefined;
                rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                rotl?: ((numBits: number | Long) => Long) | undefined;
                rotateRight?: ((numBits: number | Long) => Long) | undefined;
                rotr?: ((numBits: number | Long) => Long) | undefined;
                subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                toInt?: (() => number) | undefined;
                toNumber?: (() => number) | undefined;
                toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                toBytesLE?: (() => number[]) | undefined;
                toBytesBE?: (() => number[]) | undefined;
                toSigned?: (() => Long) | undefined;
                toString?: ((radix?: number | undefined) => string) | undefined;
                toUnsigned?: (() => Long) | undefined;
                xor?: ((other: string | number | Long) => Long) | undefined;
            } | undefined;
            time?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            lastBlockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } | undefined;
        valset?: {
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
            status?: BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[] | undefined;
    } & {
        header?: ({
            version?: {
                block?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                app?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
            } | undefined;
            chainId?: string | undefined;
            height?: {
                high?: number | undefined;
                low?: number | undefined;
                unsigned?: boolean | undefined;
                add?: ((addend: string | number | Long) => Long) | undefined;
                and?: ((other: string | number | Long) => Long) | undefined;
                compare?: ((other: string | number | Long) => number) | undefined;
                comp?: ((other: string | number | Long) => number) | undefined;
                divide?: ((divisor: string | number | Long) => Long) | undefined;
                div?: ((divisor: string | number | Long) => Long) | undefined;
                equals?: ((other: string | number | Long) => boolean) | undefined;
                eq?: ((other: string | number | Long) => boolean) | undefined;
                getHighBits?: (() => number) | undefined;
                getHighBitsUnsigned?: (() => number) | undefined;
                getLowBits?: (() => number) | undefined;
                getLowBitsUnsigned?: (() => number) | undefined;
                getNumBitsAbs?: (() => number) | undefined;
                greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                gt?: ((other: string | number | Long) => boolean) | undefined;
                greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                gte?: ((other: string | number | Long) => boolean) | undefined;
                ge?: ((other: string | number | Long) => boolean) | undefined;
                isEven?: (() => boolean) | undefined;
                isNegative?: (() => boolean) | undefined;
                isOdd?: (() => boolean) | undefined;
                isPositive?: (() => boolean) | undefined;
                isZero?: (() => boolean) | undefined;
                eqz?: (() => boolean) | undefined;
                lessThan?: ((other: string | number | Long) => boolean) | undefined;
                lt?: ((other: string | number | Long) => boolean) | undefined;
                lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                lte?: ((other: string | number | Long) => boolean) | undefined;
                le?: ((other: string | number | Long) => boolean) | undefined;
                modulo?: ((other: string | number | Long) => Long) | undefined;
                mod?: ((other: string | number | Long) => Long) | undefined;
                rem?: ((other: string | number | Long) => Long) | undefined;
                multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                mul?: ((multiplier: string | number | Long) => Long) | undefined;
                negate?: (() => Long) | undefined;
                neg?: (() => Long) | undefined;
                not?: (() => Long) | undefined;
                countLeadingZeros?: (() => number) | undefined;
                clz?: (() => number) | undefined;
                countTrailingZeros?: (() => number) | undefined;
                ctz?: (() => number) | undefined;
                notEquals?: ((other: string | number | Long) => boolean) | undefined;
                neq?: ((other: string | number | Long) => boolean) | undefined;
                ne?: ((other: string | number | Long) => boolean) | undefined;
                or?: ((other: string | number | Long) => Long) | undefined;
                shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                shl?: ((numBits: number | Long) => Long) | undefined;
                shiftRight?: ((numBits: number | Long) => Long) | undefined;
                shr?: ((numBits: number | Long) => Long) | undefined;
                shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                shru?: ((numBits: number | Long) => Long) | undefined;
                shr_u?: ((numBits: number | Long) => Long) | undefined;
                rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                rotl?: ((numBits: number | Long) => Long) | undefined;
                rotateRight?: ((numBits: number | Long) => Long) | undefined;
                rotr?: ((numBits: number | Long) => Long) | undefined;
                subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                toInt?: (() => number) | undefined;
                toNumber?: (() => number) | undefined;
                toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                toBytesLE?: (() => number[]) | undefined;
                toBytesBE?: (() => number[]) | undefined;
                toSigned?: (() => Long) | undefined;
                toString?: ((radix?: number | undefined) => string) | undefined;
                toUnsigned?: (() => Long) | undefined;
                xor?: ((other: string | number | Long) => Long) | undefined;
            } | undefined;
            time?: {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } | undefined;
            lastBlockId?: {
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } & {
            version?: ({
                block?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
                app?: {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } | undefined;
            } & {
                block?: ({
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & { [K in Exclude<keyof I["header"]["version"]["block"], keyof Long>]: never; }) | undefined;
                app?: ({
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & {
                    high?: number | undefined;
                    low?: number | undefined;
                    unsigned?: boolean | undefined;
                    add?: ((addend: string | number | Long) => Long) | undefined;
                    and?: ((other: string | number | Long) => Long) | undefined;
                    compare?: ((other: string | number | Long) => number) | undefined;
                    comp?: ((other: string | number | Long) => number) | undefined;
                    divide?: ((divisor: string | number | Long) => Long) | undefined;
                    div?: ((divisor: string | number | Long) => Long) | undefined;
                    equals?: ((other: string | number | Long) => boolean) | undefined;
                    eq?: ((other: string | number | Long) => boolean) | undefined;
                    getHighBits?: (() => number) | undefined;
                    getHighBitsUnsigned?: (() => number) | undefined;
                    getLowBits?: (() => number) | undefined;
                    getLowBitsUnsigned?: (() => number) | undefined;
                    getNumBitsAbs?: (() => number) | undefined;
                    greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                    gt?: ((other: string | number | Long) => boolean) | undefined;
                    greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    gte?: ((other: string | number | Long) => boolean) | undefined;
                    ge?: ((other: string | number | Long) => boolean) | undefined;
                    isEven?: (() => boolean) | undefined;
                    isNegative?: (() => boolean) | undefined;
                    isOdd?: (() => boolean) | undefined;
                    isPositive?: (() => boolean) | undefined;
                    isZero?: (() => boolean) | undefined;
                    eqz?: (() => boolean) | undefined;
                    lessThan?: ((other: string | number | Long) => boolean) | undefined;
                    lt?: ((other: string | number | Long) => boolean) | undefined;
                    lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                    lte?: ((other: string | number | Long) => boolean) | undefined;
                    le?: ((other: string | number | Long) => boolean) | undefined;
                    modulo?: ((other: string | number | Long) => Long) | undefined;
                    mod?: ((other: string | number | Long) => Long) | undefined;
                    rem?: ((other: string | number | Long) => Long) | undefined;
                    multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                    mul?: ((multiplier: string | number | Long) => Long) | undefined;
                    negate?: (() => Long) | undefined;
                    neg?: (() => Long) | undefined;
                    not?: (() => Long) | undefined;
                    countLeadingZeros?: (() => number) | undefined;
                    clz?: (() => number) | undefined;
                    countTrailingZeros?: (() => number) | undefined;
                    ctz?: (() => number) | undefined;
                    notEquals?: ((other: string | number | Long) => boolean) | undefined;
                    neq?: ((other: string | number | Long) => boolean) | undefined;
                    ne?: ((other: string | number | Long) => boolean) | undefined;
                    or?: ((other: string | number | Long) => Long) | undefined;
                    shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                    shl?: ((numBits: number | Long) => Long) | undefined;
                    shiftRight?: ((numBits: number | Long) => Long) | undefined;
                    shr?: ((numBits: number | Long) => Long) | undefined;
                    shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                    shru?: ((numBits: number | Long) => Long) | undefined;
                    shr_u?: ((numBits: number | Long) => Long) | undefined;
                    rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                    rotl?: ((numBits: number | Long) => Long) | undefined;
                    rotateRight?: ((numBits: number | Long) => Long) | undefined;
                    rotr?: ((numBits: number | Long) => Long) | undefined;
                    subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                    sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                    toInt?: (() => number) | undefined;
                    toNumber?: (() => number) | undefined;
                    toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                    toBytesLE?: (() => number[]) | undefined;
                    toBytesBE?: (() => number[]) | undefined;
                    toSigned?: (() => Long) | undefined;
                    toString?: ((radix?: number | undefined) => string) | undefined;
                    toUnsigned?: (() => Long) | undefined;
                    xor?: ((other: string | number | Long) => Long) | undefined;
                } & { [K_1 in Exclude<keyof I["header"]["version"]["app"], keyof Long>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["header"]["version"], keyof import("../../tendermint/version/types").Consensus>]: never; }) | undefined;
            chainId?: string | undefined;
            height?: ({
                high?: number | undefined;
                low?: number | undefined;
                unsigned?: boolean | undefined;
                add?: ((addend: string | number | Long) => Long) | undefined;
                and?: ((other: string | number | Long) => Long) | undefined;
                compare?: ((other: string | number | Long) => number) | undefined;
                comp?: ((other: string | number | Long) => number) | undefined;
                divide?: ((divisor: string | number | Long) => Long) | undefined;
                div?: ((divisor: string | number | Long) => Long) | undefined;
                equals?: ((other: string | number | Long) => boolean) | undefined;
                eq?: ((other: string | number | Long) => boolean) | undefined;
                getHighBits?: (() => number) | undefined;
                getHighBitsUnsigned?: (() => number) | undefined;
                getLowBits?: (() => number) | undefined;
                getLowBitsUnsigned?: (() => number) | undefined;
                getNumBitsAbs?: (() => number) | undefined;
                greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                gt?: ((other: string | number | Long) => boolean) | undefined;
                greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                gte?: ((other: string | number | Long) => boolean) | undefined;
                ge?: ((other: string | number | Long) => boolean) | undefined;
                isEven?: (() => boolean) | undefined;
                isNegative?: (() => boolean) | undefined;
                isOdd?: (() => boolean) | undefined;
                isPositive?: (() => boolean) | undefined;
                isZero?: (() => boolean) | undefined;
                eqz?: (() => boolean) | undefined;
                lessThan?: ((other: string | number | Long) => boolean) | undefined;
                lt?: ((other: string | number | Long) => boolean) | undefined;
                lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                lte?: ((other: string | number | Long) => boolean) | undefined;
                le?: ((other: string | number | Long) => boolean) | undefined;
                modulo?: ((other: string | number | Long) => Long) | undefined;
                mod?: ((other: string | number | Long) => Long) | undefined;
                rem?: ((other: string | number | Long) => Long) | undefined;
                multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                mul?: ((multiplier: string | number | Long) => Long) | undefined;
                negate?: (() => Long) | undefined;
                neg?: (() => Long) | undefined;
                not?: (() => Long) | undefined;
                countLeadingZeros?: (() => number) | undefined;
                clz?: (() => number) | undefined;
                countTrailingZeros?: (() => number) | undefined;
                ctz?: (() => number) | undefined;
                notEquals?: ((other: string | number | Long) => boolean) | undefined;
                neq?: ((other: string | number | Long) => boolean) | undefined;
                ne?: ((other: string | number | Long) => boolean) | undefined;
                or?: ((other: string | number | Long) => Long) | undefined;
                shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                shl?: ((numBits: number | Long) => Long) | undefined;
                shiftRight?: ((numBits: number | Long) => Long) | undefined;
                shr?: ((numBits: number | Long) => Long) | undefined;
                shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                shru?: ((numBits: number | Long) => Long) | undefined;
                shr_u?: ((numBits: number | Long) => Long) | undefined;
                rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                rotl?: ((numBits: number | Long) => Long) | undefined;
                rotateRight?: ((numBits: number | Long) => Long) | undefined;
                rotr?: ((numBits: number | Long) => Long) | undefined;
                subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                toInt?: (() => number) | undefined;
                toNumber?: (() => number) | undefined;
                toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                toBytesLE?: (() => number[]) | undefined;
                toBytesBE?: (() => number[]) | undefined;
                toSigned?: (() => Long) | undefined;
                toString?: ((radix?: number | undefined) => string) | undefined;
                toUnsigned?: (() => Long) | undefined;
                xor?: ((other: string | number | Long) => Long) | undefined;
            } & {
                high?: number | undefined;
                low?: number | undefined;
                unsigned?: boolean | undefined;
                add?: ((addend: string | number | Long) => Long) | undefined;
                and?: ((other: string | number | Long) => Long) | undefined;
                compare?: ((other: string | number | Long) => number) | undefined;
                comp?: ((other: string | number | Long) => number) | undefined;
                divide?: ((divisor: string | number | Long) => Long) | undefined;
                div?: ((divisor: string | number | Long) => Long) | undefined;
                equals?: ((other: string | number | Long) => boolean) | undefined;
                eq?: ((other: string | number | Long) => boolean) | undefined;
                getHighBits?: (() => number) | undefined;
                getHighBitsUnsigned?: (() => number) | undefined;
                getLowBits?: (() => number) | undefined;
                getLowBitsUnsigned?: (() => number) | undefined;
                getNumBitsAbs?: (() => number) | undefined;
                greaterThan?: ((other: string | number | Long) => boolean) | undefined;
                gt?: ((other: string | number | Long) => boolean) | undefined;
                greaterThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                gte?: ((other: string | number | Long) => boolean) | undefined;
                ge?: ((other: string | number | Long) => boolean) | undefined;
                isEven?: (() => boolean) | undefined;
                isNegative?: (() => boolean) | undefined;
                isOdd?: (() => boolean) | undefined;
                isPositive?: (() => boolean) | undefined;
                isZero?: (() => boolean) | undefined;
                eqz?: (() => boolean) | undefined;
                lessThan?: ((other: string | number | Long) => boolean) | undefined;
                lt?: ((other: string | number | Long) => boolean) | undefined;
                lessThanOrEqual?: ((other: string | number | Long) => boolean) | undefined;
                lte?: ((other: string | number | Long) => boolean) | undefined;
                le?: ((other: string | number | Long) => boolean) | undefined;
                modulo?: ((other: string | number | Long) => Long) | undefined;
                mod?: ((other: string | number | Long) => Long) | undefined;
                rem?: ((other: string | number | Long) => Long) | undefined;
                multiply?: ((multiplier: string | number | Long) => Long) | undefined;
                mul?: ((multiplier: string | number | Long) => Long) | undefined;
                negate?: (() => Long) | undefined;
                neg?: (() => Long) | undefined;
                not?: (() => Long) | undefined;
                countLeadingZeros?: (() => number) | undefined;
                clz?: (() => number) | undefined;
                countTrailingZeros?: (() => number) | undefined;
                ctz?: (() => number) | undefined;
                notEquals?: ((other: string | number | Long) => boolean) | undefined;
                neq?: ((other: string | number | Long) => boolean) | undefined;
                ne?: ((other: string | number | Long) => boolean) | undefined;
                or?: ((other: string | number | Long) => Long) | undefined;
                shiftLeft?: ((numBits: number | Long) => Long) | undefined;
                shl?: ((numBits: number | Long) => Long) | undefined;
                shiftRight?: ((numBits: number | Long) => Long) | undefined;
                shr?: ((numBits: number | Long) => Long) | undefined;
                shiftRightUnsigned?: ((numBits: number | Long) => Long) | undefined;
                shru?: ((numBits: number | Long) => Long) | undefined;
                shr_u?: ((numBits: number | Long) => Long) | undefined;
                rotateLeft?: ((numBits: number | Long) => Long) | undefined;
                rotl?: ((numBits: number | Long) => Long) | undefined;
                rotateRight?: ((numBits: number | Long) => Long) | undefined;
                rotr?: ((numBits: number | Long) => Long) | undefined;
                subtract?: ((subtrahend: string | number | Long) => Long) | undefined;
                sub?: ((subtrahend: string | number | Long) => Long) | undefined;
                toInt?: (() => number) | undefined;
                toNumber?: (() => number) | undefined;
                toBytes?: ((le?: boolean | undefined) => number[]) | undefined;
                toBytesLE?: (() => number[]) | undefined;
                toBytesBE?: (() => number[]) | undefined;
                toSigned?: (() => Long) | undefined;
                toString?: ((radix?: number | undefined) => string) | undefined;
                toUnsigned?: (() => Long) | undefined;
                xor?: ((other: string | number | Long) => Long) | undefined;
            } & { [K_3 in Exclude<keyof I["header"]["height"], keyof Long>]: never; }) | undefined;
            time?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & { [K_4 in Exclude<keyof I["header"]["time"], keyof Timestamp>]: never; }) | undefined;
            lastBlockId?: ({
                hash?: Uint8Array | undefined;
                partSetHeader?: {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } | undefined;
            } & {
                hash?: Uint8Array | undefined;
                partSetHeader?: ({
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & {
                    total?: number | undefined;
                    hash?: Uint8Array | undefined;
                } & { [K_5 in Exclude<keyof I["header"]["lastBlockId"]["partSetHeader"], keyof import("../../tendermint/types/types").PartSetHeader>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["header"]["lastBlockId"], keyof import("../../tendermint/types/types").BlockID>]: never; }) | undefined;
            lastCommitHash?: Uint8Array | undefined;
            dataHash?: Uint8Array | undefined;
            validatorsHash?: Uint8Array | undefined;
            nextValidatorsHash?: Uint8Array | undefined;
            consensusHash?: Uint8Array | undefined;
            appHash?: Uint8Array | undefined;
            lastResultsHash?: Uint8Array | undefined;
            evidenceHash?: Uint8Array | undefined;
            proposerAddress?: Uint8Array | undefined;
        } & { [K_7 in Exclude<keyof I["header"], keyof Header>]: never; }) | undefined;
        valset?: ({
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
            status?: BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[] & ({
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
            status?: BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & {
            operatorAddress?: string | undefined;
            rewardAddress?: string | undefined;
            consensusPubkey?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K_8 in Exclude<keyof I["valset"][number]["consensusPubkey"], keyof Any>]: never; }) | undefined;
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
            } & { [K_9 in Exclude<keyof I["valset"][number]["description"], keyof Description>]: never; }) | undefined;
            commission?: string | undefined;
            status?: BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & { [K_10 in Exclude<keyof I["valset"][number], keyof Validator>]: never; })[] & { [K_11 in Exclude<keyof I["valset"], keyof {
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
            status?: BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_12 in Exclude<keyof I, keyof HistoricalInfo>]: never; }>(object: I): HistoricalInfo;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
        notBondedTokens?: string | undefined;
        bondedTokens?: string | undefined;
    } & {
        notBondedTokens?: string | undefined;
        bondedTokens?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Pool>]: never; }>(object: I): Pool;
};
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
