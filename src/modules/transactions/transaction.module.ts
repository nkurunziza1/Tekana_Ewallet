import { Module } from '@nestjs/common';

import { TransactionController } from './transaction.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
})
export class TransactionModule {}
