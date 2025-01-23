import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { Swap } from "./swap";
export declare const protobufPackage = "decimal.swap.v1";
/** QueryActiveSwapsRequest is request type for the Query/ActiveSwaps RPC method. */
export interface QueryActiveSwapsRequest {
}
/** QueryActiveSwapsResponse is response type for the Query/ActiveSwaps RPC method. */
export interface QueryActiveSwapsResponse {
    swaps: Swap[];
}
/** QuerySwapRequest is request type for the Query/Swap RPC method. */
export interface QuerySwapRequest {
    hashedSecret: string;
}
/** QuerySwapResponse is response type for the Query/Swap RPC method. */
export interface QuerySwapResponse {
    swap: Swap | undefined;
}
/** QueryPoolRequest is request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
}
/** QueryPoolResponse is response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    amount: Coin[];
}
export declare const QueryActiveSwapsRequest: {
    encode(_: QueryActiveSwapsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveSwapsRequest;
    fromJSON(_: any): QueryActiveSwapsRequest;
    toJSON(_: QueryActiveSwapsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryActiveSwapsRequest;
};
export declare const QueryActiveSwapsResponse: {
    encode(message: QueryActiveSwapsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryActiveSwapsResponse;
    fromJSON(object: any): QueryActiveSwapsResponse;
    toJSON(message: QueryActiveSwapsResponse): unknown;
    fromPartial<I extends {
        swaps?: {
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        }[] | undefined;
    } & {
        swaps?: ({
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        }[] & ({
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        } & {
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        } & { [K in Exclude<keyof I["swaps"][number], keyof Swap>]: never; })[] & { [K_1 in Exclude<keyof I["swaps"], keyof {
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "swaps">]: never; }>(object: I): QueryActiveSwapsResponse;
};
export declare const QuerySwapRequest: {
    encode(message: QuerySwapRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest;
    fromJSON(object: any): QuerySwapRequest;
    toJSON(message: QuerySwapRequest): unknown;
    fromPartial<I extends {
        hashedSecret?: string | undefined;
    } & {
        hashedSecret?: string | undefined;
    } & { [K in Exclude<keyof I, "hashedSecret">]: never; }>(object: I): QuerySwapRequest;
};
export declare const QuerySwapResponse: {
    encode(message: QuerySwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse;
    fromJSON(object: any): QuerySwapResponse;
    toJSON(message: QuerySwapResponse): unknown;
    fromPartial<I extends {
        swap?: {
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        } | undefined;
    } & {
        swap?: ({
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        } & {
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        } & { [K in Exclude<keyof I["swap"], keyof Swap>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "swap">]: never; }>(object: I): QuerySwapResponse;
};
export declare const QueryPoolRequest: {
    encode(_: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(_: any): QueryPoolRequest;
    toJSON(_: QueryPoolRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial<I extends {
        amount?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        amount?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["amount"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["amount"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "amount">]: never; }>(object: I): QueryPoolResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** ActiveSwaps queries all active cross-chain swaps. */
    ActiveSwaps(request: QueryActiveSwapsRequest): Promise<QueryActiveSwapsResponse>;
    /** Swap queries existing cross-chain swap by hashed secret. */
    Swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    /** Pool queries amount of coins stored in the swap pool. */
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    ActiveSwaps(request: QueryActiveSwapsRequest): Promise<QueryActiveSwapsResponse>;
    Swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
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
