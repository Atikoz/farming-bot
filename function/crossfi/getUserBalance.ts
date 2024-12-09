export const getUserBalance = async (address: string) => {
  const requestOptions: RequestInit = {
    method: "GET",
    redirect: "follow" as RequestRedirect
  };

  const response = await fetch(
    `https://cosmos-api.mainnet.ms/cosmos/bank/v1beta1/balances/${address}`,
    requestOptions
  );

  const resultApi = await response.json();

  return resultApi
}