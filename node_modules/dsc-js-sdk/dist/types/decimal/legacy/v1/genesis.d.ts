import * as _m0 from "protobufjs/minimal";
import { Record } from "./legacy";
import { Params } from "./params";
export declare const protobufPackage = "decimal.legacy.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** records defines compelete list of legacy records to be returned to actual owner. */
    records: Record[];
    /** params defines all the module's parameters. */
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        records?: {
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        }[] | undefined;
        params?: {} | undefined;
    } & {
        records?: ({
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        }[] & ({
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        } & {
            legacyAddress?: string | undefined;
            coins?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            }[] & ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["records"][number]["coins"][number], keyof import("../../../cosmos/base/v1beta1/coin").Coin>]: never; })[] & { [K_1 in Exclude<keyof I["records"][number]["coins"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>]: never; }) | undefined;
            wallets?: (string[] & string[] & { [K_2 in Exclude<keyof I["records"][number]["wallets"], keyof string[]>]: never; }) | undefined;
            nfts?: (string[] & string[] & { [K_3 in Exclude<keyof I["records"][number]["nfts"], keyof string[]>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["records"][number], keyof Record>]: never; })[] & { [K_5 in Exclude<keyof I["records"], keyof {
            legacyAddress?: string | undefined;
            coins?: {
                denom?: string | undefined;
                amount?: string | undefined;
            }[] | undefined;
            wallets?: string[] | undefined;
            nfts?: string[] | undefined;
        }[]>]: never; }) | undefined;
        params?: ({} & {} & { [K_6 in Exclude<keyof I["params"], never>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
