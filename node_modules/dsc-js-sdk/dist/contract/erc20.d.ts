import { AbiItem } from "web3-utils";
import { Contract } from "web3-eth-contract";
export default class DRC20 {
    private readonly jsonInterface;
    private readonly constract;
    constructor(constract: Contract, jsonInterface: AbiItem[]);
}
