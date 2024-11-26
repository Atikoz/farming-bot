export const getUserBalance = async (address) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  const response = await fetch(`https://cosmos-api.mainnet.ms/cosmos/bank/v1beta1/balances/${address}`, requestOptions);

  const resultApi = await response.json();
  
  return resultApi
}