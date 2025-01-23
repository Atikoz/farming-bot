import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.legacy.v1";
export interface MsgReturnLegacy {
    sender: string;
    publicKey: Uint8Array;
}
export interface MsgReturnLegacyResponse {
}
export declare const MsgReturnLegacy: {
    encode(message: MsgReturnLegacy, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReturnLegacy;
    fromJSON(object: any): MsgReturnLegacy;
    toJSON(message: MsgReturnLegacy): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        publicKey?: Uint8Array | undefined;
    } & {
        sender?: string | undefined;
        publicKey?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof MsgReturnLegacy>]: never; }>(object: I): MsgReturnLegacy;
};
export declare const MsgReturnLegacyResponse: {
    encode(_: MsgReturnLegacyResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgReturnLegacyResponse;
    fromJSON(_: any): MsgReturnLegacyResponse;
    toJSON(_: MsgReturnLegacyResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgReturnLegacyResponse;
};
/** Msg defines the module Msg service. */
export interface Msg {
    /** ReturnLegacy defines message for return coins,nft,wallets by account public key */
    ReturnLegacy(request: MsgReturnLegacy): Promise<MsgReturnLegacyResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    ReturnLegacy(request: MsgReturnLegacy): Promise<MsgReturnLegacyResponse>;
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
