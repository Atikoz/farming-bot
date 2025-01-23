const updateWallet = async (address: string): Promise<string> => {
  try {
    const requestOptions: RequestInit = {
      method: "GET",
      redirect: "follow" as RequestRedirect
    };
    
    const response = await fetch(`https://api.decimalchain.com/api/v1/addresses/${address}/convert`, requestOptions);

    const resultApi = await response.json();

    console.log('-----------------')
    console.log(address)
    console.log(resultApi)
    console.log('-----------------')


    const updatedWallet = resultApi.Result.EvmAddress;

    return updatedWallet
  } catch (error) {
    console.error('error updating decimal wallet: ', error)
  }
}

export default updateWallet;