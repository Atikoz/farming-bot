import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getMyCoins(api: DecimalApi, wallet: Wallet | null): (limit?: number, offset?: number) => Promise<any>;
