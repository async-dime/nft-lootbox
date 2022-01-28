import { getApp } from './helpers.js';

const main = async () => {
  const app = await getApp();

  console.log('Deploying bundle collection module...');

  const bundleModule = await app.deployBundleModule({
    name: 'Dementor Robe Lootbox Bundle',
    sellerFeeBasisPoints: 0,
  });

  console.log(
    'Bundle collection module deployed with address:',
    bundleModule.address
  );
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error('Error creating the bundle collection module', err);
    process.exit(1);
  }
};

runMain();
