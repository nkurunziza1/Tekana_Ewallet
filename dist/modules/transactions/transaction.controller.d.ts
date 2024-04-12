import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './interface/transaction.interface';
import { TransactionService } from './transaction.service';
import { WalletService } from '../wallet/wallet.service';
export declare class TransactionController {
    private readonly transactionService;
    private readonly walletService;
    constructor(transactionService: TransactionService, walletService: WalletService);
    createTransaction(req: any, createTransactionDto: CreateTransactionDto, receiverId: string): Promise<{
        message: string;
    }>;
    getYourTransaction(req: any): Promise<Transaction[]>;
    getAllTransactions(): Promise<Transaction[]>;
}
