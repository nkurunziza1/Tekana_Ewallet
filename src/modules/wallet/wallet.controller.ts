import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { Wallet } from './interface/wallet.interface';
import { AuthGuard } from '../auth/auth.guard';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';

@Controller('/api/v1/')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @UseGuards(AuthGuard)
  @Post('wallet')
  async createWallet(
    @Request() req,
    @Body() createWalletDto: CreateWalletDto,
  ): Promise<Wallet> {
    return this.walletService.createWallet(req.user.sub, createWalletDto);
  }
}
