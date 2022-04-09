const path = require("path");
const MNEMONIC = "point spoon scissors dawn cheap insect add poet such leopard boat have";
const HDWalletProvider = require("@truffle/hdwallet-provider");
const AccountIndex = 0;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "src/abi"),
  networks: {
    develop: {
      port: 7545,
      host: "127.0.0.1",
      network_id: 1337
    }, 
    ganache_local: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "http://127.0.0.1:7545", AccountIndex);
      },
      network_id: 1337
    }
  }, 
  compilers: {
    solc: {
      version:"0.5.16"
    }
  }
};
