# Supply chain & data auditing

This repository containts an Ethereum DApp that demonstrates a Supply Chain flow between a Seller and Buyer. The user story is similar to any commonly used supply chain process. A Seller can add items to the inventory system stored in the blockchain. A Buyer can purchase such items from the inventory system. Additionally a Seller can mark an item as Shipped, and similarly a Buyer can mark an item as Received.

## Rinkeby contract address

https://rinkeby.etherscan.io/address/0x2ba67cadea0fee648dc3c01452a86fdb932a0ded

```
Deploying 'SupplyChain'
   transaction hash:    0xbf063869b2b7e968285e0b7a0cf699c41c429ace9bf3c3ad7d80905f9e8bbc77
   Blocks: 0            Seconds: 12
   contract address:    0x2ba67cAdEA0Fee648dC3C01452a86fdB932a0DEd
   block number:        6426526
   block timestamp:     1588553322
   account:             0x860aFa5Ca9282fF145846DF9ED68C0fbda3ACa4A
   balance:             10.405828787
   gas used:            3063480 (0x2ebeb8)
   gas price:           10 gwei
   value sent:          0 ETH
   total cost:          0.0306348 ETH
```

## Node Version
```
node -v
v10.20.1
```

## Truffle Version
```
truffle -v
Truffle v5.1.24 - a development framework for Ethereum
```

## web3 version number
```
npm view web3 version
1.2.7
```
## Activity Diagram

![truffle test](uml/activityDiagram.png)

## Sequence Diagram

![truffle test](uml/SequenceDiagram.png)

## State Diagram

![truffle test](uml/StateDiagram.png)

## Data Modeling Diagram

![truffle test](uml/DataModelDiagram.png)

The DApp User Interface when running looks like...

![truffle test](images/ftc_product_overview.png)

![truffle test](images/ftc_farm_details.png)

![truffle test](images/ftc_product_details.png)

![truffle test](images/ftc_transaction_history.png)


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please make sure you've already installed ganache-cli, Truffle and enabled MetaMask extension in your browser.

```
Give examples (to be clarified)
```

### Installing

A step by step series of examples that tell you have to get a development env running

Clone this repository:

```
git clone https://github.com/udacity/nd1309/tree/master/course-5/project-6
```

Change directory to ```project-6``` folder and install all requisite npm packages (as listed in ```package.json```):

```
cd project-6
npm install
```

Launch Ganache:

```
ganache-cli -m "spirit supply whale amount human item harsh scare congress discover talent hamster"
```

Your terminal should look something like this:

![truffle test](images/ganache-cli.png)

In a separate terminal window, Compile smart contracts:

```
truffle compile
```

Your terminal should look something like this:

![truffle test](images/truffle_compile.png)

This will create the smart contract artifacts in folder ```build\contracts```.

Migrate smart contracts to the locally running blockchain, ganache-cli:

```
truffle migrate
```

Your terminal should look something like this:

![truffle test](images/truffle_migrate.png)

Test smart contracts:

```
truffle test
```

All 10 tests should pass.

![truffle test](images/truffle_test.png)

In a separate terminal window, launch the DApp:

```
npm run dev
```

## Built With

* [Ethereum](https://www.ethereum.org/) - Ethereum is a decentralized platform that runs smart contracts
* [IPFS](https://ipfs.io/) - IPFS is the Distributed Web | A peer-to-peer hypermedia protocol
to make the web faster, safer, and more open.
* [Truffle Framework](http://truffleframework.com/) - Truffle is the most popular development framework for Ethereum with a mission to make your life a whole lot easier.


## Authors

See also the list of [contributors](https://github.com/your/project/contributors.md) who participated in this project.

## Acknowledgments

* Solidity
* Ganache-cli
* Truffle
* IPFS

