import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { CoinPrice } from "./fee";
export declare const protobufPackage = "decimal.fee.v1";
/** EventUpdateCoinPrices defines event emitted when coin prices are updated. */
export interface EventUpdateCoinPrices {
    oracle: string;
    prices: CoinPrice[];
}
export interface EventPayCommission {
    payer: string;
    coins: Coin[];
}
export declare const EventUpdateCoinPrices: {
    encode(message: EventUpdateCoinPrices, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCoinPrices;
    fromJSON(object: any): EventUpdateCoinPrices;
    toJSON(message: EventUpdateCoinPrices): unknown;
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
    } & { [K_2 in Exclude<keyof I, keyof EventUpdateCoinPrices>]: never; }>(object: I): EventUpdateCoinPrices;
};
export declare const EventPayCommission: {
    encode(message: EventPayCommission, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventPayCommission;
    fromJSON(object: any): EventPayCommission;
    toJSON(message: EventPayCommission): unknown;
    fromPartial<I extends {
        payer?: string | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        payer?: string | undefined;
        coins?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof EventPayCommission>]: never; }>(object: I): EventPayCommission;
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
