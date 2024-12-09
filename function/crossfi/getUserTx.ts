import { StargateClient } from '@cosmjs/stargate'
import { ITransaction } from '../../interface/ITxUser';
const { CROSSFI_RPC_URL } = process.env;

if (!CROSSFI_RPC_URL) {
  throw new Error ('CROSSFI_RPC_URL is not defined in environment variables.')
}

const client = await StargateClient.connect(CROSSFI_RPC_URL);

async function getUserTx(address: string): Promise<ITransaction[]> {
  try {
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