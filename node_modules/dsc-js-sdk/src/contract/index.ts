import axios, { AxiosInstance, Method } from "axios";

import Contract from "web3-eth-contract";
import { AbiInput, AbiItem } from "web3-utils";
import Web3 from "web3";
import { TransactionReceipt } from "web3-core";

export default class DecimalContract {
  private readonly rpcUrl: string;
  private readonly gateUrl: string;
  private addressFrom: string;
  private privateKey: Uint8Array;

  private readonly web3: Web3;
  private contract?: Contract;
  private jsonInterface?: AbiItem[];
  private readonly requester: AxiosInstance;
  public constructor(rpcEndpoint: string, apiEndpoint: string) {
    this.rpcUrl = rpcEndpoint;
    this.gateUrl = apiEndpoint;
    this.requester = axios.create();
    this.privateKey = new Uint8Array();
    this.addressFrom = "";
    this.web3 = new Web3(new Web3.providers.HttpProvider(this.rpcUrl));
  }

  public setAddressFrom(address: string) {
    this.addressFrom = address;
    this.web3.defaultAccount = address;
  }

  public setPrivateKey(privateKey: Uint8Array) {
    this.privateKey = privateKey;
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

  public async getContract(
    address: string,
    jsonInterface?: AbiItem[]
  ): Promise<DecimalContract> {
    if (jsonInterface) {
      this.jsonInterface = jsonInterface;
    } else {
      const { data } = await this.request(
        `/evm-contracts/${address}`,
        {},
        "get",
        this.gateUrl
      );
      this.jsonInterface = data.result.abi;
    }

    if (!this.jsonInterface) {
      throw new Error("Contract abi is not set");
    }

    this.contract = new this.web3.eth.Contract(this.jsonInterface, address);
    return this;
  }

  public async call(action: string, ...params: any[]): Promise<any> {
    return this.contract?.methods[action](...params).call();
  }

  public getContractObject(): Contract {
    if (!this.contract) {
      throw new Error("Contract is not set");
    }
    return this.contract;
  }

  public async estimateGas(action: string, ...params: any[]): Promise<any> {
    return this.contract?.methods[action](...params).estimateGas({
      from: this.addressFrom,
    });
  }

  private async createRawTransaction(
    to: string,
    data: string,
    gasEstimate: number
  ): Promise<any> {
    const privateKey = Buffer.from(this.privateKey);

    const signedTx = await this.web3.eth.accounts.signTransaction(
      {
        nonce: await this.web3.eth.getTransactionCount(this.addressFrom),
        gasPrice: this.web3.utils.numberToHex(
          await this.web3.eth.getGasPrice()
        ),
        gas: this.web3.utils.numberToHex(gasEstimate),
        from: this.addressFrom,
        to: to,
        value: "0x00",
        data: data,
        chainId: await this.web3.eth.getChainId(),
      },
      privateKey.toString("hex")
    );

    if (signedTx.rawTransaction == undefined) {
      throw new Error("Contract is undefined");
    }

    return this.web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  }

  public async send(
    action: string,
    ...params: any[]
  ): Promise<{ decode: any; transaction: TransactionReceipt }> {
    const functionData = this.contract?.methods[action](...params);
    const encode = functionData.encodeABI();
    const gasEstimate = await functionData.estimateGas({
      from: this.addressFrom,
    });

    if (this.contract == undefined) {
      throw new Error("Contract is undefined");
    }

    const trx = await this.createRawTransaction(
      this.contract.options.address,
      encode,
      gasEstimate
    );

    let decode = {} as any;

    if (this.jsonInterface) {
      for (const acc of this.jsonInterface) {
        if (acc.type == "event") {
          const signature = this.web3.eth.abi.encodeEventSignature(acc);

          if (signature == trx.logs[0].topics[0]) {
            decode = this.web3.eth.abi.decodeLog(
              acc.inputs as AbiInput[],
              trx.logsBloom,
              trx.logs[0].topics.slice(1)
            );
          }
        }
      }
    }

    return { decode: decode, transaction: trx };
  }
}
