import { Event as StargateEvent } from "@cosmjs/stargate";

export interface ICrossfiTransaction {
  height: number;
  txIndex: number;
  hash: string;
  code: number;
  events: readonly StargateEvent[];
  rawLog: string;
}

interface BalanceItem {
  denom: string;
  amount: string;
}

export interface CrossfiBalanceWallet {
balances: BalanceItem[];
  pagination: {
    next_key: string | null;
    total: string;
  };
}

export interface Delegation {
  delegator_address: string;
  shares: string;
}

export interface DelegationResponse {
  delegation: Delegation;
}

export interface GetValidatorDelegationsApiResponse {
  delegation_responses: DelegationResponse[];
}

export interface Coin {
  denom: string;
  amount: string;
}

export interface UserBalance {
  balances: Coin[];
}