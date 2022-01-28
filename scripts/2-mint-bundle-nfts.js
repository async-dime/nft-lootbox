import { readFileSync } from 'fs';
import { sdk } from './helpers.js';

import dotenv from 'dotenv';
dotenv.config();

const main = async () => {
  // address of the bundle collection module
  const bundleModuleAddress = process.env.NEXT_PUBLIC_BUNDLE_MODULE_ADDRESS;
  const bundleModule = sdk.getBundleModule(bundleModuleAddress);

  console.log("Creating NFT branch...")

  const created = await bundleModule.createAndMintBatch([
    {
      metadata: {
        name: 'Dementor Robe 01',
        description: "A single Dementor's robe. Flying straight into your nightmares.",
        image: readFileSync('./assets/01.png'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Dementor Robe 02',
        description: "Here's two Dementor's Robe, lurking towards the full moon.",
        image: readFileSync('./assets/02.png'),
        properties: {
          rarity: 'a bit rare',
          fanciness: 7,
        }
      },
      supply: 50,
    },
    {
      metadata: {
        name: 'Dementor Robe 03',
        description: "A Dementor's Robe that slowly shifting to its second phase: The Mighty Cthulhu.",
        image: readFileSync('./assets/03.png'),
        properties: {
          rarity: 'super rare!',
          fanciness: 10,
        }
      },
      supply: 10,
    },
  ])

  console.log('NFTs created!')
  console.log(JSON.stringify(created, null, 2));
}

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
