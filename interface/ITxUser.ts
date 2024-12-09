import { Event as StargateEvent } from "@cosmjs/stargate";

export interface ITransaction {
  height: number;
  txIndex: number;
  hash: string;
  code: number;
  events: readonly StargateEvent[];
  rawLog: string;
}