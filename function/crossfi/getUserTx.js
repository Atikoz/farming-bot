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

  } catch (error) {
    console.error(error);
    return []
  }
}

export default getUserTx;