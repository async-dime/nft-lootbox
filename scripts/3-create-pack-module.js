import { getApp } from './helpers.js';

const main = async () => {
  const app = await getApp();

  console.log('Deploying pack module...');

  const packModule = await app.deployPackModule({
    name: 'Dementor Robe Lootbox Pack',
    sellerFeeBasisPoints: 0,
  });

  console.log('Pack module deployed with address:', packModule.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.error('Error creating the pack module', err);
    process.exit(1);
  }
};

runMain();
