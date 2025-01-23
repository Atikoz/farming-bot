import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.coin.v1";
/** Params defines the parameters for the module. */
export interface Params {
    /** base_denom defines denomination of the base coin. */
    baseDenom: string;
    /** base_title defines title of the base coin. */
    baseTitle: string;
    /** base_volume defines initial volume of the base coin. */
    baseVolume: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        baseDenom?: string | undefined;
        baseTitle?: string | undefined;
        baseVolume?: string | undefined;
    } & {
        baseDenom?: string | undefined;
        baseTitle?: string | undefined;
        baseVolume?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Params>]: never; }>(object: I): Params;
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
