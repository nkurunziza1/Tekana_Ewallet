import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './interface/transaction.interface';
import { TransactionService } from './transaction.service';
import { WalletService } from '../wallet/wallet.service';

@Controller('/api/v1/')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly walletService: WalletService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('transaction')
  async createTransaction(
    @Request() req,
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<any> {
    const senderId = req.user.sub;
    const receiverId = createTransactionDto.to.toString();

    const senderWallet = await this.walletService.getWalletByUserId(senderId);
    const receiverWallet =
      await this.walletService.getWalletByUserId(receiverId);

    if (!senderWallet) {
      return {
        message: "You don't have a wallet. Please create a wallet first.",
      };
    }

    if (!receiverWallet) {
      return { message: "Receiver doesn't have a wallet." };
    }

    const senderBalance = senderWallet.amount;
    const receiverBalance = receiverWallet.amount;

    const amount = createTransactionDto.amount;

    if (senderBalance < amount) {
      return { message: 'Insufficient balance in your wallet.' };
    }

    const updatedSenderBalance = senderBalance - amount;
    const updatedReceiverBalance = receiverBalance + amount;

    await this.walletService.updateWalletBalance(
      senderId,
      updatedSenderBalance,
    );
    await this.walletService.updateWalletBalance(
      receiverId,
      updatedReceiverBalance,
    );

    await this.transactionService.createTransaction(
      senderId,
      receiverId,
      amount,
    );

    return { message: 'Transaction completed successfully' };
  }
  @UseGuards(AuthGuard)
  @Get('transaction')
  async getYourTransaction(@Request() req): Promise<Transaction[]> {
    const userId = req.user.sub;
    return this.transactionService.getYourTransaction(userId);
  }

  @UseGuards(AuthGuard)
  @Get('transaction/all')
  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionService.getAllTransactions();
  }
}
