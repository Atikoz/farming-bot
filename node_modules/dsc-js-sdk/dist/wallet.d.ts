/// <reference types="node" />
import { PrivKey, PubKey } from "./types/ethermint/crypto/v1/ethsecp256k1/keys";
export declare function generateDerivationPath(depth: number): string;
export declare function generateMnemonic(): string;
export declare function validateMnemonic(mnemonic: string): boolean;
export declare function mnemonicToSeedSync(mnemonic: string): Buffer;
export declare function createDecimalWalletFromMnemonic(mnemonic: string, addressPrefix?: string, derivation_path?: string, id?: number): generatedWallet;
export interface generatedWallet {
    privateKey: Uint8Array;
    address: string;
    publicKey: Uint8Array;
    id: number;
    evmAddress?: string;
}
export default class Wallet {
    mnemonic: string;
    isNodeDirectMode: boolean;
    validatorAddress: any;
    wallet: generatedWallet;
    depth: number;
    id: number;
    privateKey: Uint8Array;
    publicKey: Uint8Array;
    evmAddress: string | undefined;
    address: string;
    readonly availableProposalSubmit: boolean;
    private gateUrl;
    private nodeRestUrl;
    wallets: generatedWallet[];
    currentNonce: number | null;
    currentNonceValidUntil: any;
    constructor(mnemonic: string, address?: string | null, publicKey?: Uint8Array | null);
    setNodeDirectMode(isNodeDirectMode: boolean): void;
    setNodeRestUrl(nodeRestUrl: string): void;
    getNodeRestUrl(): string;
    setGateUrl(gateUrl: string): void;
    getGateUrl(): string;
    getPrivateKeyString(): string;
    getPrivateKeyHex(): string;
    getPublicKeyString(): string;
    getPrivateKey(): PrivKey;
    getPublicKey(compressed?: boolean): PubKey;
    switchAccount(id: number): void;
    generateAccount(): void;
    generateAndSwitchAccount(depth: number, id: number): void;
    getAndUseGeneratedWallets(): Promise<void>;
    sendAndSaveGeneratedWallets(): Promise<void>;
    updateNonce(nonce: number | null): void;
    static encodeCosmosAccountAddress(address: string, prefix?: string): string;
    static decodeCosmosAccountAddress(address: string): string | null;
    static createPublicKey(pubKey: Uint8Array): PubKey;
    static encodePubKey(pubKeyCompressed: PubKey): any;
    static txEncoderDecoder(msgAny: any, memo: string): Uint8Array;
}
