import { encode as rlpEncode } from "rlp";
import secp256k1 from "secp256k1";
import shajs from "sha.js";
import bs58 from "bs58";
import { Keccak } from "sha3";
import { decode as bech32Decode, fromWords as bech32FromWords } from "bech32";
import validateTxData from "./validator";
import TX_TYPE from "./txTypes";
import { getAmountToUNI } from "../src/utils/math";
import DecimalApi from "./api";
import { generatedWallet } from "./wallet";
import {
  clientIssueCheck,
  clientRedeemCheck,
} from "./interfaces/clientInterfaces";

function rlpHash(input: any[]) {
  const hash = new Keccak(256);
  hash.update(Buffer.from(rlpEncode(input)));
  return hash.digest();
}

export function issueCheck(wallet: generatedWallet, chainID: string) {
  if (!wallet) {
    throw new Error("Wallet id is required");
  }
  return async (issueData: clientIssueCheck) => {
    validateTxData(issueData, TX_TYPE.COIN_ISSUE_CHECK);

    const data = {
      coin: issueData.coin.toLowerCase(),
      amount: +getAmountToUNI(issueData.amount),
      nonce: issueData.nonce,
      due_block: +issueData.dueBlock,
      passphrase: issueData.password,
    };

    const passphraseHash = shajs("sha256").update(data.passphrase).digest();
    const passphrasePrivKey = passphraseHash;

    const checkHash = rlpHash([
      chainID,
      data.coin,
      data.amount,
      data.nonce,
      data.due_block,
    ]);

    const lockObj = secp256k1.ecdsaSign(checkHash, passphrasePrivKey);
    const lockSignature = new Uint8Array(65);
    // TODO: Optimize appending recovery byte to the signature
    for (let i = 0; i < 64; i += 1) {
      lockSignature[i] = lockObj.signature[i];
    }
    lockSignature[64] = lockObj.recid;

    const checkLockedHash = rlpHash([
      chainID,
      data.coin,
      data.amount,
      data.nonce,
      data.due_block,
      lockSignature,
    ]);
    const checkObj = secp256k1.ecdsaSign(checkLockedHash, wallet.privateKey);
    const check = rlpEncode([
      chainID,
      data.coin,
      data.amount,
      data.nonce,
      data.due_block,
      lockSignature,
      checkObj.recid + 27,
      checkObj.signature.slice(0, 32),
      checkObj.signature.slice(32, 64),
    ]);

    return bs58.encode(check);
  };
}

export function redeemCheckData(
  data: clientRedeemCheck,
  wallet: generatedWallet
) {
  const passphraseHash = shajs("sha256").update(data.password).digest();
  const passphrasePrivKey = passphraseHash;

  const { words } = bech32Decode(wallet.address);
  const senderAddressHash = rlpHash([Buffer.from(bech32FromWords(words))]);

  const proofObj = secp256k1.ecdsaSign(senderAddressHash, passphrasePrivKey);
  const proofSignature = new Uint8Array(65);
  // TODO: Optimize appending recovery byte to the signature
  for (let i = 0; i < 64; i += 1) {
    proofSignature[i] = proofObj.signature[i];
  }
  proofSignature[64] = proofObj.recid;

  const proof = Buffer.from(proofSignature).toString("base64");

  return {
    sender: wallet.address,
    check: data.check,
    proof,
  };
}
