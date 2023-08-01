require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("hardhat-deploy");


/** @type import('hardhat/config').HardhatUserConfig */

const privateKey = process.env.pk
const rpc = process.env.rpc
const api_key = process.env.api_key

module.exports = {
  solidity: "0.8.18",
  networks:{
    hardhat:{
      chainId:31337,
      blockConfirmations:1
    },
    sepolia :{
      url: rpc,
      accounts: [privateKey],
      chainId: 11155111,
      blockConfirmations : 6
    },
  },
  etherscan: {
    apiKey: api_key,
  },
  namedAccounts: {
    deployer: {
        default: 0,
    },
    signer: {
        default: 1,
    },
    buyer: {
        default: 2,
    },
},
};
