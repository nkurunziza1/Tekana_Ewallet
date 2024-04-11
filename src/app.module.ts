import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { TransactionModule } from './modules/transactions/transaction.module';

@Module({ imports: [UserModule, AuthModule, WalletModule, TransactionModule] })
export class AppModule {}
