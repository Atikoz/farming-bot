import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "decimal.legacy.v1";
/** EventReturnLegacyCoins defines event emitted when the coins are returned to the actual owner. */
export interface EventReturnLegacyCoins {
    legacyOwner: string;
    owner: string;
    coins: Coin[];
}
/** EventReturnLegacySubToken defines event emitted when the NFT sub-token is returned to the actual owner. */
export interface EventReturnLegacySubToken {
    legacyOwner: string;
    owner: string;
    denom: string;
    id: string;
    subTokenIds: number[];
}
/** EventReturnMultisigWallet defines event emitted when the multisig wallet is returned to the actual owner. */
export interface EventReturnMultisigWallet {
    legacyOwner: string;
    owner: string;
    wallet: string;
}
export declare const EventReturnLegacyCoins: {
    encode(message: EventReturnLegacyCoins, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventReturnLegacyCoins;
    fromJSON(object: any): EventReturnLegacyCoins;
    toJSON(message: EventReturnLegacyCoins): unknown;
    fromPartial<I extends {
        legacyOwner?: string | undefined;
        owner?: string | undefined;
        coins?: {
            denom?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        legacyOwner?: string | undefined;
        owner?: string | undefined;
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
    } & { [K_2 in Exclude<keyof I, keyof EventReturnLegacyCoins>]: never; }>(object: I): EventReturnLegacyCoins;
};
export declare const EventReturnLegacySubToken: {
    encode(message: EventReturnLegacySubToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventReturnLegacySubToken;
    fromJSON(object: any): EventReturnLegacySubToken;
    toJSON(message: EventReturnLegacySubToken): unknown;
    fromPartial<I extends {
        legacyOwner?: string | undefined;
        owner?: string | undefined;
        denom?: string | undefined;
        id?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        legacyOwner?: string | undefined;
        owner?: string | undefined;
        denom?: string | undefined;
        id?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventReturnLegacySubToken>]: never; }>(object: I): EventReturnLegacySubToken;
};
export declare const EventReturnMultisigWallet: {
    encode(message: EventReturnMultisigWallet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventReturnMultisigWallet;
    fromJSON(object: any): EventReturnMultisigWallet;
    toJSON(message: EventReturnMultisigWallet): unknown;
    fromPartial<I extends {
        legacyOwner?: string | undefined;
        owner?: string | undefined;
        wallet?: string | undefined;
    } & {
        legacyOwner?: string | undefined;
        owner?: string | undefined;
        wallet?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventReturnMultisigWallet>]: never; }>(object: I): EventReturnMultisigWallet;
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
