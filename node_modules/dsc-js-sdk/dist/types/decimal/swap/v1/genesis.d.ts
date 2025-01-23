import * as _m0 from "protobufjs/minimal";
import { Params } from "./params";
import { Chain, Swap } from "./swap";
export declare const protobufPackage = "decimal.swap.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** chains defines the blockchain networks active at genesis. */
    chains: Chain[];
    /** swaps defines the swaps active at genesis. */
    swaps: Swap[];
    /** params defines all the module's parameters. */
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        chains?: {
            id?: number | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
        }[] | undefined;
        swaps?: {
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        }[] | undefined;
        params?: {
            lockedTimeOut?: number | undefined;
            lockedTimeIn?: number | undefined;
            serviceAddress?: string | undefined;
            checkingAddress?: string | undefined;
        } | undefined;
    } & {
        chains?: ({
            id?: number | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
        }[] & ({
            id?: number | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
        } & {
            id?: number | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
        } & { [K in Exclude<keyof I["chains"][number], keyof Chain>]: never; })[] & { [K_1 in Exclude<keyof I["chains"], keyof {
            id?: number | undefined;
            name?: string | undefined;
            active?: boolean | undefined;
        }[]>]: never; }) | undefined;
        swaps?: ({
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        }[] & ({
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
        } & { [K_2 in Exclude<keyof I["swaps"][number], keyof Swap>]: never; })[] & { [K_3 in Exclude<keyof I["swaps"], keyof {
            hashedSecret?: string | undefined;
            from?: string | undefined;
            recipient?: string | undefined;
            amount?: string | undefined;
            timestamp?: number | undefined;
            redeemed?: boolean | undefined;
            refunded?: boolean | undefined;
        }[]>]: never; }) | undefined;
        params?: ({
            lockedTimeOut?: number | undefined;
            lockedTimeIn?: number | undefined;
            serviceAddress?: string | undefined;
            checkingAddress?: string | undefined;
        } & {
            lockedTimeOut?: number | undefined;
            lockedTimeIn?: number | undefined;
            serviceAddress?: string | undefined;
            checkingAddress?: string | undefined;
        } & { [K_4 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
