import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.nft.v1";
/** EventCreateCollection defines event emitted when new NFT collection is created. */
export interface EventCreateCollection {
    creator: string;
    denom: string;
    supply: number;
}
/** EventUpdateCollection defines event emitted when new NFT token is added to existing NFT collection. */
export interface EventUpdateCollection {
    creator: string;
    denom: string;
    supply: number;
}
/** EventCreateToken defines event emitted when new NFT token is created. */
export interface EventCreateToken {
    creator: string;
    denom: string;
    id: string;
    uri: string;
    allowMint: boolean;
    reserve: string;
    recipient: string;
    subTokenIds: number[];
}
/** EventMintToken defines event emitted when new NFT sub-tokens are created. */
export interface EventMintToken {
    creator: string;
    denom: string;
    id: string;
    reserve: string;
    recipient: string;
    subTokenIds: number[];
}
/** EventUpdateToken defines event emitted when existed NFT token is changed. */
export interface EventUpdateToken {
    sender: string;
    id: string;
    uri: string;
}
/** EventUpdateReserve defines event emitted when existed NFT sub-token reserve is changed. */
export interface EventUpdateReserve {
    sender: string;
    id: string;
    /** coin that defines new reserve for all updating NFT-subtokens */
    reserve: string;
    /** coin that was added in total per transaction for all NFT sub-tokens */
    refill: string;
    subTokenIds: number[];
}
/** EventSendToken defines event emitted when existed NFT sub-tokens are transferred. */
export interface EventSendToken {
    sender: string;
    id: string;
    recipient: string;
    subTokenIds: number[];
}
/** EventBurnToken defines event emitted when existed NFT sub-tokens are burnt. */
export interface EventBurnToken {
    sender: string;
    id: string;
    /** coin that was returned in total per transaction for all NFT sub-tokens */
    return: string;
    subTokenIds: number[];
}
export declare const EventCreateCollection: {
    encode(message: EventCreateCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCollection;
    fromJSON(object: any): EventCreateCollection;
    toJSON(message: EventCreateCollection): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        denom?: string | undefined;
        supply?: number | undefined;
    } & {
        creator?: string | undefined;
        denom?: string | undefined;
        supply?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventCreateCollection>]: never; }>(object: I): EventCreateCollection;
};
export declare const EventUpdateCollection: {
    encode(message: EventUpdateCollection, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCollection;
    fromJSON(object: any): EventUpdateCollection;
    toJSON(message: EventUpdateCollection): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        denom?: string | undefined;
        supply?: number | undefined;
    } & {
        creator?: string | undefined;
        denom?: string | undefined;
        supply?: number | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateCollection>]: never; }>(object: I): EventUpdateCollection;
};
export declare const EventCreateToken: {
    encode(message: EventCreateToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateToken;
    fromJSON(object: any): EventCreateToken;
    toJSON(message: EventCreateToken): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        denom?: string | undefined;
        id?: string | undefined;
        uri?: string | undefined;
        allowMint?: boolean | undefined;
        reserve?: string | undefined;
        recipient?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        creator?: string | undefined;
        denom?: string | undefined;
        id?: string | undefined;
        uri?: string | undefined;
        allowMint?: boolean | undefined;
        reserve?: string | undefined;
        recipient?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventCreateToken>]: never; }>(object: I): EventCreateToken;
};
export declare const EventMintToken: {
    encode(message: EventMintToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventMintToken;
    fromJSON(object: any): EventMintToken;
    toJSON(message: EventMintToken): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        denom?: string | undefined;
        id?: string | undefined;
        reserve?: string | undefined;
        recipient?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        creator?: string | undefined;
        denom?: string | undefined;
        id?: string | undefined;
        reserve?: string | undefined;
        recipient?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventMintToken>]: never; }>(object: I): EventMintToken;
};
export declare const EventUpdateToken: {
    encode(message: EventUpdateToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateToken;
    fromJSON(object: any): EventUpdateToken;
    toJSON(message: EventUpdateToken): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: string | undefined;
        uri?: string | undefined;
    } & {
        sender?: string | undefined;
        id?: string | undefined;
        uri?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateToken>]: never; }>(object: I): EventUpdateToken;
};
export declare const EventUpdateReserve: {
    encode(message: EventUpdateReserve, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateReserve;
    fromJSON(object: any): EventUpdateReserve;
    toJSON(message: EventUpdateReserve): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: string | undefined;
        reserve?: string | undefined;
        refill?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        sender?: string | undefined;
        id?: string | undefined;
        reserve?: string | undefined;
        refill?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventUpdateReserve>]: never; }>(object: I): EventUpdateReserve;
};
export declare const EventSendToken: {
    encode(message: EventSendToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSendToken;
    fromJSON(object: any): EventSendToken;
    toJSON(message: EventSendToken): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: string | undefined;
        recipient?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        sender?: string | undefined;
        id?: string | undefined;
        recipient?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventSendToken>]: never; }>(object: I): EventSendToken;
};
export declare const EventBurnToken: {
    encode(message: EventBurnToken, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnToken;
    fromJSON(object: any): EventBurnToken;
    toJSON(message: EventBurnToken): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        id?: string | undefined;
        return?: string | undefined;
        subTokenIds?: number[] | undefined;
    } & {
        sender?: string | undefined;
        id?: string | undefined;
        return?: string | undefined;
        subTokenIds?: (number[] & number[] & { [K in Exclude<keyof I["subTokenIds"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof EventBurnToken>]: never; }>(object: I): EventBurnToken;
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
