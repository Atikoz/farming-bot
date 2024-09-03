import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getAddressbook(api: DecimalApi, wallet: Wallet | null): () => Promise<any>;
