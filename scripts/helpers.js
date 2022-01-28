import { ThirdwebSDK } from '@3rdweb/sdk';
import ethers from 'ethers';

// read environment variables from .env file
import dotenv from 'dotenv';
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if (!walletPrivateKey) {
  console.error('Wallet Private Key is missing');
  process.exit(1);
}

export const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    // wallet private key. always use environment variable private key
    process.env.WALLET_PRIVATE_KEY,
    // we use Polygon Mumbai Network
    ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com')
  )
);

const appAddress = '0x82205E9493de8a76C160372Fe18f38078671E156';

export async function getApp() {
  const app = await sdk.getAppModule(appAddress);
  return app;
}
