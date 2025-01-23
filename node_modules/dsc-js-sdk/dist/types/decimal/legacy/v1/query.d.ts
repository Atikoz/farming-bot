import * as _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
import { Record } from "./legacy";
export declare const protobufPackage = "decimal.legacy.v1";
/** QueryRecordsRequest is request type for the Query/Records RPC method. */
export interface QueryRecordsRequest {
    pagination: PageRequest | undefined;
}
/** QueryRecordsResponse is response type for the Query/Records RPC method. */
export interface QueryRecordsResponse {
    records: Record[];
    pagination: PageResponse | undefined;
}
/** QueryRecordRequest is request type for the Query/Record RPC method. */
export interface QueryRecordRequest {
    /** legacy_address defines legacy account address to found out the legacy record. */
    legacyAddress: string;
}
/** QueryRecordResponse is response type for the Query/Record RPC method. */
export interface QueryRecordResponse {
    /** record defines legacy record found by the request. */
    record: Record | undefined;
}
/** QueryCheckRequest is request type for the Query/Check RPC method. */
export interface QueryCheckRequest {
    /** pubkey defines account public key as the proof of legacy address authority. */
    pubkey: Uint8Array;
}
/** QueryCheckResponse is response type for the Query/Check RPC method. */
export interface QueryCheckResponse {
    /** record defines legacy record found by the request. */
    record: Record | undefined;
}
export declare const QueryRecordsRequest: {
    encode(message: QueryRecordsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsRequest;
    fromJSON(object: any): QueryRecordsRequest;
    toJSON(message: QueryRecordsRequest): unknown;
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
    } & { [K_1 in Exclude<keyof I, "pagination">]: never; }>(object: I): QueryRecordsRequest;
};
export declare const QueryRecordsResponse: {
    encode(message: QueryRecordsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordsResponse;
    fromJSON(object: any): QueryRecordsResponse;
    toJSON(message: QueryRecordsResponse): unknown;
    fromPartial<I extends {
        records?: {
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } | undefined;
    } & {
        records?: ({
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        }[] & ({
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        } & {
            legacyAddress?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["records"][number]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["records"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            wallets?: (string[] & string[] & { [K_2 in Exclude<keyof I["records"][number]["wallets"], keyof string[]>]: never; }) | undefined;
            nfts?: (string[] & string[] & { [K_3 in Exclude<keyof I["records"][number]["nfts"], keyof string[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["records"][number], keyof Record>]: never; })[] & { [K_5 in Exclude<keyof I["records"], keyof {
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: number | undefined;
        } & { [K_6 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof QueryRecordsResponse>]: never; }>(object: I): QueryRecordsResponse;
};
export declare const QueryRecordRequest: {
    encode(message: QueryRecordRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordRequest;
    fromJSON(object: any): QueryRecordRequest;
    toJSON(message: QueryRecordRequest): unknown;
    fromPartial<I extends {
        legacyAddress?: string | undefined;
    } & {
        legacyAddress?: string | undefined;
    } & { [K in Exclude<keyof I, "legacyAddress">]: never; }>(object: I): QueryRecordRequest;
};
export declare const QueryRecordResponse: {
    encode(message: QueryRecordResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryRecordResponse;
    fromJSON(object: any): QueryRecordResponse;
    toJSON(message: QueryRecordResponse): unknown;
    fromPartial<I extends {
        record?: {
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        } | undefined;
    } & {
        record?: ({
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        } & {
            legacyAddress?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["record"]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["record"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            wallets?: (string[] & string[] & { [K_2 in Exclude<keyof I["record"]["wallets"], keyof string[]>]: never; }) | undefined;
            nfts?: (string[] & string[] & { [K_3 in Exclude<keyof I["record"]["nfts"], keyof string[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["record"], keyof Record>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "record">]: never; }>(object: I): QueryRecordResponse;
};
export declare const QueryCheckRequest: {
    encode(message: QueryCheckRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckRequest;
    fromJSON(object: any): QueryCheckRequest;
    toJSON(message: QueryCheckRequest): unknown;
    fromPartial<I extends {
        pubkey?: Uint8Array | undefined;
    } & {
        pubkey?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "pubkey">]: never; }>(object: I): QueryCheckRequest;
};
export declare const QueryCheckResponse: {
    encode(message: QueryCheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCheckResponse;
    fromJSON(object: any): QueryCheckResponse;
    toJSON(message: QueryCheckResponse): unknown;
    fromPartial<I extends {
        record?: {
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        } | undefined;
    } & {
        record?: ({
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        } & {
            legacyAddress?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["record"]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["record"]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            wallets?: (string[] & string[] & { [K_2 in Exclude<keyof I["record"]["wallets"], keyof string[]>]: never; }) | undefined;
            nfts?: (string[] & string[] & { [K_3 in Exclude<keyof I["record"]["nfts"], keyof string[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["record"], keyof Record>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "record">]: never; }>(object: I): QueryCheckResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Records queries all legacy records that should be returned to the actual owners. */
    Records(request: QueryRecordsRequest): Promise<QueryRecordsResponse>;
    /** Record queries complete set of different values that should be returned to the actual owner. */
    Record(request: QueryRecordRequest): Promise<QueryRecordResponse>;
    /** Check queries legacy record by specifiec public key. */
    Check(request: QueryCheckRequest): Promise<QueryCheckResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Records(request: QueryRecordsRequest): Promise<QueryRecordsResponse>;
    Record(request: QueryRecordRequest): Promise<QueryRecordResponse>;
    Check(request: QueryCheckRequest): Promise<QueryCheckResponse>;
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
