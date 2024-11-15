import { StargateClient } from '@cosmjs/stargate'
const { CROSSFI_RPC_URL } = process.env;

const client = await StargateClient.connect(CROSSFI_RPC_URL);

async function getUserTx(address) {
  try {
    console.log('address', address);

    const sentTransactions = await client.searchTx([
      { key: "message.sender", value: address }
    ]);
  
    const receivedTransactions = await client.searchTx([
      { key: "transfer.recipient", value: address }
    ]);
  
    const allTransactions = [...sentTransactions, ...receivedTransactions];
    
    return allTransactions;

    // const requestOptions = {
    //   method: "GET",
    //   redirect: "follow"
    // };
    
    // const response = await fetch(`https://xfiscan.com/api/1.0/txs?address=${address}&page=1&limit=10&sort=-hieght`, requestOptions);
    // const resultApi = response.json();

    // return resultApi.docs
  

  } catch (error) {
    console.error(error);
    return []
  }
}

export default getUserTx;