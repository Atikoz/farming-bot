import { StargateClient } from '@cosmjs/stargate'
const { CROSSFI_RPC_URL } = process.env;

class CosmosService {
  constructor() {
    this.rpcUrl = CROSSFI_RPC_URL;
    this.client = null;
  }

  async initialize() {
    try {
      this.client = await StargateClient.connect(this.rpcUrl);
    } catch (error) {
      console.error('initialize rpc connection error:', error)
    }
  }

  async ensureInitialized() {
    if (!this.client) {
      await this.initialize();
    }
  }

  async getUserTx (address) {
    try {
      await this.ensureInitialized();
      console.log('address', address);
  
      const sentTransactions = await this.client.searchTx([
        { key: "message.sender", value: address }
      ]);
    
      const receivedTransactions = await this.client.searchTx([
        { key: "transfer.recipient", value: address }
      ]);
    
      const allTransactions = [...sentTransactions, ...receivedTransactions];
      
      return allTransactions;
  
    } catch (error) {
      console.error(error);
      return []
    }
  }

}

export default new CosmosService;