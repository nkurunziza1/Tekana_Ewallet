// transaction.service.ts
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './interface/transaction.interface';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTION_MODEL')
    private readonly transactionModel: Model<Transaction>,
  ) {}

  async createTransaction(senderId: string, receiverId: string, amount: number): Promise<Transaction> {
    const createdTransaction = new this.transactionModel({ senderId, receiverId, amount });
    return createdTransaction.save();
  }

  async getYourTransaction(userId: string): Promise<Transaction[]> {
    return this.transactionModel.find({ senderId: userId }).exec();
  }

  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionModel.find().exec();
  }
}
