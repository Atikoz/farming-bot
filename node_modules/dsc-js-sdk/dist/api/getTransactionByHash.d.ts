import DecimalApi from "./index";
export default function getTransactionByHash(api: DecimalApi): (hash: string) => Promise<any>;
