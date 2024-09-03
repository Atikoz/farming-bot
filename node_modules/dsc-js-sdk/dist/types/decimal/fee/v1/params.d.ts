import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "decimal.fee.v1";
/** Params defines transaction fees calculation constants for the entire application. */
export interface Params {
    /** tx common fee depends on raw transaction size in bytes */
    txByteFee: string;
    /** coin creation special fee depends on coin ticker length */
    coinCreateTicker3: string;
    coinCreateTicker4: string;
    coinCreateTicker5: string;
    coinCreateTicker6: string;
    coinCreateTicker7: string;
    /** coin fees */
    coinCreate: string;
    coinUpdate: string;
    coinSend: string;
    coinSendAdd: string;
    coinBuy: string;
    coinSell: string;
    coinRedeemCheck: string;
    coinBurn: string;
    /** multisig fees */
    multisigCreateWallet: string;
    multisigCreateTransaction: string;
    multisigSignTransaction: string;
    /** nft fees */
    nftMintToken: string;
    nftUpdateToken: string;
    nftUpdateReserve: string;
    nftSendToken: string;
    nftBurnToken: string;
    /** swap fees */
    swapActivateChain: string;
    swapDeactivateChain: string;
    swapInitialize: string;
    swapRedeem: string;
    /** validator fees */
    validatorCreateValidator: string;
    validatorEditValidator: string;
    validatorDelegate: string;
    validatorDelegateNft: string;
    validatorRedelegate: string;
    validatorRedelegateNft: string;
    validatorUndelegate: string;
    validatorUndelegateNft: string;
    validatorSetOnline: string;
    validatorSetOffline: string;
    /** evm tx commissions */
    evmGasPrice: string;
    /** oracle defines address empowered to update coin prices. */
    oracle: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
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
