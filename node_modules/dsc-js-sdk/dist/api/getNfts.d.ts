import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getNfts(api: DecimalApi, wallet: Wallet | null): (address: string, limit?: number, offset?: number, query?: null) => Promise<any> | null;
