import {
  Body,
  Controller,
  Get,
  Param,
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

@ApiTags('Transaction') 
@ApiBearerAuth()
@Controller('/api/v1/')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly walletService: WalletService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('transaction/:receiverId')
  @ApiOperation({ summary: 'Create Transaction' }) 
  @ApiBody({ type: CreateTransactionDto }) 
  @ApiResponse({
    status: 200,
    description: 'Transaction completed successfully',
  })
  async createTransaction(
    @Request() req,
    @Body() createTransactionDto: CreateTransactionDto,
    @Param('receiverId') receiverId: string,
  ): Promise<{ message: string }> {
    const senderId = req.user.sub;
    console.log('recieverId', req.params.receiverId);
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
