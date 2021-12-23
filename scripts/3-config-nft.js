import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  '0xba8d0b6FCCc3Aff07036B94e98c55Bc4Cad32FEa'
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'Heart',
        description: 'This NFT will give you access to HappyDAO!',
        image: readFileSync('scripts/assets/heart.jpg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();
