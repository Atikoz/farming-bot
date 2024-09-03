import { Method } from "axios";
import Contract from "web3-eth-contract";
import { AbiItem } from "web3-utils";
import { TransactionReceipt } from "web3-core";
export default class DecimalContract {
    private readonly rpcUrl;
    private readonly gateUrl;
    private addressFrom;
    private privateKey;
    private readonly web3;
    private contract?;
    private jsonInterface?;
    private readonly requester;
    constructor(rpcEndpoint: string, apiEndpoint: string);
    setAddressFrom(address: string): void;
    setPrivateKey(privateKey: Uint8Array): void;
    request(_path: string, params: any, method: Method | undefined, destination: string, data?: null): Promise<import("axios").AxiosResponse<any>>;
    getContract(address: string, jsonInterface?: AbiItem[]): Promise<DecimalContract>;
    call(action: string, ...params: any[]): Promise<any>;
    getContractObject(): Contract;
    estimateGas(action: string, ...params: any[]): Promise<any>;
    private createRawTransaction;
    send(action: string, ...params: any[]): Promise<{
        decode: any;
        transaction: TransactionReceipt;
    }>;
}
