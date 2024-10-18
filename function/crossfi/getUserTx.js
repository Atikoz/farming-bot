export const getUserTx = async (address) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };
  
    const apiUrl = `https://mpxapi.bazerwallet.com/mpx/api/v1/txs?address=${address}&page=1`;
    
    const response = await fetch(apiUrl, requestOptions);
    
    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
    const resultApi = await response.json();
    const arrayTx = resultApi.data.txs;
  
    return arrayTx
  } catch (error) {
    console.error(error)
  }
}