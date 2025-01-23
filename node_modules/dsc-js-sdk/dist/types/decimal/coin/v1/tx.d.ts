import * as _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
export declare const protobufPackage = "decimal.coin.v1";
export interface ExtOptionsWeb3Tx {
    typedDataChainID: number;
    feePayer: string;
    feePayerSig: Uint8Array;
}
export declare const Web3Tx: {
    encode(message: ExtOptionsWeb3Tx, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExtOptionsWeb3Tx;
    fromPartial<I extends {
        typedDataChainID?: number | undefined;
        feePayer?: string | undefined;
        feePayerSig?: Uint8Array | undefined;
    } & {
        typedDataChainID?: number | undefined;
        feePayer?: string | undefined;
        feePayerSig?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof ExtOptionsWeb3Tx>]: never; }>(object: I): ExtOptionsWeb3Tx;
};
/** MsgCreateCoin defines a SDK message for creating a new coin. */
export interface MsgCreateCoin {
    sender: string;
    denom: string;
    title: string;
    crr: number;
    initialVolume: string;
    initialReserve: string;
    limitVolume: string;
    identity: string;
    /**
     * min_volume defines optional minimal allowed supply for the coin.
     * NOTE: when value is zero it means that the coin does not support minimal supply limitations.
     */
    minVolume: string;
}
/** MsgCreateCoinResponse defines the Msg/CreateCoin response type. */
export interface MsgCreateCoinResponse {
}
/** MsgUpdateCoin defines a SDK message for modifying existing coin. */
export interface MsgUpdateCoin {
    sender: string;
    denom: string;
    limitVolume: string;
    identity: string;
    /**
     * min_volume defines optional minimal allowed supply for the coin.
     * NOTE: when value is zero it means that the coin does not support minimal supply limitations.
     */
    minVolume: string;
}
/** MsgUpdateCoinResponse defines the Msg/UpdateCoin response type. */
export interface MsgUpdateCoinResponse {
}
/** MsgSendCoin defines a SDK message for transferring a coin. */
export interface MsgSendCoin {
    sender: string;
    recipient: string;
    coin: Coin | undefined;
}
/** MsgSendCoinResponse defines the Msg/SendCoin response type. */
export interface MsgSendCoinResponse {
}
/** MultiSendEntry defines a single entry of MsgMultiSendCoin message. */
export interface MultiSendEntry {
    recipient: string;
    coin: Coin | undefined;
}
/** MsgMultiSendCoin defines a SDK message for multiple transferring coins as a batch. */
export interface MsgMultiSendCoin {
    sender: string;
    sends: MultiSendEntry[];
}
/** MsgMultiSendCoinResponse defines the Msg/MultiSendCoin response type. */
export interface MsgMultiSendCoinResponse {
}
/** MsgBuyCoin defines a SDK message for buying a coin. */
export interface MsgBuyCoin {
    sender: string;
    coinToBuy: Coin | undefined;
    maxCoinToSell: Coin | undefined;
}
/** MsgBuyCoinResponse defines the Msg/BuyCoin response type. */
export interface MsgBuyCoinResponse {
}
/** MsgSellCoin defines a SDK message for selling a coin. */
export interface MsgSellCoin {
    sender: string;
    coinToSell: Coin | undefined;
    minCoinToBuy: Coin | undefined;
}
/** MsgSellCoinResponse defines the Msg/SellCoin response type. */
export interface MsgSellCoinResponse {
}
/** MsgSellAllCoin defines a SDK message for selling a coin completely (to sell all having amount of a coin) */
export interface MsgSellAllCoin {
    sender: string;
    coinDenomToSell: string;
    minCoinToBuy: Coin | undefined;
}
/** MsgSellAllCoinResponse defines the Msg/SellAllCoin response type. */
export interface MsgSellAllCoinResponse {
}
/** MsgBurnCoin defines a SDK message for burning a coin. */
export interface MsgBurnCoin {
    sender: string;
    coin: Coin | undefined;
}
/** MsgBurnCoinResponse defines the Msg/BurnCoin response type. */
export interface MsgBurnCoinResponse {
}
/** MsgRedeemCheck defines a SDK message for redeeming a check. */
export interface MsgRedeemCheck {
    sender: string;
    check: string;
    proof: string;
}
/** MsgRedeemCheckResponse defines the Msg/RedeemCheck response type. */
export interface MsgRedeemCheckResponse {
}
export declare const MsgCreateCoin: {
    encode(message: MsgCreateCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCoin;
    fromJSON(object: any): MsgCreateCoin;
    toJSON(message: MsgCreateCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        title?: string | undefined;
        crr?: number | undefined;
        initialVolume?: string | undefined;
        initialReserve?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
        minVolume?: string | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        title?: string | undefined;
        crr?: number | undefined;
        initialVolume?: string | undefined;
        initialReserve?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
        minVolume?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgCreateCoin>]: never; }>(object: I): MsgCreateCoin;
};
export declare const MsgCreateCoinResponse: {
    encode(_: MsgCreateCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCoinResponse;
    fromJSON(_: any): MsgCreateCoinResponse;
    toJSON(_: MsgCreateCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgCreateCoinResponse;
};
export declare const MsgUpdateCoin: {
    encode(message: MsgUpdateCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoin;
    fromJSON(object: any): MsgUpdateCoin;
    toJSON(message: MsgUpdateCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
        minVolume?: string | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
        minVolume?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgUpdateCoin>]: never; }>(object: I): MsgUpdateCoin;
};
export declare const MsgUpdateCoinResponse: {
    encode(_: MsgUpdateCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateCoinResponse;
    fromJSON(_: any): MsgUpdateCoinResponse;
    toJSON(_: MsgUpdateCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgUpdateCoinResponse;
};
export declare const MsgSendCoin: {
    encode(message: MsgSendCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCoin;
    fromJSON(object: any): MsgSendCoin;
    toJSON(message: MsgSendCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        recipient?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        recipient?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgSendCoin>]: never; }>(object: I): MsgSendCoin;
};
export declare const MsgSendCoinResponse: {
    encode(_: MsgSendCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendCoinResponse;
    fromJSON(_: any): MsgSendCoinResponse;
    toJSON(_: MsgSendCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSendCoinResponse;
};
export declare const MultiSendEntry: {
    encode(message: MultiSendEntry, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MultiSendEntry;
    fromJSON(object: any): MultiSendEntry;
    toJSON(message: MultiSendEntry): unknown;
    fromPartial<I extends {
        recipient?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        recipient?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MultiSendEntry>]: never; }>(object: I): MultiSendEntry;
};
export declare const MsgMultiSendCoin: {
    encode(message: MsgMultiSendCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendCoin;
    fromJSON(object: any): MsgMultiSendCoin;
    toJSON(message: MsgMultiSendCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        sends?: {
            recipient?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        sender?: string | undefined;
        sends?: ({
            recipient?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[] & ({
            recipient?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            recipient?: string | undefined;
            coin?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I["sends"][number]["coin"], keyof Coin>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I["sends"][number], keyof MultiSendEntry>]: never; })[] & { [K_2 in Exclude<keyof I["sends"], keyof {
            recipient?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgMultiSendCoin>]: never; }>(object: I): MsgMultiSendCoin;
};
export declare const MsgMultiSendCoinResponse: {
    encode(_: MsgMultiSendCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiSendCoinResponse;
    fromJSON(_: any): MsgMultiSendCoinResponse;
    toJSON(_: MsgMultiSendCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgMultiSendCoinResponse;
};
export declare const MsgBuyCoin: {
    encode(message: MsgBuyCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCoin;
    fromJSON(object: any): MsgBuyCoin;
    toJSON(message: MsgBuyCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coinToBuy?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        maxCoinToSell?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        coinToBuy?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coinToBuy"], keyof Coin>]: never; }) | undefined;
        maxCoinToSell?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["maxCoinToSell"], keyof Coin>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgBuyCoin>]: never; }>(object: I): MsgBuyCoin;
};
export declare const MsgBuyCoinResponse: {
    encode(_: MsgBuyCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyCoinResponse;
    fromJSON(_: any): MsgBuyCoinResponse;
    toJSON(_: MsgBuyCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgBuyCoinResponse;
};
export declare const MsgSellCoin: {
    encode(message: MsgSellCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellCoin;
    fromJSON(object: any): MsgSellCoin;
    toJSON(message: MsgSellCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coinToSell?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        minCoinToBuy?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        coinToSell?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coinToSell"], keyof Coin>]: never; }) | undefined;
        minCoinToBuy?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["minCoinToBuy"], keyof Coin>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgSellCoin>]: never; }>(object: I): MsgSellCoin;
};
export declare const MsgSellCoinResponse: {
    encode(_: MsgSellCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellCoinResponse;
    fromJSON(_: any): MsgSellCoinResponse;
    toJSON(_: MsgSellCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSellCoinResponse;
};
export declare const MsgSellAllCoin: {
    encode(message: MsgSellAllCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellAllCoin;
    fromJSON(object: any): MsgSellAllCoin;
    toJSON(message: MsgSellAllCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coinDenomToSell?: string | undefined;
        minCoinToBuy?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        coinDenomToSell?: string | undefined;
        minCoinToBuy?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["minCoinToBuy"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgSellAllCoin>]: never; }>(object: I): MsgSellAllCoin;
};
export declare const MsgSellAllCoinResponse: {
    encode(_: MsgSellAllCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellAllCoinResponse;
    fromJSON(_: any): MsgSellAllCoinResponse;
    toJSON(_: MsgSellAllCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgSellAllCoinResponse;
};
export declare const MsgBurnCoin: {
    encode(message: MsgBurnCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoin;
    fromJSON(object: any): MsgBurnCoin;
    toJSON(message: MsgBurnCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coin?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        sender?: string | undefined;
        coin?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["coin"], keyof Coin>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof MsgBurnCoin>]: never; }>(object: I): MsgBurnCoin;
};
export declare const MsgBurnCoinResponse: {
    encode(_: MsgBurnCoinResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgBurnCoinResponse;
    fromJSON(_: any): MsgBurnCoinResponse;
    toJSON(_: MsgBurnCoinResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgBurnCoinResponse;
};
export declare const MsgRedeemCheck: {
    encode(message: MsgRedeemCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCheck;
    fromJSON(object: any): MsgRedeemCheck;
    toJSON(message: MsgRedeemCheck): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        check?: string | undefined;
        proof?: string | undefined;
    } & {
        sender?: string | undefined;
        check?: string | undefined;
        proof?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgRedeemCheck>]: never; }>(object: I): MsgRedeemCheck;
};
export declare const MsgRedeemCheckResponse: {
    encode(_: MsgRedeemCheckResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRedeemCheckResponse;
    fromJSON(_: any): MsgRedeemCheckResponse;
    toJSON(_: MsgRedeemCheckResponse): unknown;
    fromPartial<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(_: I): MsgRedeemCheckResponse;
};
/** Msg defines the module Msg service. */
export interface Msg {
    /** CreateCoin defines message for creating a new coin. */
    CreateCoin(request: MsgCreateCoin): Promise<MsgCreateCoinResponse>;
    /** UpdateCoin defines message for modifying existing coin. */
    UpdateCoin(request: MsgUpdateCoin): Promise<MsgUpdateCoinResponse>;
    /** SendCoin defines message for transferring a coin. */
    SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse>;
    /** MultiSendCoin defines message for multiple transferring coins as a batch. */
    MultiSendCoin(request: MsgMultiSendCoin): Promise<MsgMultiSendCoinResponse>;
    /** BuyCoin defines message for buying a coin. */
    BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse>;
    /** SellCoin defines message for selling a coin. */
    SellCoin(request: MsgSellCoin): Promise<MsgSellCoinResponse>;
    /** SellAllCoin defines message for selling a coin completely (to sell all having amount of a coin). */
    SellAllCoin(request: MsgSellAllCoin): Promise<MsgSellAllCoinResponse>;
    /** BurnCoin defines message for burning a coin. */
    BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse>;
    /** RedeemCheck defines message for redeeming checks. */
    RedeemCheck(request: MsgRedeemCheck): Promise<MsgRedeemCheckResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateCoin(request: MsgCreateCoin): Promise<MsgCreateCoinResponse>;
    UpdateCoin(request: MsgUpdateCoin): Promise<MsgUpdateCoinResponse>;
    SendCoin(request: MsgSendCoin): Promise<MsgSendCoinResponse>;
    MultiSendCoin(request: MsgMultiSendCoin): Promise<MsgMultiSendCoinResponse>;
    BuyCoin(request: MsgBuyCoin): Promise<MsgBuyCoinResponse>;
    SellCoin(request: MsgSellCoin): Promise<MsgSellCoinResponse>;
    SellAllCoin(request: MsgSellAllCoin): Promise<MsgSellAllCoinResponse>;
    BurnCoin(request: MsgBurnCoin): Promise<MsgBurnCoinResponse>;
    RedeemCheck(request: MsgRedeemCheck): Promise<MsgRedeemCheckResponse>;
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
