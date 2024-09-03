export enum NETWORKS {
  MAINNET = "mainnet",
  TESTNET = "testnet",
  DEVNET = "devnet",
}

export function getApiEndpoint(network: NETWORKS): string {
  return apiEndpoints[network];
}

export function getWeb3Endpoint(network: NETWORKS): string {
  return web3Endpoints[network];
}

export function getRestNodeEndpoint(network: NETWORKS): string {
  return restNodeEndpoints[network];
}

export function getRpcEndpoint(
  network: NETWORKS,
  isNodeDirectMode: boolean
): string {
  const networkEndpoints = rpcEndpoints[network];
  return isNodeDirectMode
    ? networkEndpoints.nodeHost
    : networkEndpoints.gateHost;
}

export const gateEstimationEndpoint = "tx/estimate";
export const gateBroadcastStatusEndpoint = "rpc/broadcast/status";

export function getNodeFeeEstimationEndpoint(
  nodeRestHost: string,
  txBytes: string,
  denom: string
): string {
  return `${nodeRestHost}decimal/fee/v1/calculate_commission?tx_bytes=${txBytes}&denom=${denom}`;
}

const devnetEndpoints = {
  gateHost: "https://devnet-gate.decimalchain.com/api/rpc/broadcast",
  nodeHost: "https://devnet-val.decimalchain.com/rpc/",
};

const testnetEndpoints = {
  gateHost: "https://testnet-gate.decimalchain.com/api/rpc/broadcast",
  nodeHost: "https://testnet-val.decimalchain.com/rpc/",
};

// for now does not know
const mainnetEndpoints = {
  gateHost: "https://mainnet-gate.decimalchain.com/api/rpc/broadcast",
  nodeHost: "https://node.decimalchain.com/rpc/",
};

const rpcEndpoints = {
  [NETWORKS.DEVNET]: devnetEndpoints,
  [NETWORKS.TESTNET]: testnetEndpoints,
  [NETWORKS.MAINNET]: mainnetEndpoints,
};

const restNodeEndpoints = {
  [NETWORKS.DEVNET]: "http://devnet-val.decimalchain.com/rest/",
  [NETWORKS.TESTNET]: "http://testnet-val.decimalchain.com/rest/",
  [NETWORKS.MAINNET]: "http://node.decimalchain.com/rest/",
};

const apiEndpoints = {
  [NETWORKS.DEVNET]: "https://devnet-gate.decimalchain.com/api/",
  [NETWORKS.TESTNET]: "https://testnet-gate.decimalchain.com/api/",
  [NETWORKS.MAINNET]: "https://mainnet-gate.decimalchain.com/api/",
};

const web3Endpoints = {
  [NETWORKS.DEVNET]: "https://devnet-val.decimalchain.com/web3/",
  [NETWORKS.TESTNET]: "https://testnet-val.decimalchain.com/web3/",
  [NETWORKS.MAINNET]: "https://node.decimalchain.com/web3/",
};
