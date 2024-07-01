
Install all dependancies by using:
```shell
npm install
```

You first need to compile the contract:
```shell
npx hardhat compile
npx hardhat node
```

Once the contract is compile run following tasks to generate token, mint nfts and transfer/bridge them respectively:
```shell
#generate token
npx hardhat run scripts/deploy.js --network volta



#mint nft
npx hardhat run scripts/batchMint.js --network volta


#deposit
npx hardhat run scripts/approvedDeposit.js --network volta
```
NFT transfered from Volta to Sepolia.

