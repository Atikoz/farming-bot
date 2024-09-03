import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getNftsTxes(api: DecimalApi, wallet: Wallet | null): (address: string, limit?: number, offset?: number, order?: string) => Promise<any> | null;
