import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getAddress(api: DecimalApi, wallet: Wallet | null): (address: string, txLimit?: number) => Promise<any>;
