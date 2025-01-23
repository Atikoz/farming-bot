import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.swap.v1";
/** MsgActivateChain defines a SDK message for activating chain to enable cross-chain swaps. */
export interface MsgActivateChain {
    sender: string;
    id: number;
    name: string;
}
/** MsgActivateChainResponse defines the Msg/ActivateChain response type. */
export interface MsgActivateChainResponse {
}
/** MsgMintToken defines a SDK message for deactivating chain to disable cross-chain swaps. */
export interface MsgDeactivateChain {
    sender: string;
    id: number;
}
/** MsgDeactivateChainResponse defines the Msg/DeactivateChain response type. */
export interface MsgDeactivateChainResponse {
}
/** MsgMintToken defines a SDK message for . */
export interface MsgInitializeSwap {
    sender: string;
    recipient: string;
    amount: string;
    tokenSymbol: string;
    transactionNumber: string;
    fromChain: number;
    destChain: number;
}
/** MsgInitializeSwapResponse defines the Msg/InitializeSwap response type. */
export interface MsgInitializeSwapResponse {
}
/** MsgMintToken defines a SDK message for . */
export interface MsgRedeemSwap {
    sender: string;
    from: string;
    recipient: string;
    amount: string;
    tokenSymbol: string;
    transactionNumber: string;
    fromChain: number;
    destChain: number;
    v: number;
    r: string;
    s: string;
}
/** MsgRedeemSwapResponse defines the Msg/RedeemSwap response type. */
export interface MsgRedeemSwapResponse {
}
export declare const MsgActivateChain: {
    encode(message: MsgActivateChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateChain;
    fromJSON(object: any): MsgActivateChain;
    toJSON(message: MsgActivateChain): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
    } & {
        sender?: string | undefined;
        id?: number | undefined;
        name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgActivateChain>]: never; }>(object: I): MsgActivateChain;
};
export declare const MsgActivateChainResponse: {
    encode(_: MsgActivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgActivateChainResponse;
    fromJSON(_: any): MsgActivateChainResponse;
    toJSON(_: MsgActivateChainResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgActivateChainResponse;
};
export declare const MsgDeactivateChain: {
    encode(message: MsgDeactivateChain, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateChain;
    fromJSON(object: any): MsgDeactivateChain;
    toJSON(message: MsgDeactivateChain): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: number | undefined;
    } & {
        sender?: string | undefined;
        id?: number | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDeactivateChain>]: never; }>(object: I): MsgDeactivateChain;
};
export declare const MsgDeactivateChainResponse: {
    encode(_: MsgDeactivateChainResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateChainResponse;
    fromJSON(_: any): MsgDeactivateChainResponse;
    toJSON(_: MsgDeactivateChainResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgDeactivateChainResponse;
};
export declare const MsgInitializeSwap: {
    encode(message: MsgInitializeSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializeSwap;
    fromJSON(object: any): MsgInitializeSwap;
    toJSON(message: MsgInitializeSwap): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
    } & {
        sender?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
    } & { [K in Exclude<keyof I, keyof MsgInitializeSwap>]: never; }>(object: I): MsgInitializeSwap;
};
export declare const MsgInitializeSwapResponse: {
    encode(_: MsgInitializeSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgInitializeSwapResponse;
    fromJSON(_: any): MsgInitializeSwapResponse;
    toJSON(_: MsgInitializeSwapResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgInitializeSwapResponse;
};
export declare const MsgRedeemSwap: {
    encode(message: MsgRedeemSwap, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemSwap;
    fromJSON(object: any): MsgRedeemSwap;
    toJSON(message: MsgRedeemSwap): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        from?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
        v?: number | undefined;
        r?: string | undefined;
        s?: string | undefined;
    } & {
        sender?: string | undefined;
        from?: string | undefined;
        recipient?: string | undefined;
        amount?: string | undefined;
        tokenSymbol?: string | undefined;
        transactionNumber?: string | undefined;
        fromChain?: number | undefined;
        destChain?: number | undefined;
        v?: number | undefined;
        r?: string | undefined;
        s?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgRedeemSwap>]: never; }>(object: I): MsgRedeemSwap;
};
export declare const MsgRedeemSwapResponse: {
    encode(_: MsgRedeemSwapResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemSwapResponse;
    fromJSON(_: any): MsgRedeemSwapResponse;
    toJSON(_: MsgRedeemSwapResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgRedeemSwapResponse;
};
/** Msg defines the module Msg service. */
export interface Msg {
    /** ActivateChain defines message for activating chain to enable cross-chain swaps. */
    ActivateChain(request: MsgActivateChain): Promise<MsgActivateChainResponse>;
    /** DeactivateChain defines message for deactivating chain to disable cross-chain swaps. */
    DeactivateChain(request: MsgDeactivateChain): Promise<MsgDeactivateChainResponse>;
    /** InitializeSwap defines message for initializing the cross-chain swap. */
    InitializeSwap(request: MsgInitializeSwap): Promise<MsgInitializeSwapResponse>;
    /** RedeemSwap defines message for redeeming the cross-chain swap initialized before in sorce chain. */
    RedeemSwap(request: MsgRedeemSwap): Promise<MsgRedeemSwapResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ActivateChain(request: MsgActivateChain): Promise<MsgActivateChainResponse>;
    DeactivateChain(request: MsgDeactivateChain): Promise<MsgDeactivateChainResponse>;
    InitializeSwap(request: MsgInitializeSwap): Promise<MsgInitializeSwapResponse>;
    RedeemSwap(request: MsgRedeemSwap): Promise<MsgRedeemSwapResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
