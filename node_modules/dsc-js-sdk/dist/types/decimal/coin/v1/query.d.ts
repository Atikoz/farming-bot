import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Check, Coin } from "./coin";
import { Params } from "./params";
export declare const protobufPackage = "decimal.coin.v1";
/** QueryCoinsRequest is request type for the Query/Coins RPC method. */
export interface QueryCoinsRequest {
    pagination: PageRequest | undefined;
}
/** QueryCoinsResponse is response type for the Query/Coins RPC method. */
export interface QueryCoinsResponse {
    coins: Coin[];
    pagination: PageResponse | undefined;
}
/** QueryCoinRequest is request type for the Query/Coin RPC method. */
export interface QueryCoinRequest {
    denom: string;
}
/** QueryCoinResponse is response type for the Query/Coin RPC method. */
export interface QueryCoinResponse {
    coin: Coin | undefined;
}
/** QueryChecksRequest is request type for the Query/Checks RPC method. */
export interface QueryChecksRequest {
    pagination: PageRequest | undefined;
}
/** QueryChecksResponse is response type for the Query/Checks RPC method. */
export interface QueryChecksResponse {
    checks: Check[];
    pagination: PageResponse | undefined;
}
/** QueryCheckRequest is request type for the Query/Check RPC method. */
export interface QueryCheckRequest {
    hash: Uint8Array;
}
/** QueryCheckResponse is response type for the Query/Check RPC method. */
export interface QueryCheckResponse {
    check: Check | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params | undefined;
}
export declare const QueryCoinsRequest: {
    encode(message: QueryCoinsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinsRequest;
    fromJSON(object: any): QueryCoinsRequest;
    toJSON(message: QueryCoinsRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(object: I): QueryCoinsRequest;
};
export declare const QueryCoinsResponse: {
    encode(message: QueryCoinsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinsResponse;
    fromJSON(object: any): QueryCoinsResponse;
    toJSON(message: QueryCoinsResponse): unknown;
    fromPartial<I extends {
        coins?: {
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        coins?: ({
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        } & {
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        } & { [K in Exclude<keyof I["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryCoinsResponse>]: never; }>(object: I): QueryCoinsResponse;
};
export declare const QueryCoinRequest: {
    encode(message: QueryCoinRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinRequest;
    fromJSON(object: any): QueryCoinRequest;
    toJSON(message: QueryCoinRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
    } & {
        denom?: string | undefined;
    } & { [K in Exclude<keyof I, "denom">]: never; }>(object: I): QueryCoinRequest;
};
export declare const QueryCoinResponse: {
    encode(message: QueryCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinResponse;
    fromJSON(object: any): QueryCoinResponse;
    toJSON(message: QueryCoinResponse): unknown;
    fromPartial<I extends {
        coin?: {
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        } | undefined;
    } & {
        coin?: ({
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        } & {
            denom?: string | undefined;
            title?: string | undefined;
            creator?: string | undefined;
            crr?: number | undefined;
            limitVolume?: string | undefined;
            identity?: string | undefined;
            volume?: string | undefined;
            reserve?: string | undefined;
            minVolume?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "coin">]: never; }>(object: I): QueryCoinResponse;
};
export declare const QueryChecksRequest: {
    encode(message: QueryChecksRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChecksRequest;
    fromJSON(object: any): QueryChecksRequest;
    toJSON(message: QueryChecksRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(object: I): QueryChecksRequest;
};
export declare const QueryChecksResponse: {
    encode(message: QueryChecksResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryChecksResponse;
    fromJSON(object: any): QueryChecksResponse;
    toJSON(message: QueryChecksResponse): unknown;
    fromPartial<I extends {
        checks?: {
            chainId?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        checks?: ({
            chainId?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        }[] & ({
            chainId?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        } & {
            chainId?: string | undefined;
            coin?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["checks"][number]["coin"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        } & { [K_1 in Exclude<keyof I["checks"][number], keyof Check>]: never; })[] & { [K_2 in Exclude<keyof I["checks"], keyof {
            chainId?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryChecksResponse>]: never; }>(object: I): QueryChecksResponse;
};
export declare const QueryCheckRequest: {
    encode(message: QueryCheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckRequest;
    fromJSON(object: any): QueryCheckRequest;
    toJSON(message: QueryCheckRequest): unknown;
    fromPartial<I extends {
        hash?: Uint8Array | undefined;
    } & {
        hash?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "hash">]: never; }>(object: I): QueryCheckRequest;
};
export declare const QueryCheckResponse: {
    encode(message: QueryCheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckResponse;
    fromJSON(object: any): QueryCheckResponse;
    toJSON(message: QueryCheckResponse): unknown;
    fromPartial<I extends {
        check?: {
            chainId?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        } | undefined;
    } & {
        check?: ({
            chainId?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        } & {
            chainId?: string | undefined;
            coin?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["check"]["coin"], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
            nonce?: Uint8Array | undefined;
            dueBlock?: number | undefined;
            lock?: Uint8Array | undefined;
            v?: string | undefined;
            r?: string | undefined;
            s?: string | undefined;
        } & { [K_1 in Exclude<keyof I["check"], keyof Check>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "check">]: never; }>(object: I): QueryCheckResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            baseDenom?: string | undefined;
            baseTitle?: string | undefined;
            baseVolume?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            baseDenom?: string | undefined;
            baseTitle?: string | undefined;
            baseVolume?: string | undefined;
        } & {
            baseDenom?: string | undefined;
            baseTitle?: string | undefined;
            baseVolume?: string | undefined;
        } & { [K in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(object: I): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Coins queries all existing coins. */
    Coins(request: QueryCoinsRequest): Promise<QueryCoinsResponse>;
    /** Coin queries existing coin by specified denom. */
    Coin(request: QueryCoinRequest): Promise<QueryCoinResponse>;
    /** Checks queries all redeemed checks. */
    Checks(request: QueryChecksRequest): Promise<QueryChecksResponse>;
    /** Check queries redeemed check by specified hash. */
    Check(request: QueryCheckRequest): Promise<QueryCheckResponse>;
    /** Params queries the module params. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Coins(request: QueryCoinsRequest): Promise<QueryCoinsResponse>;
    Coin(request: QueryCoinRequest): Promise<QueryCoinResponse>;
    Checks(request: QueryChecksRequest): Promise<QueryChecksResponse>;
    Check(request: QueryCheckRequest): Promise<QueryCheckResponse>;
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
