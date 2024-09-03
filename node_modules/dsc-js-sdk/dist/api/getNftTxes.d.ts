import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getNftTxes(api: DecimalApi, wallet: Wallet | null): (id: number, limit?: number, offset?: number, order?: string) => Promise<any> | null;
