import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getBlockedAddresses(api: DecimalApi, wallet: Wallet | null): (limit?: number, offset?: number, type?: object, q?: object) => Promise<any> | null;
