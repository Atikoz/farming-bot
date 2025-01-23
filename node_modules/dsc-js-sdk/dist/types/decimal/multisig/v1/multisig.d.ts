import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "decimal.multisig.v1";
/** Wallet defines multisig wallet. */
export interface Wallet {
    address: string;
    owners: string[];
    weights: number[];
    threshold: number;
}
/** Transaction defines multisig transaction. */
export interface Transaction {
    id: string;
    wallet: string;
    message: Any | undefined;
    createdAt: number;
}
export declare const Wallet: {
    encode(message: Wallet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Wallet;
    fromJSON(object: any): Wallet;
    toJSON(message: Wallet): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        owners?: string[] | undefined;
        weights?: number[] | undefined;
        threshold?: number | undefined;
    } & {
        address?: string | undefined;
        owners?: (string[] & string[] & { [K in Exclude<keyof I["owners"], keyof string[]>]: never; }) | undefined;
        weights?: (number[] & number[] & { [K_1 in Exclude<keyof I["weights"], keyof number[]>]: never; }) | undefined;
        threshold?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Wallet>]: never; }>(object: I): Wallet;
};
export declare const Transaction: {
    encode(message: Transaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transaction;
    fromJSON(object: any): Transaction;
    toJSON(message: Transaction): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["message"], keyof Any>]: never; }) | undefined;
        createdAt?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Transaction>]: never; }>(object: I): Transaction;
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
