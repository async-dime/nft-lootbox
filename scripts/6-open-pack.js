import { sdk } from './helpers.js';

import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  const packModuleAddress = process.env.NEXT_PUBLIC_PACK_MODULE_ADDRESS;
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Opening the pack...');
  const opened = await packModule.open('0');
  console.log('Pack opened!', opened);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error('Error opening the pack', err);
    process.exit(1);
  }
};

runMain();
