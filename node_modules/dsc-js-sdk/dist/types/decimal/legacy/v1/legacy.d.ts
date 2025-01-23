import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "decimal.legacy.v1";
/** Record defines the legacy record containing set of values that should be returned to the actual owner. */
export interface Record {
    /** legacy_address defines legacy address which is not valid anymore so cannot be used. */
    legacyAddress: string;
    /** coins defines complete list of tokens to be returned. */
    coins: Coin[];
    /** wallets defines complete list of multisig wallets to be returned. */
    wallets: string[];
    /** nfts defines list of token ids to be returned */
    nfts: string[];
}
export declare const Record: {
    encode(message: Record, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Record;
    fromJSON(object: any): Record;
    toJSON(message: Record): unknown;
    fromPartial<I extends {
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
        } & { [K in Exclude<keyof I["coins"][number], keyof Coin>]: never; })[] & { [K_1 in Exclude<keyof I["coins"], keyof {
            denom?: string | undefined;
            amount?: string | undefined;
        }[]>]: never; }) | undefined;
        wallets?: (string[] & string[] & { [K_2 in Exclude<keyof I["wallets"], keyof string[]>]: never; }) | undefined;
        nfts?: (string[] & string[] & { [K_3 in Exclude<keyof I["nfts"], keyof string[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Record>]: never; }>(object: I): Record;
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
