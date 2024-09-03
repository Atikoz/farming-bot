import DecimalApi from "./index";

export default function getMultisigsByAddress(api: DecimalApi) {
  return (address: string) => api.getMultisigsByAddress(address);
}
