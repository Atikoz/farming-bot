export const getUserBalance = async (address) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow"
  };
  
  const response = await fetch(`https://xfiscan.com/api/1.0/addresses/${address}`, requestOptions);

  const resultApi = response.json();

  return resultApi
}