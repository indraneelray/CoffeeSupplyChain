const HDWalletProvider = require('truffle-hdwallet-provider');

const infuraKey = "680007c4bb594150a8e83badcc873c24";

const mnemonic = "token owner odor angry faint fitness fat sleep glide taste crew shrimp";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
  }
};

