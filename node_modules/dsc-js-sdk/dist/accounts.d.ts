import { Any } from "cosmjs-types/google/protobuf/any";
import { PubKey } from "./types/ethermint/crypto/v1/ethsecp256k1/keys";
export interface Account {
    /** Bech32 account address */
    readonly address: string;
    readonly pubkey: PubKey | null;
    readonly accountNumber: number;
    sequence: number;
}
export declare function decodePubkey(pubkey?: Any | null): PubKey | null;
/**
 * Represents a generic function that takes an `Any` encoded account from the chain
 * and extracts some common `Account` information from it.
 */
export declare type AccountParser = (any: Any) => Account;
/**
 * Basic implementation of AccountParser. This is supposed to support the most relevant
 * common Cosmos SDK account types. If you need support for exotic account types,
 * you'll need to write your own account decoder.
 */
export declare function accountFromAny(input: Any): Account;
