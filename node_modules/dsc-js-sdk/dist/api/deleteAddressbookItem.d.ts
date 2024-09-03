import DecimalApi from "./index";
import Wallet from "../wallet";
export default function deleteAddressbookItem(api: DecimalApi, wallet: Wallet | null): (itemId: number) => Promise<any>;
