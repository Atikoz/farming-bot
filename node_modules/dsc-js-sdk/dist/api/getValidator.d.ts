import DecimalApi from "./index";
export default function getValidator(api: DecimalApi): (address: string) => Promise<any>;
