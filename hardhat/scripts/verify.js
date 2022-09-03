const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
require("@nomiclabs/hardhat-etherscan");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");
require("@nomiclabs/hardhat-etherscan");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;

  await hre.run("verify:verify", {
    address: "0x638Dd20c452E5b2cFe5119179c5E08643d68B9Ac",
    constructorArguments: [metadataURL, whitelistContract],
  });
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
