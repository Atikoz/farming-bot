/* eslint-disable @typescript-eslint/naming-convention */
import { MsgSend } from "cosmjs-types/cosmos/bank/v1beta1/tx";
import { Coin } from "cosmjs-types/cosmos/base/v1beta1/coin";
import { TxBody } from "cosmjs-types/cosmos/tx/v1beta1/tx";
import { Any } from "cosmjs-types/google/protobuf/any";
import Long from "long";
import type protobuf from "protobufjs";

import txTypesNew from "../txTypesNew";
import {
  ExtOptionsWeb3Tx,
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
} from "../types/decimal/coin/v1/tx";
import { PubKey as PubKeyED } from "../types/cosmos/crypto/ed25519/keys";
import { PubKey } from "../types/ethermint/crypto/v1/ethsecp256k1/keys";
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
import { MsgInitializeSwap, MsgRedeemSwap } from "../types/decimal/swap/v1/tx";
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
} from "../types/validator/v1/tx";
import { MsgReturnLegacy } from "../types/decimal/legacy/v1/tx";
import { PublicKey } from "src/types/tendermint/crypto/keys";
export interface TsProtoGeneratedType {
  readonly encode: (
    message: any | { [k: string]: any },
    writer?: protobuf.Writer
  ) => protobuf.Writer;
  readonly decode: (
    input: Uint8Array | protobuf.Reader,
    length?: number
  ) => any;
  readonly fromJSON: (object: any) => any;
  readonly fromPartial: (object: any) => any;
  readonly toJSON: (message: any | { [k: string]: any }) => unknown;
}

export interface PbjsGeneratedType {
  readonly create: (properties?: { [k: string]: any }) => any;
  readonly encode: (
    message: any | { [k: string]: any },
    writer?: protobuf.Writer
  ) => protobuf.Writer;
  readonly decode: (
    reader: protobuf.Reader | Uint8Array,
    length?: number
  ) => any;
}

export type GeneratedType = TsProtoGeneratedType | PbjsGeneratedType;

export function isTsProtoGeneratedType(
  type: GeneratedType
): type is TsProtoGeneratedType {
  return typeof (type as TsProtoGeneratedType).fromPartial === "function";
}

export function isPbjsGeneratedType(
  type: GeneratedType
): type is PbjsGeneratedType {
  return !isTsProtoGeneratedType(type);
}

const defaultTypeUrls = {
  cosmosCoin: "/cosmos.base.v1beta1.Coin",
  cosmosMsgSend: "/cosmos.bank.v1beta1.MsgSend",
  cosmosTxBody: "/cosmos.tx.v1beta1.TxBody",
  googleAny: "/google.protobuf.Any",
};

export interface DecodeObject {
  readonly typeUrl: string;
  readonly value: Uint8Array;
}

export interface EncodeObject {
  readonly typeUrl: string;
  readonly value: any;
}

interface TxBodyValue {
  readonly messages: readonly EncodeObject[];
  readonly memo?: string;
  readonly timeoutHeight?: Long;
  readonly extensionOptions?: Any[];
  readonly nonCriticalExtensionOptions?: Any[];
}

export interface TxBodyEncodeObject extends EncodeObject {
  readonly typeUrl: "/cosmos.tx.v1beta1.TxBody";
  readonly value: TxBodyValue;
}

export function isTxBodyEncodeObject(
  encodeObject: EncodeObject
): encodeObject is TxBodyEncodeObject {
  return (
    (encodeObject as TxBodyEncodeObject).typeUrl === "/cosmos.tx.v1beta1.TxBody"
  );
}

export const web3TxUrl = "/ethermint.types.v1.ExtensionOptionsWeb3Tx";
export const pubKeyTypeUrl = "/ethermint.crypto.v1.ethsecp256k1.PubKey";
export const pubKeyValidatorTypeUrl = "/cosmos.crypto.ed25519.PubKey";

export class EncoderDecoder {
  private readonly types: Map<string, GeneratedType>;

  public constructor(customTypes?: Iterable<[string, GeneratedType]>) {
    const { cosmosCoin, cosmosMsgSend } = defaultTypeUrls;
    this.types = customTypes
      ? new Map<string, GeneratedType>([...customTypes])
      : new Map<string, GeneratedType>([
          [cosmosCoin, Coin],
          [cosmosMsgSend, MsgSend],
        ]);
    // COIN
    this.types.set(txTypesNew.COIN_SEND, MsgSendCoin);
    this.types.set(txTypesNew.COIN_BURN, MsgBurnCoin);
    this.types.set(txTypesNew.COIN_CREATE, MsgCreateCoin);
    this.types.set(txTypesNew.COIN_UPDATE, MsgUpdateCoin);
    this.types.set(txTypesNew.COIN_BUY, MsgBuyCoin);
    this.types.set(txTypesNew.COIN_SELL, MsgSellCoin);
    this.types.set(txTypesNew.COIN_SELL_ALL, MsgSellAllCoin);
    this.types.set(txTypesNew.COIN_MULTISEND, MsgMultiSendCoin);
    this.types.set(txTypesNew.COIN_REDEEM_CHECK, MsgRedeemCheck);
    // MULTISIG
    this.types.set(txTypesNew.MULTISIG_CREATE_WALLET, MsgCreateWallet);
    this.types.set(txTypesNew.MULTISIG_CREATE_TX, MsgCreateTransaction);
    this.types.set(txTypesNew.MULTISIG_SIGN_TX, MsgSignTransaction);
    // NFT
    this.types.set(txTypesNew.NFT_MINT, MsgMintToken);
    this.types.set(txTypesNew.NFT_TRANSFER, MsgSendToken);
    this.types.set(txTypesNew.NFT_BURN, MsgBurnToken);
    this.types.set(txTypesNew.NFT_UPDATE_RESERVE, MsgUpdateReserve);
    this.types.set(txTypesNew.NFT_EDIT_METADATA, MsgUpdateToken);
    // SWAP
    this.types.set(txTypesNew.SWAP_INIT, MsgInitializeSwap);
    this.types.set(txTypesNew.SWAP_REDEEM, MsgRedeemSwap);
    // VALIDATOR
    this.types.set(txTypesNew.VALIDATOR_CANDIDATE, MsgCreateValidator);
    this.types.set(txTypesNew.VALIDATOR_CANDIDATE_EDIT, MsgEditValidator);
    this.types.set(txTypesNew.VALIDATOR_SET_ONLINE, MsgSetOnline);
    this.types.set(txTypesNew.VALIDATOR_SET_OFFLINE, MsgSetOffline);
    this.types.set(txTypesNew.VALIDATOR_DELEGATE, MsgDelegate);
    this.types.set(txTypesNew.VALIDATOR_DELEGATE_COSMOS, MsgDelegate);
    this.types.set(txTypesNew.VALIDATOR_UNBOND, MsgUndelegate);
    this.types.set(txTypesNew.VALIDATOR_REDELEGATE, MsgRedelegate);
    this.types.set(
      txTypesNew.VALIDATOR_CANCEL_REDELEGATE,
      MsgCancelRedelegation
    );
    this.types.set(
      txTypesNew.VALIDATOR_CANCEL_UNDELEGATE,
      MsgCancelUndelegation
    );
    this.types.set(txTypesNew.NFT_DELEGATE, MsgDelegateNFT);
    this.types.set(txTypesNew.NFT_UNBOND, MsgUndelegateNFT);
    this.types.set(txTypesNew.NFT_REDELEGATE, MsgRedelegateNFT);
    this.types.set(txTypesNew.NFT_CANCEL_REDELEGATE, MsgCancelRedelegationNFT);
    this.types.set(txTypesNew.NFT_CANCEL_UNDELEGATE, MsgCancelUndelegationNFT);
    // LEGACY
    this.types.set(txTypesNew.REOWN_LEGACY, MsgReturnLegacy);
    this.types.set(txTypesNew.REOWN_LEGACY, MsgReturnLegacy);
    // KEYS
    this.types.set(pubKeyValidatorTypeUrl, PubKeyED);
  }

  public register(typeUrl: string, type: GeneratedType): void {
    this.types.set(typeUrl, type);
  }

  public lookupType(typeUrl: string): GeneratedType | undefined {
    return this.types.get(typeUrl);
  }

  private lookupTypeWithError(typeUrl: string): GeneratedType {
    const type = this.lookupType(typeUrl);
    if (!type) {
      throw new Error(`Unregistered type url: ${typeUrl}`);
    }
    return type;
  }

  public encode(encodeObject: EncodeObject): Uint8Array {
    const { value, typeUrl } = encodeObject;
    if (isTxBodyEncodeObject(encodeObject)) {
      return this.encodeTxBody(value);
    }
    const type = this.lookupTypeWithError(typeUrl);
    const instance = isTsProtoGeneratedType(type)
      ? type.fromPartial(value)
      : type.create(value);
    return type.encode(instance).finish();
  }

  public encodeAsAny(encodeObject: EncodeObject): Any {
    const binaryValue = this.encode(encodeObject);
    return Any.fromPartial({
      typeUrl: encodeObject.typeUrl,
      value: binaryValue,
    });
  }

  public encodePubKey(pubKeyCompressed: PubKey) {
    return {
      typeUrl: pubKeyTypeUrl,
      value: PubKey.encode(pubKeyCompressed).finish(),
    };
  }

  public encodeWeb3Tx(web3Tx: ExtOptionsWeb3Tx) {
    return {
      typeUrl: web3TxUrl,
      value: Web3Tx.encode(web3Tx).finish(),
    };
  }

  public encodeTxBody(txBodyFields: TxBodyValue): Uint8Array {
    const wrappedMessages = txBodyFields.messages.map((message) =>
      this.encodeAsAny(message)
    );
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const txBody = TxBody.fromPartial({
      ...txBodyFields,
      messages: wrappedMessages,
    });
    return TxBody.encode(txBody).finish();
  }

  public decode({ typeUrl, value }: DecodeObject): any {
    if (typeUrl === defaultTypeUrls.cosmosTxBody) {
      return this.decodeTxBody(value);
    }
    const type = this.lookupTypeWithError(typeUrl);
    const decoded = type.decode(value);
    Object.entries(decoded).forEach(([key, val]: [string, any]) => {
      if (
        typeof Buffer !== "undefined" &&
        typeof Buffer.isBuffer !== "undefined" &&
        Buffer.isBuffer(val)
      ) {
        decoded[key] = Uint8Array.from(val);
      }
    });
    return decoded;
  }

  public decodeTxBody(txBody: Uint8Array): TxBody {
    const decodedTxBody = TxBody.decode(txBody);

    return {
      ...decodedTxBody,
      messages: decodedTxBody.messages.map(
        ({ typeUrl: typeUrl, value }: Any) => {
          if (!typeUrl) {
            throw new Error("Missing type_url in Any");
          }
          if (!value) {
            throw new Error("Missing value in Any");
          }
          return this.decode({ typeUrl, value });
        }
      ),
    };
  }
}
