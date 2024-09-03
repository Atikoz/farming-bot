import { generatedWallet } from "./wallet";
import { clientIssueCheck, clientRedeemCheck } from "./interfaces/clientInterfaces";
export declare function issueCheck(wallet: generatedWallet, chainID: string): (issueData: clientIssueCheck) => Promise<string>;
export declare function redeemCheckData(data: clientRedeemCheck, wallet: generatedWallet): {
    sender: string;
    check: string;
    proof: string;
};
