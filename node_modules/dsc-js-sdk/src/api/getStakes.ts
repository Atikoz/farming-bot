import DecimalApi from "./index";

export default function getStakesByAddress(api: DecimalApi) {
  return (address: string, status: string) => {
    if (!address) {
      throw new Error("The address is required");
    }
    return api.getSpecificStakes(address, status);
  };
}
