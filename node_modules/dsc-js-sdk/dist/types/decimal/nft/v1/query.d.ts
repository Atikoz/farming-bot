import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Collection, SubToken, Token } from "./nft";
export declare const protobufPackage = "decimal.nft.v1";
/** QueryCollectionsRequest is request type for the Query/Collections RPC method. */
export interface QueryCollectionsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QueryCollectionsResponse is response type for the Query/Collections RPC method.
 * NOTE: Response does not contain any info about NFT tokens.
 */
export interface QueryCollectionsResponse {
    /** collections contains all the queried collections. */
    collections: Collection[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryCollectionsByCreatorRequest is request type for the Query/CollectionsByCreator RPC method. */
export interface QueryCollectionsByCreatorRequest {
    /** creator defines the NFT collection creator address. */
    creator: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/**
 * QueryCollectionsByCreatorResponse is response type for the Query/CollectionsByCreator RPC method.
 * NOTE: Response does not contain any info about NFT sub-tokens.
 */
export interface QueryCollectionsByCreatorResponse {
    /** collections contains all the queried collections. */
    collections: Collection[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
/** QueryCollectionRequest is request type for the Query/Collection RPC method. */
export interface QueryCollectionRequest {
    /** creator defines the NFT collection creator address. */
    creator: string;
    /** denom defines NFT collection name. */
    denom: string;
}
/**
 * QueryCollectionResponse is response type for the Query/Collection RPC method.
 * NOTE: Response does not contain any info about NFT sub-tokens.
 */
export interface QueryCollectionResponse {
    /** collection contains the queried NFT collection. */
    collection: Collection | undefined;
}
/** QueryTokenRequest is request type for the Query/Token RPC method. */
export interface QueryTokenRequest {
    /** token_id defines NFT token ID. */
    tokenId: string;
}
/**
 * QueryTokenResponse is response type for the Query/Token RPC method.
 * NOTE: Response contains info about NFT collection and full info about the NFT token with containing NFT sub-tokens.
 */
export interface QueryTokenResponse {
    /** token contains the queried NFT token. */
    token: Token | undefined;
}
/** QuerySubTokenRequest is request type for the Query/SubToken RPC method. */
export interface QuerySubTokenRequest {
    /** token_id defines NFT token ID. */
    tokenId: string;
    /** sub_token_id defines NFT sub-token ID. */
    subTokenId: string;
}
/**
 * QuerySubTokenResponse is response type for the Query/SubToken RPC method.
 * NOTE: Response contains info about single NFT sub-token.
 */
export interface QuerySubTokenResponse {
    /** sub_token contains the queried NFT sub-token. */
    subToken: SubToken | undefined;
}
export declare const QueryCollectionsRequest: {
    encode(message: QueryCollectionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsRequest;
    fromJSON(object: any): QueryCollectionsRequest;
    toJSON(message: QueryCollectionsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(object: I): QueryCollectionsRequest;
};
export declare const QueryCollectionsResponse: {
    encode(message: QueryCollectionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsResponse;
    fromJSON(object: any): QueryCollectionsResponse;
    toJSON(message: QueryCollectionsResponse): unknown;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
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
                } & { [K_2 in Exclude<keyof I["collections"][number]["tokens"][number]["subTokens"][number], keyof SubToken>]: never; })[] & { [K_3 in Exclude<keyof I["collections"][number]["tokens"][number]["subTokens"], keyof {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["collections"][number]["tokens"][number], keyof Token>]: never; })[] & { [K_5 in Exclude<keyof I["collections"][number]["tokens"], keyof {
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_8 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof QueryCollectionsResponse>]: never; }>(object: I): QueryCollectionsResponse;
};
export declare const QueryCollectionsByCreatorRequest: {
    encode(message: QueryCollectionsByCreatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsByCreatorRequest;
    fromJSON(object: any): QueryCollectionsByCreatorRequest;
    toJSON(message: QueryCollectionsByCreatorRequest): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        creator?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof QueryCollectionsByCreatorRequest>]: never; }>(object: I): QueryCollectionsByCreatorRequest;
};
export declare const QueryCollectionsByCreatorResponse: {
    encode(message: QueryCollectionsByCreatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionsByCreatorResponse;
    fromJSON(object: any): QueryCollectionsByCreatorResponse;
    toJSON(message: QueryCollectionsByCreatorResponse): unknown;
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
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
                } & { [K_2 in Exclude<keyof I["collections"][number]["tokens"][number]["subTokens"][number], keyof SubToken>]: never; })[] & { [K_3 in Exclude<keyof I["collections"][number]["tokens"][number]["subTokens"], keyof {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["collections"][number]["tokens"][number], keyof Token>]: never; })[] & { [K_5 in Exclude<keyof I["collections"][number]["tokens"], keyof {
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_8 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, keyof QueryCollectionsByCreatorResponse>]: never; }>(object: I): QueryCollectionsByCreatorResponse;
};
export declare const QueryCollectionRequest: {
    encode(message: QueryCollectionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest;
    fromJSON(object: any): QueryCollectionRequest;
    toJSON(message: QueryCollectionRequest): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        denom?: string | undefined;
    } & {
        creator?: string | undefined;
        denom?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCollectionRequest>]: never; }>(object: I): QueryCollectionRequest;
};
export declare const QueryCollectionResponse: {
    encode(message: QueryCollectionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse;
    fromJSON(object: any): QueryCollectionResponse;
    toJSON(message: QueryCollectionResponse): unknown;
    fromPartial<I extends {
        collection?: {
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
        } | undefined;
    } & {
        collection?: ({
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
                } & { [K in Exclude<keyof I["collection"]["tokens"][number]["reserve"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
                    } & { [K_1 in Exclude<keyof I["collection"]["tokens"][number]["subTokens"][number]["reserve"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
                } & { [K_2 in Exclude<keyof I["collection"]["tokens"][number]["subTokens"][number], keyof SubToken>]: never; })[] & { [K_3 in Exclude<keyof I["collection"]["tokens"][number]["subTokens"], keyof {
                    id?: number | undefined;
                    owner?: string | undefined;
                    reserve?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_4 in Exclude<keyof I["collection"]["tokens"][number], keyof Token>]: never; })[] & { [K_5 in Exclude<keyof I["collection"]["tokens"], keyof {
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
        } & { [K_6 in Exclude<keyof I["collection"], keyof Collection>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, "collection">]: never; }>(object: I): QueryCollectionResponse;
};
export declare const QueryTokenRequest: {
    encode(message: QueryTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenRequest;
    fromJSON(object: any): QueryTokenRequest;
    toJSON(message: QueryTokenRequest): unknown;
    fromPartial<I extends {
        tokenId?: string | undefined;
    } & {
        tokenId?: string | undefined;
    } & { [K in Exclude<keyof I, "tokenId">]: never; }>(object: I): QueryTokenRequest;
};
export declare const QueryTokenResponse: {
    encode(message: QueryTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTokenResponse;
    fromJSON(object: any): QueryTokenResponse;
    toJSON(message: QueryTokenResponse): unknown;
    fromPartial<I extends {
        token?: {
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
        } | undefined;
    } & {
        token?: ({
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
            } & { [K in Exclude<keyof I["token"]["reserve"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["token"]["subTokens"][number]["reserve"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["token"]["subTokens"][number], keyof SubToken>]: never; })[] & { [K_3 in Exclude<keyof I["token"]["subTokens"], keyof {
                id?: number | undefined;
                owner?: string | undefined;
                reserve?: {
                    denom?: string | undefined;
                    amount?: string | undefined;
                } | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["token"], keyof Token>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "token">]: never; }>(object: I): QueryTokenResponse;
};
export declare const QuerySubTokenRequest: {
    encode(message: QuerySubTokenRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubTokenRequest;
    fromJSON(object: any): QuerySubTokenRequest;
    toJSON(message: QuerySubTokenRequest): unknown;
    fromPartial<I extends {
        tokenId?: string | undefined;
        subTokenId?: string | undefined;
    } & {
        tokenId?: string | undefined;
        subTokenId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QuerySubTokenRequest>]: never; }>(object: I): QuerySubTokenRequest;
};
export declare const QuerySubTokenResponse: {
    encode(message: QuerySubTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySubTokenResponse;
    fromJSON(object: any): QuerySubTokenResponse;
    toJSON(message: QuerySubTokenResponse): unknown;
    fromPartial<I extends {
        subToken?: {
            id?: number | undefined;
            owner?: string | undefined;
            reserve?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        subToken?: ({
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
            } & { [K in Exclude<keyof I["subToken"]["reserve"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["subToken"], keyof SubToken>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "subToken">]: never; }>(object: I): QuerySubTokenResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /**
     * Collections queries all NFT collections.
     * Response does not contain any info about NFT tokens.
     */
    Collections(request: QueryCollectionsRequest): Promise<QueryCollectionsResponse>;
    /**
     * CollectionsByCreator queries all NFT collections created by specified creator address.
     * Response does not contain any info about NFT sub-tokens.
     */
    CollectionsByCreator(request: QueryCollectionsByCreatorRequest): Promise<QueryCollectionsByCreatorResponse>;
    /**
     * Collection queries the NFT collection by specified creator address and collection denom.
     * Response does not contain any info about NFT sub-tokens.
     */
    Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    /**
     * Token queries the NFT token by specified unique token ID.
     * Response contains full info about the NFT token with containing NFT sub-tokens.
     */
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    /**
     * SubToken queries the NFT sub-token by specified unique token ID and sub-token ID.
     * Response contains full info about the NFT sub-tokens.
     */
    SubToken(request: QuerySubTokenRequest): Promise<QuerySubTokenResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Collections(request: QueryCollectionsRequest): Promise<QueryCollectionsResponse>;
    CollectionsByCreator(request: QueryCollectionsByCreatorRequest): Promise<QueryCollectionsByCreatorResponse>;
    Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
    Token(request: QueryTokenRequest): Promise<QueryTokenResponse>;
    SubToken(request: QuerySubTokenRequest): Promise<QuerySubTokenResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
