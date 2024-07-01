
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

Loom Video link for verification: https://www.loom.com/share/d45ba172bcd74d27bbb468c3ba37ffd3?sid=6a66bf02-f945-4848-bffa-7b08dd43dd01

