import DecimalApi from "./index";
import Wallet from "../wallet";
export declare enum DelegationStatus {
    delegated = "delegated",
    undelegating = "undelegating",
    redelegating = "redelegating"
}
export default function getNftStakesByAddress(api: DecimalApi, wallet: Wallet | null): (address: string, status: DelegationStatus) => Promise<any>;
