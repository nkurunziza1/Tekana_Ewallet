import { Module } from '@nestjs/common';

import { TransactionController } from './transaction.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TransactionService } from './transaction.service';
import { TransactionProviders } from './transaction.provider';
import { WalletService } from '../wallet/wallet.service';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [DatabaseModule, WalletModule],
  controllers: [TransactionController],
  providers: [TransactionService, ...TransactionProviders, WalletService]
})
export class TransactionModule {}
