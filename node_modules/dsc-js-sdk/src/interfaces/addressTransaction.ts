export interface AddressTransaction {
  id: number;
  hash: string;
  timestamp: string;
  status: string;
  type: string;
  data: any;
  blockId: number;
  recipient: {
    address: string;
  };
}
