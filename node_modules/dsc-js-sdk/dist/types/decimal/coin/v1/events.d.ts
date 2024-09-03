import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.coin.v1";
/** EventCreateCoin defines event emitted when new coin is created. */
export interface EventCreateCoin {
    sender: string;
    denom: string;
    title: string;
    crr: number;
    initialVolume: string;
    initialReserve: string;
    limitVolume: string;
    identity: string;
    commissionCreateCoin: string;
}
/** EventUpdateCoin defines event emitted when existing coin is updated. */
export interface EventUpdateCoin {
    sender: string;
    denom: string;
    limitVolume: string;
    identity: string;
}
/** EventUpdateCoinVR defines event emitted when volume or reserve of existing coin is updated. */
export interface EventUpdateCoinVR {
    denom: string;
    volume: string;
    reserve: string;
}
/** EventSendCoin defines event emitted when a coin is transferred. */
export interface EventSendCoin {
    sender: string;
    recipient: string;
    coin: string;
}
/** EventBuySellCoin defines event emitted when a coin is traded. */
export interface EventBuySellCoin {
    sender: string;
    coinToBuy: string;
    coinToSell: string;
    amountInBaseCoin: string;
}
/** EventBurnCoin defines event emitted when a coin is burnt. */
export interface EventBurnCoin {
    sender: string;
    coin: string;
}
/** EventRedeemCheck defines event emitted when a check is redeemed. */
export interface EventRedeemCheck {
    sender: string;
    issuer: string;
    coin: string;
    nonce: string;
    dueBlock: string;
    commissionRedeemCheck: string;
}
export declare const EventCreateCoin: {
    encode(message: EventCreateCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventCreateCoin;
    fromJSON(object: any): EventCreateCoin;
    toJSON(message: EventCreateCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        title?: string | undefined;
        crr?: number | undefined;
        initialVolume?: string | undefined;
        initialReserve?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
        commissionCreateCoin?: string | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        title?: string | undefined;
        crr?: number | undefined;
        initialVolume?: string | undefined;
        initialReserve?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
        commissionCreateCoin?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventCreateCoin>]: never; }>(object: I): EventCreateCoin;
};
export declare const EventUpdateCoin: {
    encode(message: EventUpdateCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCoin;
    fromJSON(object: any): EventUpdateCoin;
    toJSON(message: EventUpdateCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        denom?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
    } & {
        sender?: string | undefined;
        denom?: string | undefined;
        limitVolume?: string | undefined;
        identity?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateCoin>]: never; }>(object: I): EventUpdateCoin;
};
export declare const EventUpdateCoinVR: {
    encode(message: EventUpdateCoinVR, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateCoinVR;
    fromJSON(object: any): EventUpdateCoinVR;
    toJSON(message: EventUpdateCoinVR): unknown;
    fromPartial<I extends {
        denom?: string | undefined;
        volume?: string | undefined;
        reserve?: string | undefined;
    } & {
        denom?: string | undefined;
        volume?: string | undefined;
        reserve?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventUpdateCoinVR>]: never; }>(object: I): EventUpdateCoinVR;
};
export declare const EventSendCoin: {
    encode(message: EventSendCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventSendCoin;
    fromJSON(object: any): EventSendCoin;
    toJSON(message: EventSendCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        recipient?: string | undefined;
        coin?: string | undefined;
    } & {
        sender?: string | undefined;
        recipient?: string | undefined;
        coin?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventSendCoin>]: never; }>(object: I): EventSendCoin;
};
export declare const EventBuySellCoin: {
    encode(message: EventBuySellCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBuySellCoin;
    fromJSON(object: any): EventBuySellCoin;
    toJSON(message: EventBuySellCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coinToBuy?: string | undefined;
        coinToSell?: string | undefined;
        amountInBaseCoin?: string | undefined;
    } & {
        sender?: string | undefined;
        coinToBuy?: string | undefined;
        coinToSell?: string | undefined;
        amountInBaseCoin?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventBuySellCoin>]: never; }>(object: I): EventBuySellCoin;
};
export declare const EventBurnCoin: {
    encode(message: EventBurnCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventBurnCoin;
    fromJSON(object: any): EventBurnCoin;
    toJSON(message: EventBurnCoin): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        coin?: string | undefined;
    } & {
        sender?: string | undefined;
        coin?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventBurnCoin>]: never; }>(object: I): EventBurnCoin;
};
export declare const EventRedeemCheck: {
    encode(message: EventRedeemCheck, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): EventRedeemCheck;
    fromJSON(object: any): EventRedeemCheck;
    toJSON(message: EventRedeemCheck): unknown;
    fromPartial<I extends {
        sender?: string | undefined;
        issuer?: string | undefined;
        coin?: string | undefined;
        nonce?: string | undefined;
        dueBlock?: string | undefined;
        commissionRedeemCheck?: string | undefined;
    } & {
        sender?: string | undefined;
        issuer?: string | undefined;
        coin?: string | undefined;
        nonce?: string | undefined;
        dueBlock?: string | undefined;
        commissionRedeemCheck?: string | undefined;
    } & { [K in Exclude<keyof I, keyof EventRedeemCheck>]: never; }>(object: I): EventRedeemCheck;
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
