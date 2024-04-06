import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
  amount: Number,
  to: String,
});
