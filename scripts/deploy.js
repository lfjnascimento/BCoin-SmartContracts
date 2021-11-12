const {ethers} = require("hardhat");

async function main() {
  
  const Project = await ethers.getContractFactory("BCoinProject");
  const project = await Project.deploy();

  await project.deployed();

  console.log("BCoinProject deployed to:", project.address);
  console.log(await project.getContractBalance());


  //  const project = await ethers.getContractAt("BCoinProject", "0x8c2eeb68e533617851b6db0f7c352435ae9aca9b");
  // console.log(await project.getContractBalance());


}


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
