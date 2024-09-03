import { toHex } from "@cosmjs/encoding";
import {
  BroadcastTxSyncResponse,
  Tendermint34Client,
} from "@cosmjs/tendermint-rpc";
import { sleep } from "@cosmjs/utils";
import { MsgData } from "cosmjs-types/cosmos/base/abci/v1beta1/abci";

import { Account, accountFromAny, AccountParser } from "./accounts";
import { AuthExtension, setupAuthExtension } from "./modules";
import { QueryClient } from "./queryclient";
import { checkSequenceBroadcast } from "./utils/sequence";
export type TxBroadcatResponse = Promise<
  DeliverTxResponse | SequenceFailureResponse | BroadcastTxSyncResponse
>;
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
export class TimeoutError extends Error {
  public readonly txId: string;

  public constructor(message: string, txId: string) {
    super(message);
    this.txId = txId;
  }
}

export default class Client {
  private readonly tmClient: Tendermint34Client | undefined;
  private readonly queryClient: (QueryClient & AuthExtension) | undefined;
  private chainId: string | undefined;
  private readonly accountParser: AccountParser;

  public static async connect(
    endpoint: string,
    options: ClientOptions = {}
  ): Promise<Client> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new Client(tmClient, options);
  }

  protected constructor(
    tmClient: Tendermint34Client | undefined,
    options: ClientOptions
  ) {
    if (tmClient) {
      this.tmClient = tmClient;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this.queryClient = QueryClient.withExtensions(
        tmClient,
        setupAuthExtension
      );
    }
    const { accountParser = accountFromAny } = options;
    this.accountParser = accountParser;
  }

  protected getTmClient(): Tendermint34Client | undefined {
    return this.tmClient;
  }

  protected forceGetTmClient(): Tendermint34Client {
    if (!this.tmClient) {
      throw new Error(
        "Tendermint client not available. You cannot use online functionality in offline mode."
      );
    }
    return this.tmClient;
  }

  protected getQueryClient(): (QueryClient | AuthExtension) | undefined {
    return this.queryClient;
  }

  protected forceGetQueryClient(): QueryClient | AuthExtension {
    if (!this.queryClient) {
      throw new Error(
        "Query client not available. You cannot use online functionality in offline mode."
      );
    }
    return this.queryClient;
  }

  public async getChainId(): Promise<string> {
    if (!this.chainId) {
      const response = await this.forceGetTmClient().status();
      const chainId = response.nodeInfo.network;
      if (!chainId) throw new Error("Chain ID must not be empty");
      this.chainId = chainId;
    }
    return this.chainId;
  }

  public async getHeight(): Promise<number> {
    const status = await this.forceGetTmClient().status();
    return status.syncInfo.latestBlockHeight;
  }

  public async getAccount(searchAddress: string): Promise<Account | null> {
    try {
      const client = this.forceGetQueryClient() as AuthExtension;
      const account = await client.auth.account(searchAddress);
      return account ? this.accountParser(account) : null;
    } catch (error: any) {
      if (/rpc error: code = NotFound/i.test(error.toString())) {
        return null;
      }
      throw error;
    }
  }

  public async getSequence(address: string): Promise<SequenceResponse> {
    const account = await this.getAccount(address);
    if (!account) {
      throw new Error(
        "Account does not exist on chain. Send some tokens there before trying to query sequence."
      );
    }
    return {
      accountNumber: account.accountNumber,
      sequence: account.sequence,
    };
  }

  public async getTx(id: string): Promise<IndexedTx | null> {
    const results = await this.txsQuery(`tx.hash='${id}'`);
    return results[0] ?? null;
  }

  private async txsQuery(query: string): Promise<readonly IndexedTx[]> {
    const results = await this.forceGetTmClient().txSearchAll({ query: query });
    return results.txs.map((tx) => {
      return {
        height: tx.height,
        hash: toHex(tx.hash).toUpperCase(),
        code: tx.result.code,
        rawLog: tx.result.log || "",
        tx: tx.tx,
        gasUsed: tx.result.gasUsed,
        gasWanted: tx.result.gasWanted,
      };
    });
  }

  public disconnect(): void {
    if (this.tmClient) this.tmClient.disconnect();
  }

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
  public async broadcastTx(
    tx: Uint8Array,
    waitForTx = true,
    timeoutMs = 60_000,
    pollIntervalMs = 3_000
  ): TxBroadcatResponse {
    let timedOut = false;
    const txPollTimeout = setTimeout(() => {
      timedOut = true;
    }, timeoutMs);

    const pollForTx = async (txId: string): Promise<DeliverTxResponse> => {
      if (timedOut) {
        throw new TimeoutError(
          `Transaction with ID ${txId} was submitted but was not yet found on the chain. You might want to check later. There was a wait of ${
            timeoutMs / 1000
          } seconds.`,
          txId
        );
      }
      await sleep(pollIntervalMs);
      const result = await this.getTx(txId);
      return result
        ? {
            code: result.code,
            height: result.height,
            rawLog: result.rawLog,
            transactionHash: txId,
            gasUsed: result.gasUsed,
            gasWanted: result.gasWanted,
          }
        : pollForTx(txId);
    };

    const broadcasted = await this.forceGetTmClient().broadcastTxSync({ tx });
    // parsing expected sequence from log
    if (broadcasted.code) {
      const expectedSequence = checkSequenceBroadcast(broadcasted);
      if (expectedSequence) {
        return Promise.resolve({
          expectedSequence,
        });
      }
      return Promise.reject(
        new Error(
          `Broadcasting transaction failed with code ${broadcasted.code} (codespace: ${broadcasted.codeSpace}). Log: ${broadcasted.log}`
        )
      );
    }

    const transactionId = toHex(broadcasted.hash).toUpperCase();
    if (!waitForTx) {
      return {
        ...broadcasted,
        transactionHash: transactionId,
      };
    }
    return new Promise((resolve, reject) =>
      pollForTx(transactionId).then(
        (value) => {
          clearTimeout(txPollTimeout);
          resolve(value);
        },
        (error) => {
          clearTimeout(txPollTimeout);
          reject(error);
        }
      )
    );
  }
}
