import * as _m0 from "protobufjs/minimal";
import { CoinPrice } from "./fee";
export declare const protobufPackage = "decimal.fee.v1";
/** MsgUpdateCoinPrices defines a SDK message for updating specified coin prices. */
export interface MsgUpdateCoinPrices {
    /** oracle defines address empowered to update coin prices. */
    oracle: string;
    /** prices defines the coin prices requested to update. */
    prices: CoinPrice[];
}
/** MsgUpdateCoinPricesResponse defines the Msg/UpdateCoinPrices response type. */
export interface MsgUpdateCoinPricesResponse {
}
export declare const MsgUpdateCoinPrices: {
    encode(message: MsgUpdateCoinPrices, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoinPrices;
    fromJSON(object: any): MsgUpdateCoinPrices;
    toJSON(message: MsgUpdateCoinPrices): unknown;
    fromPartial<I extends {
        oracle?: string | undefined;
        prices?: {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        oracle?: string | undefined;
        prices?: ({
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        }[] & ({
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        } & {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        } & { [K in Exclude<keyof I["prices"][number], keyof CoinPrice>]: never; })[] & { [K_1 in Exclude<keyof I["prices"], keyof {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgUpdateCoinPrices>]: never; }>(object: I): MsgUpdateCoinPrices;
};
export declare const MsgUpdateCoinPricesResponse: {
    encode(_: MsgUpdateCoinPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoinPricesResponse;
    fromJSON(_: any): MsgUpdateCoinPricesResponse;
    toJSON(_: MsgUpdateCoinPricesResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateCoinPricesResponse;
};
/** Msg defines the module Msg service. */
export interface Msg {
    /** UpdateCoinPrices defines message for updating a coin prices. */
    UpdateCoinPrices(request: MsgUpdateCoinPrices): Promise<MsgUpdateCoinPricesResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    UpdateCoinPrices(request: MsgUpdateCoinPrices): Promise<MsgUpdateCoinPricesResponse>;
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
