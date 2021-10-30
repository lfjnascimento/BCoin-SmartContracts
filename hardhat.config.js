require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const initialBalance = "100000000000000000";

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
    },
    hardhat: {
      accounts: [
        {
          privateKey: "0x40ebe1388d76be1ffff7d0e341070590f1106a8c4fef1cbc9c71145ba0563663",
          balance: initialBalance
        },
        {
          privateKey: "0x5adcae9f20e905fec095f5b01865272f58fc2cd03784e50cd9fa0c8a10fc53df",
          balance: initialBalance
        },
        {
          privateKey: "0xc79cf4b87b64b6a5aef84e1a991d078ef2570a88e451ed3b7fa7cb0cb53183fc",
          balance: initialBalance
        },
        {
          privateKey: "0x51dcf4bd23a1187784cf247dca54f760246c26eea7d1d60bfd515d4dd337dd47",
          balance: initialBalance
        },
        {
          privateKey: "0x0831db1395f4893065acbe86b4220c3c0026a51c0ee3ee08fd86d059c3fe153f",
          balance: initialBalance
        },
      ]
    }
  },
};
