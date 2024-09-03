interface BlockingSignatures {
    signatureA: string;
    signatureB: string;
}
export declare const SUCCESS_CHECK_CODE = 100;
export declare const FAIL_CHECK_CODE = 101;
export declare function createBlockCheckSignatures(walletAddress: string, messageValue: Record<any, any>): BlockingSignatures;
export declare function decodeAddressesArray(signature: string): string[];
export {};
