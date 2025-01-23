import { BroadcastTxSyncResponse, Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { MsgData } from "cosmjs-types/cosmos/base/abci/v1beta1/abci";
import { Account, AccountParser } from "./accounts";
import { AuthExtension } from "./modules";
import { QueryClient } from "./queryclient";
export type TxBroadcatResponse = Promise<DeliverTxResponse | SequenceFailureResponse | BroadcastTxSyncResponse>;
export interface SequenceResponse {
    readonly accountNumber: number;
    readonly sequence: number;
}
export interface IndexedTx {
    readonly height: number;
    readonly hash: string;
    readonly code: number;
    readonly rawLog: string;
    readonly tx: Uint8Array;
    readonly gasUsed: number;
    readonly gasWanted: number;
}
export interface ClientOptions {
    readonly accountParser?: AccountParser;
}
export interface DeliverTxResponse {
    readonly height: number;
    /** Error code. The transaction suceeded iff code is 0. */
    readonly code: number;
    readonly transactionHash: string;
    readonly rawLog?: string;
    readonly data?: readonly MsgData[];
    readonly gasUsed: number;
    readonly gasWanted: number;
}
export interface SequenceFailureResponse {
    expectedSequence: string;
}
export declare class TimeoutError extends Error {
    readonly txId: string;
    constructor(message: string, txId: string);
}
export default class Client {
    private readonly tmClient;
    private readonly queryClient;
    private chainId;
    private readonly accountParser;
    static connect(endpoint: string, options?: ClientOptions): Promise<Client>;
    protected constructor(tmClient: Tendermint34Client | undefined, options: ClientOptions);
    protected getTmClient(): Tendermint34Client | undefined;
    protected forceGetTmClient(): Tendermint34Client;
    protected getQueryClient(): (QueryClient | AuthExtension) | undefined;
    protected forceGetQueryClient(): QueryClient | AuthExtension;
    getChainId(): Promise<string>;
    getHeight(): Promise<number>;
    getAccount(searchAddress: string): Promise<Account | null>;
    getSequence(address: string): Promise<SequenceResponse>;
    getTx(id: string): Promise<IndexedTx | null>;
    private txsQuery;
    disconnect(): void;
    /**
     * Broadcasts a signed transaction to the network and monitors its inclusion in a block.
     *
     * If broadcasting is rejected by the node for some reason (e.g. because of a CheckTx failure),
     * an error is thrown.
     *
     * If the transaction is not included in a block before the provided timeout, this errors with a `TimeoutError`.
     *
     * If the transaction is included in a block, a `DeliverTxResponse` is returned. The caller then
     * usually needs to check for execution success or failure.
     */
    broadcastTx(tx: Uint8Array, waitForTx?: boolean, timeoutMs?: number, pollIntervalMs?: number): TxBroadcatResponse;
}
