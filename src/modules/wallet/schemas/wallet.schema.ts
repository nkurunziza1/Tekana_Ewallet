import * as mongoose from 'mongoose';

export const walletSchema = new mongoose.Schema({
  amount: Number,
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
});
