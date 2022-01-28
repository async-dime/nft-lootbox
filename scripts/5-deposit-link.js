import { ethers } from 'ethers';
import { sdk } from './helpers.js';

import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  const packModuleAddress = process.env.NEXT_PUBLIC_PACK_MODULE_ADDRESS;
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Depositing LINK...');

  // LINK uses 18 decimals, same as Eth. So this gives us the amount to use for 2 LINK
  const amount = ethers.utils.parseEther('2');

  await packModule.depositLink(amount);
  console.log('Deposited!');

  const balance = await packModule.getLinkBalance();
  console.log(balance);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error('Error depositing the LINK', err);
    process.exit(1);
  }
};

runMain();
