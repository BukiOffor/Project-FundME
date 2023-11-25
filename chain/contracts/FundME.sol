/// @title A title that should describe the contract/interface
/// @author The name of the author
/// @notice Explain to an end user what this does
/// @dev Explain to a developer any extra details

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract FundMe {
    mapping(address => uint256) public contributions;
    address[] public contributors;
    address public owner;

    constructor(){
        owner = msg.sender;
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function.");
        _;
    } 

    function contribute() public payable {
        require(msg.value > 0, "Contribution amount should be greater than zero.");

        if (contributions[msg.sender] == 0) {
            contributors.push(msg.sender);
        }

         contributions[msg.sender] += msg.value;
    }

    function withdrawFunds(uint256 amount) public onlyOwner {
        require(address(this).balance >= amount, "Insufficient funds.");

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to transfer funds.");
    }

    function getContributorCount() public view returns (uint256) {
        return contributors.length;
    }
    function destroy() external onlyOwner{
        if(address(this).balance > 0){
        (bool success, ) = owner.call{value:address(this).balance}("");
        require(success, "Failed");
        selfdestruct(payable(address(this)));
        }else{
            selfdestruct(payable(address(this)));
        }
    }
}