const { ethers, network } = require("hardhat");
const {verify} = require("../utils/verify")

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  const fundme = await ethers.deployContract("FundMe");

  console.log("Token address:", await fundme.getAddress());
  if (network.config.chainId == 11155111) {
    await verify(await fundme.getAddress(), [])
  }
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });