import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.nft.v1";
/** Params defines the parameters for the module. */
export interface Params {
    /** max_collection_size defines maximum allowed count of NFT tokens per a NFT collection. */
    maxCollectionSize: number;
    /** max_token_quantity defines maximum allowed count of NFT sub-tokens per a NFT token. */
    maxTokenQuantity: number;
    /** min_reserve_amount defines minimum allowed reserve for a NFT sub-token in the base coin. */
    minReserveAmount: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        maxCollectionSize?: number | undefined;
        maxTokenQuantity?: number | undefined;
        minReserveAmount?: string | undefined;
    } & {
        maxCollectionSize?: number | undefined;
        maxTokenQuantity?: number | undefined;
        minReserveAmount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Params>]: never; }>(object: I): Params;
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
