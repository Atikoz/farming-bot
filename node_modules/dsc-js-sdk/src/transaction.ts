/* eslint-disable @typescript-eslint/naming-convention */
import { fromBase64 } from "@cosmjs/encoding";
import { SignDoc, TxRaw } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import BigNumber from "bignumber.js";

import { Account } from "./accounts";
import Client, {
  DeliverTxResponse,
  SequenceFailureResponse,
  TxBroadcatResponse,
} from "./client";
import {
  clientBurnCoin,
  clientBuyCoin,
  clientCancelRedelegationData,
  clientCreateValidator,
  clientEditMetadata,
  clientEditValidator,
  clientIssueCheck,
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
  clientRedeemCheck,
  clientRedelegationData,
  clientReturnLegacy,
  clientSellAllCoin,
  clientSellCoin,
  clientSetOnlineData,
  txOptions,
} from "./interfaces/clientInterfaces";
import txTypesNew from "./txTypesNew";
import {
  MsgBurnCoin,
  MsgBuyCoin,
  MsgCreateCoin,
  MsgMultiSendCoin,
  MsgRedeemCheck,
  MsgSellAllCoin,
  MsgSellCoin,
  MsgSendCoin,
  MsgUpdateCoin,
  Web3Tx,
} from "./types/decimal/coin/v1/tx";
import {
  burnCoinData,
  burnNftData,
  buyCoinData,
  cancelNftUnbondingData,
  cancelRedelegationData,
  cancelUnbondingData,
  createCoinData,
  createValidatorData,
  createWalletData,
  dataToProto,
  delegateData,
  editValidatorData,
  mintNftData,
  multiSendCoinData,
  multisigSignTxData,
  nftCancelRedelegationData,
  nftDelegateData,
  nftEditMetadata,
  nftRedelegateData,
  nftUnbondData,
  nftUpdateReserveData,
  redelegateData,
  returnLegacyData,
  sellAllCoinData,
  sellCoinData,
  sendCoinData,
  setOfflineData,
  setOnlineData,
  swapInitData,
  swapRedeemData,
  transferNftData,
  unbondData,
  updateCoinData,
} from "./utils/clientDataToProto";
import { EncoderDecoder } from "./utils/encoderDecoder";
import { signTransaction } from "./utils/signer";
import Wallet from "./wallet";
import {
  MsgCreateTransaction,
  MsgCreateWallet,
  MsgSignTransaction,
} from "./types/decimal/multisig/v1/tx";
import {
  MsgBurnToken,
  MsgMintToken,
  MsgSendToken,
  MsgUpdateReserve,
  MsgUpdateToken,
} from "./types/decimal/nft/v1/tx";
import { issueCheck, redeemCheckData } from "./check";
import axios from "axios";
import { checkSequenceSimulate } from "./utils/sequence";
import { MsgInitializeSwap, MsgRedeemSwap } from "./types/decimal/swap/v1/tx";
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
} from "./types/validator/v1/tx";
import { BROADCAST_MODE_BLOCK } from "@tendermint/sig";
import { MsgReturnLegacy } from "./types/decimal/legacy/v1/tx";
import { PubKey } from "./types/cosmos/crypto/ed25519/keys";
import {
  gateBroadcastStatusEndpoint,
  gateEstimationEndpoint,
  getNodeFeeEstimationEndpoint,
} from "./endpoints";
import { createBlockCheckSignatures, FAIL_CHECK_CODE } from "./utils/blocking";
import {
  createEIP712Payload,
  generateTypes,
  MSG_DELEGATE_TYPES,
  MSG_REDELEGATE_TYPES,
  MSG_SEND_COIN_TYPES,
  MSG_UNBOND_TYPES,
} from "./utils/eip712";
import { makeAuthInfoBytes, makeSignDoc } from "@cosmjs/proto-signing";

const FEE_MULTIPLIER = 1.1;
const DEFAULT_GAS = "180000";
interface ClientFee {
  coin: string;
  amount: string;
}
interface FeeOptions {
  denom: string;
  amount: string;
}
type SendTransactionResponse = Promise<TxBroadcatResponse | ClientFee>;

export class Transaction {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  private static _instance: Transaction;
  private wallet: Wallet;
  private readonly rpcClient: Client | undefined;
  private readonly encoderDecoder: EncoderDecoder;
  public readonly chainId: string;
  private account: Account;
  public readonly baseCoin: string;

  private constructor(
    rpcClient: Client | undefined,
    wallet: Wallet,
    chainId: string,
    account: Account,
    baseCoin: string
  ) {
    this.rpcClient = rpcClient;
    this.wallet = wallet;
    this.encoderDecoder = new EncoderDecoder();
    this.chainId = chainId;
    this.account = account;
    this.baseCoin = baseCoin;
  }

  public getAccount(): Account {
    return this.account;
  }

  public getWallet(): Wallet {
    return this.wallet;
  }

  public static getInstance(
    rpcClient: Client | undefined,
    wallet: Wallet,
    chainId: string,
    account: Account,
    baseCoin: string
  ): Transaction {
    if (this._instance) {
      this._instance.wallet = wallet;
      this._instance.account = account;
      return this._instance;
    }
    this._instance = new this(rpcClient, wallet, chainId, account, baseCoin);
    return this._instance;
  }

  public async sendTransaction(
    msgAny: any,
    options: txOptions,
    simulation = false,
    tryTimes = 2
  ): Promise<SendTransactionResponse> {
    const readyFeeCoin = options.feeCoin
      ? options.feeCoin.toLowerCase()
      : this.baseCoin;
    const txBodyBytes = this.encoderDecoder.encodeTxBody({
      messages: [msgAny],
      memo: options.message ? options.message : "",
    });
    let result, fee, signObject, txRaw, txBytes;
    const gateUrl = this.wallet.getGateUrl();
    const noSimulation =
      (!simulation && readyFeeCoin === this.baseCoin) || options.feeAmount;
    if (noSimulation) {
      if (options.feeAmount) {
        fee = {
          amount: [
            {
              denom: readyFeeCoin,
              amount: options.feeAmount,
            },
          ],
          gas: options.feeGas ? options.feeGas.toString() : DEFAULT_GAS,
        };
      } else {
        fee = this.getDefaultFee();
      }
    } else {
      const isDefaultFee =
        readyFeeCoin === this.baseCoin && !options.baseCoinFeeEstimation;
      if (isDefaultFee) {
        fee = this.getDefaultFee();
      } else {
        fee = {
          amount: [
            {
              denom: readyFeeCoin,
              amount: "0",
            },
          ],
          gas: options.feeGas ? options.feeGas.toString() : DEFAULT_GAS,
        };
      }
      signObject = await signTransaction(
        txBodyBytes,
        this.wallet,
        this.account,
        this.chainId,
        fee,
        simulation
      );
      txRaw = TxRaw.fromPartial({
        bodyBytes: signObject.signDoc.bodyBytes,
        authInfoBytes: signObject.signDoc.authInfoBytes,
        signatures: [fromBase64(signObject.stdSignature.signature)],
      });
      txBytes = TxRaw.encode(txRaw).finish();
      let predictedFee;
      try {
        const hexedTx = Buffer.from(txBytes).toString("hex");
        if (!this.wallet.isNodeDirectMode) {
          const res = await axios.post(`${gateUrl}${gateEstimationEndpoint}`, {
            tx_bytes: hexedTx,
            denom: readyFeeCoin,
          });
          predictedFee = res.data.result.commission;
        } else {
          const nodeEstimationEndpoint = getNodeFeeEstimationEndpoint(
            this.wallet.getNodeRestUrl(),
            hexedTx,
            readyFeeCoin
          );
          const res = await axios.get(nodeEstimationEndpoint);
          predictedFee = res.data.commission;
        }
      } catch (e: unknown) {
        const errorData = (e as any).response.data.data.error;
        if (tryTimes) {
          const expectedSequence = checkSequenceSimulate(errorData);
          if (expectedSequence) {
            this.account.sequence = Number(expectedSequence);
            result = (await this.sendTransaction(
              msgAny,
              options,
              simulation,
              tryTimes - 1
            )) as DeliverTxResponse | SequenceFailureResponse;
            return result;
          }
        }
        throw new Error(errorData.message);
      }
      if (simulation) {
        const multiplier = isDefaultFee ? 1 : FEE_MULTIPLIER;
        const preparedFee = this.prepareFee(predictedFee, multiplier);
        const coin = readyFeeCoin;
        return {
          amount: BigNumber(preparedFee).toFixed(0),
          coin,
        };
      }
      fee = this.getFee({ denom: readyFeeCoin, amount: predictedFee });
    }
    signObject = await signTransaction(
      txBodyBytes,
      this.wallet,
      this.account,
      this.chainId,
      fee,
      simulation
    );
    txRaw = TxRaw.fromPartial({
      bodyBytes: signObject.signDoc.bodyBytes,
      authInfoBytes: signObject.signDoc.authInfoBytes,
      signatures: [fromBase64(signObject.stdSignature.signature)],
    });
    txBytes = TxRaw.encode(txRaw).finish();
    if (!this.rpcClient) {
      throw new Error("Rpc Client error");
    }
    const waitForTx = options.txBroadcastMode === BROADCAST_MODE_BLOCK;
    let isBlocked = false;
    if (!this.wallet.isNodeDirectMode) {
      const singatures = createBlockCheckSignatures(
        this.wallet.address,
        msgAny.value
      );
      const res = await axios.post(
        `${gateUrl}${gateBroadcastStatusEndpoint}`,
        singatures
      );
      isBlocked = res.data === FAIL_CHECK_CODE;
    }
    if (isBlocked) {
      throw new Error(
        `Broadcasting transaction failed with code ${FAIL_CHECK_CODE} (codespace: sdk)`
      );
    } else {
      result = await this.rpcClient.broadcastTx(txBytes, waitForTx);
    }

    if (noSimulation && "expectedSequence" in result && tryTimes) {
      this.account.sequence = Number(result.expectedSequence);
      result = (await this.sendTransaction(
        msgAny,
        options,
        simulation,
        tryTimes - 1
      )) as DeliverTxResponse | SequenceFailureResponse;
    }
    this.account.sequence++;

    return result;
  }

  public generateEip712SignDoc(
    msgAny: any,
    options: txOptions,
    signature: string
  ): SignDoc {
    const pubKeyCompressed = PubKey.fromPartial({
      key: this.wallet.publicKey,
    });
    const encoderDecoder = new EncoderDecoder();
    const pubKeyEncoded = encoderDecoder.encodePubKey(pubKeyCompressed);
    const chainIdNumber = this.chainId.replace("decimal_", "").split("-")[0];
    const readyFeeCoin = options.feeCoin
      ? options.feeCoin.toLowerCase()
      : this.baseCoin;

    let result;
    const web3 = this.encoderDecoder.encodeWeb3Tx(
      Web3Tx.fromPartial({
        typedDataChainID: BigNumber(chainIdNumber).toNumber(),
        feePayer: this.wallet.address,
        feePayerSig: Buffer.from(signature, "hex"),
      } as any)
    );
    const txBodyBytes = this.encoderDecoder.encodeTxBody({
      messages: [msgAny],
      memo: options.message ? options.message : "",
      extensionOptions: [web3],
    });

    const gateUrl = this.wallet.getGateUrl();

    const authInfoDirect = makeAuthInfoBytes(
      [{ pubkey: pubKeyEncoded, sequence: this.account.sequence }],
      [
        {
          denom: readyFeeCoin,
          amount: options.feeAmount ?? "",
        },
      ],
      options.feeGas ?? 21000,
      127
    );

    return makeSignDoc(
      txBodyBytes,
      authInfoDirect,
      this.chainId,
      this.account.accountNumber
    );
  }

  public generateSignDoc(msgAny: any, options: txOptions): SignDoc {
    const pubKeyCompressed = PubKey.fromPartial({
      key: this.wallet.publicKey,
    });
    const encoderDecoder = new EncoderDecoder();
    const pubKeyEncoded = encoderDecoder.encodePubKey(pubKeyCompressed);
    const readyFeeCoin = options.feeCoin
      ? options.feeCoin.toLowerCase()
      : this.baseCoin;

    const txBodyBytes = this.encoderDecoder.encodeTxBody({
      messages: [msgAny],
      memo: options.message ? options.message : "",
    });

    const authInfoDirect = makeAuthInfoBytes(
      [{ pubkey: pubKeyEncoded, sequence: this.account.sequence }],
      [
        {
          denom: readyFeeCoin,
          amount: options.feeAmount ?? "",
        },
      ],
      options.feeGas ?? 21000,
      1
    );

    return makeSignDoc(
      txBodyBytes,
      authInfoDirect,
      this.chainId,
      this.account.accountNumber
    );
  }

  public async sendCoin(
    data: clientMsgSendCoin,
    options: txOptions,
    simulation = false,
    generate = false
  ): Promise<
    SendTransactionResponse | { typeUrl: string; value: MsgSendCoin }
  > {
    const msg = MsgSendCoin.fromPartial(sendCoinData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_SEND,
      value: msg,
    };
    if (generate) return msgAny;

    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async burnCoins(
    data: clientBurnCoin,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgBurnCoin.fromPartial(burnCoinData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_BURN,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async updateCoin(
    data: clientMsgUpdateCoin,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgUpdateCoin.fromPartial(updateCoinData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_UPDATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async createCoin(
    data: clientMsgCreateCoin,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgCreateCoin.fromPartial(createCoinData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_CREATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async multiSendCoin(
    data: clientMsgMultiSendCoin[],
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgMultiSendCoin.fromPartial(
      multiSendCoinData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.COIN_MULTISEND,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async createWallet(
    data: clientMsgCreateWallet,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgCreateWallet.fromPartial(
      createWalletData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.MULTISIG_CREATE_WALLET,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async mintNft(
    data: clientMsgNftMint,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgMintToken.fromPartial(mintNftData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.NFT_MINT,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async transferNft(
    data: clientMsgTransferNft,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgSendToken.fromPartial(transferNftData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.NFT_TRANSFER,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async burnNft(
    data: clientMsgBurnNft,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgBurnToken.fromPartial(burnNftData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.NFT_BURN,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async multisigCreateTx(
    data: clientMultisigCreateTx,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const changedWallet = { ...this.wallet, address: data.from };
    const preparedData = dataToProto[data.type](
      data.value,
      changedWallet as Wallet
    );
    let isBlocked = false;
    if (!this.wallet.isNodeDirectMode) {
      const singatures = createBlockCheckSignatures(
        this.wallet.address,
        preparedData
      );
      const gateUrl = this.wallet.getGateUrl();
      const res = await axios.post(
        `${gateUrl}${gateBroadcastStatusEndpoint}`,
        singatures
      );
      isBlocked = res.data === FAIL_CHECK_CODE;
    }
    if (isBlocked) {
      throw new Error(
        `Broadcasting transaction failed with code ${FAIL_CHECK_CODE} (codespace: sdk)`
      );
    }
    const msg = MsgCreateTransaction.fromPartial({
      sender: this.wallet.address,
      wallet: data.from,
      content: this.encoderDecoder.encodeAsAny({
        typeUrl: data.type,
        value: preparedData,
      }),
    });

    const msgAny = {
      typeUrl: txTypesNew.MULTISIG_CREATE_TX,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async buyCoins(
    data: clientBuyCoin,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgBuyCoin.fromPartial(buyCoinData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_BUY,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async sellCoins(
    data: clientSellCoin,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgSellCoin.fromPartial(sellCoinData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_SELL,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async sellAllCoins(
    data: clientSellAllCoin,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgSellAllCoin.fromPartial(sellAllCoinData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_SELL_ALL,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async multisigSignTx(
    data: clientMultisigSignTx,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgSignTransaction.fromPartial(
      multisigSignTxData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.MULTISIG_SIGN_TX,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async nftUpdateReserve(
    data: clientNftUpdateReserve,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgUpdateReserve.fromPartial(
      nftUpdateReserveData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.NFT_UPDATE_RESERVE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async issueCheck(data: clientIssueCheck) {
    let isBlocked = false;
    if (!this.wallet.isNodeDirectMode) {
      const singatures = createBlockCheckSignatures(this.wallet.address, data);
      const gateUrl = this.wallet.getGateUrl();
      const res = await axios.post(
        `${gateUrl}${gateBroadcastStatusEndpoint}`,
        singatures
      );
      isBlocked = res.data === FAIL_CHECK_CODE;
    }
    if (isBlocked) {
      throw new Error(
        `Broadcasting transaction failed with code ${FAIL_CHECK_CODE} (codespace: sdk)`
      );
    }
    return issueCheck.apply(this, [this.wallet, this.chainId])(data);
  }

  public async redeemCheck(
    data: clientRedeemCheck,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgRedeemCheck.fromPartial(redeemCheckData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_REDEEM_CHECK,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async nftEditMetadata(
    data: clientEditMetadata,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgUpdateToken.fromPartial(nftEditMetadata(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.COIN_REDEEM_CHECK,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async msgSwapInit(
    data: clientMsgSwapInit,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgInitializeSwap.fromPartial(swapInitData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.SWAP_INIT,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async msgSwapRedeem(
    data: clientMsgSwapRedeem,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgRedeemSwap.fromPartial(swapRedeemData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.SWAP_REDEEM,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async delegate(
    data: clientMsgDelegate,
    options: txOptions,
    simulation = false,
    generate = false
  ): Promise<
    SendTransactionResponse | { typeUrl: string; value: MsgDelegate }
  > {
    const msg = MsgDelegate.fromPartial(delegateData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_DELEGATE,
      value: msg,
    };

    if (generate) return msgAny;

    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async unbond(
    data: clientMsgUndelegate,
    options: txOptions,
    simulation = false,
    generate = false
  ): Promise<
    SendTransactionResponse | { typeUrl: string; value: MsgUndelegate }
  > {
    const msg = MsgUndelegate.fromPartial(unbondData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_UNBOND,
      value: msg,
    };
    if (generate) return msgAny;
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async cancelUnbonding(
    data: clientMsgCancelUndelegate,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgCancelUndelegation.fromPartial(
      cancelUnbondingData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_CANCEL_UNDELEGATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async redelegate(
    data: clientRedelegationData,
    options: txOptions,
    simulation = false,
    generate = false
  ): Promise<
    SendTransactionResponse | { typeUrl: string; value: MsgRedelegate }
  > {
    const msg = MsgRedelegate.fromPartial(redelegateData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_REDELEGATE,
      value: msg,
    };
    if (generate) return msgAny;
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async cancelRedelegation(
    data: clientCancelRedelegationData,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgCancelRedelegation.fromPartial(
      cancelRedelegationData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_CANCEL_REDELEGATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async delegateNft(
    data: clientMsgDelegateNft,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgDelegateNFT.fromPartial(nftDelegateData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.NFT_DELEGATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async unbondNft(
    data: clientMsgUndelegateNft,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgUndelegateNFT.fromPartial(nftUnbondData(data, this.wallet));
    const msgAny = {
      typeUrl: txTypesNew.NFT_UNBOND,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async cancelUnbondingNft(
    data: clientMsgCancelUndelegationNft,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgCancelUndelegationNFT.fromPartial(
      cancelNftUnbondingData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.NFT_CANCEL_UNDELEGATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async redelegateNft(
    data: clientMsgRedelegateNft,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgRedelegateNFT.fromPartial(
      nftRedelegateData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.NFT_REDELEGATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async cancelRedelegationNft(
    data: clientMsgCancelRedelegationNft,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgCancelRedelegationNFT.fromPartial(
      nftCancelRedelegationData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.NFT_CANCEL_REDELEGATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async createValidator(
    data: clientCreateValidator,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const validatorData = createValidatorData(data, this.wallet);
    const key = PubKey.encode({
      key: validatorData.consensusPubkey?.value as any,
    }).finish();
    const msg = MsgCreateValidator.fromPartial({
      ...validatorData,
      consensusPubkey: {
        typeUrl: "/cosmos.crypto.ed25519.PubKey",
        value: key,
      },
    });
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_CANDIDATE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async editValidator(
    data: clientEditValidator,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgEditValidator.fromPartial(
      editValidatorData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_CANDIDATE_EDIT,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async setOnline(
    data: clientSetOnlineData,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgSetOnline.fromPartial(setOnlineData(data));
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_SET_ONLINE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async setOffline(
    data: clientSetOnlineData,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgSetOffline.fromPartial(setOfflineData(data));
    const msgAny = {
      typeUrl: txTypesNew.VALIDATOR_SET_OFFLINE,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public async returnLegacy(
    data: clientReturnLegacy,
    options: txOptions,
    simulation = false
  ): Promise<SendTransactionResponse> {
    const msg = MsgReturnLegacy.fromPartial(
      returnLegacyData(data, this.wallet)
    );
    const msgAny = {
      typeUrl: txTypesNew.REOWN_LEGACY,
      value: msg,
    };
    const result = await this.sendTransaction(msgAny, options, simulation);
    return result;
  }

  public getFee(options: FeeOptions) {
    const amount = [];
    if (options.denom) {
      amount.push({
        denom: options.denom.toLowerCase(),
        amount: this.prepareFee(options.amount, FEE_MULTIPLIER),
      });
    }
    return {
      amount,
      gas: DEFAULT_GAS,
    };
  }

  private prepareFee(amount: string, multiplier = 1): string {
    const amountBN = new BigNumber(amount).multipliedBy(multiplier);
    const amountString = amountBN.toFixed(0);
    return amountString;
  }

  public getDefaultFee() {
    return {
      amount: [],
      gas: DEFAULT_GAS,
    };
  }

  public createRawTx(
    bodyBytes: Uint8Array,
    authInfoBytes: Uint8Array,
    signatures: Uint8Array[]
  ): Uint8Array {
    const txRaw = TxRaw.fromPartial({
      bodyBytes,
      authInfoBytes,
      signatures,
    });
    return TxRaw.encode(txRaw).finish();
  }

  public async sendRawTx(
    txBodyRaw: Uint8Array,
    txBroadcastMode: string
  ): Promise<SendTransactionResponse> {
    if (!this.rpcClient) {
      throw new Error("Rpc Client error");
    }
    const waitForTx = txBroadcastMode === BROADCAST_MODE_BLOCK;

    return await this.rpcClient.broadcastTx(txBodyRaw, waitForTx);
  }

  public async sendCoinEip712Data(
    data: clientMsgSendCoin,
    options: txOptions
  ): Promise<any> {
    const types = generateTypes(MSG_SEND_COIN_TYPES);
    const message = sendCoinData(data, this.wallet);

    let fee;
    if (options.feeAmount) {
      fee = {
        amount: options.feeAmount,
        coin: options.feeCoin,
      };
    } else {
      fee = (await this.sendCoin(data, options, true, false)) as ClientFee;
    }
    return createEIP712Payload(
      types,
      this.account,
      this.chainId,
      options,
      {
        amount: fee.amount,
        denom: fee.coin,
        gas: options.feeGas ? options.feeGas.toString() : DEFAULT_GAS,
      },
      {
        type: txTypesNew.VALIDATOR_DELEGATE,
        value: message,
      }
    );
  }

  public async delegateEip712Data(
    data: clientMsgDelegate,
    options: txOptions
  ): Promise<any> {
    const types = generateTypes(MSG_DELEGATE_TYPES);
    const message = delegateData(data, this.wallet);

    let fee;
    if (options.feeAmount) {
      fee = {
        amount: options.feeAmount,
        coin: options.feeCoin,
      };
    } else {
      fee = (await this.delegate(data, options, true, false)) as ClientFee;
    }
    return createEIP712Payload(
      types,
      this.account,
      this.chainId,
      options,
      {
        amount: fee.amount,
        denom: fee.coin,
        gas: options.feeGas ? options.feeGas.toString() : DEFAULT_GAS,
      },
      {
        type: txTypesNew.VALIDATOR_DELEGATE,
        value: message,
      }
    );
  }

  public async unbondEip712Data(
    data: clientMsgUndelegate,
    options: txOptions
  ): Promise<any> {
    const types = generateTypes(MSG_UNBOND_TYPES);
    const message = unbondData(data, this.wallet);
    const fee = (await this.unbond(data, options, true, false)) as ClientFee;
    return createEIP712Payload(
      types,
      this.account,
      this.chainId.replace("decimal_", "").split("-")[0],
      options,
      {
        amount: fee.amount,
        denom: fee.coin,
        gas: DEFAULT_GAS,
      },
      message
    );
  }

  public async redelegateEip712Data(
    data: clientRedelegationData,
    options: txOptions
  ): Promise<any> {
    const types = generateTypes(MSG_REDELEGATE_TYPES);
    const message = redelegateData(data, this.wallet);
    let fee;
    if (options.feeAmount) {
      fee = {
        amount: options.feeAmount,
        coin: options.feeCoin,
      };
    } else {
      fee = (await this.redelegate(data, options, true, false)) as ClientFee;
    }

    return createEIP712Payload(
      types,
      this.account,
      this.chainId.replace("decimal_", "").split("-")[0],
      options,
      {
        amount: fee.amount,
        denom: fee.coin,
        gas: DEFAULT_GAS,
      },
      message
    );
  }
}
