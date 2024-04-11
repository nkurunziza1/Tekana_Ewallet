import { Mongoose } from 'mongoose';
import { TransactionSchema } from './schemas/transaction.schema';

export const TransactionProviders = [
  {
    provide: 'TRANSACTION_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('Transaction', TransactionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
