import DecimalApi from "./index";
import Wallet from "../wallet";
export interface AddressBookItem {
    name: string;
    address: string;
    comment: string;
}
export default function createAddressbookItem(api: DecimalApi, wallet: Wallet | null): (payload: AddressBookItem) => Promise<any>;
