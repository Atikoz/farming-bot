import DecimalApi from "./index";

export default function getValidator(api: DecimalApi) {
  return async (address: string) => {
    if (!address) {
      throw new Error("The address is required");
    }

    try {
      return api.getValidator(address);
    } catch (e) {
      throw new Error("[decimal-js-sdk] Such a validator does not exist");
    }
  };
}
