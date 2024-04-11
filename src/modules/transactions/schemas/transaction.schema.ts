import * as mongoose from 'mongoose';

export const TransactionSchema = new mongoose.Schema({
  amount: Number,
  senderId: String,
  receiverId: String,
});
