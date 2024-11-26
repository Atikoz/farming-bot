let { CROSSFI_RPC_URL } = process.env


class CrossfiService {
  client
  rpcUrl

  constructor() {
    this.rpcUrl = CROSSFI_RPC_URL
  }

  async initializeStargateClient() {
    try {
      this.client = await StargateClient.connect(this.rpcUrl);
    } catch (error) {
      console.error('initialize rpc connection error:', error)
    }
  }

  async ensureInitializedStargateClient() {
    if (!this.client) {
      await this.initializeStargateClient();
    }
  }
}