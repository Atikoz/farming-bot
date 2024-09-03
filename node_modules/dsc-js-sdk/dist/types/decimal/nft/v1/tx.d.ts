import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "decimal.nft.v1";
/** MsgMintToken defines a SDK message for creating a new NFT token or mint additional NFT sub-tokens. */
export interface MsgMintToken {
    sender: string;
    denom: string;
    tokenId: string;
    tokenUri: string;
    allowMint: boolean;
    recipient: string;
    quantity: number;
    reserve: Coin | undefined;
}
/** MsgMintTokenResponse defines the Msg/MintToken response type. */
export interface MsgMintTokenResponse {
}
/** MsgUpdateToken defines a SDK message for modifying existing NFT token. */
export interface MsgUpdateToken {
    sender: string;
    tokenId: string;
    tokenUri: string;
}
/** MsgUpdateTokenResponse defines the Msg/UpdateToken response type. */
export interface MsgUpdateTokenResponse {
}
/** MsgUpdateReserve defines a SDK message for modifying existing NFT sub-token reserve. */
export interface MsgUpdateReserve {
    sender: string;
    tokenId: string;
    subTokenIds: number[];
    reserve: Coin | undefined;
}
/** MsgUpdateReserveResponse defines the Msg/UpdateReserve response type. */
export interface MsgUpdateReserveResponse {
}
/** MsgSendToken defines a SDK message for transferring NFT sub-token. */
export interface MsgSendToken {
    sender: string;
    tokenId: string;
    subTokenIds: number[];
    recipient: string;
}
/** MsgSendTokenResponse defines the Msg/SendToken response type. */
export interface MsgSendTokenResponse {
}
/** MsgBurnToken defines a SDK message for burning NFT sub-token. */
export interface MsgBurnToken {
    sender: string;
    tokenId: string;
    subTokenIds: number[];
}
/** MsgBurnTokenResponse defines the Msg/BurnToken response type. */
export interface MsgBurnTokenResponse {
}
export declare const MsgMintToken: {
    encode(message: MsgMintToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintToken;
    fromJSON(object: any): MsgMintToken;
    toJSON(message: MsgMintToken): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        tokenId?: string | undefined;
        tokenUri?: string | undefined;
        allowMint?: boolean | undefined;
        recipient?: string | undefined;
        quantity?: number | undefined;
        reserve?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        tokenId?: string | undefined;
        tokenUri?: string | undefined;
        allowMint?: boolean | undefined;
        recipient?: string | undefined;
        quantity?: number | undefined;
        reserve?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["reserve"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgMintToken>]: never; }>(object: I): MsgMintToken;
};
export declare const MsgMintTokenResponse: {
    encode(_: MsgMintTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintTokenResponse;
    fromJSON(_: any): MsgMintTokenResponse;
    toJSON(_: MsgMintTokenResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgMintTokenResponse;
};
export declare const MsgUpdateToken: {
    encode(message: MsgUpdateToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateToken;
    fromJSON(object: any): MsgUpdateToken;
    toJSON(message: MsgUpdateToken): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        tokenId?: string | undefined;
        tokenUri?: string | undefined;
    } & {
        sender?: string | undefined;
        tokenId?: string | undefined;
        tokenUri?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateToken>]: never; }>(object: I): MsgUpdateToken;
};
export declare const MsgUpdateTokenResponse: {
    encode(_: MsgUpdateTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTokenResponse;
    fromJSON(_: any): MsgUpdateTokenResponse;
    toJSON(_: MsgUpdateTokenResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateTokenResponse;
};
export declare const MsgUpdateReserve: {
    encode(message: MsgUpdateReserve, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateReserve;
    fromJSON(object: any): MsgUpdateReserve;
    toJSON(message: MsgUpdateReserve): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
        reserve?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
        reserve?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["reserve"], keyof Coin>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgUpdateReserve>]: never; }>(object: I): MsgUpdateReserve;
};
export declare const MsgUpdateReserveResponse: {
    encode(_: MsgUpdateReserveResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateReserveResponse;
    fromJSON(_: any): MsgUpdateReserveResponse;
    toJSON(_: MsgUpdateReserveResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateReserveResponse;
};
export declare const MsgSendToken: {
    encode(message: MsgSendToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToken;
    fromJSON(object: any): MsgSendToken;
    toJSON(message: MsgSendToken): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
        recipient?: string | undefined;
    } & {
        sender?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
        recipient?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgSendToken>]: never; }>(object: I): MsgSendToken;
};
export declare const MsgSendTokenResponse: {
    encode(_: MsgSendTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendTokenResponse;
    fromJSON(_: any): MsgSendTokenResponse;
    toJSON(_: MsgSendTokenResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSendTokenResponse;
};
export declare const MsgBurnToken: {
    encode(message: MsgBurnToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnToken;
    fromJSON(object: any): MsgBurnToken;
    toJSON(message: MsgBurnToken): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        sender?: string | undefined;
        tokenId?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgBurnToken>]: never; }>(object: I): MsgBurnToken;
};
export declare const MsgBurnTokenResponse: {
    encode(_: MsgBurnTokenResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnTokenResponse;
    fromJSON(_: any): MsgBurnTokenResponse;
    toJSON(_: MsgBurnTokenResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgBurnTokenResponse;
};
/** Msg defines the module Msg service. */
export interface Msg {
    /** MintToken defines message for creating new NFT token or minting additional NFT sub-tokens. */
    MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    /** UpdateToken defines message for NFT token modifying. */
    UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
    /** UpdateReserve defines message for NFT token reserve updating. */
    UpdateReserve(request: MsgUpdateReserve): Promise<MsgUpdateReserveResponse>;
    /** SendToken defines message for transferring NFT sub-tokens. */
    SendToken(request: MsgSendToken): Promise<MsgSendTokenResponse>;
    /** BurnToken defines message for burning NFT sub-tokens. */
    BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    MintToken(request: MsgMintToken): Promise<MsgMintTokenResponse>;
    UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
    UpdateReserve(request: MsgUpdateReserve): Promise<MsgUpdateReserveResponse>;
    SendToken(request: MsgSendToken): Promise<MsgSendTokenResponse>;
    BurnToken(request: MsgBurnToken): Promise<MsgBurnTokenResponse>;
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
