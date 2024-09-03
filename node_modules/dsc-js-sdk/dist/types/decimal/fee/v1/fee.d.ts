import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.fee.v1";
/** CoinPrice defines the coin price. */
export interface CoinPrice {
    /** denom defines the base currency (coin) denomination which is priced. */
    denom: string;
    /** quote defines the quote currency denomination in the pair (USD as the first example). */
    quote: string;
    /** price defines the coin price in quote currency. */
    price: string;
    /** updated_at defines the moment of the previous coin price update. */
    updatedAt: Date | undefined;
}
export declare const CoinPrice: {
    encode(message: CoinPrice, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CoinPrice;
    fromJSON(object: any): CoinPrice;
    toJSON(message: CoinPrice): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        quote?: string | undefined;
        price?: string | undefined;
        updatedAt?: Date | undefined;
    } & {
        denom?: string | undefined;
        quote?: string | undefined;
        price?: string | undefined;
        updatedAt?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof CoinPrice>]: never; }>(object: I): CoinPrice;
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
