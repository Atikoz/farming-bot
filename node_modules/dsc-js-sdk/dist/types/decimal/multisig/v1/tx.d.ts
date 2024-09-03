import * as _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
export declare const protobufPackage = "decimal.multisig.v1";
/** MsgCreateWallet defines a SDK message for creating multisig wallet. */
export interface MsgCreateWallet {
    sender: string;
    owners: string[];
    weights: number[];
    threshold: number;
}
/** MsgCreateWalletResponse defines the Msg/CreateWallet response type. */
export interface MsgCreateWalletResponse {
    wallet: string;
}
/**
 * //////
 * MsgCreateTransaction defines a SDK message for creating multisig transaction in existing wallet.
 */
export interface MsgCreateTransaction {
    sender: string;
    wallet: string;
    content: Any | undefined;
}
/** MsgCreateTransactionResponse defines the MsgCreateTransaction response type. */
export interface MsgCreateTransactionResponse {
    id: string;
}
/** MsgSignTransaction defines a SDK message for signing existing multisig transaction. */
export interface MsgSignTransaction {
    sender: string;
    id: string;
}
/** MsgSignTransactionResponse defines the Msg/SignTransaction response type. */
export interface MsgSignTransactionResponse {
}
export declare const MsgCreateWallet: {
    encode(message: MsgCreateWallet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWallet;
    fromJSON(object: any): MsgCreateWallet;
    toJSON(message: MsgCreateWallet): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        owners?: string[] | undefined;
        weights?: number[] | undefined;
        threshold?: number | undefined;
    } & {
        sender?: string | undefined;
        owners?: (string[] & string[] & { [K in Exclude<keyof I["owners"], keyof string[]>]: never; }) | undefined;
        weights?: (number[] & number[] & { [K_1 in Exclude<keyof I["weights"], keyof number[]>]: never; }) | undefined;
        threshold?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgCreateWallet>]: never; }>(object: I): MsgCreateWallet;
};
export declare const MsgCreateWalletResponse: {
    encode(message: MsgCreateWalletResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWalletResponse;
    fromJSON(object: any): MsgCreateWalletResponse;
    toJSON(message: MsgCreateWalletResponse): unknown;
    fromPartial<I extends {
        wallet?: string | undefined;
    } & {
        wallet?: string | undefined;
    } & { [K in Exclude<keyof I, "wallet">]: never; }>(object: I): MsgCreateWalletResponse;
};
export declare const MsgCreateTransaction: {
    encode(message: MsgCreateTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransaction;
    fromJSON(object: any): MsgCreateTransaction;
    toJSON(message: MsgCreateTransaction): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        wallet?: string | undefined;
        content?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        wallet?: string | undefined;
        content?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["content"], keyof Any>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgCreateTransaction>]: never; }>(object: I): MsgCreateTransaction;
};
export declare const MsgCreateTransactionResponse: {
    encode(message: MsgCreateTransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateTransactionResponse;
    fromJSON(object: any): MsgCreateTransactionResponse;
    toJSON(message: MsgCreateTransactionResponse): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(object: I): MsgCreateTransactionResponse;
};
export declare const MsgSignTransaction: {
    encode(message: MsgSignTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignTransaction;
    fromJSON(object: any): MsgSignTransaction;
    toJSON(message: MsgSignTransaction): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: string | undefined;
    } & {
        sender?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgSignTransaction>]: never; }>(object: I): MsgSignTransaction;
};
export declare const MsgSignTransactionResponse: {
    encode(_: MsgSignTransactionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignTransactionResponse;
    fromJSON(_: any): MsgSignTransactionResponse;
    toJSON(_: MsgSignTransactionResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSignTransactionResponse;
};
/** Msg defines the module Msg service. */
export interface Msg {
    /** CreateWallet defines message for creating multisig wallet. */
    CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse>;
    /** CreateTransaction defines message for creating multisig transaction in existing wallet. */
    CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>;
    /** SignTransaction defines message for signing existing multisig transaction. */
    SignTransaction(request: MsgSignTransaction): Promise<MsgSignTransactionResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse>;
    CreateTransaction(request: MsgCreateTransaction): Promise<MsgCreateTransactionResponse>;
    SignTransaction(request: MsgSignTransaction): Promise<MsgSignTransactionResponse>;
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
