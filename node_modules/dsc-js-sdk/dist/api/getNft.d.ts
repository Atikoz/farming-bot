import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getNft(api: DecimalApi, wallet: Wallet | null): (id: number) => Promise<any> | null;
