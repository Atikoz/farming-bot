import Wallet from "./wallet";
import Decimal from "./decimal";
import TX_TYPE from "./txTypesNew";
import { DecimalNetworks } from "./networks";
import { PubKey } from "./types/ethermint/crypto/v1/ethsecp256k1/keys";
import { EncoderDecoder } from "./utils/encoderDecoder";
import { MsgRedelegate, MsgUndelegate, MsgDelegate } from "./types/validator/v1/tx";
import { Transaction } from "./transaction";
import DecimalEVM from "./decimalevm";
import Subgraph from "./subgraph";
declare const Sdk: {
    Wallet: typeof Wallet;
    Decimal: typeof Decimal;
    DecimalEVM: typeof DecimalEVM;
    Subgraph: typeof Subgraph;
    TX_TYPE: {
        COIN_BUY: string;
        COIN_CREATE: string;
        COIN_UPDATE: string;
        COIN_SELL: string;
        COIN_SEND: string;
        COIN_BURN: string;
        COIN_MULTISEND: string;
        COIN_SELL_ALL: string;
        COIN_REDEEM_CHECK: string;
        COIN_ISSUE_CHECK: string;
        VALIDATOR_CANDIDATE: string;
        VALIDATOR_DELEGATE: string;
        VALIDATOR_DELEGATE_COSMOS: string;
        VALIDATOR_REDELEGATE: string;
        VALIDATOR_CANCEL_REDELEGATE: string;
        VALIDATOR_CANCEL_UNDELEGATE: string;
        VALIDATOR_SET_ONLINE: string;
        VALIDATOR_SET_OFFLINE: string;
        VALIDATOR_UNBOND: string;
        VALIDATOR_CANDIDATE_EDIT: string;
        MULTISIG_CREATE_WALLET: string;
        MULTISIG_CREATE_TX: string;
        MULTISIG_SIGN_TX: string;
        SWAP_INIT: string;
        SWAP_REDEEM: string;
        NFT_MINT: string;
        NFT_BURN: string;
        NFT_EDIT_METADATA: string;
        NFT_TRANSFER: string;
        NFT_DELEGATE: string;
        NFT_UNBOND: string;
        NFT_REDELEGATE: string;
        NFT_CANCEL_REDELEGATE: string;
        NFT_CANCEL_UNDELEGATE: string;
        NFT_UPDATE_RESERVE: string;
        CHAIN_ACTIVATE: string;
        CHAIN_DEACTIVATE: string;
        SOFTWARE_UPGRADE: string;
        SOFTWARE_CANCEL_UPGRADE: string;
        ETHEREUM_TX: string;
        UPDATE_COIN_PRICES: string;
        REOWN_LEGACY: string;
    };
    DecimalNetworks: {
        devnet: import("./endpoints").NETWORKS;
        testnet: import("./endpoints").NETWORKS;
        mainnet: import("./endpoints").NETWORKS;
    };
    PubKey: {
        encode(message: PubKey, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): PubKey;
        fromJSON(object: any): PubKey;
        toJSON(message: PubKey): unknown;
        fromPartial<I extends {
            key?: Uint8Array | undefined;
        } & {
            key?: Uint8Array | undefined;
        } & Record<Exclude<keyof I, "key">, never>>(object: I): PubKey;
    };
    EncoderDecoder: typeof EncoderDecoder;
    Transaction: typeof Transaction;
    MsgRedelegate: {
        encode(message: MsgRedelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgRedelegate;
        fromJSON(object: any): MsgRedelegate;
        toJSON(message: MsgRedelegate): unknown;
        fromPartial<I_1 extends {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegator?: string | undefined;
            validatorSrc?: string | undefined;
            validatorDst?: string | undefined;
            coin?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K in Exclude<keyof I_1["coin"], keyof import("./types/cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
        } & { [K_1 in Exclude<keyof I_1, keyof MsgRedelegate>]: never; }>(object: I_1): MsgRedelegate;
    };
    MsgUndelegate: {
        encode(message: MsgUndelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgUndelegate;
        fromJSON(object: any): MsgUndelegate;
        toJSON(message: MsgUndelegate): unknown;
        fromPartial<I_2 extends {
            delegator?: string | undefined;
            validator?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            coin?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_2 in Exclude<keyof I_2["coin"], keyof import("./types/cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I_2, keyof MsgUndelegate>]: never; }>(object: I_2): MsgUndelegate;
    };
    MsgDelegate: {
        encode(message: MsgDelegate, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
        decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): MsgDelegate;
        fromJSON(object: any): MsgDelegate;
        toJSON(message: MsgDelegate): unknown;
        fromPartial<I_3 extends {
            delegator?: string | undefined;
            validator?: string | undefined;
            coin?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
        } & {
            delegator?: string | undefined;
            validator?: string | undefined;
            coin?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_4 in Exclude<keyof I_3["coin"], keyof import("./types/cosmos/base/v1beta1/coin").Coin>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I_3, keyof MsgDelegate>]: never; }>(object: I_3): MsgDelegate;
    };
};
export default Sdk;
export { Wallet, Decimal, DecimalEVM, Subgraph, TX_TYPE, DecimalNetworks };
export * from "./utils/walletUtils";
