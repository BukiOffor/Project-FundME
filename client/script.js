import { ethers } from "./ethers-5.6.esm.min.js";
import {abi,contractAddress} from "./constants.js";



const connectButton = document.getElementById('conetBtn')
const contribute = document.getElementById('contribute')
const contribute1 = document.getElementById('contribute1')
const contribute2 = document.getElementById('contribute2')


connectButton.onclick = connect
contribute.onclick = fund
contribute1.onclick = fund
contribute2.onclick = fund


async function connect(){
    if(typeof window.ethereum !== "undefined"){
        await ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const address = await signer.getAddress()
       document.getElementById("conetBtn").innerHTML = `${address.slice(0,10)}....${address.slice(-5)}`
    }else {
       document.getElementById('connected').innerHTML = "You do not have metamask installed"
    }
}

async function fund(){
    if (typeof window.ethereum !== "undefined"){
        //provider connects to the blockchain
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // wallet || signer || someone with gass
        //In the other hand a signer in ethers.js is an object that represents an Ethereum account. 
        const signer = provider.getSigner()
        console.log(signer)
        try{
        // interact with contract
        const contract = new ethers.Contract(contractAddress,abi,signer);
        const transactionReceipt = await contract.contribute({value:ethers.utils.parseEther("0.000000000001")})
        await listenForTransactionMine(transactionReceipt,provider)
        console.log("Done!")
        //listen for tx to be mined

      }catch(error){
        console.log(error)
      }

    }
}

function listenForTransactionMine(response,provider){
    console.log(`mining ${response.hash}.....`)
    //promise takes a function as an arguement
    // call the resolve inside the provider.once
    return new Promise((resolve,reject)=>{
      provider.once(response.hash, (transactionReceipt)=>{
        console.log(`completed with ${transactionReceipt.confirmations} confirmations`)
        resolve()
      })
    })
    
}


