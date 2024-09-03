import { Secp256k1 } from "@cosmjs/crypto";
import { toBase64 } from "@cosmjs/encoding";
import { Int53 } from "@cosmjs/math";
import {
  makeAuthInfoBytes,
  makeSignBytes,
  makeSignDoc,
} from "@cosmjs/proto-signing";
import { keccak256 } from "js-sha3";

import { Account } from "../accounts";
import Wallet from "../wallet";
import { EncoderDecoder } from "./encoderDecoder";
import Long from "long";
interface signTransactionData {
  signDoc: {
    bodyBytes: Uint8Array;
    authInfoBytes: Uint8Array;
    chainId: string;
    accountNumber: Long;
  };
  stdSignature: {
    pub_key: {
      type: string;
      value: string;
    };
    signature: string;
  };
}
export async function signTransaction(
  txBodyBytes: Uint8Array,
  wallet: Wallet,
  account: Account,
  chainId: string,
  fee: {
    gas: string;
    amount: any[];
  },
  simulation: boolean
): Promise<signTransactionData> {
  const pubKeyCompressed = wallet.getPublicKey(true);
  const encoderDecoder = new EncoderDecoder();
  const pubKeyEncoded = encoderDecoder.encodePubKey(pubKeyCompressed);
  const gasLimit = Int53.fromString(fee.gas).toNumber();
  const authInfoBytes = makeAuthInfoBytes(
    [{ pubkey: pubKeyEncoded, sequence: account.sequence }],
    fee.amount,
    gasLimit
  );
  const signDoc = makeSignDoc(
    txBodyBytes,
    authInfoBytes,
    chainId,
    account.accountNumber
  );
  const signBytes = makeSignBytes(signDoc);
  const signHash = Buffer.from(keccak256(signBytes), "hex");
  let signatureBytes = new Uint8Array();
  if (!simulation) {
    const privKey = wallet.getPrivateKey();
    const signature = await Secp256k1.createSignature(signHash, privKey.key);
    signatureBytes = new Uint8Array([...signature.r(32), ...signature.s(32)]);
  }

  const stdSignature = {
    pub_key: {
      type: "/ethermint.crypto.v1.ethsecp256k1.PubKey",
      value: toBase64(pubKeyCompressed.key),
    },
    signature: toBase64(signatureBytes),
  };
  return {
    signDoc,
    stdSignature,
  };
}
