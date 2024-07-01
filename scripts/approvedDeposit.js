// Import necessary packages and contracts
const { ethers } = require("hardhat");
const { FXRootContractAbi } = require("../artifacts/FXRootContractAbi.js");
const ABI = require("../artifacts/contracts/bridging.sol/bridging.json");
require("dotenv").config();

// Transfer ERC721A tokens to the Ethereum FxChain network
async function main() {
  // Set up connections to network and wallet
  const networkAddress = "https://volta-rpc.energyweb.org";
  const privateKey = process.env.PRIVATE_KEY;
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a wallet instance
  const wallet = new ethers.Wallet(privateKey, provider);

  // Get ERC721A contract instance
  const NFT = new ethers.Contract("0x731c8b8Ee6E024E3471fbF5687e64d3E2497E8D9", ABI.abi, wallet);

  // Get FXRoot contract instance
  const fxRootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
  const fxRoot = new ethers.Contract(fxRootAddress, FXRootContractAbi, wallet);

  // TokenIds to transfer
  const tokenIds = [0, 1, 2, 3, 4];

  // Approve the nfts for transfer
  const approveTx = await NFT.setApprovalForAll(fxRootAddress, true);
  await approveTx.wait();
  console.log("Approval confirmed");

  // Deposit the nfts to the FXRoot contracts
  for (let i = 0; i < tokenIds.length; i++) {
    const depositTx = await fxRoot.deposit(NFT.address, wallet.address, tokenIds[i], "0x6566");

    // Wait for the deposit to be confirmed
    await depositTx.wait();
  }

  console.log("Approved and deposited");

  // Test balanceOf
  //const balance = await NFT.balanceOf(wallet.address);

  // Print the balance of the wallet
 //onsole.log("IndianNFT wallet balance", wallet.address, "is: ", balance.toString());
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
