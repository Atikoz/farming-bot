import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Transaction, Wallet } from "./multisig";
export declare const protobufPackage = "decimal.multisig.v1";
/** QueryWalletsRequest is request type for the Query/Wallets RPC method. */
export interface QueryWalletsRequest {
    owner: string;
    pagination: PageRequest | undefined;
}
/** QueryWalletsResponse is response type for the Query/Wallets RPC method. */
export interface QueryWalletsResponse {
    wallets: Wallet[];
    pagination: PageResponse | undefined;
}
/** QueryWalletRequest is request type for the Query/Wallet RPC method. */
export interface QueryWalletRequest {
    wallet: string;
}
/** QueryWalletResponse is response type for the Query/Wallet RPC method. */
export interface QueryWalletResponse {
    wallet: Wallet | undefined;
}
/** QueryTransactionsRequest is request type for the Query/Transactions RPC method. */
export interface QueryTransactionsRequest {
    wallet: string;
    pagination: PageRequest | undefined;
}
/** QueryTransactionsResponse is response type for the Query/Transactions RPC method. */
export interface QueryTransactionsResponse {
    transactions: Transaction[];
    pagination: PageResponse | undefined;
}
/** QueryTransactionRequest is request type for the Query/Transaction RPC method. */
export interface QueryTransactionRequest {
    id: string;
}
/** QueryTransactionResponse is response type for the Query/Transaction RPC method. */
export interface QueryTransactionResponse {
    transaction: Transaction | undefined;
    signers: string[];
    completed: boolean;
}
export declare const QueryWalletsRequest: {
    encode(message: QueryWalletsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWalletsRequest;
    fromJSON(object: any): QueryWalletsRequest;
    toJSON(message: QueryWalletsRequest): unknown;
    fromPartial<I extends {
        owner?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        owner?: string | undefined;
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
    } & { [K_1 in Exclude<keyof I, keyof QueryWalletsRequest>]: never; }>(object: I): QueryWalletsRequest;
};
export declare const QueryWalletsResponse: {
    encode(message: QueryWalletsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWalletsResponse;
    fromJSON(object: any): QueryWalletsResponse;
    toJSON(message: QueryWalletsResponse): unknown;
    fromPartial<I extends {
        wallets?: {
            address?: string | undefined;
            owners?: string[] | undefined;
            weights?: number[] | undefined;
            threshold?: number | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        wallets?: ({
            address?: string | undefined;
            owners?: string[] | undefined;
            weights?: number[] | undefined;
            threshold?: number | undefined;
        }[] & ({
            address?: string | undefined;
            owners?: string[] | undefined;
            weights?: number[] | undefined;
            threshold?: number | undefined;
        } & {
            address?: string | undefined;
            owners?: (string[] & string[] & { [K in Exclude<keyof I["wallets"][number]["owners"], keyof string[]>]: never; }) | undefined;
            weights?: (number[] & number[] & { [K_1 in Exclude<keyof I["wallets"][number]["weights"], keyof number[]>]: never; }) | undefined;
            threshold?: number | undefined;
        } & { [K_2 in Exclude<keyof I["wallets"][number], keyof Wallet>]: never; })[] & { [K_3 in Exclude<keyof I["wallets"], keyof {
            address?: string | undefined;
            owners?: string[] | undefined;
            weights?: number[] | undefined;
            threshold?: number | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_4 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof QueryWalletsResponse>]: never; }>(object: I): QueryWalletsResponse;
};
export declare const QueryWalletRequest: {
    encode(message: QueryWalletRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWalletRequest;
    fromJSON(object: any): QueryWalletRequest;
    toJSON(message: QueryWalletRequest): unknown;
    fromPartial<I extends {
        wallet?: string | undefined;
    } & {
        wallet?: string | undefined;
    } & { [K in Exclude<keyof I, "wallet">]: never; }>(object: I): QueryWalletRequest;
};
export declare const QueryWalletResponse: {
    encode(message: QueryWalletResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryWalletResponse;
    fromJSON(object: any): QueryWalletResponse;
    toJSON(message: QueryWalletResponse): unknown;
    fromPartial<I extends {
        wallet?: {
            address?: string | undefined;
            owners?: string[] | undefined;
            weights?: number[] | undefined;
            threshold?: number | undefined;
        } | undefined;
    } & {
        wallet?: ({
            address?: string | undefined;
            owners?: string[] | undefined;
            weights?: number[] | undefined;
            threshold?: number | undefined;
        } & {
            address?: string | undefined;
            owners?: (string[] & string[] & { [K in Exclude<keyof I["wallet"]["owners"], keyof string[]>]: never; }) | undefined;
            weights?: (number[] & number[] & { [K_1 in Exclude<keyof I["wallet"]["weights"], keyof number[]>]: never; }) | undefined;
            threshold?: number | undefined;
        } & { [K_2 in Exclude<keyof I["wallet"], keyof Wallet>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "wallet">]: never; }>(object: I): QueryWalletResponse;
};
export declare const QueryTransactionsRequest: {
    encode(message: QueryTransactionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTransactionsRequest;
    fromJSON(object: any): QueryTransactionsRequest;
    toJSON(message: QueryTransactionsRequest): unknown;
    fromPartial<I extends {
        wallet?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: number | undefined;
            limit?: number | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        wallet?: string | undefined;
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
    } & { [K_1 in Exclude<keyof I, keyof QueryTransactionsRequest>]: never; }>(object: I): QueryTransactionsRequest;
};
export declare const QueryTransactionsResponse: {
    encode(message: QueryTransactionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTransactionsResponse;
    fromJSON(object: any): QueryTransactionsResponse;
    toJSON(message: QueryTransactionsResponse): unknown;
    fromPartial<I extends {
        transactions?: {
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        transactions?: ({
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        }[] & ({
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        } & {
            id?: string | undefined;
            wallet?: string | undefined;
            message?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["transactions"][number]["message"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            createdAt?: number | undefined;
        } & { [K_1 in Exclude<keyof I["transactions"][number], keyof Transaction>]: never; })[] & { [K_2 in Exclude<keyof I["transactions"], keyof {
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryTransactionsResponse>]: never; }>(object: I): QueryTransactionsResponse;
};
export declare const QueryTransactionRequest: {
    encode(message: QueryTransactionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTransactionRequest;
    fromJSON(object: any): QueryTransactionRequest;
    toJSON(message: QueryTransactionRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): QueryTransactionRequest;
};
export declare const QueryTransactionResponse: {
    encode(message: QueryTransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryTransactionResponse;
    fromJSON(object: any): QueryTransactionResponse;
    toJSON(message: QueryTransactionResponse): unknown;
    fromPartial<I extends {
        transaction?: {
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        } | undefined;
        signers?: string[] | undefined;
        completed?: boolean | undefined;
    } & {
        transaction?: ({
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        } & {
            id?: string | undefined;
            wallet?: string | undefined;
            message?: ({
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["transaction"]["message"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            createdAt?: number | undefined;
        } & { [K_1 in Exclude<keyof I["transaction"], keyof Transaction>]: never; }) | undefined;
        signers?: (string[] & string[] & { [K_2 in Exclude<keyof I["signers"], keyof string[]>]: never; }) | undefined;
        completed?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryTransactionResponse>]: never; }>(object: I): QueryTransactionResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Retrieves existing wallets by owner address. */
    Wallets(request: QueryWalletsRequest): Promise<QueryWalletsResponse>;
    /** Retrieves existing wallet by wallet address. */
    Wallet(request: QueryWalletRequest): Promise<QueryWalletResponse>;
    /** Retrieves existing transactions by wallet address. */
    Transactions(request: QueryTransactionsRequest): Promise<QueryTransactionsResponse>;
    /** Retrieves existing transaction by id. */
    Transaction(request: QueryTransactionRequest): Promise<QueryTransactionResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Wallets(request: QueryWalletsRequest): Promise<QueryWalletsResponse>;
    Wallet(request: QueryWalletRequest): Promise<QueryWalletResponse>;
    Transactions(request: QueryTransactionsRequest): Promise<QueryTransactionsResponse>;
    Transaction(request: QueryTransactionRequest): Promise<QueryTransactionResponse>;
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
