import Wallet from "src/wallet";
import { PubKey } from "../types/ethermint/crypto/v1/ethsecp256k1/keys";
/**
 * @param {string} address Decimal blockchain address
 * @param {'d0' | 'd0valoper' | string} prefix Prefix
 * @returns {boolean} boolean to indicate address validation
 */
export declare function verifyAddress(address: string, prefix?: string): boolean;
export declare function verifyCheck(check: any): false | Uint8Array | import("rlp").NestedUint8Array;
export declare function getAndUseGeneratedWallets(gateUrl: any, address: any): Promise<any>;
export declare function sendAndSaveGeneratedWallets(gateUrl: any, wallets: any, generatedWallets: any): Promise<boolean>;
export declare function getStringHash(value: any): string;
export declare function generateNftId(headline: any, description: any, slug: any, coverHash?: null, assetHash?: null): string;
export declare function getTimestamp(): number;
export declare function isNonceSetAutomatically(wallet: any, options: any): any;
export declare const decodeCosmosAccountAddress: (cosmosAccountAddress: any) => string | null;
export declare const encodeCosmosAccountAddress: (evmAccountAddress: any, prefix?: string) => string;
export declare const encodeEvmAccountAddress: (publicKey: any) => string;
export declare const encodeAddresses: (publicKey: any, prefix?: string) => {
    cosmosAccountAddress: string;
    evmAccountAddress: string;
};
export declare const perpareTimestampAndSignature: (wallet: Wallet) => {
    timestamp: number;
    signature: any;
};
export declare function getWalletAddressFromSignature(data: Record<string, string | string[] | number>, signature: string | string[]): string | null;
export declare const createPublicKey: (pubKey: Uint8Array) => PubKey;
export declare function encodePubKey(pubKeyCompressed: PubKey): any;
export declare function txEncoderDecoder(msgAny: any, memo: string): Uint8Array;
