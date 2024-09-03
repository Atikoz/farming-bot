import DecimalApi from "./index";
export default function getMultisigTxs(api: DecimalApi): (address: string, limit?: number, offset?: number) => Promise<any>;
