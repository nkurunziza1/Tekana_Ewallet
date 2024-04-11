import { Document } from 'mongoose';
export interface Transaction extends Document {
  readonly senderId: string;
  readonly receiverId: string;
  readonly amount: number;
}
