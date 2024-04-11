import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './interface/transaction.interface';
import { TransactionService } from './transaction.service';
import { WalletService } from '../wallet/wallet.service';

@ApiTags('Transaction') // Add Swagger tag
@ApiBearerAuth() // Add Swagger bearer authentication
@Controller('/api/v1/')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly walletService: WalletService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('transaction')
  @ApiOperation({ summary: 'Create Transaction' }) // Add Swagger operation summary
  @ApiBody({ type: CreateTransactionDto }) // Add Swagger request body
  @ApiResponse({
    // Add Swagger response description
    status: 200,
    description: 'Transaction completed successfully',
  })
  async createTransaction(
    @Request() req,
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<{ message: string }> {
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
  @ApiOperation({ summary: 'Get Your Transactions' })
  @ApiResponse({
    status: 200,
    description: 'List of your transactions',
    type: [CreateTransactionDto],
  })
  async getYourTransaction(@Request() req): Promise<Transaction[]> {
    const userId = req.user.sub;
    return this.transactionService.getYourTransaction(userId);
  }

  @UseGuards(AuthGuard)
  @Get('transaction/all')
  @ApiOperation({ summary: 'Get All Transactions' })
  @ApiResponse({
    status: 200,
    description: 'List of all transactions',
    type: [CreateTransactionDto],
  })
  async getAllTransactions(): Promise<Transaction[]> {
    return this.transactionService.getAllTransactions();
  }
}
