import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  const bundleModuleAddress = process.env.NEXT_PUBLIC_BUNDLE_MODULE_ADDRESS;
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  const packModuleAddress = process.env.NEXT_PUBLIC_PACK_MODULE_ADDRESS;
  const packModule = sdk.getPackModule(packModuleAddress);

  console.log('Getting all NFTs from bundle...');
  const nftsInBundle = await bundleModule.getAll();

  console.log('NFTs in bundle:', nftsInBundle);

  console.log('Creating a pack containing all NFTs from bundle...');
  const created = await packModule.create({
    assetContract: bundleModuleAddress,
    metadata: {
      name: 'Dementor Robe Pack',
      image: readFileSync('./assets/01.png'),
    },
    assets: nftsInBundle.map((nft) => ({
      tokenId: nft.metadata.id,
      amount: nft.supply,
    })),
  });

  console.log('Pack created!', created);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error('Error minting the NFTs', err);
    process.exit(1);
  }
};

runMain();
