import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { usersProviders } from './user.provider';
import { DatabaseModule } from 'src/database/database.module';
import { WalletService } from '../wallet/wallet.service';
import { WalletModule } from '../wallet/wallet.module';

@Module({
  imports: [DatabaseModule, WalletModule],
  controllers: [UserController],
  providers: [UsersService, ...usersProviders, WalletService],
  exports: [UsersService, ...usersProviders],
})
export class UserModule {}
