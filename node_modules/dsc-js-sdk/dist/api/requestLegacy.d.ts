import DecimalApi from "./index";
import Wallet from "../wallet";
export default function getAddress(api: DecimalApi, wallet: Wallet | null): () => Promise<any>;
