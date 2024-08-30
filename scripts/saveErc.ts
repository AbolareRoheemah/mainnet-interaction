import { ethers } from 'hardhat';

async function main() {
    const token = '0x170Bbd5A102B995517B133aa6b9275d103B9a120';
  const save = await ethers.deployContract('SaveERC20', [token]);

  await save.waitForDeployment();

  console.log('Save Contract Deployed at ' + save.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});