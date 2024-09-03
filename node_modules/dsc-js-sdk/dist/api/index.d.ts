import { Method } from "axios";
import { AddressBalance } from "../interfaces/addressBalance";
import { AddressNftBalance } from "../interfaces/addressNftBalance";
import { AddressTransaction } from "../interfaces/addressTransaction";
import Wallet from "../wallet";
export default class DecimalApi {
    private readonly gateUrl;
    private readonly requester;
    constructor(apiEndpoint: string);
    request(_path: string, params: any, method: Method | undefined, destination: string, data?: null): Promise<import("axios").AxiosResponse<any>>;
    getNodeInfo(): Promise<any>;
    getTransactionByHash(hash: string): Promise<any>;
    getEvmBalance(address: string): Promise<any>;
    getAddress(address: string, params: any): Promise<any>;
    returnLegacy(payload: any): Promise<any>;
    getAddressbook(params: any): Promise<any>;
    createAddressbookItem(payload: any, params: any): Promise<any>;
    updateAddressbookItem(itemId: number, payload: any, params: any): Promise<any>;
    deleteAddressbookItem(itemId: number, params: any): Promise<any>;
    getMultisigsByAddress(address: string): Promise<any>;
    getStakes(address: string): Promise<any>;
    getNftStakes(address: string, params: any): Promise<any>;
    getSpecificStakes(address: string, status: string): Promise<any>;
    getNftSpecificStakes(address: string, status: string, params: any): Promise<any>;
    getCoin(symbol: any): Promise<any>;
    getCoinsList(params: any): Promise<any>;
    getCoinsByAddress(address: string, params: any): Promise<any>;
    getTransactionsByAddress(address: string, params: any): Promise<any>;
    getTransaction(hash: string): Promise<any>;
    getMultisig(address: string): Promise<any>;
    getMultisigTxs(address: string, params: any): Promise<any>;
    getNftById(id: number, params: any): Promise<any>;
    getNfts(address: string, params: any): Promise<any>;
    getNftTxes(id: number, params: any, order: string): Promise<any>;
    getNftsTxes(address: string, params: any, order: string): Promise<any>;
    updateAddressBlockingData(address: string, payload: any): Promise<any>;
    getBlockedAddresses(params: any): Promise<any>;
    getProposals(): Promise<any>;
    getValidator(address: string): Promise<any>;
    getAddressBalances(address: string): Promise<AddressBalance>;
    getAddressTransactions(address: string, options?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        count: number;
        items: AddressTransaction[];
    }>;
    getAddressNftsBalances(address: string, wallet: Wallet | null): Promise<AddressNftBalance[]>;
}
