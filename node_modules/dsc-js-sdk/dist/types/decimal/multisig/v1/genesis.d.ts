import * as _m0 from "protobufjs/minimal";
import { Transaction, Wallet } from "./multisig";
import { Params } from "./params";
export declare const protobufPackage = "decimal.multisig.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** wallets defines all registered multisig wallets. */
    wallets: Wallet[];
    /** transactions defines all registered multisig transactions. */
    transactions: Transaction[];
    /** params defines all the module's parameters. */
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        wallets?: {
            address?: string | undefined;
            owners?: string[] | undefined;
            weights?: number[] | undefined;
            threshold?: number | undefined;
        }[] | undefined;
        transactions?: {
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        }[] | undefined;
        params?: {} | undefined;
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
            } & { [K_4 in Exclude<keyof I["transactions"][number]["message"], keyof import("../../../google/protobuf/any").Any>]: never; }) | undefined;
            createdAt?: number | undefined;
        } & { [K_5 in Exclude<keyof I["transactions"][number], keyof Transaction>]: never; })[] & { [K_6 in Exclude<keyof I["transactions"], keyof {
            id?: string | undefined;
            wallet?: string | undefined;
            message?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            createdAt?: number | undefined;
        }[]>]: never; }) | undefined;
        params?: ({} & {} & { [K_7 in Exclude<keyof I["params"], never>]: never; }) | undefined;
    } & { [K_8 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
