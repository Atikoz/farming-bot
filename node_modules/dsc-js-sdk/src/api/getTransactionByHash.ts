import DecimalApi from "./index";

export default function getTransactionByHash(api: DecimalApi) {
  return (hash: string) => api.getTransactionByHash(hash);
}
