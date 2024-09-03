import DecimalApi from "./index";
export default function getTransaction(api: DecimalApi): (hash: string) => Promise<any>;
