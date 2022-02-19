const {ethers} = require("hardhat");

async function main() {
  console.log("Deploying contract");
  const Project = await ethers.getContractFactory("BCoinProject");
  const project = await Project.deploy();

  await project.deployed();

  console.log("BCoinProject deployed to:", project.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }
);
