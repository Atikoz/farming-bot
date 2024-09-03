import DecimalApi from "./index";

export default function getCoinsList(api: DecimalApi) {
  return (limit: number, offset: number, query: any) => {
    const params: any = {
      limit,
      offset,
    };
    if (query) {
      params.query = query;
    }
    return api.getCoinsList(params);
  };
}
