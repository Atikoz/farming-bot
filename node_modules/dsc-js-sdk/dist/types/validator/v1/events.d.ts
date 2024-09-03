import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Description, Stake } from "./validator";
export declare const protobufPackage = "decimal.validator.v1";
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
    slash: Coin | undefined;
    /** reserve is the new NFT sub-token reserve. */
    reserve: Coin | undefined;
}
export declare const EventCreateValidator: {
    encode(message: EventCreateValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateValidator;
    fromJSON(object: any): EventCreateValidator;
    toJSON(message: EventCreateValidator): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        validator?: string | undefined;
        rewardAddress?: string | undefined;
        consensusPubkey?: string | undefined;
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
        sender?: string | undefined;
        validator?: string | undefined;
        rewardAddress?: string | undefined;
        consensusPubkey?: string | undefined;
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
        commission?: string | undefined;
        stake?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["stake"], keyof Coin>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EventCreateValidator>]: never; }>(object: I): EventCreateValidator;
};
export declare const EventEditValidator: {
    encode(message: EventEditValidator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEditValidator;
    fromJSON(object: any): EventEditValidator;
    toJSON(message: EventEditValidator): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        validator?: string | undefined;
        rewardAddress?: string | undefined;
        description?: {
            moniker?: string | undefined;
            identity?: string | undefined;
            website?: string | undefined;
            securityContact?: string | undefined;
            details?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        validator?: string | undefined;
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
    } & { [K_1 in Exclude<keyof I, keyof EventEditValidator>]: never; }>(object: I): EventEditValidator;
};
export declare const EventSetOnline: {
    encode(message: EventSetOnline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOnline;
    fromJSON(object: any): EventSetOnline;
    toJSON(message: EventSetOnline): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        validator?: string | undefined;
    } & {
        sender?: string | undefined;
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventSetOnline>]: never; }>(object: I): EventSetOnline;
};
export declare const EventSetOffline: {
    encode(message: EventSetOffline, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSetOffline;
    fromJSON(object: any): EventSetOffline;
    toJSON(message: EventSetOffline): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        validator?: string | undefined;
    } & {
        sender?: string | undefined;
        validator?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventSetOffline>]: never; }>(object: I): EventSetOffline;
};
export declare const EventDelegate: {
    encode(message: EventDelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDelegate;
    fromJSON(object: any): EventDelegate;
    toJSON(message: EventDelegate): unknown;
    fromPartial<I extends {
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
        amountBase?: string | undefined;
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
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
        amountBase?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof EventDelegate>]: never; }>(object: I): EventDelegate;
};
export declare const EventRedelegate: {
    encode(message: EventRedelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRedelegate;
    fromJSON(object: any): EventRedelegate;
    toJSON(message: EventRedelegate): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        stake?: {
            type?: import("./validator").StakeType | undefined;
            id?: string | undefined;
            stake?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            subTokenIds?: number[] | undefined;
        } | undefined;
        amountBase?: string | undefined;
        completeAt?: Date | undefined;
    } & {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
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
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
        amountBase?: string | undefined;
        completeAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I, keyof EventRedelegate>]: never; }>(object: I): EventRedelegate;
};
export declare const EventRedelegateComplete: {
    encode(message: EventRedelegateComplete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRedelegateComplete;
    fromJSON(object: any): EventRedelegateComplete;
    toJSON(message: EventRedelegateComplete): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
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
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
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
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof EventRedelegateComplete>]: never; }>(object: I): EventRedelegateComplete;
};
export declare const EventUndelegate: {
    encode(message: EventUndelegate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUndelegate;
    fromJSON(object: any): EventUndelegate;
    toJSON(message: EventUndelegate): unknown;
    fromPartial<I extends {
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
        amountBase?: string | undefined;
        completeAt?: Date | undefined;
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
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
        amountBase?: string | undefined;
        completeAt?: Date | undefined;
    } & { [K_3 in Exclude<keyof I, keyof EventUndelegate>]: never; }>(object: I): EventUndelegate;
};
export declare const EventUndelegateComplete: {
    encode(message: EventUndelegateComplete, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUndelegateComplete;
    fromJSON(object: any): EventUndelegateComplete;
    toJSON(message: EventUndelegateComplete): unknown;
    fromPartial<I extends {
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
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof EventUndelegateComplete>]: never; }>(object: I): EventUndelegateComplete;
};
export declare const EventCancelRedelegation: {
    encode(message: EventCancelRedelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelRedelegation;
    fromJSON(object: any): EventCancelRedelegation;
    toJSON(message: EventCancelRedelegation): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        creationHeight?: number | undefined;
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
        validatorSrc?: string | undefined;
        validatorDst?: string | undefined;
        creationHeight?: number | undefined;
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
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof EventCancelRedelegation>]: never; }>(object: I): EventCancelRedelegation;
};
export declare const EventCancelUndelegation: {
    encode(message: EventCancelUndelegation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelUndelegation;
    fromJSON(object: any): EventCancelUndelegation;
    toJSON(message: EventCancelUndelegation): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        validator?: string | undefined;
        creationHeight?: number | undefined;
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
        creationHeight?: number | undefined;
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
            } & { [K in Exclude<keyof I["stake"]["stake"], keyof Coin>]: never; }) | undefined;
            subTokenIds?: (number[] & number[] & { [K_1 in Exclude<keyof I["stake"]["subTokenIds"], keyof number[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["stake"], keyof Stake>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof EventCancelUndelegation>]: never; }>(object: I): EventCancelUndelegation;
};
export declare const EventEmission: {
    encode(message: EventEmission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventEmission;
    fromJSON(object: any): EventEmission;
    toJSON(message: EventEmission): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
    } & {
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, "amount">]: never; }>(object: I): EventEmission;
};
export declare const EventPayRewards: {
    encode(message: EventPayRewards, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPayRewards;
    fromJSON(object: any): EventPayRewards;
    toJSON(message: EventPayRewards): unknown;
    fromPartial<I extends {
        validators?: {
            validator?: string | undefined;
            dao?: string | undefined;
            develop?: string | undefined;
            commission?: string | undefined;
            accumulated?: string | undefined;
            delegators?: {
                delegator?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        validators?: ({
            validator?: string | undefined;
            dao?: string | undefined;
            develop?: string | undefined;
            commission?: string | undefined;
            accumulated?: string | undefined;
            delegators?: {
                delegator?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[] & ({
            validator?: string | undefined;
            dao?: string | undefined;
            develop?: string | undefined;
            commission?: string | undefined;
            accumulated?: string | undefined;
            delegators?: {
                delegator?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        } & {
            validator?: string | undefined;
            dao?: string | undefined;
            develop?: string | undefined;
            commission?: string | undefined;
            accumulated?: string | undefined;
            delegators?: ({
                delegator?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                delegator?: string | undefined;
                amount?: string | undefined;
            } & {
                delegator?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["validators"][number]["delegators"][number], keyof DelegatorReward>]: never; })[] & { [K_1 in Exclude<keyof I["validators"][number]["delegators"], keyof {
                delegator?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["validators"][number], keyof ValidatorReward>]: never; })[] & { [K_3 in Exclude<keyof I["validators"], keyof {
            validator?: string | undefined;
            dao?: string | undefined;
            develop?: string | undefined;
            commission?: string | undefined;
            accumulated?: string | undefined;
            delegators?: {
                delegator?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "validators">]: never; }>(object: I): EventPayRewards;
};
export declare const EventSlash: {
    encode(message: EventSlash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSlash;
    fromJSON(object: any): EventSlash;
    toJSON(message: EventSlash): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
        delegators?: {
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        validator?: string | undefined;
        delegators?: ({
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            coins?: ({
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] & ({
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                slash?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["delegators"][number]["coins"][number]["slash"], keyof Coin>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["delegators"][number]["coins"][number], "slash">]: never; })[] & { [K_2 in Exclude<keyof I["delegators"][number]["coins"], keyof {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            nfts?: ({
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                tokenId?: string | undefined;
                subTokens?: ({
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] & ({
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                } & {
                    id?: number | undefined;
                    slash?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"][number]["slash"], keyof Coin>]: never; }) | undefined;
                    reserve?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"][number]["reserve"], keyof Coin>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"][number], keyof SlashNFTSubtoken>]: never; })[] & { [K_6 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"], keyof {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["delegators"][number]["nfts"][number], keyof SlashNFT>]: never; })[] & { [K_8 in Exclude<keyof I["delegators"][number]["nfts"], keyof {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["delegators"][number], keyof DelegatorSlash>]: never; })[] & { [K_10 in Exclude<keyof I["delegators"], keyof {
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, keyof EventSlash>]: never; }>(object: I): EventSlash;
};
export declare const EventLiveness: {
    encode(message: EventLiveness, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventLiveness;
    fromJSON(object: any): EventLiveness;
    toJSON(message: EventLiveness): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
        consensusPubkey?: string | undefined;
        missedBlocks?: number | undefined;
    } & {
        validator?: string | undefined;
        consensusPubkey?: string | undefined;
        missedBlocks?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventLiveness>]: never; }>(object: I): EventLiveness;
};
export declare const ValidatorReward: {
    encode(message: ValidatorReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorReward;
    fromJSON(object: any): ValidatorReward;
    toJSON(message: ValidatorReward): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
        dao?: string | undefined;
        develop?: string | undefined;
        commission?: string | undefined;
        accumulated?: string | undefined;
        delegators?: {
            delegator?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        validator?: string | undefined;
        dao?: string | undefined;
        develop?: string | undefined;
        commission?: string | undefined;
        accumulated?: string | undefined;
        delegators?: ({
            delegator?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            delegator?: string | undefined;
            amount?: string | undefined;
        } & {
            delegator?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["delegators"][number], keyof DelegatorReward>]: never; })[] & { [K_1 in Exclude<keyof I["delegators"], keyof {
            delegator?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ValidatorReward>]: never; }>(object: I): ValidatorReward;
};
export declare const DelegatorReward: {
    encode(message: DelegatorReward, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorReward;
    fromJSON(object: any): DelegatorReward;
    toJSON(message: DelegatorReward): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        amount?: string | undefined;
    } & {
        delegator?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DelegatorReward>]: never; }>(object: I): DelegatorReward;
};
export declare const ValidatorSlash: {
    encode(message: ValidatorSlash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ValidatorSlash;
    fromJSON(object: any): ValidatorSlash;
    toJSON(message: ValidatorSlash): unknown;
    fromPartial<I extends {
        validator?: string | undefined;
        delegators?: {
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        validator?: string | undefined;
        delegators?: ({
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            delegator?: string | undefined;
            coins?: ({
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] & ({
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                slash?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["delegators"][number]["coins"][number]["slash"], keyof Coin>]: never; }) | undefined;
            } & { [K_1 in Exclude<keyof I["delegators"][number]["coins"][number], "slash">]: never; })[] & { [K_2 in Exclude<keyof I["delegators"][number]["coins"], keyof {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
            nfts?: ({
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                tokenId?: string | undefined;
                subTokens?: ({
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] & ({
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                } & {
                    id?: number | undefined;
                    slash?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_3 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"][number]["slash"], keyof Coin>]: never; }) | undefined;
                    reserve?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"][number]["reserve"], keyof Coin>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"][number], keyof SlashNFTSubtoken>]: never; })[] & { [K_6 in Exclude<keyof I["delegators"][number]["nfts"][number]["subTokens"], keyof {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_7 in Exclude<keyof I["delegators"][number]["nfts"][number], keyof SlashNFT>]: never; })[] & { [K_8 in Exclude<keyof I["delegators"][number]["nfts"], keyof {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I["delegators"][number], keyof DelegatorSlash>]: never; })[] & { [K_10 in Exclude<keyof I["delegators"], keyof {
            delegator?: string | undefined;
            coins?: {
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
            nfts?: {
                tokenId?: string | undefined;
                subTokens?: {
                    id?: number | undefined;
                    slash?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I, keyof ValidatorSlash>]: never; }>(object: I): ValidatorSlash;
};
export declare const DelegatorSlash: {
    encode(message: DelegatorSlash, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorSlash;
    fromJSON(object: any): DelegatorSlash;
    toJSON(message: DelegatorSlash): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        coins?: {
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
        nfts?: {
            tokenId?: string | undefined;
            subTokens?: {
                id?: number | undefined;
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] | undefined;
    } & {
        delegator?: string | undefined;
        coins?: ({
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            slash?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["coins"][number]["slash"], keyof Coin>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["coins"][number], "slash">]: never; })[] & { [K_2 in Exclude<keyof I["coins"], keyof {
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        nfts?: ({
            tokenId?: string | undefined;
            subTokens?: {
                id?: number | undefined;
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[] & ({
            tokenId?: string | undefined;
            subTokens?: {
                id?: number | undefined;
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
        } & {
            tokenId?: string | undefined;
            subTokens?: ({
                id?: number | undefined;
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] & ({
                id?: number | undefined;
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            } & {
                id?: number | undefined;
                slash?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_3 in Exclude<keyof I["nfts"][number]["subTokens"][number]["slash"], keyof Coin>]: never; }) | undefined;
                reserve?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K_4 in Exclude<keyof I["nfts"][number]["subTokens"][number]["reserve"], keyof Coin>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["nfts"][number]["subTokens"][number], keyof SlashNFTSubtoken>]: never; })[] & { [K_6 in Exclude<keyof I["nfts"][number]["subTokens"], keyof {
                id?: number | undefined;
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["nfts"][number], keyof SlashNFT>]: never; })[] & { [K_8 in Exclude<keyof I["nfts"], keyof {
            tokenId?: string | undefined;
            subTokens?: {
                id?: number | undefined;
                slash?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof DelegatorSlash>]: never; }>(object: I): DelegatorSlash;
};
export declare const SlashCoin: {
    encode(message: SlashCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SlashCoin;
    fromJSON(object: any): SlashCoin;
    toJSON(message: SlashCoin): unknown;
    fromPartial<I extends {
        slash?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        slash?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["slash"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "slash">]: never; }>(object: I): SlashCoin;
};
export declare const SlashNFT: {
    encode(message: SlashNFT, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SlashNFT;
    fromJSON(object: any): SlashNFT;
    toJSON(message: SlashNFT): unknown;
    fromPartial<I extends {
        tokenId?: string | undefined;
        subTokens?: {
            id?: number | undefined;
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reserve?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        tokenId?: string | undefined;
        subTokens?: ({
            id?: number | undefined;
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reserve?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            id?: number | undefined;
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reserve?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            id?: number | undefined;
            slash?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["subTokens"][number]["slash"], keyof Coin>]: never; }) | undefined;
            reserve?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_1 in Exclude<keyof I["subTokens"][number]["reserve"], keyof Coin>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["subTokens"][number], keyof SlashNFTSubtoken>]: never; })[] & { [K_3 in Exclude<keyof I["subTokens"], keyof {
            id?: number | undefined;
            slash?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            reserve?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof SlashNFT>]: never; }>(object: I): SlashNFT;
};
export declare const SlashNFTSubtoken: {
    encode(message: SlashNFTSubtoken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SlashNFTSubtoken;
    fromJSON(object: any): SlashNFTSubtoken;
    toJSON(message: SlashNFTSubtoken): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        slash?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        reserve?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        id?: number | undefined;
        slash?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["slash"], keyof Coin>]: never; }) | undefined;
        reserve?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["reserve"], keyof Coin>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof SlashNFTSubtoken>]: never; }>(object: I): SlashNFTSubtoken;
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
