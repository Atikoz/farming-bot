import {
  clientBurnCoin,
  clientBuyCoin,
  clientCancelRedelegationData,
  clientCreateValidator,
  clientEditMetadata,
  clientEditValidator,
  clientMsgBurnNft,
  clientMsgCancelRedelegationNft,
  clientMsgCancelUndelegate,
  clientMsgCancelUndelegationNft,
  clientMsgCreateCoin,
  clientMsgCreateWallet,
  clientMsgDelegate,
  clientMsgDelegateNft,
  clientMsgMultiSendCoin,
  clientMsgNftMint,
  clientMsgRedelegateNft,
  clientMsgSendCoin,
  clientMsgSwapInit,
  clientMsgSwapRedeem,
  clientMsgTransferNft,
  clientMsgUndelegate,
  clientMsgUndelegateNft,
  clientMsgUpdateCoin,
  clientMultisigCreateTx,
  clientMultisigSignTx,
  clientNftUpdateReserve,
  clientRedelegationData,
  clientReturnLegacy,
  clientSellAllCoin,
  clientSellCoin,
  clientSetOnlineData,
} from "../interfaces/clientInterfaces";
import {
  MsgCreateCoin,
  MsgSendCoin,
  MsgMultiSendCoin,
  MsgUpdateCoin,
  MsgBuyCoin,
  MsgSellCoin,
  MsgSellAllCoin,
  MsgBurnCoin,
} from "../types/decimal/coin/v1/tx";
import { generatedWallet } from "../wallet";
import { getAmountFromUNI, getAmountToUNI, getCommissionToUNI } from "./math";
import {
  MsgCreateTransaction,
  MsgCreateWallet,
  MsgSignTransaction,
} from "../types/decimal/multisig/v1/tx";
import {
  MsgBurnToken,
  MsgMintToken,
  MsgSendToken,
  MsgUpdateReserve,
  MsgUpdateToken,
} from "../types/decimal/nft/v1/tx";
import { MsgInitializeSwap, MsgRedeemSwap } from "src/types/decimal/swap/v1/tx";
import {
  MsgCancelRedelegation,
  MsgCancelRedelegationNFT,
  MsgCancelUndelegation,
  MsgCancelUndelegationNFT,
  MsgCreateValidator,
  MsgDelegate,
  MsgDelegateNFT,
  MsgEditValidator,
  MsgRedelegate,
  MsgRedelegateNFT,
  MsgSetOffline,
  MsgSetOnline,
  MsgUndelegate,
  MsgUndelegateNFT,
} from "src/types/validator/v1/tx";
import BigNumber from "bignumber.js";
import { pubKeyValidatorTypeUrl } from "./encoderDecoder";
import Wallet from "../wallet";
const encoder = new TextEncoder();
import txTypesNew from "../txTypesNew";
import { MsgReturnLegacy } from "src/types/decimal/legacy/v1/tx";
import { encodeCosmosAccountAddress } from "./walletUtils";

export function sendCoinData(
  data: clientMsgSendCoin,
  wallet: generatedWallet
): MsgSendCoin {
  if (data.to.startsWith("0x")) {
    data.to = encodeCosmosAccountAddress(data.to);
  }

  return {
    sender: wallet.address,
    recipient: data.to,
    coin: {
      amount: getAmountToUNI(data.amount),
      denom: data.coin.toLowerCase(),
    },
  };
}

export function updateCoinData(
  data: clientMsgUpdateCoin,
  wallet: generatedWallet
): MsgUpdateCoin {
  return {
    sender: wallet.address,
    denom: data.ticker,
    limitVolume: getAmountToUNI(data.maxSupply),
    identity: data.identity,
    minVolume: data.minVolume ? getAmountToUNI(data.minVolume) : "0",
  };
}

export function createCoinData(
  data: clientMsgCreateCoin,
  wallet: generatedWallet
): MsgCreateCoin {
  return {
    sender: wallet.address,
    title: data.title,
    denom: data.ticker.toLowerCase(),
    crr: Number(data.crr),
    initialVolume: getAmountToUNI(data.initSupply),
    initialReserve: getAmountToUNI(data.reserve),
    limitVolume: getAmountToUNI(data.maxSupply),
    identity: data.identity,
    minVolume: data.minVolume ? getAmountToUNI(data.minVolume) : "0",
  };
}

export function multiSendCoinData(
  data: clientMsgMultiSendCoin[],
  wallet: generatedWallet
): MsgMultiSendCoin {
  const obj: MsgMultiSendCoin = {
    sender: wallet.address,
    sends: [],
  };

  data.forEach((item) => {
    obj.sends.push({
      recipient: item.to,
      coin: {
        amount: getAmountToUNI(item.amount),
        denom: item.coin.toLowerCase(),
      },
    });
  });

  return obj;
}
export function createWalletData(
  data: clientMsgCreateWallet,
  wallet: generatedWallet
): MsgCreateWallet {
  return {
    sender: wallet.address,
    owners: data.owners,
    weights: data.weights.map((el) => Number(el)),
    threshold: Number(data.threshold),
  };
}
export function mintNftData(
  data: clientMsgNftMint,
  wallet: generatedWallet
): MsgMintToken {
  return {
    sender: wallet.address,
    denom: data.denom,
    tokenId: data.id,
    recipient: data.recipient ? data.recipient : wallet.address,
    quantity: Number(data.quantity),
    reserve: {
      denom: data.reserve.denom,
      amount: getAmountToUNI(data.reserve.amount),
    },
    tokenUri: data.token_uri,
    allowMint: data.allow_mint,
  };
}

export function transferNftData(
  data: clientMsgTransferNft,
  wallet: generatedWallet
): MsgSendToken {
  return {
    tokenId: data.id,
    sender: wallet.address,
    recipient: data.recipient,
    subTokenIds: data.sub_token_ids.map((el) => Number(el)),
  };
}

export function burnNftData(
  data: clientMsgBurnNft,
  wallet: generatedWallet
): MsgBurnToken {
  return {
    sender: wallet.address,
    tokenId: data.id,
    subTokenIds: data.sub_token_ids.map((el) => Number(el)),
  };
}

export function buyCoinData(
  data: clientBuyCoin,
  wallet: generatedWallet
): MsgBuyCoin {
  const maxSpendLimit = data.maxSpendLimit
    ? getAmountToUNI(data.maxSpendLimit)
    : getAmountToUNI("100000000000");
  return {
    sender: wallet.address,
    coinToBuy: {
      amount: getAmountToUNI(data.amount),
      denom: data.buyCoin.toLowerCase(),
    },
    maxCoinToSell: {
      amount: maxSpendLimit,
      denom: data.spendCoin.toLowerCase(),
    },
  };
}

export function sellCoinData(
  data: clientSellCoin,
  wallet: generatedWallet
): MsgSellCoin {
  const minBuyLimit = data.minBuyLimit ? getAmountToUNI(data.minBuyLimit) : "1";
  return {
    sender: wallet.address,
    coinToSell: {
      amount: getAmountToUNI(data.amount),
      denom: data.sellCoin.toLowerCase(),
    },
    minCoinToBuy: {
      amount: minBuyLimit,
      denom: data.getCoin.toLowerCase(),
    },
  };
}

export function sellAllCoinData(
  data: clientSellAllCoin,
  wallet: generatedWallet
): MsgSellAllCoin {
  const minBuyLimit = data.minBuyLimit ? getAmountToUNI(data.minBuyLimit) : "1";
  return {
    sender: wallet.address,
    coinDenomToSell: data.sellCoin.toLowerCase(),
    minCoinToBuy: {
      amount: minBuyLimit,
      denom: data.getCoin.toLowerCase(),
    },
  };
}

export function burnCoinData(
  data: clientBurnCoin,
  wallet: generatedWallet
): MsgBurnCoin {
  return {
    sender: wallet.address,
    coin: {
      amount: getAmountToUNI(data.amount),
      denom: data.coin.toLowerCase(),
    },
  };
}

export function multisigSignTxData(
  data: clientMultisigSignTx,
  wallet: generatedWallet
): MsgSignTransaction {
  return {
    sender: wallet.address,
    id: data.txId,
  };
}

export function nftUpdateReserveData(
  data: clientNftUpdateReserve,
  wallet: generatedWallet
): MsgUpdateReserve {
  return {
    sender: wallet.address,
    tokenId: data.id,
    subTokenIds: data.sub_token_ids.map((el) => Number(el)),
    reserve: {
      denom: data.denom,
      amount: getAmountToUNI(data.reserve),
    },
  };
}

export function nftEditMetadata(
  data: clientEditMetadata,
  wallet: generatedWallet
): MsgUpdateToken {
  return {
    sender: wallet.address,
    tokenId: data.id,
    tokenUri: data.token_uri,
  };
}
export function swapInitData(
  data: clientMsgSwapInit,
  wallet: generatedWallet
): MsgInitializeSwap {
  return {
    sender: wallet.address,
    recipient: data.recipient,
    amount: getAmountToUNI(data.amount),
    tokenSymbol: data.tokenSymbol,
    transactionNumber: Date.now().toString(),
    fromChain: 1,
    destChain: Number(data.destChain),
  };
}

export function swapRedeemData(
  data: clientMsgSwapRedeem,
  wallet: generatedWallet
): MsgRedeemSwap {
  return {
    sender: wallet.address,
    from: data.from,
    recipient: data.recipient,
    amount: data.amount, // in uni
    tokenSymbol: data.tokenSymbol,
    transactionNumber: data.transactionNumber,
    fromChain: Number(data.fromChain),
    destChain: 1,
    v: parseInt(data.v, 16),
    r: data.r.slice(2),
    s: data.s.slice(2),
  };
}

export function delegateData(
  data: clientMsgDelegate,
  wallet: generatedWallet
): MsgDelegate {
  return {
    delegator: wallet.address,
    validator: data.validatorAddress,
    coin: {
      denom: data.coin.toLowerCase(),
      amount: getAmountToUNI(data.stake),
    },
  };
}

export function unbondData(
  data: clientMsgUndelegate,
  wallet: generatedWallet
): MsgUndelegate {
  return {
    delegator: wallet.address,
    validator: data.validatorAddress,
    coin: {
      denom: data.coin.toLowerCase(),
      amount: getAmountToUNI(data.stake),
    },
  };
}

export function cancelUnbondingData(
  data: clientMsgCancelUndelegate,
  wallet: generatedWallet
): MsgCancelUndelegation {
  return {
    delegator: wallet.address,
    validator: data.validatorAddress,
    creationHeight: Number(data.creationHeight),
    coin: {
      denom: data.coin.toLowerCase(),
      amount: getAmountToUNI(data.stake),
    },
  };
}

export function redelegateData(
  data: clientRedelegationData,
  wallet: generatedWallet
): MsgRedelegate {
  return {
    delegator: wallet.address,
    validatorSrc: data.validatorFrom,
    validatorDst: data.validatorTo,
    coin: {
      denom: data.coin.toLowerCase(),
      amount: getAmountToUNI(data.stake),
    },
  };
}

export function cancelRedelegationData(
  data: clientCancelRedelegationData,
  wallet: generatedWallet
): MsgCancelRedelegation {
  return {
    delegator: wallet.address,
    validatorSrc: data.validatorFrom,
    validatorDst: data.validatorTo,
    creationHeight: Number(data.creationHeight),
    coin: {
      denom: data.coin.toLowerCase(),
      amount: getAmountToUNI(data.stake),
    },
  };
}

export function nftDelegateData(
  data: clientMsgDelegateNft,
  wallet: generatedWallet
): MsgDelegateNFT {
  return {
    delegator: wallet.address,
    validator: data.validatorAddress,
    tokenId: data.nftId,
    subTokenIds: data.subTokenIds.map((el) => Number(el)),
  };
}

export function nftUnbondData(
  data: clientMsgUndelegateNft,
  wallet: generatedWallet
): MsgUndelegateNFT {
  return {
    delegator: wallet.address,
    validator: data.validatorAddress,
    tokenId: data.nftId,
    subTokenIds: data.subTokenIds.map((el) => Number(el)),
  };
}

export function cancelNftUnbondingData(
  data: clientMsgCancelUndelegationNft,
  wallet: generatedWallet
): MsgCancelUndelegationNFT {
  return {
    delegator: wallet.address,
    validator: data.validatorAddress,
    tokenId: data.nftId,
    creationHeight: Number(data.creationHeight),
    subTokenIds: data.subTokenIds.map((el) => Number(el)),
  };
}

export function nftRedelegateData(
  data: clientMsgRedelegateNft,
  wallet: generatedWallet
): MsgRedelegateNFT {
  return {
    delegator: wallet.address,
    validatorSrc: data.validatorFrom,
    validatorDst: data.validatorTo,
    tokenId: data.nftId,
    subTokenIds: data.subTokenIds.map((el) => Number(el)),
  };
}

export function nftCancelRedelegationData(
  data: clientMsgCancelRedelegationNft,
  wallet: generatedWallet
): MsgCancelRedelegationNFT {
  return {
    delegator: wallet.address,
    validatorSrc: data.validatorFrom,
    validatorDst: data.validatorTo,
    tokenId: data.nftId,
    creationHeight: Number(data.creationHeight),
    subTokenIds: data.subTokenIds.map((el) => Number(el)),
  };
}

export function createValidatorData(
  data: clientCreateValidator,
  wallet: Wallet
): MsgCreateValidator {
  return {
    commission: getCommissionToUNI(data.commission),
    operatorAddress: wallet.validatorAddress,
    rewardAddress: data.rewardAddress,
    consensusPubkey: {
      typeUrl: pubKeyValidatorTypeUrl,
      value: Uint8Array.from(Buffer.from(data.pubKey, "base64")),
    },
    stake: {
      denom: data.coin.toLowerCase(),
      amount: getAmountToUNI(data.stake),
    },
    description: {
      moniker: data.description.moniker,
      identity: data.description.identity,
      website: data.description.website,
      securityContact: data.description.securityContact,
      details: data.description.details,
    },
  };
}

export function editValidatorData(
  data: clientEditValidator,
  wallet: Wallet
): MsgEditValidator {
  return {
    operatorAddress: wallet.validatorAddress,
    rewardAddress: data.rewardAddress,
    description: {
      moniker: data.description.moniker,
      identity: data.description.identity,
      website: data.description.website,
      securityContact: data.description.securityContact,
      details: data.description.details,
    },
  };
}

export function setOnlineData(data: clientSetOnlineData): MsgSetOnline {
  return {
    validator: data.validator,
  };
}

export function setOfflineData(data: clientSetOnlineData): MsgSetOffline {
  return {
    validator: data.validator,
  };
}

export function returnLegacyData(
  data: clientReturnLegacy,
  wallet: Wallet
): MsgReturnLegacy {
  return {
    sender: wallet.address,
    publicKey: Uint8Array.from(Buffer.from(data.pubKey, "base64")),
  };
}

export const dataToProto = {
  [txTypesNew.COIN_SEND]: sendCoinData,
  [txTypesNew.COIN_UPDATE]: updateCoinData,
  [txTypesNew.COIN_CREATE]: createCoinData,
  [txTypesNew.COIN_MULTISEND]: multiSendCoinData,
  [txTypesNew.MULTISIG_CREATE_WALLET]: createWalletData,
  [txTypesNew.NFT_MINT]: mintNftData,
  [txTypesNew.NFT_TRANSFER]: transferNftData,
  [txTypesNew.NFT_BURN]: burnNftData,
  [txTypesNew.COIN_BUY]: buyCoinData,
  [txTypesNew.COIN_SELL]: sellCoinData,
  [txTypesNew.COIN_SELL_ALL]: sellAllCoinData,
  [txTypesNew.COIN_BURN]: burnCoinData,
  [txTypesNew.MULTISIG_CREATE_TX]: multisigSignTxData,
  [txTypesNew.NFT_UPDATE_RESERVE]: nftUpdateReserveData,
  [txTypesNew.NFT_EDIT_METADATA]: nftEditMetadata,
  [txTypesNew.SWAP_INIT]: swapInitData,
  [txTypesNew.SWAP_REDEEM]: swapRedeemData,
  [txTypesNew.NFT_DELEGATE]: delegateData,
  [txTypesNew.NFT_UNBOND]: unbondData,
  [txTypesNew.VALIDATOR_CANCEL_UNDELEGATE]: cancelUnbondingData,
  [txTypesNew.VALIDATOR_REDELEGATE]: redelegateData,
  [txTypesNew.VALIDATOR_CANCEL_REDELEGATE]: cancelRedelegationData,
  [txTypesNew.NFT_DELEGATE]: nftDelegateData,
  [txTypesNew.NFT_UNBOND]: nftUnbondData,
  [txTypesNew.NFT_CANCEL_UNDELEGATE]: cancelNftUnbondingData,
  [txTypesNew.NFT_REDELEGATE]: nftRedelegateData,
  [txTypesNew.NFT_CANCEL_REDELEGATE]: nftCancelRedelegationData,
  [txTypesNew.VALIDATOR_CANDIDATE]: createValidatorData,
  [txTypesNew.VALIDATOR_CANDIDATE_EDIT]: editValidatorData,
  [txTypesNew.VALIDATOR_SET_ONLINE]: setOnlineData,
  [txTypesNew.VALIDATOR_SET_OFFLINE]: setOfflineData,
};
