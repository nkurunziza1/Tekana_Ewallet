import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
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

  @UseGuards(AuthGuard)
  @Get('wallet')
  async getWallet(@Request() req): Promise<Wallet> {
    return this.walletService.getWalletByUserId(req.user.sub);
  }

  @UseGuards(AuthGuard)
  @Put('wallet')
  async updateWallet(
    @Request() req,
    @Body() createWalletDto: CreateWalletDto,
  ): Promise<Wallet> {
    return this.walletService.updateWalletBalance(
      req.user.sub,
      createWalletDto.amount,
    );
  }
}
