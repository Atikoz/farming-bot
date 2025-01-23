import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.swap.v1";
/** EventActivateChain defines event emitted when chain is activated for swaps. */
export interface EventActivateChain {
    sender: string;
    id: number;
    name: string;
}
/** EventDeactivateChain defines event emitted when chain is deactivated for swaps. */
export interface EventDeactivateChain {
    sender: string;
    id: number;
}
/** EventInitializeSwap defines event emitted when cross-chain swap is initialized. */
export interface EventInitializeSwap {
    sender: string;
    recipient: string;
    amount: string;
    tokenSymbol: string;
    transactionNumber: string;
    fromChain: number;
    destChain: number;
}
/** EventRedeemSwap defines event emitted when cross-chain swap is redeemed. */
export interface EventRedeemSwap {
    sender: string;
    from: string;
    recipient: string;
    amount: string;
    tokenSymbol: string;
    transactionNumber: string;
    fromChain: number;
    destChain: number;
    hashRedeem: string;
    v: string;
    r: string;
    s: string;
}
export declare const EventActivateChain: {
    encode(message: EventActivateChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventActivateChain;
    fromJSON(object: any): EventActivateChain;
    toJSON(message: EventActivateChain): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
    } & {
        sender?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventActivateChain>]: never; }>(object: I): EventActivateChain;
};
export declare const EventDeactivateChain: {
    encode(message: EventDeactivateChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventDeactivateChain;
    fromJSON(object: any): EventDeactivateChain;
    toJSON(message: EventDeactivateChain): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: number | undefined;
    } & {
        sender?: string | undefined;
        id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventDeactivateChain>]: never; }>(object: I): EventDeactivateChain;
};
export declare const EventInitializeSwap: {
    encode(message: EventInitializeSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventInitializeSwap;
    fromJSON(object: any): EventInitializeSwap;
    toJSON(message: EventInitializeSwap): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
    } & {
        sender?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventInitializeSwap>]: never; }>(object: I): EventInitializeSwap;
};
export declare const EventRedeemSwap: {
    encode(message: EventRedeemSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRedeemSwap;
    fromJSON(object: any): EventRedeemSwap;
    toJSON(message: EventRedeemSwap): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        from?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
        hashRedeem?: string | undefined;
        v?: string | undefined;
        r?: string | undefined;
        s?: string | undefined;
    } & {
        sender?: string | undefined;
        from?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
        hashRedeem?: string | undefined;
        v?: string | undefined;
        r?: string | undefined;
        s?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventRedeemSwap>]: never; }>(object: I): EventRedeemSwap;
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
