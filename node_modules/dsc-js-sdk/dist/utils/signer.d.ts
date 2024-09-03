import { Account } from "../accounts";
import Wallet from "../wallet";
import Long from "long";
interface signTransactionData {
    signDoc: {
        bodyBytes: Uint8Array;
        authInfoBytes: Uint8Array;
        chainId: string;
        accountNumber: Long;
    };
    stdSignature: {
        pub_key: {
            type: string;
            value: string;
        };
        signature: string;
    };
}
export declare function signTransaction(txBodyBytes: Uint8Array, wallet: Wallet, account: Account, chainId: string, fee: {
    gas: string;
    amount: any[];
}, simulation: boolean): Promise<signTransactionData>;
export {};
