import DecimalApi from "./index";
import Wallet from "../wallet";
interface AddressBookItem {
    name: string;
    address: string;
    comment: string;
}
export default function updateAddressbookItem(api: DecimalApi, wallet: Wallet | null): (itemId: number, payload: AddressBookItem) => Promise<any>;
export {};
