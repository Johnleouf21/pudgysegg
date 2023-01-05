require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const { ALCHEMY, ALCHEMY_TEST, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      }
    }
  },
  paths: {
    artifacts: './artifacts'
  },
  networks: {
    mainnet: {
      url: ALCHEMY,
      accounts: [`0x${PRIVATE_KEY}`]
    },
    goerli: {
      url: ALCHEMY_TEST,
      accounts: [`0x${PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: {
      mainnet: ETHERSCAN_API_KEY,
      goerli: ETHERSCAN_API_KEY
    } 
  }
}