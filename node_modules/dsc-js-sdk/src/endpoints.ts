export enum NETWORKS {
  MAINNET = "mainnet",
  TESTNET = "testnet",
  DEVNET = "devnet",
}

export function getApiEndpoint(network: NETWORKS): string {
  return apiEndpoints[network];
}

export function getNewApiEndpoint(network: NETWORKS): string {
  return newApiEndpoints[network];
}

export function getWeb3Endpoint(network: NETWORKS): string {
  return web3Endpoints[network];
}

export function getWeb3NodeETH(network: NETWORKS): string {
  return web3NodeETH[network];
}

export function getWeb3NodeBSC(network: NETWORKS): string {
  return web3NodeBSC[network];
}

export function getRestNodeEndpoint(network: NETWORKS): string {
  return restNodeEndpoints[network];
}

export function getSubgraphEndpoint(network: NETWORKS): string {
  return subgraphEndpoints[network];
}

export function getSubgraphBridgeEndpoint(network: NETWORKS): string {
  return subgraphBridgeEndpoints[network];
}

export function getSubgraphBridgeETHEndpoint(network: NETWORKS): string {
  return subgraphBridgeETHEndpoints[network];
}

export function getSubgraphBridgeBSCEndpoint(network: NETWORKS): string {
  return subgraphBridgeBSCEndpoints[network];
}

export function getSubgraphMultiSigEndpoint(network: NETWORKS): string {
  return subgraphMultiSigEndpoints[network];
}

export function getIpfsEndpoints(network: NETWORKS): string {
  return ipfsEndpoints[network];
}

export function getMultiCallAddresses(network: NETWORKS): string {
  return multicallAddresses[network];
}

export function getMultiSigAddresses(network: NETWORKS): {
  safe: string;
  safeFactory: string;
  multiSend: string;
} {
  return multiSigAddresses[network];
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

const newApiEndpoints = {
  [NETWORKS.DEVNET]: "https://devnet-api.decimalchain.com/api/",
  [NETWORKS.TESTNET]: "https://testnet-api.decimalchain.com/api/",
  [NETWORKS.MAINNET]: "https://mainnet-api.decimalchain.com/api/",
};

const web3Endpoints = {
  [NETWORKS.DEVNET]: "https://devnet-val.decimalchain.com/web3/",
  [NETWORKS.TESTNET]: "https://testnet-val.decimalchain.com/web3/",
  [NETWORKS.MAINNET]: "https://node.decimalchain.com/web3/",
};

const subgraphEndpoints = {
  [NETWORKS.DEVNET]: "https://devnet-thegraph.decimalchain.com/subgraphs/name/contract-center",
  [NETWORKS.TESTNET]: "https://testnet-thegraph.decimalchain.com/subgraphs/name/contract-center",
  [NETWORKS.MAINNET]: "https://mainnet-thegraph.decimalchain.com/subgraphs/name/contract-center",
};

const subgraphBridgeEndpoints = {
  [NETWORKS.DEVNET]: "https://devnet-thegraph.decimalchain.com/subgraphs/name/bridge",
  [NETWORKS.TESTNET]: "https://testnet-thegraph.decimalchain.com/subgraphs/name/bridge",
  [NETWORKS.MAINNET]: "https://mainnet-thegraph.decimalchain.com/subgraphs/name/bridge",
};

const subgraphMultiSigEndpoints = {
  [NETWORKS.DEVNET]: "https://devnet-thegraph.decimalchain.com/subgraphs/name/multisig-wallet",
  [NETWORKS.TESTNET]: "https://testnet-thegraph.decimalchain.com/subgraphs/name/multisig-wallet",
  [NETWORKS.MAINNET]: "https://mainnet-thegraph.decimalchain.com/subgraphs/name/multisig-wallet",
};

const ipfsEndpoints = { //TODO?
  [NETWORKS.DEVNET]: "https://testnet-nft-ipfs.decimalchain.com/", 
  [NETWORKS.TESTNET]: "https://testnet-nft-ipfs.decimalchain.com/",
  [NETWORKS.MAINNET]: "https://testnet-nft-ipfs.decimalchain.com/",
};

const multicallAddresses = {
  [NETWORKS.DEVNET]: "0xd633Ac8b1fcb48A2b3d7a676D1B527E923f66213", 
  [NETWORKS.TESTNET]: "0x81FD5FAe106dFD0343B0435a1bc0ef89BB14C317",
  [NETWORKS.MAINNET]: "0x7b23EB47587cA6482FC16cB3D9D426EC64D4B5FC",
};

const multiSigAddresses = {
  [NETWORKS.DEVNET]: {
    safe: "0xAaA4813B459B4af71C7C172880D504C6663c11F7",
    safeFactory: "0xAa6Fe7d309741897f5E2De994c90155b0252d104",
    multiSend: "0xf28404962e594aFAf7FE0a9eE2e760f925B3aCDc"
  }, 
  [NETWORKS.TESTNET]: {
    safe: "0xE0f30FcCAe2f9f9C7efee9af044C436841D466ee",
    safeFactory: "0x4cC406B1713d3dF67e739D6f5918B6C98F614a38",
    multiSend: "0xC0611a00CE349B9bCff3866351A2a5Aa9659c464"
  }, 
  [NETWORKS.MAINNET]: {
    safe: "0x15949c33775154549D073168C1094C5f3b28b5CB",
    safeFactory: "0x92466f09D5c82e8DdB8AaA7c5AdC63d43111F6c1",
    multiSend: "0x72b80471AAFabd1469ed1C51453DC9ca66068bC0"
  }, 
};

const web3NodeETH = {
  [NETWORKS.DEVNET]: "https://rpc.sepolia.org/", 
  [NETWORKS.TESTNET]: "https://rpc.sepolia.org/",
  [NETWORKS.MAINNET]: "https://ethereum-rpc.publicnode.com",
};

const web3NodeBSC = {
  [NETWORKS.DEVNET]: "https://bsc-testnet-dataseed.bnbchain.org", 
  [NETWORKS.TESTNET]: "https://bsc-testnet-dataseed.bnbchain.org",
  [NETWORKS.MAINNET]: "https://bsc-dataseed.bnbchain.org",
};

const subgraphBridgeETHEndpoints = { //TODO?
  [NETWORKS.DEVNET]: "https://devnet-thegraph.decimalchain.com/subgraphs/name/bridgeETH",
  [NETWORKS.TESTNET]: "https://testnet-thegraph.decimalchain.com/subgraphs/name/bridgeETH",
  [NETWORKS.MAINNET]: "https://mainnet-thegraph.decimalchain.com/subgraphs/name/bridgeETH",
};

const subgraphBridgeBSCEndpoints = { //TODO?
  [NETWORKS.DEVNET]: "https://devnet-thegraph.decimalchain.com/subgraphs/name/bridgeBSC",
  [NETWORKS.TESTNET]: "https://testnet-thegraph.decimalchain.com/subgraphs/name/bridgeBSC",
  [NETWORKS.MAINNET]: "https://mainnet-thegraph.decimalchain.com/subgraphs/name/bridgeBSC",
};