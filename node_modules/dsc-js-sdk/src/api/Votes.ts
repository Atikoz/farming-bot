import DecimalApi from "./index";

export default function getVotesInfo(api: DecimalApi) {
  return () => {
    try {
      return api.getProposals();
    } catch (e) {
      return null;
    }
  };
}
