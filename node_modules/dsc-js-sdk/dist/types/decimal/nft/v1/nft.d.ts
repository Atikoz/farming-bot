import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "decimal.nft.v1";
/** Collection defines NFT collection which is just a set of NFT tokens. */
export interface Collection {
    /** creator defines address of the NFT collection creator. */
    creator: string;
    /** denom defines the NFT collection name. */
    denom: string;
    /** supply defines total count of NFT tokens containing in the collection. */
    supply: number;
    /** tokens defines the list of NFT tokens containing in the NFT collection. */
    tokens: Token[];
}
/** CollectionCounter defines object containing counter of minted NFT tokens in the collection. */
export interface CollectionCounter {
    /** supply defines total count of minted NFT tokens in the collection. */
    supply: number;
}
/** Token defines NFT token. */
export interface Token {
    /** creator defines address of the NFT collection creator. */
    creator: string;
    /** denom defines the NFT collection name. */
    denom: string;
    /** id defines unique NFT token ID. */
    id: string;
    /** uri defines URI to the NFT token metadata. */
    uri: string;
    /** reserve defines default reserve of each minted NFT sub-token. */
    reserve: Coin | undefined;
    /** allow_mint defines ability to mint additional NFT sub-tokens. */
    allowMint: boolean;
    /** minted defines total count of minted NFT sub-tokens. */
    minted: number;
    /** burnt defines total count of burnt NFT sub-tokens. */
    burnt: number;
    /** sub_tokens defines the list of NFT sub-tokens existing in the NFT token. */
    subTokens: SubToken[];
}
/** TokenCounter defines object containing counters of minted and burnt NFT sub-tokens. */
export interface TokenCounter {
    /** minted defines total count of minted NFT sub-tokens. */
    minted: number;
    /** burnt defines total count of burnt NFT sub-tokens. */
    burnt: number;
}
/** SubToken defines NFT sub-token. */
export interface SubToken {
    /** id defines NFT sub-token internal ID in the parent NFT token. */
    id: number;
    /** owner defines address of the current owner of the NFT sub-token. */
    owner: string;
    /** reserve defines reserve of the NFT sub-token. */
    reserve: Coin | undefined;
}
export declare const Collection: {
    encode(message: Collection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Collection;
    fromJSON(object: any): Collection;
    toJSON(message: Collection): unknown;
    fromPartial<I extends {
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
            } & { [K in Exclude<keyof I["tokens"][number]["reserve"], keyof Coin>]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["tokens"][number]["subTokens"][number]["reserve"], keyof Coin>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["tokens"][number]["subTokens"][number], keyof SubToken>]: never; })[] & { [K_3 in Exclude<keyof I["tokens"][number]["subTokens"], keyof {
                id?: number | undefined;
                owner?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["tokens"][number], keyof Token>]: never; })[] & { [K_5 in Exclude<keyof I["tokens"], keyof {
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
    } & { [K_6 in Exclude<keyof I, keyof Collection>]: never; }>(object: I): Collection;
};
export declare const CollectionCounter: {
    encode(message: CollectionCounter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CollectionCounter;
    fromJSON(object: any): CollectionCounter;
    toJSON(message: CollectionCounter): unknown;
    fromPartial<I extends {
        supply?: number | undefined;
    } & {
        supply?: number | undefined;
    } & { [K in Exclude<keyof I, "supply">]: never; }>(object: I): CollectionCounter;
};
export declare const Token: {
    encode(message: Token, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Token;
    fromJSON(object: any): Token;
    toJSON(message: Token): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["reserve"], keyof Coin>]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["subTokens"][number]["reserve"], keyof Coin>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["subTokens"][number], keyof SubToken>]: never; })[] & { [K_3 in Exclude<keyof I["subTokens"], keyof {
            id?: number | undefined;
            owner?: string | undefined;
            reserve?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Token>]: never; }>(object: I): Token;
};
export declare const TokenCounter: {
    encode(message: TokenCounter, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): TokenCounter;
    fromJSON(object: any): TokenCounter;
    toJSON(message: TokenCounter): unknown;
    fromPartial<I extends {
        minted?: number | undefined;
        burnt?: number | undefined;
    } & {
        minted?: number | undefined;
        burnt?: number | undefined;
    } & { [K in Exclude<keyof I, keyof TokenCounter>]: never; }>(object: I): TokenCounter;
};
export declare const SubToken: {
    encode(message: SubToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SubToken;
    fromJSON(object: any): SubToken;
    toJSON(message: SubToken): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["reserve"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof SubToken>]: never; }>(object: I): SubToken;
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
