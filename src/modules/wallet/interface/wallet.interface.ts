import { Document } from 'mongoose';

export interface Wallet extends Document {
  readonly amount: number;
}
