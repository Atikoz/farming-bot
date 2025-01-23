# Usage

## Connecting to Decimal Blockchain

You can provide your own Decimal node address to send transactions to the network, or you can use our gateways to do this and much more. Gateway URLs are provided below.

The following code can be used to generate **mnemonic** or use your mnemonic

```js
const bip39 = require("bip39");
const mnemonic = bip39.generateMnemonic();
```

## Connect to DecimalEVM

```js
const { Wallet, DecimalEVM, DecimalNetworks } = SDK;
const decimalWallet = new Wallet(mnemonic);

//DecimalNetworks.devnet - is devnet
//DecimalNetworks.testnet - is testnet
//DecimalNetworks.mainnet - is mainnet
const decimalEVM = new DecimalEVM(decimalWallet, DecimalNetworks.mainnet);

//To work with Decimal contracts, they need to be initialized
//You can initialize all contracts at once, or individually
//If you forgot to initialize the contact before using the function, it will be initialized automatically during the execution of the function
//To speed up the sdk, we recommend doing this in advance
await decimalEVM.connect(); // initializes all contacts
//or
await decimalEVM.connect('contract-center') // initializes only contract-center contact
await decimalEVM.connect('token-center') // initializes only token-center contact
await decimalEVM.connect('nft-center') // initializes only nft-center contact
await decimalEVM.connect('delegation') // initializes only delegation contact (delegation token)
await decimalEVM.connect('delegation-nft') // initializes only delegation-nft contact (delegation nft)
await decimalEVM.connect('master-validator') // initializes only master-validator contact (master node)
await decimalEVM.connect('multi-call') // initializes only multi-call contact (multi send)
await decimalEVM.connect('multi-sig') // initializes only multi-sig contact
```

## DEL

### Send DEL

```js
const address = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
const amount = decimalEVM.parseEther('1') // 1 DEL
await decimalEVM.sendDEL(address, amount)
```

### Burn DEL

```js
const amount = decimalEVM.parseEther('1') // 1 DEL
await decimalEVM.burnDEL(amount)
```

## Token

### Create token

```js

const newToken = {
  creator: decimalWallet.evmAddress, // owner of token (evm address)
  symbol: 'TKNE', // symbol of token
  name: 'TokenName', // name of token
  crr: 50, // crr of token (value is from 10 to 100)
  initialMint: decimalEVM.parseEther(1000), // initial mint of token
  minTotalSupply: decimalEVM.parseEther(1), // minimum total supply after which the token sale will be impossible
  maxTotalSupply: decimalEVM.parseEther(5000000), // maximum total supply after which the token buy will be impossible
  identity: '7815696ecbf1c96e6894b779456d330e', // md5 hash icon of gravatar
}
//The amount of the commission depends on the length of the symbol token
//3 letters — 2500000 DEL
//4 letters — 250,000 DEL
//5 letters — 25,000 DEL
//6 letters — 2500 DEL
//7-10 letters — 250 DEL
//The commission must be added to the amount of the reserve!
const comission = 250000
const reserve = decimalEVM.parseEther(1000+comission) // minimum reserve 1000 DEL.
const {tokenAddress} = await decimalEVM.createToken(newToken, reserve)
```

### Create reserveless token 
```js
//if mintable is false
const name = "TokenName"
const symbol = "TKNE"
const mintable = false
const burnable = true
const initialMint = decimalEVM.parseEther(1000)
const cap = undefined
const identity = '' //icon
const {tx, tokenAddress} = await decimalEVM.createTokenReserveless(name, symbol, mintable, burnable, initialMint, cap, identity)

//if mintable is true
const name = "TokenName"
const symbol = "TKNE"
const mintable = true
const burnable = true
const initialMint = decimalEVM.parseEther(1000)
const cap = decimalEVM.parseEther(10000) //max total supply
const identity = '' //icon
const {tx, tokenAddress} = await decimalEVM.createTokenReserveless(name, symbol, mintable, burnable, initialMint, cap, identity)
```

### Approve Token
```js
const spender = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // address of who will be allowed to spend amount
const amount = decimalEVM.parseEther(1);
const tx = await decimalEVM.approveToken(tokenAddress, spender, amount)
```

### Transfer Token
```js
const to = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // recipient's address
const amount = decimalEVM.parseEther(10); // 10 tokens
const tx = await decimalEVM.transferToken(tokenAddress, to, amount)
```

### Transfer From Token
```js
// Use function approveToken() to approve token from owner to recipient address
// Then you can call transferFromToken() from wallet recipient
const from = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // address of owner tokens
const to = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // recipient's address
const amount = decimalEVM.parseEther(10); // 10 tokens
const tx = await decimalEVM.transferFromToken(tokenAddress, from, to, amount)
```

### Burn Token
```js
const amount = decimalEVM.parseEther(10); // 10 tokens
const tx = await decimalEVM.burnToken(tokenAddress, amount)
```

### Buy Token (buy Token For Exact DEL)
```js
const recipient = decimalWallet.evmAddress
const amountDel = decimalEVM.parseEther(10); // 10 DEL
const amountOutMin = await decimalEVM.calculateBuyOutput(tokenAddress, amountDel) // the minimum number of tokens to receive for 10 DEL
// At the time of the transaction, the price may change, so you can take away, for example, 10% of the amountOutMin
// const amountOutMinNew = amountOutMin - (amountOutMin * 10n / 100n)
const tx = await decimalEVM.buyTokenForExactDEL(tokenAddress, amountDel, amountOutMin, recipient)
```

### Buy Token (buy Exact Token For DEL)
```js
const recipient = decimalWallet.evmAddress
const amountOut = decimalEVM.parseEther(10); // 10 tokens 
const amountDel = await decimalEVM.calculateBuyInput(tokenAddress, amountOut) // the amount of DEL to buy 10 tokens
//If you have sent more DEL than you need, the difference will be refunded
const tx = await decimalEVM.buyExactTokenForDEL(tokenAddress, amountDel, amountOut, recipient)
```

### Sell Token (sell Tokens For Exact DEL)
```js
const amountOut = decimalEVM.parseEther(10); // 10 DEL
const amountInMax = await decimalEVM.calculateSellInput(tokenAddress, amountOut) // the number of tokens sold to receive 10 DEL
// At the time of the transaction, the price may change, so you can add away, for example, 10% to the amountInMax
// const amountInMaxNew = amountInMax + (amountInMax * 10n / 100n)
const tx = await decimalEVM.sellTokensForExactDEL(tokenAddress, amountOut, amountInMax, recipient)
```

### Sell Token (sell Exact Tokens For DEL)
```js
const amountIn = decimalEVM.parseEther(10); // 10 tokens
const amountOutMin = await decimalEVM.calculateSellOutput(tokenAddress, amountIn) // the minimum amount of DEL to sell 10 tokens
// At the time of the transaction, the price may change, so you can take away, for example, 10% of the amountOutMin
// const amountOutMinNew = amountOutMin - (amountOutMin * 10n / 100n)
const tx = await decimalEVM.sellExactTokensForDEL(tokenAddress, amountIn, amountOutMin, recipient)
```

### Convert Token to Token (approve Token)
```js
const amountIn = decimalEVM.parseEther(10); // 10 tokens
const futureDEL = await decimalEVM.calculateSellOutput(tokenAddress1, amountIn)
const amountOutMin = await decimalEVM.calculateBuyOutput(tokenAddress2, futureDEL)
// At the time of the transaction, the price may change, so you can take away, for example, 10% of the amountOutMin
// const amountOutMinNew = amountOutMin - (amountOutMin * 10n / 100n)
await decimalEVM.approveToken(tokenAddress1, tokenCenterAddress, amountIn) // approve to transfer tokenCenterAddress for convertToken
await decimalEVM.convertToken(tokenAddress1, tokenAddress2, amountIn, amountOutMin, recipient)
```

### Convert Token to Token (permit Token)
```js
const amountIn = decimalEVM.parseEther(10); // 10 tokens
const futureDEL = await decimalEVM.calculateSellOutput(tokenAddress1, amountIn)
const amountOutMin = await decimalEVM.calculateBuyOutput(tokenAddress2, futureDEL)
// At the time of the transaction, the price may change, so you can take away, for example, 10% of the amountOutMin
// const amountOutMinNew = amountOutMin - (amountOutMin * 10n / 100n)
const sign = await decimalEVM.getSignPermitToken(tokenAddress1, tokenCenterAddress, amountIn) // get signature to approve transfer token for tokenCenterAddress
await decimalEVM.convertToken(tokenAddress1, tokenAddress2, amountIn, amountOutMin, recipient, sign)
```

### Spend tokens signed
```js
//prepare
const owner = "0x35119df12afdf848b7ef2536af2411ab0a611c45"; // address of owner tokens
const spender = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // address of who will be allowed to spend amount
const amount = decimalEVM.parseEther(1);
const sign = await decimalEVM.getSignPermitToken(tokenAddress, spender, amount)

//spend tokens from a spender wallet
const tx = await decimalEVM.permitToken(tokenAddress, owner, spender, amount, sign)
```

### Update Identity Token
```js
const newIdentity = 'qwertyasd123';
const tx = await decimalEVM.updateTokenIdentity(tokenAddress, newIdentity)
```

### Update Max Supply Token
```js
const newMaxTotalSupply = decimalEVM.parseEther(5000000);
const tx = await decimalEVM.updateTokenMaxTotalSupply(tokenAddress, newMaxTotalSupply)
```



## NFT

### Create NFT Collection
```js
const newNFT: any = {
  creator: decimalWallet.evmAddress, // owner of nft collection (evm address)
  symbol: 'PIRS', // symbol of nft collection
  name: 'Pirates', // name of nft collection
  contractURI: 'ipfs://ipfs/QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk', // uri of nft collection
  refundable: false, // is the reserve returned when burning NFT (true or false)
  allowMint: true //is mint allowed for the nft collection
}

const {nftCollectionAddress} = await decimalEVM.createCollectionDRC721Reserveless(newNFT) // create collection DRC721 without reserve
//const {nftCollectionAddress} = await decimalEVM.createCollectionDRC1155Reserveless(newNFT) // create collection DRC1155 without reserve
//const {nftCollectionAddress} = await decimalEVM.createCollectionDRC721(newNFT) // create collection DRC721 with reserve
//const {nftCollectionAddress} = await decimalEVM.createCollectionDRC1155(newNFT) // create collection DRC1155 with reserve
```

### Mint NFT for NFT Collection

#### Mint NFT for NFT Collection without reserve
```js
const to = decimalWallet.evmAddress
const tokenURI = "/ipfs/QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk"
const {tokenId} = await decimalEVM.mintNFT(nftCollectionAddress, to, tokenURI) // mint NFT for NFT Collection DRC721 without reserve

//const tokenId = 0
//const amount = 20
//const {tokenId} = await decimalEVM.mintNFT(nftCollectionAddress, to, tokenURI, tokenId, amount) // mint NFT for NFT Collection DRC1155 without reserve
```

#### Mint NFT for NFT Collection with DEL reserve
```js
const to = decimalWallet.evmAddress
const tokenURI = "/ipfs/QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk"

const reserve = decimalEVM.parseEther(1); // 1 del
const {tokenId} = await decimalEVM.mintNFTWithDELReserve(nftCollectionAddress, to, tokenURI, reserve) // mint NFT for NFT Collection DRC721 with DEL reserve

//const tokenId = 0
//const amount = 20
//const reserve = decimalEVM.parseEther(1*amount); // =20 del
//const {tokenId} = await decimalEVM.mintNFTWithDELReserve(nftCollectionAddress, to, tokenURI, reserve, tokenId, amount) // mint NFT for NFT Collection DRC1155 with DEL reserve
```

#### Mint NFT for NFT Collection with Token reserve (approve Token)
```js
const to = decimalWallet.evmAddress
const tokenURI = "/ipfs/QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk"

const reserve = decimalEVM.parseEther(1); // 1 del
await decimalEVM.approveToken(tokenAddress, nftCollectionAddress, reserve)
const {tokenId} = await decimalEVM.mintNFTWithTokenReserve(nftCollectionAddress, to, tokenURI, reserve, tokenAddress) // mint NFT for NFT Collection DRC721 with Token reserve
undefi
//const tokenId = 0
//const amount = 20
//const reserve = decimalEVM.parseEther(1*amount); // =20 del
//await decimalEVM.approveToken(tokenAddress, nftCollectionAddress, reserve)
//const {tokenId} = await decimalEVM.mintNFTWithTokenReserve(nftCollectionAddress, to, tokenURI, reserve, tokenAddress, undefined, tokenId, amount) // mint NFT for NFT Collection DRC1155 with Token reserve
 ```

#### Mint NFT for NFT Collection with Token reserve (permit Token)
```js
const to = decimalWallet.evmAddress
const tokenURI = "/ipfs/QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk"

const reserve = decimalEVM.parseEther(1); // 1 del
const sign = await decimalEVM.getSignPermitToken(tokenAddress, nftCollectionAddress, reserve)
const {tokenId} = await decimalEVM.mintNFTWithTokenReserve(nftCollectionAddress, to, tokenURI, reserve, tokenAddress, sign) // mint NFT for NFT Collection DRC721 with Token reserve

//const tokenId = 0
//const amount = 20
//const reserve = decimalEVM.parseEther(1*amount); // =20 del
//const sign = await decimalEVM.getSignPermitToken(tokenAddress, nftCollectionAddress, reserve)
//const {tokenId} = await decimalEVM.mintNFTWithTokenReserve(nftCollectionAddress, to, tokenURI, reserve, tokenAddress, sign, tokenId, amount) // mint NFT for NFT Collection DRC1155 with Token reserve
 ```

### Add reserve to NFT

#### Add DEL reserve to NFT
```js
// The function add a reserve to NFT with reserve. It is not possible to add a reserve to NFT without a reserve.
const tokenId = 0
const reserve = decimalEVM.parseEther(1); // 1 del
await decimalEVM.addDELReserveNFT(nftCollectionAddress, tokenId, reserve)
// Only the owner can add a reserve to DRC721
// Anyone can add a reserve to DRC1155
```

#### Add Token reserve to NFT (approve Token)
```js
// The function add a reserve to NFT with reserve. It is not possible to add a reserve to NFT without a reserve.
const tokenId = 0
const reserve = decimalEVM.parseEther(1); // 1 del
await decimalEVM.approveToken(tokenAddress, nftCollectionAddress, reserve)
await decimalEVM.addTokenReserveNFT(nftCollectionAddress, tokenId, reserve)
// Only the owner can add a reserve to DRC721
// Anyone can add a reserve to DRC1155
```

#### Add Token reserve to NFT (permit Token)
```js
// The function add a reserve to NFT with reserve. It is not possible to add a reserve to NFT without a reserve.
const tokenId = 0
const reserve = decimalEVM.parseEther(1); // 1 del
const sign = await decimalEVM.getSignPermitToken(tokenAddress, nftCollectionAddress, reserve)
await decimalEVM.addTokenReserveNFT(nftCollectionAddress, tokenId, reserve, sign)
// Only the owner can add a reserve to DRC721
// Anyone can add a reserve to DRC1155
```

### Transfer NFT
```js
const tokenId = 0
await decimalEVM.transferNFT(nftCollectionAddress, from, to, tokenId) // for DRC721
//const amount = 20
//await decimalEVM.transferNFT(nftCollectionAddress, from, to, tokenId, amount) // for DRC1155
```

### Transfer batch for DRC1155
```js
const tokenIds = [0, 1] // array tokenIds
const amounts = [10, 20] // array amounts of tokenIds
await decimalEVM.transferBatchNFT1155(nftCollectionAddress, from, to, tokenIds, amounts) 
```

### Disable mint NFT
```js
// The mint can be disabled, to do this, check what status it is in.
//const resultBoolean = await decimalEVM.getAllowMintNFT(nftCollectionAddress)
await decimalEVM.disableMintNFT(nftCollectionAddress)
```

### Burn NFT
```js
const tokenId = 0
await decimalEVM.burnNFT(nftCollectionAddress, tokenId) // for DRC721
//const amount = 20
//await decimalEVM.burnNFT(nftCollectionAddress, tokenId, amount) // for DRC1155
```
<!-- ### Set BaseURI for NFT Collection
```js
const baseURI = 'https://example.com/'
await decimalEVM.setBaseURINFT(nftCollectionAddress, baseURI)
``` -->

### Set TokenURI for NFT
```js
const tokenId = 0
const tokenURI = 'image.png'
await decimalEVM.setTokenURINFT(nftCollectionAddress, tokenId, tokenURI)
```

### Approve NFT

#### Approve for NFT DRC721
```js
const tokenId = 0
await decimalEVM.approveNFT721(nftCollectionAddress, to, tokenId) // DRC721
```

#### Approve for all NFT
```js
// enable approval for all nfts inside the NFT Collection
await decimalEVM.approveForAllNFT(nftCollectionAddress, to, true)
// disable approval for all nfts inside the NFT Collection
//await decimalEVM.approveForAllNFT(nftCollectionAddress, to, false)
```

## Delegation

### Delegation DEL
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const amount = decimalEVM.parseEther(1) // 1 del
await decimalEVM.delegateDEL(validator, amount)
//or if use hold
const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const holdTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.delegateDELHold(validator, amount, holdTimestamp)
```

### Delegation Token (approve Token)
```js
const amount = decimalEVM.parseEther(1) //1 token
const delegationAddress = await decimalEVM.getDecimalContractAddress('delegation')
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"

await decimalEVM.approveToken(tokenAddress, delegationAddress, amount)
await decimalEVM.delegateToken(validator, tokenAddress, amount)
//or if use hold
const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const holdTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.delegateTokenHold(validator, tokenAddress, amount, holdTimestamp)
```

### Delegation Token (permit Token)
```js
const amount = decimalEVM.parseEther(1) //1 token
const delegationAddress  = await decimalEVM.getDecimalContractAddress('delegation')
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"

const sign = await decimalEVM.getSignPermitToken(tokenAddress, delegationAddress, amount)
await decimalEVM.delegateToken(validator, tokenAddress, amount, sign)
//or if use hold
const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const holdTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.delegateTokenHold(validator, tokenAddress, amount, holdTimestamp, sign)
```

### Transfer stake
```js
const stakes = await subgraph.getStakesByAddress(owner) // Get your stakes from subgraph
//const stakes = await decimalEVM.getTokenStakesByMember(owner) // Or get your stakes from smart contract

const stake = stakes[0] // first stake (for example)
const newValidator = "0x5c089e1b93fef3d7f7672e8d515eba846f42b924"
await decimalEVM.transferStakeToken(stake.validator, stake.token, stake.amount, newValidator)
//or if use hold
await decimalEVM.transferStakeTokenHold(stake.validator, stake.token, stake.amount, stake.holdTimestamp, newValidator)
```

### Withdraw stake
```js
const stakes = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
//const stakes = await decimalEVM.getTokenStakesByMember(owner) // Or get your stakes from smart contract

const stake = stakes[0] // first stake (for example)
await decimalEVM.withdrawStakeToken(stake.validator, stake.token, stake.amount)

```

### Stake to Hold
```js
const stakes = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
//const stakes = await decimalEVM.getTokenStakesByMember(owner) // Or get your stakes from smart contract
const stake = stakes[0] // first stake (for example)

const oldHoldTimestamp = 0 // if current stake is not a hold
//const oldHoldTimestamp = stake.holdTimestamp //or increase current hold time

//const days = 150
//const sec = days * 86400
//const latestBlock = await decimalEVM.getLatestBlock()
//const newHoldTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.stakeTokenToHold(stake.validator, stake.token, stake.amount, oldHoldTimestamp, newHoldTimestamp)
```

### Reset Hold
```js
const stakes = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
const stake = stakes[0] // first stake (for example)

await decimalEVM.stakeTokenResetHold(stake.validator, stake.delegator, stake.token, stake.holdTimestamp)
```

### Reset Hold DEL
```js
const stakes = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
const stake = stakes[0] // first stake (for example)

await decimalEVM.stakeTokenResetHoldDEL(stake.validator, stake.delegator, stake.holdTimestamp)
```

### withdraw Token With Reset
```js
const stakes = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
const stake1 = stakes[0] // first stake (for example)
const stake2 = stakes[1] // second stake (for example)

// Example of iterating through an array of stakes to find expired and where validator, amount, token match
const result = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
const holdsExpierd = result.data.filter((stake) => Number(stake.holdTimestamp) <= Number(result.meta.block.number))
const stakesMap: {[a:string]: number[]} = {}
holdsExpierd.map((stake) => {
  const tokenAddress = stake.token ? stake.token.address : "del"
  if (!stakesMap[`${stake.validator.address}-${tokenAddress}-${stake.amount}`]) stakesMap[`${stake.validator.address}-${tokenAddress}-${stake.amount}`] = [];
  stakesMap[`${stake.validator.address}-${tokenAddress}-${stake.amount}`].push(Number(stake.holdTimestamp))
})
const keys = Object.keys(stakesMap).filter((stake) => stakesMap[stake].length > 1)
const key = keys[0] //for example
const stakeData  = key.split('-')
const stake = {
  validator: stakeData[0],
  token: stakeData[1],
  amount: stakeData[2],
  holdTimestamps: stakesMap[key]
}
//

const holdTimestampsToReset = [stake1.holdTimestamp, stake2.holdTimestamp] //array expired holdTimestamps. Where validator, amount, token match
await decimalEVM.withdrawTokenWithReset(stake.validator, stake.token, stake.amount, holdTimestampsToReset)
```

### transfer Token With Reset
```js
const stakes = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
const stake1 = stakes[0] // first stake (for example)
const stake2 = stakes[1] // second stake (for example)

const holdTimestampsToReset = [stake1.holdTimestamp, stake2.holdTimestamp] //array expired holdTimestamps. Where validator, amount, token match

const oldValidator = stake.validator
const newValidator = '0x...' //new validator
await decimalEVM.transferTokenWithReset(oldValidator, stake.token, stake.amount, newValidator, holdTimestampsToReset)
```

### hold Token With Reset
```js
const stakes = await subgraph.getStakesByAddress(owner, first, skip) // Get your stakes from subgraph
const stake1 = stakes[0] // first stake (for example)
const stake2 = stakes[1] // second stake (for example)

const holdTimestampsToReset = [stake1.holdTimestamp, stake2.holdTimestamp] //array expired holdTimestamps. Where validator, amount, token match

const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const newHoldTimestamp = latestBlock!.timestamp + sec;

await decimalEVM.holdTokenWithReset(stake.validator, stake.token, stake.amount, newHoldTimestamp, holdTimestampsToReset)
```

### Apply penalty to stake
```js
const stakes = await subgraph.getStakesByAddress(owner) // Get your stakes from subgraph
//const stakes = await decimalEVM.getTokenStakesByMember(owner) // Or get your stakes from smart contract

const stake = stakes[0] // first stake (for example)
const result = await decimalEVM.applyPenaltyToStakeToken(stake.validator, stake.delegator, stake.token)
if (result.error == null) {
  //successfully transaction: result.tx
} else {
  console.log(result.error == 'NothingToBurn' ? 'Nothing to burn, there is no need for applyPenaltyToStakeToken' : result.error)
}
```

### Apply penalties to stake
```js
const stakes = await subgraph.getStakesByAddress(owner) // Get your stakes from subgraph
//const stakes = await decimalEVM.getTokenStakesByMember(owner) // Or get your stakes from smart contract

const stake = stakes[0] // first stake (for example)
const result = await decimalEVM.applyPenaltiesToStakeToken(stake.validator, stake.delegator, stake.token)
if (result.error == null) {
  //successfully transaction: result.tx
} else {
  console.log(result.error == 'NoPenaltyToApply' ? 'Nothing to burn, there is no need for applyPenaltiesToStakeToken' : result.error)
}
```

### Complete stake after frozen
```js
const stakesFrozen = await subgraph.getTransferStakesByAddress(owner) // get transfer stakes
//const stakesFrozen = await subgraph.getWithdrawStakesByAddress(owner) // or get withdraw stakes

const block = await decimalEVM.getLatestBlock();
const stakesFrozenFiltered = stakesFrozen.filter(({unfreezeTimestamp}) => unfreezeTimestamp <= block.timestamp)
if (stakesFrozenFiltered.length > 0) {
  const stakeFrozen = stakesFrozenFiltered[0] // first stake frozen (for example)

  const result = await decimalEVM.completeStakeToken([stakeFrozen.stakeIndex])
  if (result.error == null) {
      //successfully transaction: result.tx
  } else {
      console.log(result.error)
  }
}
```

## Delegation NFT 

### Delegation NFT (approve NFT)
```js
const tokenId = 0 // tokenId of NFT
const delegationNftAddress = await decimalEVM.getDecimalContractAddress('delegation-nft')
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"

//delegate DRC721
await decimalEVM.approveNFT721(nftCollectionAddress, delegationNftAddress, tokenId)
await decimalEVM.delegateDRC721(validator, nftCollectionAddress, tokenId)
// or delegate hold DRC721
const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const holdTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.delegateDRC721Hold(validator, nftCollectionAddress, tokenId, holdTimestamp)

//delegate DRC1155
const amount = 1 //1 token
await decimalEVM.approveForAllNFT(nftCollectionAddress, delegationNftAddress, true)
await decimalEVM.delegateDRC1155(validator, nftCollectionAddress, tokenId, amount)
// or delegate hold DRC1155
const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const holdTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.delegateDRC1155Hold(validator, nftCollectionAddress, tokenId, amount, holdTimestamp)

```

### Delegation NFT (permit NFT)
```js
const tokenId = 0 // tokenId of NFT
const delegationNftAddress = await decimalEVM.getDecimalContractAddress('delegation-nft')
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"

//delegate DRC721
const sign = await decimalEVM.getSignPermitDRC721(nftCollectionAddress, delegationNftAddress, tokenId)
await decimalEVM.delegateDRC721(validator, nftCollectionAddress, tokenId, sign)
// or delegate hold DRC721
const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const holdTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.delegateDRC721Hold(validator, nftCollectionAddress, tokenId, holdTimestamp, sign)

//delegate DRC1155
const amount = 1 //1 token
const sign = await decimalEVM.getSignPermitDRC1155(nftCollectionAddress, delegationNftAddress)
await decimalEVM.delegateDRC1155(validator, nftCollectionAddress, tokenId, amount, sign)
// or delegate hold DRC1155
const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const holdTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.delegateDRC1155Hold(validator, nftCollectionAddress, tokenId, amount, holdTimestamp, sign)
```

### Transfer stake NFT
```js
const newValidator = "0x5c089e1b93fef3d7f7672e8d515eba846f42b924"

const stakes = await subgraph.getNFTStakesByAddress(owner, 1000, 0) // get nft stakes 
const stake = stakes[0] // first stake (for example)

// transfer stake DRC721 || DRC1155
await decimalEVM.transferStakeNFT(stake.validator, stake.token, stake.tokenId, stake.amount, newValidator)
// or transfer stake hold 
await decimalEVM.transferStakeNFTHold(stake.validator, stake.token, stake.tokenId, stake.amount, stake.holdTimestamp, newValidator)
```

### Withdraw stake NFT
```js
const stakes = await subgraph.getNFTStakesByAddress(owner, 1000, 0) // get nft stakes 

const stake = stakes[0] // first stake (for example)

await decimalEVM.withdrawStakeNFT(stake.validator, stake.token, stake.tokenId, stake.amount)
// or withdraw stake hold 
await decimalEVM.withdrawStakeNFTHold(stake.validator, stake.token, stake.tokenId, stake.amount, stake.holdTimestamp)
```

### Stake to Hold
```js
const stakes = await subgraph.getNFTStakesByAddress(owner, 1000, 0) // get nft stakes 
const stake = stakes[0] // first stake (for example)

const oldHoldTimestamp = 0 // if current stake is not a hold
//const oldHoldTimestamp = stake.holdTimestamp //or increase current hold time

//const days = 150
//const sec = days * 86400
//const latestBlock = await decimalEVM.getLatestBlock()
//const newHoldTimestamp = latestBlock!.timestamp + sec;
await decimalEVM.stakeNFTToHold(stake.validator, stake.token, stake.tokenId, stake.amount, oldHoldTimestamp, newHoldTimestamp)
```

### Stake to Hold
```js
const stakes = await subgraph.getNFTStakesByAddress(owner, 1000, 0) // get nft stakes 
const stake = stakes[0] // first stake (for example)

await decimalEVM.stakeNFTResetHold(stake.validator, stake.delegator, stake.token, stake.tokenId, stake.holdTimestamp)
```

### withdraw NFT With Reset
```js
const stakes = await subgraph.getNFTStakesByAddress(owner, first, skip) // get nft stakes 
const stake1 = stakes[0] // first stake (for example)
const stake2 = stakes[1] // second stake (for example)

const holdTimestampsToReset = [stake1.holdTimestamp, stake2.holdTimestamp] //array expired holdTimestamps. Where validator, amount, token and tokenId match

await decimalEVM.withdrawNFTWithReset(stake.validator, stake.token, stake.tokenId, stake.amount, holdTimestampsToReset)
```

### transfer NFT With Reset
```js
const stakes = await subgraph.getNFTStakesByAddress(owner, first, skip) // get nft stakes 
const stake1 = stakes[0] // first stake (for example)
const stake2 = stakes[1] // second stake (for example)

const holdTimestampsToReset = [stake1.holdTimestamp, stake2.holdTimestamp] //array expired holdTimestamps. Where validator, amount, token and tokenId match

const oldValidator = stake.validator
const newValidator = '0x...' //new validator

await decimalEVM.transferNFTWithReset(oldValidator, stake.token, stake.tokenId, stake.amount, newValidator, holdTimestampsToReset)
```

### hold NFT With Reset
```js
const stakes = await subgraph.getNFTStakesByAddress(owner, first, skip) // get nft stakes 
const stake1 = stakes[0] // first stake (for example)
const stake2 = stakes[1] // second stake (for example)

const holdTimestampsToReset = [stake1.holdTimestamp, stake2.holdTimestamp] //array expired holdTimestamps. Where validator, amount, token and tokenId match

const days = 150
const sec = days * 86400
const latestBlock = await decimalEVM.getLatestBlock()
const newHoldTimestamp = latestBlock!.timestamp + sec;

await decimalEVM.holdNFTWithReset(stake.validator, stake.token, stake.tokenId, stake.amount, newHoldTimestamp, holdTimestampsToReset)
```

### Complete stake NFT after frozen
```js
  // get transfer stakes NFT TODO
  // or get withdraw stakes NFT TODO

const block = await decimalEVM.getLatestBlock();
const stakesFrozenFiltered = stakesFrozen.filter(({unfreezeTimestamp}) => unfreezeTimestamp <= block.timestamp)
if (stakesFrozenFiltered.length > 0) {
  const stakeFrozen = stakesFrozenFiltered[0] // first stake frozen (for example)

  const result = await decimalEVM.completeStakeNFT([stakeFrozen.stakeIndex])
  if (result.error == null) {
      //successfully transaction: result.tx
  } else {
      console.log(result.error)
  }
}
```

## Validators

#### Add new validator with DEL stake
```js
const newValidator: any = {
    operator_address: decimalWallet.evmAddress,
    reward_address: decimalWallet.evmAddress,
    consensus_pubkey: Buffer.from(decimalWallet.getPublicKey().key.buffer).toString('base64'),
    description: {
        moniker: 'test-node-sgp1-01',
        identity: '',
        website: 'decimalchain.com',
        security_contact: '',
        details: 'Declaring validator on test-node-sgp1-01'
    },
    commission: '0.100000000000000000',
}
await decimalEVM.addValidatorWithETH(newValidator, decimalEVM.parseEther(2))
```

#### Add new validator with token stake
```js
const newValidator: any = {
    operator_address: decimalWallet.evmAddress,
    reward_address: decimalWallet.evmAddress,
    consensus_pubkey: Buffer.from(decimalWallet.getPublicKey().key.buffer).toString('base64'),
    description: {
        moniker: 'test-node-sgp1-01',
        identity: '',
        website: 'decimalchain.com',
        security_contact: '',
        details: 'Declaring validator on test-node-sgp1-01'
    },
    commission: '0.100000000000000000',
}
const tokenAddress = await decimalEVM.getAddressTokenBySymbol('COStest')
const stakeValidator: any = {
  token: tokenAddress,
  amount: decimalEVM.parseEther(10)
}
const masterValidatorAddress = await decimalEVM.getDecimalContractAddress('master-validator')

//for permit
const sign = await decimalEVM.getSignPermitToken(tokenAddress, masterValidatorAddress, stakeValidator.amount)
await decimalEVM.addValidatorWithToken(newValidator, stakeValidator, sign)

// or for appove
await decimalEVM.approveToken(tokenAddress, masterValidatorAddress, stakeValidator.amount)
await decimalEVM.addValidatorWithToken(newValidator, stakeValidator, undefined)

```

#### Pause validator
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const pauseValidator = await decimalEVM.pauseValidator(validator)
```

#### Unpause validator
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const unpauseValidator = await decimalEVM.unpauseValidator(validator)
```

#### Update validator meta data
```js
const validatorMeta: any = {
    operator_address: decimalWallet.evmAddress,
    reward_address: decimalWallet.evmAddress,
    consensus_pubkey: Buffer.from(decimalWallet.getPublicKey().key.buffer).toString('base64'),
    description: {
        moniker: 'test-node-sgp1-01',
        identity: '',
        website: 'decimalchain.com',
        security_contact: '',
        details: 'Declaring validator on test-node-sgp1-01'
    },
    commission: '0.100000000000000000',
}
await decimalEVM.updateValidatorMeta(validatorMeta)
```

## Сalculation of the transaction fee
```js
//To create a token, you use this function
const {tokenAddress} = await decimalEVM.createToken(newToken, reserve)

//Before send the transaction, you can calculate estimate gas price for this function
const getEstimateGas = true
const estimateGas = await decimalEVM.createToken(newToken, reserve, getEstimateGas)
//To calculate the fee, request the current gasPrice and multiply by the received estimateGas
const feeData = await decimalEVM.getFeeData()
const resultFee = BigInt(estimateGas.toString())*BigInt(feeData.gasPrice!.toString())

//You can get the current estimateGas from any write function by specifying `true` in the last parameter
//Another example
const estimateGas = await decimalEVM.approveToken(tokenAddress, spender, amount, getEstimateGas)
const feeData = await decimalEVM.getFeeData()
const resultFeeForApproveToken = BigInt(estimateGas.toString())*BigInt(feeData.gasPrice!.toString())
```

## Multicall

### Multi send Token
```js
//Form an array of multi send token
//token - the address of the token contract; or "del" for send del
//to - recipient address
//amount - amount of transfer
const tokenAddress1 = "0xe1E885a848DC0c0867E119E7e80289f98e27256C"
const tokenAddress2 = "0x1f68CaD1e55049793F6c9229EAD50f1c651fEb10"
let data: any = []
data.push({
    token: tokenAddress1,
    to: "0x0000000000000000000000000000000000000001",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: tokenAddress1,
    to: "0x0000000000000000000000000000000000000002",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: tokenAddress2,
    to: "0x0000000000000000000000000000000000000003",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: "del",
    to: "0x0000000000000000000000000000000000000004",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: "del",
    to: "0x0000000000000000000000000000000000000005",
    amount: decimalEVM.parseEther(1)
})
//get estimate gas
const gas = await decimalEVM.multiSendToken(data, undefined, true)
//send transaction
const tx = await decimalEVM.multiSendToken(data)
```

## Сustom multi call
```js
//Form an array of calls
//target - the address of the target contract for the call
//iface - interface of the function you need
//params - input data for calling the function
const callDatas = [{
    target: "0xBEc675cA5ACdB12eAE9F31909C96C6c8961F8C69",
    iface: "function transfer(address to, uint amount)",
    params: ["0x0000000000000000000000000000000000000001", decimalEVM.parseEther("1.0")]
},
{
    target: "0xBEc675cA5ACdB12eAE9F31909C96C6c8961F8C69",
    iface: "function transfer(address to, uint amount)",
    params: ["0x0000000000000000000000000000000000000002", decimalEVM.parseEther("1.0")]
}]

const tx = await decimalEVM.multiCall(callDatas)
console.log(tx)
```

## Memo
```js
//If you want your transactions to have a message specified (memo), you can use multiSendToken with memo

//Form an array of multi send token
//token - the address of the token contract; or "del" for send del
//to - recipient address
//amount - amount of transfer
const tokenAddress1 = "0xe1E885a848DC0c0867E119E7e80289f98e27256C"
const tokenAddress2 = "0x1f68CaD1e55049793F6c9229EAD50f1c651fEb10"
let data: any = []
data.push({
    token: tokenAddress1,
    to: "0x0000000000000000000000000000000000000001",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: tokenAddress1,
    to: "0x0000000000000000000000000000000000000002",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: tokenAddress2,
    to: "0x0000000000000000000000000000000000000003",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: "del",
    to: "0x0000000000000000000000000000000000000004",
    amount: decimalEVM.parseEther(1)
})
data.push({
    token: "del",
    to: "0x0000000000000000000000000000000000000005",
    amount: decimalEVM.parseEther(1)
})

const memo = "This is a memo"
//get estimate gas
const gas = await decimalEVM.multiSendToken(data, memo, true)
//send transaction
const tx = await decimalEVM.multiSendToken(data, memo)
// And you can read the memo message by the transactionHash
const parsedMemo = await decimalEVM.parseMemo(tx.transactionHash) //will be returned memo or undefined
console.log('parsedMemo', parsedMemo)

```

## MultiSig

### Create multisig wallet
```js
const ownerData = [{
    owner: addressOwner1,
    weight: 100
},
{
    owner: addressOwner2,
    weight: 100
},
{
    owner: addressOwner3,
    weight: 100
}]
const weightThreshold = 200 //The weight threshold for making a transaction
const { multisigAddress } = await decimalEVM.multisig.create(ownerData, weightThreshold)
```

### Get build transaction for Send DEL
```js
const to = "0x0000000000000000000000000000000000000099";
const amount = decimalEVM.parseEther('10')
const safeTx = await decimalEVM.multisig.buildTxSendDEL(multisigAddress, to, amount)
```

### Get build transaction for Send Token
```js
const to = "0x0000000000000000000000000000000000000099";
const amount = decimalEVM.parseEther('10')
const safeTx = await decimalEVM1.multisig.buildTxSendToken(multisigAddress, tokenAddress, to, amount)
```

### Get build transaction for Send NFT
```js
const to = "0x0000000000000000000000000000000000000099";
const tokenAddress = "0x65Dad3283BCE73E5EfBbaB8B0183dF5FdF4506e5"
const tokenId = 0;
const safeTx = await decimalEVM1.multisig.buildTxSendNFT(multisigAddress, tokenAddress, to, tokenId, ) // send drc721
//const safeTx = await decimalEVM1.multisig.buildTxSendNFT(multisigAddress, tokenAddress, to, tokenId, amount) // send drc1155
```

### Sign and execute transaction
```js
//After build the transaction, you need to sign it

// sign tx
const signTx1 = await decimalEVM.multisig.signTx(multisigAddress, safeTx)   // sign owner 1
//const signTx2 = await decimalEVM2.multisig.signTx(multisigAddress, safeTx) // sign owner 2
//const signTx3 = await decimalEVM3.multisig.signTx(multisigAddress, safeTx) // sign owner 3

// or sign tx and approve hash
const const {safeTransaction: signTx1, tx: tx1 } = await decimalEVM.multisig.approveHash(multisigAddress, safeTx)   // sign owner 1
//const const {safeTransaction: signTx2, tx: tx2 } = await decimalEVM2.multisig.approveHash(multisigAddress, safeTx) // sign owner 2
//const const {safeTransaction: signTx3, tx: tx3 } = await decimalEVM3.multisig.approveHash(multisigAddress, safeTx) // sign owner 3

//Executing a transaction
const result = await decimalEVM.multisig.executeTx(multisigAddress, safeTx, [signTx1, signTx2, signTx3]) //sign and specify user signatures
```

### Send DEL for MultiSig (with approve hash signatures)
```js
const amount = decimalEVM.parseEther('10')
const safeTx = await decimalEVM.multisig.buildTxSendDEL(multisigAddress, "0x0000000000000000000000000000000000000099", amount)

// get esimage gas for approveHash
// const result = await decimalEVM.multisig.approveHashEstimateGas(multisigAddress, safeTx)
const const {safeTransaction: signTx1, tx: tx1 } = await decimalEVM1.multisig.approveHash(multisigAddress, safeTx)   // sign owner 1
//const const {safeTransaction: signTx2, tx: tx2 } = await decimalEVM1.multisig.approveHash(multisigAddress, safeTx) // sign owner 2
//const const {safeTransaction: signTx3, tx: tx3 } = await decimalEVM1.multisig.approveHash(multisigAddress, safeTx) // sign owner 3
const result = await decimalEVM.multisig.executeTx(multisigAddress, safeTx, [signTx1, signTx2, signTx3]) //sign and specify user signatures
```

### Get and build and sign the transaction of previously approved transaction
```js
//If one of the participants has made an approve transaction, you can get this transaction details and make an approve too or execute
const {transactions: safeTxs, approvers} = await decimalEVM1.multisig.getCurrentApproveTransactions(multisigAddress);
const safeTx = safeTxs[0]; // for example, take the first transaction
const approver = approvers[0] // get approver participant address for first transaction
const decodeSafeTx = decimalEVM.multisig.decodeTransaction(safeTx) // decode transaction
/* examples result decode safeTx
// if transfer DEL
{
      action: 'transfer',
      tokenType: 'Native',
      token: 'DEL',
      to: "0x0000000000000000000000000000000000000099",
      amount: 10000000000000000000
}
// if transfer DRC20 token
{
  action: 'transfer',
  tokenType: 'DRC20',
  token: '0x5c089e1b93fef3d7f7672e8d515eba846f42b924',
  to: "0x0000000000000000000000000000000000000099",
  amount: 10000000000000000000
}
// if transfer nft DRC721
{
      action: 'transfer',
      tokenType: 'DRC721',
      token: '0x5c089e1b93fef3d7f7672e8d515eba846f42b924',
      to: "0x0000000000000000000000000000000000000099",
      tokenId: 1,
}
// if transfer nft DRC1155
{
      action: 'transfer',
      tokenType: 'DRC1155',
      token: '0x5c089e1b93fef3d7f7672e8d515eba846f42b924',
      to: "0x0000000000000000000000000000000000000099",
      tokenId: 1,
      amount: 20
    }
*/
const signTx1 = await decimalEVM.multisig.getSignatureForParticipant(approver) //get sign for a participant who has previously made an approve transaction
const signTx2 = await decimalEVM.multisig.signTx(multisigAddress, safeTx) // sign transaction
//const const {safeTransaction: signTx2, tx: tx2 } = await decimalEVM2.multisig.approveHash(multisigAddress, safeTx_) // or approve transaction

const result = await decimalEVM1.multisig.executeTx(multisigAddress, safeTx, [signTx1, signTx2]) //execute transaction
```

### Get previously approved transactions with expired nones
```js
const {transactions: safeTxs, approvers} = await decimalEVM1.multisig.getExpiredApproveTransactions(multisigAddress);
const safeTxExpired = safeTxs[0]; // for example, take the first transaction
const decodeSafeTx = decimalEVM.multisig.decodeTransaction(safeTx) // decode transaction
/* examples result decode safeTxExpired
// if transfer DEL
{
      action: 'transfer',
      tokenType: 'Native',
      token: 'DEL',
      to: "0x0000000000000000000000000000000000000099",
      amount: 10000000000000000000
}
// if transfer DRC20 token
{
  action: 'transfer',
  tokenType: 'DRC20',
  token: '0x5c089e1b93fef3d7f7672e8d515eba846f42b924',
  to: "0x0000000000000000000000000000000000000099",
  amount: 10000000000000000000
}
// if transfer nft DRC721
{
      action: 'transfer',
      tokenType: 'DRC721',
      token: '0x5c089e1b93fef3d7f7672e8d515eba846f42b924',
      to: "0x0000000000000000000000000000000000000099",
      tokenId: 1,
}
// if transfer nft DRC1155
{
      action: 'transfer',
      tokenType: 'DRC1155',
      token: '0x5c089e1b93fef3d7f7672e8d515eba846f42b924',
      to: "0x0000000000000000000000000000000000000099",
      tokenId: 1,
      amount: 20
    }
*/

// build new transaction with current none from your decode result safeTxExpired
const safeTx = await decimalEVM.multisig.buildTxSendDEL(multisigAddress, to, amount) //send DEL
//const safeTx = await decimalEVM1.multisig.buildTxSendToken(multisigAddress, tokenAddress, to, amount) //send tokens
//const safeTx = await decimalEVM1.multisig.buildTxSendNFT(multisigAddress, tokenAddress, to, tokenId, ) // send drc721
//const safeTx = await decimalEVM1.multisig.buildTxSendNFT(multisigAddress, tokenAddress, to, tokenId, amount) // send drc1155

// get esimage gas for approveHash
// const result = await decimalEVM.multisig.approveHashEstimateGas(multisigAddress, safeTx)
const const {safeTransaction: signTx1, tx: tx1 } = await decimalEVM1.multisig.approveHash(multisigAddress, safeTx)   // sign owner 1
//const const {safeTransaction: signTx2, tx: tx2 } = await decimalEVM1.multisig.approveHash(multisigAddress, safeTx) // sign owner 2
//const const {safeTransaction: signTx3, tx: tx3 } = await decimalEVM1.multisig.approveHash(multisigAddress, safeTx) // sign owner 3
const result = await decimalEVM.multisig.executeTx(multisigAddress, safeTx, [signTx1, signTx2, signTx3]) //sign and specify user signatures

```


## Bridge

### Transfer DEL, ETH, BNB
```js
const to = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
const amount = decimalEVM.parseEther(10); // 10 DEL
const fromChainId = 75 // chain id (1 is ETH, 56 is BSC, 75 is DSC)
const toChainId = 1 // chain id (1 is ETH, 56 is BSC, 75 is DSC)
const serviceFee = await decimalEVM.getBridgeServiceFees(toChainId)
const result = await decimalEVM.bridgeTransferNative(to, amount, serviceFee, fromChainId, toChainId);

const encodedVM = '0x.....' // encodedVM received after bridgeTransferTokens
const unwrapWETH = false; // if you send WDEL from Ethreum to Decimal, you can set unwrapWETH = true, for receive DEL instead WDEL. Automatic unwrapping is available for DEL, ETH, BNB
const resultComplete = await decimalEVM.bridgeCompleteTransfer(toChainId, encodedVM, unwrapWETH)
```

### Transfer Tokens
```js
const tokenAddress = "0x5c089e1b93fef3d7f7672e8d515eba846f42b924"
const to = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
const amount = decimalEVM.parseEther(10); // 10 DEL
const fromChainId = 75 // chain id (1 is ETH, 56 is BSC, 75 is DSC)
const toChainId = 1 // chain id (1 is ETH, 56 is BSC, 75 is DSC)
const serviceFee = await decimalEVM.getBridgeServiceFees(toChainId) // Get bridge service fees

const bridgeAddress = await decimalEVM.getDecimalContractAddress('bridge')
await decimalEVM.approveToken(tokenAddress, bridgeAddress, amount)

const result = await decimalEVM.bridgeTransferTokens(tokenAddress, to, amount, serviceFee, fromChainId, toChainId)

const encodedVM = '0x.....' // encodedVM received after bridgeTransferTokens
const unwrapWETH = false; // if you send WDEL from Ethreum to Decimal, you can set unwrapWETH = true, for receive DEL instead WDEL. Automatic unwrapping is available for DEL, ETH, BNB
const resultComplete = await decimalEVM.bridgeCompleteTransfer(toChainId, encodedVM, unwrapWETH)
```

### Get balance DEL, ETH, BNB
```js
const result = await decimalEVM.getBalance(address)
const result = await decimalEVM.getBalanceETH(address)
const result = await decimalEVM.getBalanceBNB(address)
```


## Checks

### Create checks DEL
```js
const latestBlock = await decimalEVM.getLatestBlock()
const dueBlock = latestBlock!.number + 200; // given the redeem to cash the check in the next 200 blocks

const countChecks = 5; // count of checks
const passwords = decimalEVM.getRandomPassword(countChecks, 15) // generating passwords with a length of 15

const amount = 2 // the amount for each check
const amountWei = decimalEVM.parseEther(amount) // the amount in wei for each check
const totalAmount = decimalEVM.parseEther(passwords.length * amount) //Calculating full amount of the charge to display full amount to user

const gas = await decimalEVM.createChecksDEL(passwords, amountWei, dueBlock, true)
const {tx, checks} = await decimalEVM.createChecksDEL(passwords, amountWei, dueBlock);
```

### Create checks Token (approve)
```js
const latestBlock = await decimalEVM.getLatestBlock()
const dueBlock = latestBlock!.number + 200; // given the redeem to cash the check in the next 200 blocks

const countChecks = 5; // count of checks
const passwords = decimalEVM.getRandomPassword(countChecks, 15) // generating passwords with a length of 15

const amount = 2 // the amount for each check
const amountWei = decimalEVM.parseEther(amount) // the amount in wei for each check
const totalAmount = decimalEVM.parseEther(passwords.length * amount) //Calculating full amount of the charge to approve and display full amount to user
const tokenAddress = "0xe1E885a848DC0c0867E119E7e80289f98e27256C"
const checksAddress = await decimalEVM.getDecimalContractAddress('checks') // get address checks contract

await decimalEVM.approveToken(tokenAddress, checksAddress, totalAmount) // approve total amount
const {tx, checks} = await decimalEVM.createChecksToken(passwords, amountWei, dueBlock, tokenAddress);
```

### Create checks Token (permit)
```js
const latestBlock = await decimalEVM.getLatestBlock()
const dueBlock = latestBlock!.number + 200; // given the redeem to cash the check in the next 200 blocks

const countChecks = 5; // count of checks
const passwords = decimalEVM.getRandomPassword(countChecks, 15) // generating passwords with a length of 15

const amount = 2 // the amount for each check
const amountWei = decimalEVM.parseEther(amount) // the amount in wei for each check
const totalAmount = decimalEVM.parseEther(passwords.length * amount) //Calculating full amount of the charge to approve and display full amount to user
const tokenAddress = "0xe1E885a848DC0c0867E119E7e80289f98e27256C"
const checksAddress = await decimalEVM.getDecimalContractAddress('checks') // get address checks contract

const sign = await decimalEVM.getSignPermitToken(tokenAddress, checksAddress, totalAmount) //get sign for permit
//const gas = await decimalEVM.createChecksToken(passwords, amountWei, dueBlock, tokenAddress, sign, true)  //get gas
const {tx, checks} = await decimalEVM.createChecksToken(passwords, amountWei, dueBlock, tokenAddress, sign);
```

### Redeem checks
```js
const passwords = [
  'password1234567890', //password for check 1
  'passwordQWERTYUIOP'  //password for check 2
]
const checks = [
  '0x6f0951dcc2e7c2a14e109d33f88fc3cc50cd5b4644a89f9b51b6b4ebce1b6c9f', //check 1
  '0x82f6cbb019188ed8f6be9f271a46f4edbb61d85d9c8ace6fa67e04ab42f33024' //check 2
]
const tx = await decimalEVM.redeemChecks(passwords, checks)
```


## Viewing functions

### Network

#### Get balance
```js
const address = "0x5c089e1b93fef3d7f7672e8d515eba846f42b924"
const amountWei = await decimalEVM.getBalance(address) // The result is provided in Wei format
const amountETH = decimalEVM.formatEther(amountWei);   // ETH format
```

### Token

#### Check Token exists
```js
const tokenAddress = "0x5c089e1b93fef3d7f7672e8d515eba846f42b924"
const result = await decimalEVM.checkTokenExists(tokenAddress)
```

#### Get address Token by symbol
```js
const symbol = "TKN"
const result = await decimalEVM.getAddressTokenBySymbol(symbol)
```

#### Get a commission for the specified symbol to create a new token
```js
const symbol = "TKN"
const result = await decimalEVM.getCommissionSymbol(symbol)
```

#### Calculate buy output
```js
// If you specify the number of DEL, you will calculate the number of tokens to buy tokens
const amountDel = decimalEVM.parseEther(10); // 10 DEL
const amountTokens = await decimalEVM.calculateBuyOutput(tokenAddress, amountDel)
```

#### Calculate buy input
```js
// If you specify the number of tokens, you will calculate the number of DEL to buy tokens
const amountTokens = decimalEVM.parseEther(10); // 10 tokens 
const amountDel = await decimalEVM.calculateBuyInput(tokenAddress, amountTokens)
```

#### Calculate Sell Input
```js
// If you specify the number of DEL, you will calculate the number of tokens to sell tokens
const amountDEL = decimalEVM.parseEther(10); // 10 DEL
const amountTokens = await decimalEVM.calculateSellInput(tokenAddress, amountDEL)
```

#### Get the number of DEL to send for the specified amount of tokens (for sell)
```js
// If you specify the number of tokens, you will calculate the number of DEL to sell tokens
const amountTokens = decimalEVM.parseEther(10); // 10 tokens 
const amountDEL = await decimalEVM.calculateSellOutput(tokenAddress, amountTokens)
```
    
#### Get signature for permit Token
```js
const spender = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // address of who will be allowed to spend amount
const amount = decimalEVM.parseEther(1);
const sign = await decimalEVM.getSignPermitToken(tokenAddress, spender, amount)
```

#### Get approved to spend of Token
```js
const result = await decimalEVM.allowanceToken(tokenAddress, owner, spender)
// the output example: true
```

#### Get balance of Token
```js
const result = await decimalEVM.balanceOfToken(tokenAddress, account)
```

#### Get supported interface Token
```js
const interfaceId = "0x01ffc9a7"
const result = await decimalEVM.supportsInterfaceToken(tokenAddress, interfaceId) 
```

### NFT 
#### Get type NFT (from subgraph)
```js
const result = await decimalEVM.getNftType(nftCollectionAddress)
 ```

#### Get type NFT (from contract)
```js
const result = await decimalEVM.getNftTypeFromContract(nftCollectionAddress)
 ```

#### Get approved to spend of DRC721
```js
const result = await decimalEVM.getApprovedNFT721(nftCollectionAddress, tokenId)
// the output example: 0x70997970c51812dc3a010c7d01b50e0d17dc79c8
 ```

#### Is approved for all NFT
```js
const result = await decimalEVM.isApprovedForAllNFT(nftCollectionAddress, owner, spender)
// the output example: true
 ```

#### Owner of DRC721
```js
const result = await decimalEVM.ownerOfNFT721(nftCollectionAddress, tokenId)
```

#### Get tokenURI of NFT
```js
const result = await decimalEVM.getTokenURINFT(nftCollectionAddress, tokenId)
```

#### Get allow mint of NFT
```js
const result = await decimalEVM.getAllowMintNFT(nftCollectionAddress)
```

#### Get balance of NFT
```js
const account = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"

// For DRC721
const result = await decimalEVM.balanceOfNFT(nftCollectionAddress, account)
// For DRC1155
const result = await decimalEVM.balanceOfNFT(nftCollectionAddress, account, tokenId)
```

#### Get supported interface NFT
```js
const interfaceId = "0x01ffc9a7"
const result = await decimalEVM.supportsInterfaceNFT(nftCollectionAddress, interfaceId) 
```

#### Get rate tokenId of DRC1155
```js
const tokenId = 0
const result = await decimalEVM.getRateNFT1155(nftCollectionAddress, tokenId)
```

#### Calculate amount reserve for repeat mint DRC1155
```js
const tokenId = 0
const quantity = 10 // 10 quantity for mint
const result = await decimalEVM.calcReserveNFT1155(nftCollectionAddress, tokenId, quantity)
```

#### Get signature for permit NFT
```js
const spender = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"; // address of who will be allowed to spend amount
const amount = decimalEVM.parseEther(1);

// for DRC721
const sign = await decimalEVM.getSignPermitDRC721(nftCollectionAddress, spender, tokenId)

// for DRC1155
//const sign = await decimalEVM.getSignPermitDRC1155(nftCollectionAddress, spender)
```

#### Get reserve NFT
```js
const tokenId = 0
const result = await decimalEVM.getReserveNFT(nftCollectionAddress, tokenId)
/* the output example:
{
  token: '0x0000000000000000000000000000000000000000',
  amount: '1000000000000000000',
  reserveType: 'DRC1155'
}
if token is 0x0000000000000000000000000000000000000000, then is DEL reserve
*/
```

#### Get status refundable the reserve after burning the NFT
```js
const result = await decimalEVM.getRefundableNFT(nftCollectionAddress)
```

#### Get supply tokenId of DRC1155
```js
const tokenId = 0
const result = await decimalEVM.getSupplyNFT1155(nftCollectionAddress, tokenId)
```


### Delegation

#### Get stakes by address
```js
const account = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
const result = await decimalEVM.getTokenStakesByMember(account) //TODO delete, not work
```

#### Get page stakes by address
```js
const account = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
const size = 1000
const offset = 0 // offset of viewed steaks
const result = await decimalEVM.getTokenStakesPageByMember(account, size, offset)
```

#### Get Token frozen stakes queue
```js
const result = await decimalEVM.getFrozenStakesQueueToken()
```

#### Get Token freeze time
```js
const result = await decimalEVM.getFreezeTimeToken()
/* the output example:
{
  "Withdraw": 2592000n,
  "Transfer": 604800n
}
*/
```

#### Get stake Token
```js
const result = await decimalEVM.getStakeToken(validator, delegator, tokenAddress)
```

#### Get stakeId Token
```js
const result = await decimalEVM.getStakeIdToken(validator, delegator, tokenAddress)
```

### Delegation NFT

#### Get stakes NFT by address
```js
const account = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
const result = await decimalEVM.getNFTStakesByMember(account)
```

#### Get page stakes NFT by address
```js
const account = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8"
const size = 1000
const offset = 0 // offset of viewed steaks
const result = await decimalEVM.getNFTStakesPageByMember(account, size, offset)
```

#### Get NFT frozen stakes queue
```js
const result = await decimalEVM.getFrozenStakesQueueNFT()
```

#### Get NFT freeze time
```js
const result = await decimalEVM.getFreezeTimeNFT()
/* the output example:
{
  "Withdraw": 2592000n,
  "Transfer": 604800n
}
*/
```

### Validator

#### Get validator status
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const getValidatorStatus = await decimalEVM.getValidatorStatus(validator)
```

#### Get validator is active
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const validatorIsActive = await decimalEVM.validatorIsActive(validator)
```

#### Get validator is member
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const validatorIsMember = await decimalEVM.validatorIsMember(validator)
```

## Bridge

### Get bridge service fees
```js
const serviceFee = await decimalEVM.getBridgeServiceFees(toChainId)
```

## Subgraph

#### Connect to Subgraph
```js
const { Subgraph, DecimalNetworks } = SDK;
const subgraph = new Subgraph(DecimalNetworks.testnet)

// In queries where `first` and `skip` is mentioned, you need to specify their value. `first` and `skip` parameter can be used to paginate
// The `first` argument must be between 0 and 1000
// The `skip` argument must be between 0 and 999999999
```

#### Get Decimal contracts
```js
const result = await subgraph.getDecimalContracts()
```


#### Get validators
```js
const result = await subgraph.getValidators()
```

### Validators

#### Get validator
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const result = await subgraph.getValidator(validator)
```

#### Get validator penalties
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const result = await subgraph.getValidatorPenalties(validator, first, skip)
```

#### Get validator penalties from blockNumber
```js
// You can see what penalties were at the time of the blockNumber
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const blockBumber = 7346728
const result = await subgraph.getValidatorPenaltiesFromBlock(validator, blockBumber, first, skip)
```

#### Get sum amount to penalty
```js
const result = await subgraph.getSumAmountToPenalty()
```

### Tokens

#### Get Tokens
```js
const result = await subgraph.getTokens(first, skip)
```

#### Get Tokens by owner
```js
const owner = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getTokensByOwner(owner, first, skip)
```

#### Get Token by symbol
```js
const symbol = 'SBT_TOKEN'
const result = await subgraph.getTokenBySymbol(symbol)
```

#### Get Token by address
```js
const tokenAddress = "0x24804c5a0da7a3e1a779b710647428795291b82a"
const result = await subgraph.getTokenByAddress(tokenAddress)
```

#### Get Token balances by account
```js
const account = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getAddressBalances(account, first, skip)
```

### Delegation Token

#### Get Token stakes
```js
const result = await subgraph.getStakes(first, skip)
```

#### Get Token stakes by delegator
```js
const delegator = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getStakesByAddress(delegator, first, skip)
```

#### Get Token stakes by validator
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const result = await subgraph.getStakesByValidotor(validator, first, skip)
```

#### Get Token transfer stakes
```js
const result = await subgraph.getTransferStakes(first, skip)
```

#### Get Token transfer stakes by delegator
```js
const delegator = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getTransferStakesByAddress(delegator, first, skip)
```

#### Get Token withdraw stakes
```js
const result = await subgraph.getWithdrawStakes(first, skip)
```

#### Get Token withdraw stakes by delegator
```js
const delegator = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getWithdrawStakesByAddress(delegator, first, skip)
```


### NFT

#### Get NFT Collections
```js
const result = await subgraph.getNftCollections(first, skip)
```

#### Get NFT Collections
```js
const owner = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getNftCollectionsByCreator(owner, first, skip)
```

#### Get NFT Collection by address NFT Connection
```js
const nftCollectionAddress = "0x15ea2325268864227d7eaf6a4b76cafbeec3050d"
const result = await subgraph.getNftCollectionByAddress(nftCollectionAddress)
```

#### Get NFT Collection type
```js
const nftCollectionAddress = "0x15ea2325268864227d7eaf6a4b76cafbeec3050d"
const result = await subgraph.getNftCollectionType(nftCollectionAddress)
```

#### Get NFTs
```js
const result = await subgraph.getNfts(first, skip)
```

#### Get NFTs by NFT Collection address
```js
const nftCollectionAddress = "0x15ea2325268864227d7eaf6a4b76cafbeec3050d"
const result = await subgraph.getNftsByCollection(nftCollectionAddress, first, skip)
```

#### Get NFT balances by account
```js
const account = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getAddressBalancesNfts(account, first, skip)
```

#### Get NFT balances by account and by NFT Collection address
```js
const account = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const nftCollectionAddress = "0x15ea2325268864227d7eaf6a4b76cafbeec3050d"
const result = await subgraph.getAddressBalancesNftsByCollection(account, nftCollectionAddress, first, skip)
```

#### Get NFT by NFT Collection address and by tokenId
```js
const nftCollectionAddress = "0x15ea2325268864227d7eaf6a4b76cafbeec3050d"
const tokenId = 0
const result = await subgraph.getNftByCollectionAndTokenId(nftCollectionAddress, tokenId)
```

### Delegation NFT

#### Get NFT stakes
```js
const result = await subgraph.getNFTStakes(first, skip)
```

#### Get NFT stakes by delegator
```js
const account = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getNFTStakesByAddress(account, first, skip)
```

#### Get NFT stakes by validator
```js
const validator = "0x75BF4906ae6d68A013FD1a6F9D04297cd463222d"
const result = await subgraph.getNFTStakesByValidotor(validator, first, skip)
```

#### Get NFT transfer stakes
```js
const result = await subgraph.getTransferNFTStakes(first, skip)
```

#### Get Token transfer stakes by delegator
```js
const account = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getTransferNFTStakesByAddress(account, first, skip)
```

#### Get Token withdraw stakes
```js
const result = await subgraph.getWithdrawNFTStakes(first, skip)
```

#### Get Token withdraw stakes by delegator
```js
const account = "0x35119df12afdf848b7ef2536af2411ab0a611c45"
const result = await subgraph.getWithdrawNFTStakesByAddress(account, first, skip)
```

### Bridge

#### Get bridge tokens
```js
const result = await subgraph.getBridgeTokens(first, skip)
```

#### Get bridge tokens by token address
```js
const result = await subgraph.getBridgeTokenByAddress(address)
```

#### Get bridge tokens by token symbol
```js
const result = await subgraph.getBridgeTokenBySymbol(symbol)
```

#### Get bridge transfers
```js
const result = await subgraph.getBridgeTransfers(first, skip)
```

#### Get bridge transfers by `from` address
```js
const result = await subgraph.getBridgeTransfersByFrom(address, first, skip)
```

#### Get bridge transfers by `to` address
```js
const result = await subgraph.getBridgeTransfersByTo(address, first, skip)
```

#### Get bridge transfers by `token` address
```js
const result = await subgraph.getBridgeTransfersByToken(address, first, skip)
```

### Multisig

#### Get multisig`s addresses
```js
const result = await subgraph.getMultisigWallets(1000, 0)
```

#### Get multisig`s addresses by participant
```js
const participant = "0x35119df12afdf848b7ef2536af2411ab0a611c45" // participant account address
const result = = await subgraph.getMultisigWalletsByParticipant(participant, first, skip)
```

#### Get multisig`s addresses by participant
```js
const participant = "0x35119df12afdf848b7ef2536af2411ab0a611c45" // participant account address
const result = = await subgraph.getMultisigWalletsByParticipant(participant, first, skip)
```

#### Get approve transactions and approvers of multisig by nonce
```js
const addressMultisig = "0x5502b6e571d3a8a175b7c0f49b0ed1704538b410"
const nonce = 0
const {transactions, approvers} = await subgraph.getMultisigApproveTransactionsByMultisigAddressAndNonce(addressMultisig, nonce, first, skip)
```

#### Get expired approve transactions and approvers of multisig by nonce
```js
const addressMultisig = "0x5502b6e571d3a8a175b7c0f49b0ed1704538b410"
const nonce = 2 //specify the current nonce, to return approvers txs with expired nonce
const {transactions, approvers} = await subgraph.getMultisigApproveTransactionsByMultisigAddressAndNonceNot(addressMultisig, nonce, first, skip)
```

## IPFS

### IPFS for tokens

#### Example: Upload Token from filesystem (node js)
```js
const filePath = 'C:/Users/User/Desktop/unnamed.png'
const buffer = fs.readFileSync(filePath);

const filename = filePath
const result = await decimalEVM.uploadTokenBufferToIPFS(buffer, filename)
/* example response
{
  image: 'QmRnq6DxnG2w8VPpLvovwYTZDVQVqDj6Zcnpbo8oJMGx41'
}
*/
```

#### Example: Upload Token from url (node js)
```js
const uri = `https://cdn-icons-png.flaticon.com/512/7977/7977062.png`
const buffer = await fetch(uri).then((res) => res.buffer());

const filename = uri
const result = await decimalEVM.uploadTokenBufferToIPFS(buffer, filename)
/* example response
{
  image: 'QmRnq6DxnG2w8VPpLvovwYTZDVQVqDj6Zcnpbo8oJMGx41'
}
*/
```

#### Example: Upload Token from input (browser)
```js
var input = document.querySelector('input[type="file"]')

var data = new FormData()
data.append('uploading_files', input.files[0])

const result = await decimalEVM.uploadTokenFormToIPFS(data)
/* example response
{
  image: 'QmRnq6DxnG2w8VPpLvovwYTZDVQVqDj6Zcnpbo8oJMGx41'
}
*/
```

#### Example: Upload Token from url (browser)
```js
const imageBlob = await fetch(uri).then((res) => res.blob());

var data = new FormData()
data.append('uploading_files', imageBlob)

const result = await decimalEVM.uploadTokenFormToIPFS(data)
/* example response
{
  image: 'QmRnq6DxnG2w8VPpLvovwYTZDVQVqDj6Zcnpbo8oJMGx41'
}
*/
```

### IPFS for NFTs

#### Example: Upload NFT from filesystem (node js)
```js
const filePath = 'C:/Users/User/Desktop/unnamed.png'
const buffer = fs.readFileSync(filePath);

const filename = filePath
const name = 'NameNFT23'
const description = 'Description NFT2'
const result = await decimalEVM.uploadNFTBufferToIPFS(buffer, filename, name, description)
/* example response
{
  file_cid_media: 'Qmaw2FvZamk5AsEBfbe3bz3c9yc7mfReRpmVfiMJMxs93A',
  file_cid_meta: 'QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk'     // this cid is needed for contractURI or tokenURI
}
*/
```

#### Example: Upload NFT from url (node js)
```js
const uri = `https://example.com/image.png`
const imageBlob = await fetch(uri).then((res) => res.blob());

const buffer = Buffer.from(await imageBlob.arrayBuffer());

const filename = uri
const name = 'NameNFT23'
const description = 'Description NFT2'
const result = await decimalEVM.uploadNFTBufferToIPFS(buffer, filename, name, description)
/* example response
{
  file_cid_media: 'Qmaw2FvZamk5AsEBfbe3bz3c9yc7mfReRpmVfiMJMxs93A',
  file_cid_meta: 'QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk'     // this cid is needed for contractURI or tokenURI
}
*/
```

#### Example: Upload NFT from input (browser)
```js
const name = 'NameNFT23'
const description = 'Description NFT2'

const bytes = new TextEncoder().encode(JSON.stringify({
            "name": name,
            "description": description,
            "image": ""
        }));
const blobMetadata = new Blob([bytes], {
    type: "application/json"
});

var input = document.querySelector('input[type="file"]')

var data = new FormData()
data.append('uploading_files', blobMetadata)
data.append('uploading_files', metadataBlob, "metadata.json")

const result = await decimalEVM.uploadNFTFormToIPFS(data)
/* example response
{
  file_cid_media: 'Qmaw2FvZamk5AsEBfbe3bz3c9yc7mfReRpmVfiMJMxs93A',
  file_cid_meta: 'QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk'     // this cid is needed for contractURI or tokenURI
}
*/
```

#### Example: Upload NFT from url (browser)
```js
const name = 'NameNFT23'
const description = 'Description NFT2'
const metadataBlob = await decimalEVM.getBlobMetadata(name, description)

const imageBlob = await fetch(uri).then((res) => res.blob());

var data = new FormData()
data.append('uploading_files', imageBlob)
data.append('uploading_files', metadataBlob)

const result = await decimalEVM.uploadNFTFormToIPFS(data)
/* example response
{
  file_cid_media: 'Qmaw2FvZamk5AsEBfbe3bz3c9yc7mfReRpmVfiMJMxs93A',
  file_cid_meta: 'QmShfT7LRyjN4ZFNyGAK5YftGU7sa9xqTTukzPiYPsrLFk'     // this cid is needed for contractURI or tokenURI
}
*/
```

#### Get url ipfs from cid
```js
const cid = "Qmaw2FvZamk5AsEBfbe3bz3c9yc7mfReRpmVfiMJMxs93A"
const result = decimalEVM.getUrlFromCid(cid)
/* example result
 https://testnet-nft-ipfs.decimalchain.com/ipfs/Qmaw2FvZamk5AsEBfbe3bz3c9yc7mfReRpmVfiMJMxs93A
*/
```

## Helper function

#### Convert ETH to wei
```js
const amountETH = 1   // amount ETH (string | number | bigint)
const amountWei = decimalEVM.parseEther(amountETH);    // 1000000000000000000 wei
```

#### Convert Wei to ETH
```js
const amountWei = BigInt(10000000000000000000000) // amount Wei (string | number | bigint)
const amountETH = decimalEVM.formatEther(amountWei);   // 10000 ETH

//const amountWei = '20000000000000' // amount Wei (string | number | bigint)
//const amountETH = decimalEVM.formatEther(amountWei);   // 0.00002 ETH
```

#### Address to a checksum address
```js
const address = decimalEVM.getAddress("0xd115bffabbdd893a6f7cea402e7338643ced44a6") // 0xD115BFFAbbdd893A6f7ceA402e7338643Ced44a6
```

#### Get latest block
```js
const block = await decimalEVM.getLatestBlock()
```

#### Get fee data
```js
const feeData = await decimalEVM.getFeeData()
```

#### Get instance Decimal contract
```js
// You can call to the contract you need using a instance of the contract
// Example
const tokenCenter = decimalEVM.getDecimalContract('token-center')
const tokenAddress = "0x5c089e1b93fef3d7f7672e8d515eba846f42b924"
const result = await tokenCenter.isTokenExists(tokenAddress)
/* Available contracts
  contract-center
  token-center
  nft-center
  delegation
  delegation-nft
  master-validator
*/
```

## Contracts function

#### Verify contract
```js
const contractCode = `...`
const contractAddress = '0x21786df4741ab50cdfec064ad9aeef84898a86a4'

const compiler = 'solc-linux-amd64-v0.8.20+commit.a1b79de6'
const optimizer = "true"
const runs = "100"
const evm_version = "paris"
const contract = await decimalEVM.verifyСontract(contractAddress, contractCode, compiler, optimizer, runs, evm_version)
```

#### Call to verify contract
```js
  const contractAddress = '0x3c546e3eb206c0be7d3c9b85c81cd98700fd3db6'
  const contract = await decimalEVM.connectToContract(contractAddress)
  const owner = await contract.call("owner()")
  console.log(owner)
```

#### Call write fuction to verify contract
```js
const contractAddress = '0x3c546e3eb206c0be7d3c9b85c81cd98700fd3db6'
const contract = await decimalEVM.connectToContract(contractAddress)

const newToken: any = {
    creator: decimalWallet.evmAddress,
    symbol: 'COStest'+Math.floor(Math.random() * 10000),
    name: 'CosmosName',
    crr: 50,
    initialMint: decimalEVM.parseEther(1000),
    minTotalSupply: decimalEVM.parseEther(1),
    maxTotalSupply: decimalEVM.parseEther(5000000),
    identity: 'asd',
}
const reserve = decimalEVM.parseEther(1250);

const options = {
    ...await contract.getDefaultOptions(),
    value: reserve,
}

const tx = await contract.call("createToken", newToken, options)
```

#### Send signed transaction
```js
const newToken: any = {
    creator: decimalWallet.evmAddress,
    symbol: 'COStest'+Math.floor(Math.random() * 10000),
    name: 'CosmosName',
    crr: 50,
    initialMint: decimalEVM.parseEther(1000),
    minTotalSupply: decimalEVM.parseEther(1),
    maxTotalSupply: decimalEVM.parseEther(5000000),
    identity: 'asd',
}
const reserve = decimalEVM.parseEther(1250);

const contractAddress = await decimalEVM.getDecimalContractAddress('token-center')

const contract = await decimalEVM.connectToContract(contractAddress, tokenCenterAbi)

const options = {
    ...await contract.getDefaultOptions(),
    value: reserve,
}

const populateTransaction = await contract.populateTransaction("createToken", newToken, options)
populateTransaction.chainId = 20202020 //for ethres 5.5.1

const signTransaction = await contract.signTransaction(populateTransaction)

//send signed populateTransaction
const sendTransaction = await contract.sendSignedTransaction(signTransaction)
console.log(sendTransaction)

// or send just populateTransaction
//const sendTransaction = await contract.sendTransaction(populateTransaction)
//console.log(sendTransaction)
```