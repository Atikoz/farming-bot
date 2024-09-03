import { Params, State } from "./evm";
import Long from "long";
import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "ethermint.evm.v1";
/** GenesisState defines the evm module's genesis state. */
export interface GenesisState {
    /** accounts is an array containing the ethereum genesis accounts. */
    accounts: GenesisAccount[];
    /** params defines all the parameters of the module. */
    params?: Params;
}
/**
 * GenesisAccount defines an account to be initialized in the genesis state.
 * Its main difference between with Geth's GenesisAccount is that it uses a
 * custom storage type and that it doesn't contain the private key field.
 */
export interface GenesisAccount {
    /** address defines an ethereum hex formated address of an account */
    address: string;
    /** code defines the hex bytes of the account code. */
    code: string;
    /** storage defines the set of state key values for the account. */
    storage: State[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        accounts?: {
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        params?: {
            evmDenom?: string | undefined;
            enableCreate?: boolean | undefined;
            enableCall?: boolean | undefined;
            extraEips?: (string | number | Long)[] | undefined;
            chainConfig?: {
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                mergeForkBlock?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        accounts?: ({
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[] & ({
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        } & {
            address?: string | undefined;
            code?: string | undefined;
            storage?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & Record<Exclude<keyof I["accounts"][number]["storage"][number], keyof State>, never>)[] & Record<Exclude<keyof I["accounts"][number]["storage"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["accounts"][number], keyof GenesisAccount>, never>)[] & Record<Exclude<keyof I["accounts"], keyof {
            address?: string | undefined;
            code?: string | undefined;
            storage?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        params?: ({
            evmDenom?: string | undefined;
            enableCreate?: boolean | undefined;
            enableCall?: boolean | undefined;
            extraEips?: (string | number | Long)[] | undefined;
            chainConfig?: {
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                mergeForkBlock?: string | undefined;
            } | undefined;
        } & {
            evmDenom?: string | undefined;
            enableCreate?: boolean | undefined;
            enableCall?: boolean | undefined;
            extraEips?: ((string | number | Long)[] & (string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                ge: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                eqz: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                le: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                rem: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                countLeadingZeros: () => number;
                clz: () => number;
                countTrailingZeros: () => number;
                ctz: () => number;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                ne: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                shr_u: (numBits: number | Long) => Long;
                rotateLeft: (numBits: number | Long) => Long;
                rotl: (numBits: number | Long) => Long;
                rotateRight: (numBits: number | Long) => Long;
                rotr: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & Record<Exclude<keyof I["params"]["extraEips"][number], keyof Long>, never>))[] & Record<Exclude<keyof I["params"]["extraEips"], keyof (string | number | Long)[]>, never>) | undefined;
            chainConfig?: ({
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                mergeForkBlock?: string | undefined;
            } & {
                homesteadBlock?: string | undefined;
                daoForkBlock?: string | undefined;
                daoForkSupport?: boolean | undefined;
                eip150Block?: string | undefined;
                eip150Hash?: string | undefined;
                eip155Block?: string | undefined;
                eip158Block?: string | undefined;
                byzantiumBlock?: string | undefined;
                constantinopleBlock?: string | undefined;
                petersburgBlock?: string | undefined;
                istanbulBlock?: string | undefined;
                muirGlacierBlock?: string | undefined;
                berlinBlock?: string | undefined;
                londonBlock?: string | undefined;
                arrowGlacierBlock?: string | undefined;
                mergeForkBlock?: string | undefined;
            } & Record<Exclude<keyof I["params"]["chainConfig"], keyof import("./evm").ChainConfig>, never>) | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
export declare const GenesisAccount: {
    encode(message: GenesisAccount, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisAccount;
    fromJSON(object: any): GenesisAccount;
    toJSON(message: GenesisAccount): unknown;
    fromPartial<I extends {
        address?: string | undefined;
        code?: string | undefined;
        storage?: {
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
    } & {
        address?: string | undefined;
        code?: string | undefined;
        storage?: ({
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            key?: string | undefined;
            value?: string | undefined;
        } & {
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["storage"][number], keyof State>, never>)[] & Record<Exclude<keyof I["storage"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisAccount>, never>>(object: I): GenesisAccount;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
