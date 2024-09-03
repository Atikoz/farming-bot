interface NftReserve {
    reserve: string;
    subTokenId: string;
    coinDenom: string;
}
export interface AddressNftBalance {
    amount: string;
    collection: string;
    cover: string;
    nftId: string;
    nftReserve: NftReserve[];
}
export {};
