const updateWallet = async (address) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
    
    const response = await fetch(`https://api.decimalchain.com/api/v1/addresses/${address}/convert`, requestOptions);

    const resultApi = await response.json();

    const updatedWallet = resultApi.Result.EvmAddress;

    return updatedWallet
  } catch (error) {
    console.error('error updating decimal wallet: ', error)
  }
}

export default updateWallet;