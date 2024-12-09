import { StargateClient } from "@cosmjs/stargate"

let { CROSSFI_RPC_URL } = process.env


class CrossfiService {
  private client: any
  private rpcUrl: string

  constructor() {
    if (!CROSSFI_RPC_URL) throw new Error('CROSSFI_RPC_URL is not defined in environment variables.')
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