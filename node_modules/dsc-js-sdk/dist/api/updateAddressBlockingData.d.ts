import DecimalApi from "./index";
import Wallet from "../wallet";
export default function updateAddressBlockingData(api: DecimalApi, wallet: Wallet | null): (address: string, isBlocked: boolean, type: string, reason?: string) => Promise<any> | null;
