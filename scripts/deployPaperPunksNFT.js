
const hre = require("hardhat");

async function main() {
  
  const PaperPunksNFT = await hre.ethers.getContractFactory("PaperPunksNFT");
  const paperPunksNFT = await PaperPunksNFT.deploy();

  await paperPunksNFT.deployed();

  console.log("PaperPunksNFT deployed to:", paperPunksNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
