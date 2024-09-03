export interface clientMsgSendCoin {
  to: string;
  coin: string;
  amount: string;
}

export interface clientMsgCreateCoin {
  title: string;
  ticker: string;
  initSupply: string;
  maxSupply: string;
  reserve: string;
  identity: string;
  crr: string;
  minVolume?: string;
}

export interface clientMsgUpdateCoin {
  maxSupply: string;
  identity: string;
  ticker: string;
  minVolume?: string;
}

export interface clientMsgMultiSendCoin {
  amount: string;
  coin: string;
  to: string;
}

export interface clientMsgCreateWallet {
  owners: string[];
  weights: string[];
  threshold: string;
}

export interface clientMsgNftMint {
  id: string;
  denom: string;
  quantity: string;
  recipient?: string;
  reserve: {
    amount: string;
    denom: string;
  };
  token_uri: string;
  allow_mint: boolean;
}

export interface clientMsgTransferNft {
  id: string;
  recipient: string;
  sub_token_ids: string[];
}

export interface clientMsgBurnNft {
  denom: string;
  id: string;
  sub_token_ids: string[];
}

export interface clientMultisigCreateTx {
  from: string;
  type: string;
  value: any;
}

export interface clientBuyCoin {
  buyCoin: string;
  amount: string;
  spendCoin: string;
  maxSpendLimit?: string;
}

export interface clientSellCoin {
  sellCoin: string;
  amount: string;
  getCoin: string;
  minBuyLimit?: string;
}

export interface clientSellAllCoin {
  sellCoin: string;
  getCoin: string;
  minBuyLimit?: string;
}

export interface clientBurnCoin {
  amount: string;
  coin: string;
}

export interface clientMultisigSignTx {
  txId: string;
}

export interface clientNftUpdateReserve {
  id: string;
  denom: string;
  sub_token_ids: string[];
  reserve: string;
}

export interface clientIssueCheck {
  coin: string;
  amount: string;
  nonce: string;
  dueBlock: string;
  password: string;
}

export interface clientRedeemCheck {
  check: string;
  password: string;
}

export interface clientEditMetadata {
  address: string;
  denom: string;
  id: string;
  token_uri: string;
}

export interface clientMsgSwapInit {
  recipient: string;
  amount: string;
  tokenSymbol: string;
  destChain: string;
}

export interface clientMsgSwapRedeem {
  from: string;
  recipient: string;
  amount: string;
  tokenSymbol: string;
  transactionNumber: string;
  fromChain: string;
  destChain: string;
  v: string;
  r: string;
  s: string;
}

export interface clientMsgDelegate {
  validatorAddress: string;
  coin: string;
  stake: string;
}

export interface clientMsgUndelegate {
  validatorAddress: string;
  coin: string;
  stake: string;
}

export interface clientMsgCancelUndelegate {
  validatorAddress: string;
  coin: string;
  creationHeight: string | number;
  stake: string;
}

export interface clientMsgDelegateNft {
  validatorAddress: string;
  nftId: string;
  subTokenIds: Array<number | string>;
}

export interface clientMsgUndelegateNft {
  validatorAddress: string;
  nftId: string;
  subTokenIds: Array<number | string>;
}

export interface clientMsgCancelUndelegationNft {
  validatorAddress: string;
  nftId: string;
  creationHeight: string | number;
  subTokenIds: Array<number | string>;
}

export interface clientRedelegationData {
  validatorFrom: string;
  validatorTo: string;
  coin: string;
  stake: string;
}

export interface clientCancelRedelegationData {
  validatorFrom: string;
  validatorTo: string;
  creationHeight: string | number;
  coin: string;
  stake: string;
}

export interface clientMsgRedelegateNft {
  validatorFrom: string;
  validatorTo: string;
  nftId: string;
  subTokenIds: Array<number | string>;
}

export interface clientMsgCancelRedelegationNft {
  validatorFrom: string;
  validatorTo: string;
  nftId: string;
  creationHeight: string | number;
  subTokenIds: Array<number | string>;
}

export interface clientCreateValidator {
  rewardAddress: string;
  pubKey: string;
  coin: string;
  stake: string;
  commission: string | number;
  description: {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
  };
}

export interface clientEditValidator {
  validatorAddress: string;
  rewardAddress: string;
  description: {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
  };
}

export interface clientSetOnlineData {
  validator: string;
}

export interface clientSetOfflineData {
  validator: string;
}

export interface clientReturnLegacy {
  pubKey: string;
}

export interface txOptions {
  feeCoin: string;
  feeAmount?: string;
  feeGas?: number;
  baseCoinFeeEstimation?: boolean;
  message: string;
  txBroadcastMode: string;
}
