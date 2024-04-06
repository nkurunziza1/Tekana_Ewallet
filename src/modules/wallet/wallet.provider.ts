import { Mongoose } from 'mongoose';
import { walletSchema } from './schemas/wallet.schema';


export const WalletProviders = [
  {
    provide: 'WALLET_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Wallet', walletSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
