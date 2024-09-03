import DecimalApi from "./index";

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function getTransaction(api: DecimalApi) {
  return async (hash: string) => {
    if (!hash) {
      throw new Error("The hash is required");
    }

    await timeout(7000);
    return api.getTransaction(hash);
  };
}
