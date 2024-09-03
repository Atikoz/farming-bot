import * as _m0 from "protobufjs/minimal";
import { CoinPrice } from "./fee";
import { Params } from "./params";
export declare const protobufPackage = "decimal.fee.v1";
/** QueryCoinPricesRequest is request type for the Query/CoinPrices RPC method. */
export interface QueryCoinPricesRequest {
}
/** QueryCoinPricesResponse is response type for the Query/CoinPrices RPC method. */
export interface QueryCoinPricesResponse {
    prices: CoinPrice[];
}
/** QueryCoinPriceRequest is request type for the Query/CoinPrice RPC method. */
export interface QueryCoinPriceRequest {
    /** denom defines the base currency (coin) denomination which is priced. */
    denom: string;
    /** quote defines the quote currency denomination in the pair (USD as the first example). */
    quote: string;
}
/** QueryCoinPriceResponse is response type for the Query/CoinPrice RPC method. */
export interface QueryCoinPriceResponse {
    price: CoinPrice | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    params: Params | undefined;
}
export declare const QueryCoinPricesRequest: {
    encode(_: QueryCoinPricesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPricesRequest;
    fromJSON(_: any): QueryCoinPricesRequest;
    toJSON(_: QueryCoinPricesRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryCoinPricesRequest;
};
export declare const QueryCoinPricesResponse: {
    encode(message: QueryCoinPricesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPricesResponse;
    fromJSON(object: any): QueryCoinPricesResponse;
    toJSON(message: QueryCoinPricesResponse): unknown;
    fromPartial<I extends {
        prices?: {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        }[] | undefined;
    } & {
        prices?: ({
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        }[] & ({
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        } & {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        } & { [K in Exclude<keyof I["prices"][number], keyof CoinPrice>]: never; })[] & { [K_1 in Exclude<keyof I["prices"], keyof {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "prices">]: never; }>(object: I): QueryCoinPricesResponse;
};
export declare const QueryCoinPriceRequest: {
    encode(message: QueryCoinPriceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPriceRequest;
    fromJSON(object: any): QueryCoinPriceRequest;
    toJSON(message: QueryCoinPriceRequest): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        quote?: string | undefined;
    } & {
        denom?: string | undefined;
        quote?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryCoinPriceRequest>]: never; }>(object: I): QueryCoinPriceRequest;
};
export declare const QueryCoinPriceResponse: {
    encode(message: QueryCoinPriceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCoinPriceResponse;
    fromJSON(object: any): QueryCoinPriceResponse;
    toJSON(message: QueryCoinPriceResponse): unknown;
    fromPartial<I extends {
        price?: {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        } | undefined;
    } & {
        price?: ({
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        } & {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        } & { [K in Exclude<keyof I["price"], keyof CoinPrice>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "price">]: never; }>(object: I): QueryCoinPriceResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    fromPartial<I extends {
        params?: {
            txByteFee?: string | undefined;
            coinCreateTicker3?: string | undefined;
            coinCreateTicker4?: string | undefined;
            coinCreateTicker5?: string | undefined;
            coinCreateTicker6?: string | undefined;
            coinCreateTicker7?: string | undefined;
            coinCreate?: string | undefined;
            coinUpdate?: string | undefined;
            coinSend?: string | undefined;
            coinSendAdd?: string | undefined;
            coinBuy?: string | undefined;
            coinSell?: string | undefined;
            coinRedeemCheck?: string | undefined;
            coinBurn?: string | undefined;
            multisigCreateWallet?: string | undefined;
            multisigCreateTransaction?: string | undefined;
            multisigSignTransaction?: string | undefined;
            nftMintToken?: string | undefined;
            nftUpdateToken?: string | undefined;
            nftUpdateReserve?: string | undefined;
            nftSendToken?: string | undefined;
            nftBurnToken?: string | undefined;
            swapActivateChain?: string | undefined;
            swapDeactivateChain?: string | undefined;
            swapInitialize?: string | undefined;
            swapRedeem?: string | undefined;
            validatorCreateValidator?: string | undefined;
            validatorEditValidator?: string | undefined;
            validatorDelegate?: string | undefined;
            validatorDelegateNft?: string | undefined;
            validatorRedelegate?: string | undefined;
            validatorRedelegateNft?: string | undefined;
            validatorUndelegate?: string | undefined;
            validatorUndelegateNft?: string | undefined;
            validatorSetOnline?: string | undefined;
            validatorSetOffline?: string | undefined;
            evmGasPrice?: string | undefined;
            oracle?: string | undefined;
        } | undefined;
    } & {
        params?: ({
            txByteFee?: string | undefined;
            coinCreateTicker3?: string | undefined;
            coinCreateTicker4?: string | undefined;
            coinCreateTicker5?: string | undefined;
            coinCreateTicker6?: string | undefined;
            coinCreateTicker7?: string | undefined;
            coinCreate?: string | undefined;
            coinUpdate?: string | undefined;
            coinSend?: string | undefined;
            coinSendAdd?: string | undefined;
            coinBuy?: string | undefined;
            coinSell?: string | undefined;
            coinRedeemCheck?: string | undefined;
            coinBurn?: string | undefined;
            multisigCreateWallet?: string | undefined;
            multisigCreateTransaction?: string | undefined;
            multisigSignTransaction?: string | undefined;
            nftMintToken?: string | undefined;
            nftUpdateToken?: string | undefined;
            nftUpdateReserve?: string | undefined;
            nftSendToken?: string | undefined;
            nftBurnToken?: string | undefined;
            swapActivateChain?: string | undefined;
            swapDeactivateChain?: string | undefined;
            swapInitialize?: string | undefined;
            swapRedeem?: string | undefined;
            validatorCreateValidator?: string | undefined;
            validatorEditValidator?: string | undefined;
            validatorDelegate?: string | undefined;
            validatorDelegateNft?: string | undefined;
            validatorRedelegate?: string | undefined;
            validatorRedelegateNft?: string | undefined;
            validatorUndelegate?: string | undefined;
            validatorUndelegateNft?: string | undefined;
            validatorSetOnline?: string | undefined;
            validatorSetOffline?: string | undefined;
            evmGasPrice?: string | undefined;
            oracle?: string | undefined;
        } & {
            txByteFee?: string | undefined;
            coinCreateTicker3?: string | undefined;
            coinCreateTicker4?: string | undefined;
            coinCreateTicker5?: string | undefined;
            coinCreateTicker6?: string | undefined;
            coinCreateTicker7?: string | undefined;
            coinCreate?: string | undefined;
            coinUpdate?: string | undefined;
            coinSend?: string | undefined;
            coinSendAdd?: string | undefined;
            coinBuy?: string | undefined;
            coinSell?: string | undefined;
            coinRedeemCheck?: string | undefined;
            coinBurn?: string | undefined;
            multisigCreateWallet?: string | undefined;
            multisigCreateTransaction?: string | undefined;
            multisigSignTransaction?: string | undefined;
            nftMintToken?: string | undefined;
            nftUpdateToken?: string | undefined;
            nftUpdateReserve?: string | undefined;
            nftSendToken?: string | undefined;
            nftBurnToken?: string | undefined;
            swapActivateChain?: string | undefined;
            swapDeactivateChain?: string | undefined;
            swapInitialize?: string | undefined;
            swapRedeem?: string | undefined;
            validatorCreateValidator?: string | undefined;
            validatorEditValidator?: string | undefined;
            validatorDelegate?: string | undefined;
            validatorDelegateNft?: string | undefined;
            validatorRedelegate?: string | undefined;
            validatorRedelegateNft?: string | undefined;
            validatorUndelegate?: string | undefined;
            validatorUndelegateNft?: string | undefined;
            validatorSetOnline?: string | undefined;
            validatorSetOffline?: string | undefined;
            evmGasPrice?: string | undefined;
            oracle?: string | undefined;
        } & { [K in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(object: I): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** CoinPrices queries all available coin prices. */
    CoinPrices(request: QueryCoinPricesRequest): Promise<QueryCoinPricesResponse>;
    /** CoinPrice queries the specified coin price. */
    CoinPrice(request: QueryCoinPriceRequest): Promise<QueryCoinPriceResponse>;
    /** Params queries the module params. */
    ModuleParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    CoinPrices(request: QueryCoinPricesRequest): Promise<QueryCoinPricesResponse>;
    CoinPrice(request: QueryCoinPriceRequest): Promise<QueryCoinPriceResponse>;
    ModuleParams(request: QueryParamsRequest): Promise<QueryParamsResponse>;
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
