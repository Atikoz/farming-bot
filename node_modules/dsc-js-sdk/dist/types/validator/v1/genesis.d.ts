import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Delegation, Redelegation, Undelegation, Validator } from "./validator";
export declare const protobufPackage = "decimal.validator.v1";
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
    params: Params | undefined;
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        validators?: {
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
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[] | undefined;
        delegations?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] | undefined;
        undelegations?: {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
        redelegations?: {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
        lastValidatorPowers?: {
            address?: string | undefined;
            power?: number | undefined;
        }[] | undefined;
        lastTotalPower?: number | undefined;
        params?: {
            maxValidators?: number | undefined;
            maxDelegations?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            redelegationTime?: {
                seconds?: {
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
                nanos?: number | undefined;
            } | undefined;
            undelegationTime?: {
                seconds?: {
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
                nanos?: number | undefined;
            } | undefined;
        } | undefined;
        exported?: boolean | undefined;
    } & {
        validators?: ({
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
            status?: import("./validator").BondStatus | undefined;
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
            status?: import("./validator").BondStatus | undefined;
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
            } & { [K in Exclude<keyof I["validators"][number]["consensusPubkey"], keyof import("../../google/protobuf/any").Any>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["validators"][number]["description"], keyof import("./validator").Description>]: never; }) | undefined;
            commission?: string | undefined;
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        } & { [K_2 in Exclude<keyof I["validators"][number], keyof Validator>]: never; })[] & { [K_3 in Exclude<keyof I["validators"], keyof {
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
            status?: import("./validator").BondStatus | undefined;
            online?: boolean | undefined;
            jailed?: boolean | undefined;
            unbondingHeight?: number | undefined;
            unbondingTime?: Date | undefined;
            rewards?: string | undefined;
            totalRewards?: string | undefined;
        }[]>]: never; }) | undefined;
        delegations?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[] & ({
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
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
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } & {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_4 in Exclude<keyof I["delegations"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                subTokenIds?: (number[] & number[] & { [K_5 in Exclude<keyof I["delegations"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
            } & { [K_6 in Exclude<keyof I["delegations"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["delegations"][number], keyof Delegation>]: never; })[] & { [K_8 in Exclude<keyof I["delegations"], keyof {
            delegator?: string | undefined;
            validator?: string | undefined;
            stake?: {
                type?: import("./validator").StakeType | undefined;
                id?: string | undefined;
                stake?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                subTokenIds?: number[] | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        undelegations?: ({
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
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
                    type?: import("./validator").StakeType | undefined;
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
                    type?: import("./validator").StakeType | undefined;
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
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_9 in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_10 in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["undelegations"][number]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["undelegations"][number]["entries"][number], keyof import("./validator").UndelegationEntry>]: never; })[] & { [K_13 in Exclude<keyof I["undelegations"][number]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["undelegations"][number], keyof Undelegation>]: never; })[] & { [K_15 in Exclude<keyof I["undelegations"], keyof {
            delegator?: string | undefined;
            validator?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        redelegations?: ({
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
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
                    type?: import("./validator").StakeType | undefined;
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
                    type?: import("./validator").StakeType | undefined;
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
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } & {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_16 in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"]["stake"], keyof import("../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                    subTokenIds?: (number[] & number[] & { [K_17 in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
                } & { [K_18 in Exclude<keyof I["redelegations"][number]["entries"][number]["stake"], keyof import("./validator").Stake>]: never; }) | undefined;
            } & { [K_19 in Exclude<keyof I["redelegations"][number]["entries"][number], keyof import("./validator").RedelegationEntry>]: never; })[] & { [K_20 in Exclude<keyof I["redelegations"][number]["entries"], keyof {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_21 in Exclude<keyof I["redelegations"][number], keyof Redelegation>]: never; })[] & { [K_22 in Exclude<keyof I["redelegations"], keyof {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            entries?: {
                creationHeight?: number | undefined;
                completionTime?: Date | undefined;
                stake?: {
                    type?: import("./validator").StakeType | undefined;
                    id?: string | undefined;
                    stake?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    subTokenIds?: number[] | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        lastValidatorPowers?: ({
            address?: string | undefined;
            power?: number | undefined;
        }[] & ({
            address?: string | undefined;
            power?: number | undefined;
        } & {
            address?: string | undefined;
            power?: number | undefined;
        } & { [K_23 in Exclude<keyof I["lastValidatorPowers"][number], keyof LastValidatorPower>]: never; })[] & { [K_24 in Exclude<keyof I["lastValidatorPowers"], keyof {
            address?: string | undefined;
            power?: number | undefined;
        }[]>]: never; }) | undefined;
        lastTotalPower?: number | undefined;
        params?: ({
            maxValidators?: number | undefined;
            maxDelegations?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            redelegationTime?: {
                seconds?: {
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
                nanos?: number | undefined;
            } | undefined;
            undelegationTime?: {
                seconds?: {
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
                nanos?: number | undefined;
            } | undefined;
        } & {
            maxValidators?: number | undefined;
            maxDelegations?: number | undefined;
            maxEntries?: number | undefined;
            historicalEntries?: number | undefined;
            redelegationTime?: ({
                seconds?: {
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
                nanos?: number | undefined;
            } & {
                seconds?: ({
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
                } & { [K_25 in Exclude<keyof I["params"]["redelegationTime"]["seconds"], keyof Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_26 in Exclude<keyof I["params"]["redelegationTime"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
            undelegationTime?: ({
                seconds?: {
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
                nanos?: number | undefined;
            } & {
                seconds?: ({
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
                } & { [K_27 in Exclude<keyof I["params"]["undelegationTime"]["seconds"], keyof Long>]: never; }) | undefined;
                nanos?: number | undefined;
            } & { [K_28 in Exclude<keyof I["params"]["undelegationTime"], keyof import("../../google/protobuf/duration").Duration>]: never; }) | undefined;
        } & { [K_29 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
        exported?: boolean | undefined;
    } & { [K_30 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
};
export declare const LastValidatorPower: {
    encode(message: LastValidatorPower, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LastValidatorPower;
    fromJSON(object: any): LastValidatorPower;
    toJSON(message: LastValidatorPower): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        power?: number | undefined;
    } & {
        address?: string | undefined;
        power?: number | undefined;
    } & { [K in Exclude<keyof I, keyof LastValidatorPower>]: never; }>(object: I): LastValidatorPower;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
