import DecimalApi from "./index";

export default function getMultisig(api: DecimalApi) {
  return (address: string) => api.getMultisig(address);
}
