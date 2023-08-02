const { network, ethers } = require("hardhat");


module.exports.default = async({deployments,getNamedAccounts})=>{
    const {deploy,log} = deployments;
    const {deployer} = await getNamedAccounts();

    chainId = network.config.chainId

    log('***********Deploying Contract************')
    const fundme = await deploy("FundMe",{
        from: deployer,
        args: [],
        log: true,
    })
    

    log(`Contract deployed at ${fundme.address}`)
    if (network.config.chainId == 11155111) {
        await verify(await fundme.address, [])
      }
 

}