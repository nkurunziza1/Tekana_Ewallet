import { ConflictException, Inject, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Wallet } from './interface/wallet.interface';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Injectable()
export class WalletService {
  constructor(
    @Inject('WALLET_MODEL') private readonly walletModel: Model<Wallet>,
  ) {}
  async createWallet(
    userId: string,
    createWalletDto: CreateWalletDto,
  ): Promise<Wallet> {
    const walletExists = await this.walletModel.findOne({ userId });
    if (walletExists) {
      throw new ConflictException(
        'You already have a wallet. You can start sending and receiving money.',
      );
    }

    const createdWallet = new this.walletModel({
      ...createWalletDto,
      userId,
    });
    return createdWallet.save();
  }

  async getWalletByUserId(userId: string): Promise<Wallet | null> {
    return this.walletModel.findOne({ userId }).exec();
  }

  async updateWalletBalance(
    userId: string,
    newBalance: number,
  ): Promise<Wallet | null> {
    return this.walletModel
      .findOneAndUpdate({ userId }, { amount: newBalance }, { new: true })
      .exec();
  }
}
