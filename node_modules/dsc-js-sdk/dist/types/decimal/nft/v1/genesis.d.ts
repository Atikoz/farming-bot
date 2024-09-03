import * as _m0 from "protobufjs/minimal";
import { Collection } from "./nft";
import { Params } from "./params";
export declare const protobufPackage = "decimal.nft.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** collections defines all existing NFT collections (including tokens and sub-tokens). */
    collections: Collection[];
    /** params defines all the module's parameters. */
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        collections?: {
            creator?: string | undefined;
            denom?: string | undefined;
            supply?: number | undefined;
            tokens?: {
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] | undefined;
        params?: {
            maxCollectionSize?: number | undefined;
            maxTokenQuantity?: number | undefined;
            minReserveAmount?: string | undefined;
        } | undefined;
    } & {
        collections?: ({
            creator?: string | undefined;
            denom?: string | undefined;
            supply?: number | undefined;
            tokens?: {
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[] & ({
            creator?: string | undefined;
            denom?: string | undefined;
            supply?: number | undefined;
            tokens?: {
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        } & {
            creator?: string | undefined;
            denom?: string | undefined;
            supply?: number | undefined;
            tokens?: ({
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] & ({
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            } & {
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: ({
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } & { [K in Exclude<keyof I["collections"][number]["tokens"][number]["reserve"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: ({
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] & ({
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                } & {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & { [K_1 in Exclude<keyof I["collections"][number]["tokens"][number]["subTokens"][number]["reserve"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["collections"][number]["tokens"][number]["subTokens"][number], keyof import("./nft").SubToken>]: never; })[] & { [K_3 in Exclude<keyof I["collections"][number]["tokens"][number]["subTokens"], keyof {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["collections"][number]["tokens"][number], keyof import("./nft").Token>]: never; })[] & { [K_5 in Exclude<keyof I["collections"][number]["tokens"], keyof {
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I["collections"][number], keyof Collection>]: never; })[] & { [K_7 in Exclude<keyof I["collections"], keyof {
            creator?: string | undefined;
            denom?: string | undefined;
            supply?: number | undefined;
            tokens?: {
                creator?: string | undefined;
                denom?: string | undefined;
                id?: string | undefined;
                uri?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
                allowMint?: boolean | undefined;
                minted?: number | undefined;
                burnt?: number | undefined;
                subTokens?: {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[] | undefined;
            }[] | undefined;
        }[]>]: never; }) | undefined;
        params?: ({
            maxCollectionSize?: number | undefined;
            maxTokenQuantity?: number | undefined;
            minReserveAmount?: string | undefined;
        } & {
            maxCollectionSize?: number | undefined;
            maxTokenQuantity?: number | undefined;
            minReserveAmount?: string | undefined;
        } & { [K_8 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
