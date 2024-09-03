import DecimalApi from "./index";

export default function getMultisigTxs(api: DecimalApi) {
  return (address: string, limit = 1, offset = 0) =>
    api.getMultisigTxs(address, { limit, offset });
}
