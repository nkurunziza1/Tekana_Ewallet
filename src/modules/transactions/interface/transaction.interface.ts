import { Document } from 'mongoose';

export interface Transaction extends Document {
  readonly amount: number;
  readonly to: number;
  readonly date: number;
}
