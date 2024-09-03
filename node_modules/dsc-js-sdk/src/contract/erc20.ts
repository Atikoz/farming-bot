import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";

export default class DRC20 {
  private readonly jsonInterface: AbiItem[];

  private readonly constract: Contract;

  public constructor(constract: Contract, jsonInterface: AbiItem[]) {
    this.jsonInterface = jsonInterface;
    this.constract = constract;
  }

  // public async
}
