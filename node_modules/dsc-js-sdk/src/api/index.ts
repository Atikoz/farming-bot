import axios, { AxiosInstance, Method } from "axios";
import { AddressBalance } from "../interfaces/addressBalance";
import { AddressNftBalance } from "../interfaces/addressNftBalance";
import { AddressTransaction } from "../interfaces/addressTransaction";
import { perpareTimestampAndSignature } from "../utils/walletUtils";
import Wallet from "../wallet";
/*
export default function DecimalApi(options) {
  if (!options.baseURL) {
    throw new Error('Invalid baseURL');
  }

  const instance = axios.create(options);

  return instance;
}
*/
// const GATEWAY = 'gateUrl';
// const RPC = 'rpcURL';
// const REST = 'restURL';
export default class DecimalApi {
  private readonly gateUrl: string;
  private readonly requester: AxiosInstance;
  public constructor(apiEndpoint: string) {
    this.gateUrl = apiEndpoint;
    this.requester = axios.create();
  }

  request(
    _path: string,
    params: any = null,
    method: Method = "get",
    destination: string,
    data = null
  ) {
    return axios.request({
      method,
      url: _path,
      baseURL: destination,
      params,
      data,
    });
  }

  async getNodeInfo() {
    const { data } = await this.request(
      "rpc/node_info",
      null,
      "get",
      this.gateUrl
    );
    return data;
  }
  async getTransactionByHash(hash: string) {
    try {
      const { data } = await this.request(
        `rpc/tx/${hash}`,
        null,
        "get",
        this.gateUrl
      );
      return data.result;
    } catch (e) {
      console.error(e);

      return null;
    }
  }
  // evm
  public async getEvmBalance(address: string) {
    const { data } = await this.request(
      `/evm-accounts/${address}/balance`,
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  //
  public async getAddress(address: string, params: any) {
    const { data } = await this.request(
      `/address/${address}/info`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  public async returnLegacy(payload: any) {
    const { data } = await this.request(
      `/rpc/check-legacy`,
      null,
      "post",
      this.gateUrl,
      payload
    );
    return data;
  }
  public async getAddressbook(params: any) {
    const { data } = await this.request(
      `/addressbook`,
      params,
      "get",
      this.gateUrl
    );
    return data;
  }
  public async createAddressbookItem(payload: any, params: any) {
    const { data } = await this.request(
      `/addressbook/create`,
      params,
      "post",
      this.gateUrl,
      payload
    );
    return data;
  }
  public async updateAddressbookItem(
    itemId: number,
    payload: any,
    params: any
  ) {
    const { data } = await this.request(
      `/addressbook/${itemId}`,
      params,
      "put",
      this.gateUrl,
      payload
    );
    return data;
  }
  public async deleteAddressbookItem(itemId: number, params: any) {
    const { data } = await this.request(
      `/addressbook/${itemId}`,
      params,
      "delete",
      this.gateUrl
    );
    return data;
  }
  async getMultisigsByAddress(address: string) {
    const { data } = await this.request(
      `/address/${address}/multisigs`,
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getStakes(address: string) {
    const { data } = await this.request(
      `/address/${address}/stakes`,
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  public async getNftStakes(address: string, params: any) {
    const { data } = await this.request(
      `/address/${address}/nfts/stakes`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  public async getSpecificStakes(address: string, status: string) {
    const { data } = await this.request(
      `/address/${address}/stakes/${status}`,
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  public async getNftSpecificStakes(
    address: string,
    status: string,
    params: any
  ) {
    const { data } = await this.request(
      `/address/${address}/nfts/stakes/${status}`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getCoin(symbol: any) {
    const { data } = await this.request(
      `/coin/${symbol.toLowerCase()}`,
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getCoinsList(params: any) {
    const { data } = await this.request("/coin", params, "get", this.gateUrl);
    return data.result;
  }
  async getCoinsByAddress(address: string, params: any) {
    const { data } = await this.request(
      `/address/${address}/coins`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getTransactionsByAddress(address: string, params: any) {
    const { data } = await this.request(
      `/address/${address}/txs`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getTransaction(hash: string) {
    const { data } = await this.request(
      "/rpc/tx",
      { hash: `0x${hash}` },
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getMultisig(address: string) {
    const { data } = await this.request(
      `/multisig/${address}`,
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getMultisigTxs(address: string, params: any) {
    const { data } = await this.request(
      `/multisig/${address}/txs`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }

  async getNftById(id: number, params: any) {
    const { data } = await this.request(
      `/nfts/${id}`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  //
  async getNfts(address: string, params: any) {
    const { data } = await this.request(
      `/address/${address}/nfts`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getNftTxes(id: number, params: any, order: string) {
    const { data } = await this.request(
      `/nfts/${id}/txs?${order}`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getNftsTxes(address: string, params: any, order: string) {
    const { data } = await this.request(
      `/address/${address}/nfts/txs?${order}`,
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async updateAddressBlockingData(address: string, payload: any) {
    const { data } = await this.request(
      `/address/${address}/blocking-data`,
      null,
      "put",
      this.gateUrl,
      payload
    );
    return data.result;
  }

  async getBlockedAddresses(params: any) {
    const { data } = await this.request(
      "/blocked-addresses",
      params,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getProposals() {
    const { data } = await this.request(
      "/proposals",
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  async getValidator(address: string) {
    const { data } = await this.request(
      `/validator/${address}`,
      null,
      "get",
      this.gateUrl
    );
    return data.result;
  }
  //
  // async requestAccountSequence(address, increaseTheSequence = false) { // old version
  //   console.log('requestAccountSequence');
  //   const path = increaseTheSequence ? `/accounts/${address}` : `/auth/accounts/${address}`;
  //
  //   const { data } = await this.request(path, null, 'get', REST);
  //
  //   return data.result;
  // }
  //
  // // method with modified rpc account request to get nonce with unconfirmed txes
  // // new version, autoincrement do not need, becouse of mempool txes in new request
  // async requestAccountSequenceWithUnconfirmedTxes(address) {
  //   const path = `/auth/accounts-with-unconfirmed-nonce/${address}`;
  //
  //   const { data } = await this.request(path, null, 'get', REST);
  //
  //   return data.result;
  // }
  //
  // async broadcastTx(txData) {
  //   const resp = await this.request('/txs', null, 'post', REST, txData);
  //
  //   return resp.data;
  // }
  //
  // async encodeTx(tx) {
  //   console.log('encodeTx request');
  //   const resp = await this.request('/txs/encode', null, 'post', REST, tx);
  //   console.log(tx);
  //   console.log(tx.msg);
  //   console.log(resp.data);
  //   return resp.data;
  // }
  //

  public async getAddressBalances(address: string): Promise<AddressBalance> {
    const { data } = await this.request(
      `/address/${address}/balances`,
      null,
      "get",
      this.gateUrl
    );

    return data.result;
  }

  public async getAddressTransactions(
    address: string,
    options?: { limit?: number; offset?: number }
  ): Promise<{ count: number; items: AddressTransaction[] }> {
    const { data } = await this.request(
      `/address/${address}/txs`,
      {
        limit: options?.limit,
        offset: options?.offset,
      },
      "get",
      this.gateUrl
    );

    return data.result;
  }

  public async getAddressNftsBalances(
    address: string,
    wallet: Wallet | null
  ): Promise<AddressNftBalance[]> {
    const { data } = await this.request(
      `/address/${address}/nfts/balances`,
      address === wallet?.address
        ? { ...perpareTimestampAndSignature(wallet) }
        : {},
      "get",
      this.gateUrl
    );

    return data.result;
  }
}
