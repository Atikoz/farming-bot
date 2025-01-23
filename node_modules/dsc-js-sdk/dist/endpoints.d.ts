export declare enum NETWORKS {
    MAINNET = "mainnet",
    TESTNET = "testnet",
    DEVNET = "devnet"
}
export declare function getApiEndpoint(network: NETWORKS): string;
export declare function getNewApiEndpoint(network: NETWORKS): string;
export declare function getWeb3Endpoint(network: NETWORKS): string;
export declare function getWeb3NodeETH(network: NETWORKS): string;
export declare function getWeb3NodeBSC(network: NETWORKS): string;
export declare function getRestNodeEndpoint(network: NETWORKS): string;
export declare function getSubgraphEndpoint(network: NETWORKS): string;
export declare function getSubgraphBridgeEndpoint(network: NETWORKS): string;
export declare function getSubgraphBridgeETHEndpoint(network: NETWORKS): string;
export declare function getSubgraphBridgeBSCEndpoint(network: NETWORKS): string;
export declare function getSubgraphMultiSigEndpoint(network: NETWORKS): string;
export declare function getIpfsEndpoints(network: NETWORKS): string;
export declare function getMultiCallAddresses(network: NETWORKS): string;
export declare function getMultiSigAddresses(network: NETWORKS): {
    safe: string;
    safeFactory: string;
    multiSend: string;
};
export declare function getRpcEndpoint(network: NETWORKS, isNodeDirectMode: boolean): string;
export declare const gateEstimationEndpoint = "tx/estimate";
export declare const gateBroadcastStatusEndpoint = "rpc/broadcast/status";
export declare function getNodeFeeEstimationEndpoint(nodeRestHost: string, txBytes: string, denom: string): string;
