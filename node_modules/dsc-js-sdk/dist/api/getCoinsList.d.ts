import DecimalApi from "./index";
export default function getCoinsList(api: DecimalApi): (limit: number, offset: number, query: any) => Promise<any>;
