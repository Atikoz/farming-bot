# Usage

## Connecting to Decimal Blockchain

You can provide your own Decimal node address to send transactions to the network, or you can use our gateways to do this and much more. Gateway URLs are provided below.

The following code can be used to generate **mnemonic** or use your mnemonic

```js
const bip39 = require("bip39");
const mnemonic = bip39.generateMnemonic();
```


## Example: Send a transaction

```js
import { Wallet, Decimal, DecimalNetworks } from 'dsc-js-sdk' 

// connect decimal sdk to gateway or node
const decimal = await Decimal.connect(DecimalNetworks.devnet);

// get decimal wallet from mnemonic and set it to decimal instance
const decimalWallet = new Wallet(mnemonic);
decimal.setWallet(decimalWallet);

// prepare message
const msgSendCoin = {
  to: 'd01epqerywtrgalfl7qytgplptatt776qd65p64w6',
  coin: 'del',
  amount: '300'
}

// set transaction options
const options = {
  feeCoin: "", // network native coin by default (del/tdel)
  message: "memo",
  txBroadcastMode: "sync",
}

// create transaction sender
const sender = await decimal.transactionSender(); 
// send transaction
const res = await sender.sendCoin(msgSendCoin, options);
```

### Different modes of sending transaction
```js
...
// using our gateway to send transactions - the simpliest way
const decimal = await Decimal.connect(DecimalNetworks.devnet);

// pass the second parameter to specify mode (by default === false)
// in this case you will be using our node
const isNodeDirectMode = true;
const decimal = await Decimal.connect(DecimalNetworks.devnet, isNodeDirectMode);

// advanced users can use their own node rest and rpc endpoints
const nodeEnpoints = {
  rest: 'http://127.0.0.1:1317',
  rpc: 'http://127.0.0.1:26657'
}
const isNodeDirectMode = true;
const decimal = await Decimal.connect(DecimalNetworks.devnet, isNodeDirectMode, nodeEnpoints);
...
```

## Transaction messages 

### Validator

#### Delegate coins
```js
const msg = {
  validatorAddress: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // validator address
  coin: "del", // coin denom
  stake: "200", // amount to delegate
}
const res = await sender.delegate(msg, options);
```

#### Unbond coins
```js
const msg = {
  validatorAddress: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // validator address
  coin: "del", // coin denomination
  stake: "200", // amount to unbond
}
const res = await sender.unbond(msg, options);
```

#### Redelegate coins
```js
const msg = {
  validatorFrom: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // source validator address 
  validatorTo: "d0valoper14elhyzmq95f98wrkvujtsr5cyudffp6qwyerml", // destination validator address
  coin: "del", // coin denomination
  stake: "200", // amount to redelegate
}
const res = await sender.redelegate(msg, options);
```

#### Delegate nft
```js
const msg = {
  validatorAddress: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // validator address
  nftId: "1bae7edab0ed10101a5c68e04625a082deb9c2674da7f15b5acc6bcaa426be8b", // id of nft token
  subTokenIds: [1, 2, 3], // array of subtokens to delegate
}
const res = await sender.delegateNft(msg, options);
```

#### Unbond nft
```js
const msg = {
  validatorAddress: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // validator address
  nftId: "1bae7edab0ed10101a5c68e04625a082deb9c2674da7f15b5acc6bcaa426be8b", // id of nft token
  subTokenIds: [4, 5], // array of subtokens to unbond
}
const res = await sender.unbondNft(msg, options);
```

#### Redelegate nft
```js
const msg = {
  validatorFrom: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // source validator address 
  validatorTo: "d0valoper14elhyzmq95f98wrkvujtsr5cyudffp6qwyerml", // destination validator address
  nftId: "1bae7edab0ed10101a5c68e04625a082deb9c2674da7f15b5acc6bcaa426be8b", // id of nft token
  subTokenIds: [7], // array of subtokens to redelegate
}
const res = await sender.redelegateNft(msg, options);
```

#### Create validator
```js
const msg = {
  rewardAddress: 'd01fatzsagt96pfglxlq245th252mv3neckg3cu3c', // address to receive rewards
  coin: 'del', // coin denomination
  stake: '10', // amount of initial stake
  pubKey: 'JRlv38BXuD1TvWQJ9ic1KHr8PzuOITZH3rD8Zm0Vj3Y=', // public key (base64 encoded string)
  commission: '10', // percent of validator commission
  description: {
    moniker: 'my-node-123', // name of validator
    identity: '', // gravatar hash to show avatar
    website: 'hello.ru', // website of validator
    securityContact: 'test@test.com', // email of validator
    details: 'details node', // some details about validator
  },
}
const res = await sender.createValidator(msg, options);
```

#### Edit validator
```js
const msg = {
  rewardAddress: 'd01fatzsagt96pfglxlq245th252mv3neckg3cu3c', // address to receive rewards
  description: {
    moniker: 'my-node-123', // name of validator
    identity: '', // gravatar hash to show avatar
    website: 'hello.ru', // website of validator
    securityContact: 'test@test.com', // email of validator
    details: 'details node', // some details about validator
  },
}
const res = await sender.editValidator(msg, options);
```

#### Set validator online
```js
const msg = {
  validator: 'd01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd', // validator address
}
const res = await sender.setOnline(msg, options);
```

#### Set validator offline
```js
const msg = {
  validator: 'd01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd', // validator address
}
const res = await sender.setOffline(msg, options);
```

### Multisig

#### Create transaction (Send coins)
```js
// message of transaction to create
const msgSendCoin = {
  to: 'd01epqerywtrgalfl7qytgplptatt776qd65p64w6',
  coin: 'del',
  amount: '300'
}
// message of main transaction (creation)
const msg = {
  from: 'd01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd', // multisig address
  type: txTypesNew.COIN_SEND, // looks like "/decimal.coin.v1.MsgSendCoin"
  value: msgSendCoin,
}
const res = await sender.multisigCreateTx(msg, options);
```

#### Sign transaction
```js
const msg: clientMultisigSignTx = {
  txId: 'dxmstx1d2hnukkq70vj50lykepzzm28xgl3qecung5uvr', // created transcation id
}
const res = await sender.multisigSignTx(msg, options);
```

### Legacy

#### Request to return legacy
```js
const res = await decimal.requestLegacy(); // try to get your legacy

/* the output of res, if you have no legacy
   { message: 'Account have no legacy record' }
*/
```

### EVM Contract

#### Get instance contract
```js
// Work only with verification contract
const evm = await decimal.getContract('0x7d398c1076d8666679e2e5ef794f91519bf15133'); // try to contract data

/* 
the return instance of Contract with ABI-Json and method
for execute direct action for contract user evm.contract
user direct action evm.call(action, args) - this is for get contract data and customize data 
user direct action evm.send(action, args) - this is for send transactions and customize data


example: 
await evm.call("name")
await evm.call("balanceOf", "0x7d398c1076d8666679e2e5ef794f91519bf15133")

const action = await evm.send('mint', '0x444532f6bdd4fd087e36bfa0c9c359e92b1e0e74', 'test', 'https://image.io/images/image.png')
*/
```


## Api calls

### Validator

#### Get stakes
```ts
// enums allowed only in TypeScript
enum DelegationStatus {
  delegated = "delegated",
  undelegating = "undelegating",
  redelegating = "redelegating",
}

const address = decimalWallet.address;

/* 
or custom address: const address = 'd01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd'; 
*/

const res = await decimal.getStakesByAddress(address, DelegationStatus.delegated); // or simply "delegated"

/* the output example for delegated/undelegating:
[
  {
    "validatorId": 1,
    "validator": {
      "moniker": "Validator Alpha",
      "address": "d0valoper1yvgq6uh35a395hexhxcde2zfpwwafzpa7dtezu",
      "identity": "" // should be some base64 srtring or gravatar
    },
    "stakes": [
      {
        "amount": "100000000000000000000",
        "baseAmount": "100000000000000000000",
        "unbondAmount": null,
        "unbondBaseAmount": null,
        "coinDenom": "del"
      }
    ]
  }
]
*/

/* the output example for redelegating:
[
  {
    "validatorId": 1,
    "validator": {
      "moniker": "Validator Alpha",
      "address": "d0valoper1yvgq6uh35a395hexhxcde2zfpwwafzpa7dtezu",
      "identity": "" // should be some base64 srtring or gravatar
    },
    "stakes": [
      {
        "amount": "30000000000000000000",
        "baseAmount": "30000000000000000000",
        "unbondAmount": "0",
        "unbondBaseAmount": "0",
        "redelegatedAmount": "10000000000000000000",
        "redelegatedBaseAmount": "10000000000000000000",
        "coinDenom": "del",
        "toValidator": {
          "moniker": "Validator Beta",
          "address": "d0valoper1wyhcct0rqvwwwg37a95ujdfhyu6swlq4va6hjv",
          "identity": "" // should be some base64 srtring or gravatar
        }
      }
    ]
  }
]
*/

```

#### Get nft stakes
```ts
// enums allowed only in TypeScript
enum DelegationStatus {
  delegated = "delegated",
  undelegating = "undelegating",
  redelegating = "redelegating",
}

const address = decimalWallet.address;

/* 
or custom address: const address = 'd01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd'; 
*/

const res = await decimal.getNftStakesByAddress(address, DelegationStatus.delegated); // or simply "delegated"

/* the output example for delegated/undelegating:
[
  {
    "validatorId": 2,
    "validator": {
      "moniker": "Validator Beta",
      "address": "d0valoper1wyhcct0rqvwwwg37a95ujdfhyu6swlq4va6hjv",
      "identity": "" // should be some base64 srtring or gravatar
    },
    "stakes": [
      {
        "nftId": "9087bc42f5b9e56ec917426ae97aa5efe8d63e5c",
        "nftCollection": "Some collection",
        "tokenUri": "https://devnet-nft.decimalchain.com/api/nfts/lbZ4fgfS2XD66sMJkohy1LIxMnFXmjyL",
        "quantity": "221000000000000000000",
        "unbondQuantity": null, 
        "coinDenom": "del",
        "nftReserve": [
          {
            "subTokenId": 1,
            "reserve": "12000000000000000000",
            "status": "undelegating"
          }
        ],
        "id": 100,
        "slug": "lbZ4fgfS2XD66sMJkohy1LIxMnFXmjyL",
        "headline": "TeperTeper",
        "description": "TeperTeperTeper",
        "misc": {
          "coverHash": "14a65e779be03cc75c6f02bd3c7594c4b6dd8b8b",
          "coverPath": "lbZ4fgfS2XD66sMJkohy1LIxMnFXmjyL_cover_2fcab.webp",
          "assetExtension": "png",
          "coverExtension": "webp"
        },
        "cover": "covers/lbZ4fgfS2XD66sMJkohy1LIxMnFXmjyL_cover_2fcab.webp",
        "status": "active",
        "isPrivate": false,
        "createdAt": "2022-11-01T11:32:57.066Z",
        "updatedAt": "2022-11-01T11:32:57.066Z"
      }
    ]
  }
]
*/

/* the output example for redelegating:
[
  {
    "validatorId": 1,
    "validator": {
      "moniker": "Validator Alpha",
      "address": "d0valoper1yvgq6uh35a395hexhxcde2zfpwwafzpa7dtezu",
      "identity": "" // should be some base64 srtring or gravatar
    },
    "stakes": [
      {
        "nftId": "d5b498df14e6477718c4e57ebdfc9651a0fe867b",
        "nftCollection": "Some collection",
        "coinDenom": "del",
        "tokenUri": "https://devnet-nft.decimalchain.com/api/nfts/WqjYbqBFLFwV4EaIN7dNuYPJuOoI58jF",
        "redelegatingQuantity": "2000000000000000000",
        "toValidator": {
          "moniker": "Validator Gamma",
          "address": "d0valoper1awcpcet7d6yd0lzsqnamrfhchgvkpujg3s4c33",
          "identity": "" // should be some base64 srtring or gravatar
        },
        "nftReserve": [
          {
            "subTokenId": 2,
            "reserve": "2000000000000000000",
            "status": "redelegating"
          }
        ],
        "id": 101,
        "slug": "WqjYbqBFLFwV4EaIN7dNuYPJuOoI58jF",
        "headline": "Ftreeer2",
        "description": "FtreeerFtreeer",
        "misc": {
          "coverHash": "0a516fef04258228bb5e5c0fb94cd2e95e5f3909",
          "coverPath": "WqjYbqBFLFwV4EaIN7dNuYPJuOoI58jF_cover_37be6.webp",
          "assetExtension": "jpg",
          "coverExtension": "webp"
        },
        "cover": "covers/WqjYbqBFLFwV4EaIN7dNuYPJuOoI58jF_cover_37be6.webp",
        "status": "active",
        "isPrivate": false,
        "createdAt": "2022-11-01T11:34:49.244Z",
        "updatedAt": "2022-11-01T11:34:49.244Z"
      }
    ]
  }
]
*/

```

<!-- #### Cancel unbonding coins
```js
const msg = {
  validatorAddress: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // validator address
  coin: "del", // coin denomination
  stake: "200", // amount of the coin to cancel from unbonding
  creationHeight: 2352, // number of the block at which undelegation was beginned
}
const res = await sender.cancelUnbonding(msg, options);
``` -->
<!-- #### Cancel redelegation coins
```js
const msg = {
  validatorFrom: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // source validator address 
  validatorTo: "d0valoper14elhyzmq95f98wrkvujtsr5cyudffp6qwyerml", // destination validator address
  coin: "del", // coin denomination
  stake: "200", // amount of the coin to cancel from redelegation
  creationHeight: 2352, // number of the block at which redelegation was beginned
}
const res = await sender.cancelRedelegation(msg, options);
``` -->


<!-- #### Cancel unbonding nft
```js
const msg = {
  validatorAddress: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // validator address
  nftId: "1bae7edab0ed10101a5c68e04625a082deb9c2674da7f15b5acc6bcaa426be8b", // id of nft token
  subTokenIds: [4, 5], // array of subtokens to cancel from unbonding
  creationHeight: 2352, // number of the block at which undelegation was beginned
}
const res = await sender.cancelUnbondingNft(msg, options);
``` -->

<!-- #### Cancel redelegation nft
```js
const msg = {
  validatorFrom: "d01ykrttqa27eruxt3ve5ym27qq66r4qssgqthpcd", // source validator address 
  validatorTo: "d0valoper14elhyzmq95f98wrkvujtsr5cyudffp6qwyerml", // destination validator address
  nftId: "1bae7edab0ed10101a5c68e04625a082deb9c2674da7f15b5acc6bcaa426be8b", // id of nft token
  subTokenIds: [7], // array of subtokens to cancel from redelegation
  creationHeight: 2352, // number of the block at which redelegation was beginned
}
const res = await sender.cancelRedelegationNft(msg, options);
``` -->