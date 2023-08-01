import { ethers } from "./ethers-5.6.esm.min.js";
import {abi,contractAddress} from "./constants.js";



const connectButton = document.getElementById('conetBtn')

connectButton.onclick = connect


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


