import * as _m0 from "protobufjs/minimal";
import { CoinPrice } from "./fee";
import { Params } from "./params";
export declare const protobufPackage = "decimal.fee.v1";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** prices defines complete list of initial coin prices. */
    prices: CoinPrice[];
    /** params defines all the module's parameters. */
    params: Params | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        prices?: {
            denom?: string | undefined;
            quote?: string | undefined;
            price?: string | undefined;
            updatedAt?: Date | undefined;
        }[] | undefined;
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
        } & { [K_2 in Exclude<keyof I["params"], keyof Params>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof GenesisState>]: never; }>(object: I): GenesisState;
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
