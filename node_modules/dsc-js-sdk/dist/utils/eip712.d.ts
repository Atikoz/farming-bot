import { Account } from "../accounts";
import { txOptions } from "../interfaces/clientInterfaces";
export declare function generateTypes(msgValues: object): any;
export declare const MSG_SEND_COIN_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeCoin: {
        name: string;
        type: string;
    }[];
};
export declare const MSG_DELEGATE_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeCoin: {
        name: string;
        type: string;
    }[];
};
export declare const MSG_UNBOND_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeCoin: {
        name: string;
        type: string;
    }[];
};
export declare const MSG_REDELEGATE_TYPES: {
    MsgValue: {
        name: string;
        type: string;
    }[];
    TypeCoin: {
        name: string;
        type: string;
    }[];
};
export interface Fee {
    amount: string;
    denom: string;
    gas: string;
}
export declare function generateFee(amount: string, denom: string, gas: string, feePayer: string): any;
export declare function generateMessageEip712(accountNumber: string, sequence: string, chainCosmosId: string, memo: string, fee: object, msgs: object[]): any;
export declare function createEIP712Payload(types: object, account: Account, chainId: string, options: txOptions, fee: Fee, message: object): any;
