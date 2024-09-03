import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.swap.v1";
/** Chain defines a chain. */
export interface Chain {
    /** id defines the chain number ID. */
    id: number;
    /** name defines the chain name. */
    name: string;
    /** active defines status of the chain. */
    active: boolean;
}
/** Swap defines a cross-chain swap. */
export interface Swap {
    /** hashed_secret defines the hash of secret used during cross-chain swap. */
    hashedSecret: string;
    /** from defines address used to initialize swap. */
    from: string;
    /** recipient defines address of the recipient swapped coins. */
    recipient: string;
    /** amount defines amount of coins the swap initialized. */
    amount: string;
    /** timestamp defines time moment when the swap was initialized. */
    timestamp: number;
    /** redeemed defines if the swap was redeemed. */
    redeemed: boolean;
    /** refunded defines if the swap was refunded. */
    refunded: boolean;
}
export declare const Chain: {
    encode(message: Chain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Chain;
    fromJSON(object: any): Chain;
    toJSON(message: Chain): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        name?: string | undefined;
        active?: boolean | undefined;
    } & {
        id?: number | undefined;
        name?: string | undefined;
        active?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof Chain>]: never; }>(object: I): Chain;
};
export declare const Swap: {
    encode(message: Swap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Swap;
    fromJSON(object: any): Swap;
    toJSON(message: Swap): unknown;
    fromPartial<I extends {
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
    } & { [K in Exclude<keyof I, keyof Swap>]: never; }>(object: I): Swap;
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
