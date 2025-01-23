import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.swap.v1";
/** Params defines the parameters for the module. */
export interface Params {
    /** locked_time_out defines somewhat we are only expecting to find out... TODO */
    lockedTimeOut: number;
    /** locked_time_in defines somewhat we are only expecting to find out... TODO */
    lockedTimeIn: number;
    /** service_address defines somewhat we are only expecting to find out... TODO */
    serviceAddress: string;
    /** checking_address defines somewhat we are only expecting to find out... TODO */
    checkingAddress: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        lockedTimeOut?: number | undefined;
        lockedTimeIn?: number | undefined;
        serviceAddress?: string | undefined;
        checkingAddress?: string | undefined;
    } & {
        lockedTimeOut?: number | undefined;
        lockedTimeIn?: number | undefined;
        serviceAddress?: string | undefined;
        checkingAddress?: string | undefined;
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
