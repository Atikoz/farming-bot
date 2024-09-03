import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.multisig.v1";
/** EventCreateWallet defines event emitted when new multisig wallet is created. */
export interface EventCreateWallet {
    sender: string;
    wallet: string;
    owners: string[];
    weights: number[];
    threshold: number;
}
export interface EventCreateTransaction {
    sender: string;
    wallet: string;
    transaction: string;
}
export interface EventSignTransaction {
    sender: string;
    wallet: string;
    transaction: string;
    signerWeight: number;
    confirmations: number;
    confirmed: boolean;
}
export declare const EventCreateWallet: {
    encode(message: EventCreateWallet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateWallet;
    fromJSON(object: any): EventCreateWallet;
    toJSON(message: EventCreateWallet): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        wallet?: string | undefined;
        owners?: string[] | undefined;
        weights?: number[] | undefined;
        threshold?: number | undefined;
    } & {
        sender?: string | undefined;
        wallet?: string | undefined;
        owners?: (string[] & string[] & { [K in Exclude<keyof I["owners"], keyof string[]>]: never; }) | undefined;
        weights?: (number[] & number[] & { [K_1 in Exclude<keyof I["weights"], keyof number[]>]: never; }) | undefined;
        threshold?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EventCreateWallet>]: never; }>(object: I): EventCreateWallet;
};
export declare const EventCreateTransaction: {
    encode(message: EventCreateTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateTransaction;
    fromJSON(object: any): EventCreateTransaction;
    toJSON(message: EventCreateTransaction): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        wallet?: string | undefined;
        transaction?: string | undefined;
    } & {
        sender?: string | undefined;
        wallet?: string | undefined;
        transaction?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventCreateTransaction>]: never; }>(object: I): EventCreateTransaction;
};
export declare const EventSignTransaction: {
    encode(message: EventSignTransaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSignTransaction;
    fromJSON(object: any): EventSignTransaction;
    toJSON(message: EventSignTransaction): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        wallet?: string | undefined;
        transaction?: string | undefined;
        signerWeight?: number | undefined;
        confirmations?: number | undefined;
        confirmed?: boolean | undefined;
    } & {
        sender?: string | undefined;
        wallet?: string | undefined;
        transaction?: string | undefined;
        signerWeight?: number | undefined;
        confirmations?: number | undefined;
        confirmed?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof EventSignTransaction>]: never; }>(object: I): EventSignTransaction;
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
