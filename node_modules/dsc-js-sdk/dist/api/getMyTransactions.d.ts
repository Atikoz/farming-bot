import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getMyTransactions(api: DecimalApi, wallet: Wallet | null): (limit: number | undefined, offset: number | undefined, types: any, coins: any) => Promise<any>;
