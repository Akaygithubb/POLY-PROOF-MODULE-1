/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.18",
};
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/",
      accounts: [process.env.PRIVATE_KEY],
    },
    volta: {
      url: "https://volta-rpc.energyweb.org",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
