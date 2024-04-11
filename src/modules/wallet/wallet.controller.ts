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
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Wallet } from './interface/wallet.interface';
import { AuthGuard } from '../auth/auth.guard';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { IsNotEmpty } from 'class-validator';

@ApiTags('Wallet')
@ApiBearerAuth()
@ApiSecurity('bearerAuth')
@Controller('/api/v1/')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @UseGuards(AuthGuard)
  @Post('wallet')
  @ApiOperation({ summary: 'Create Wallet' })
  @ApiBody({ type: CreateWalletDto })
  @ApiResponse({
    status: 200,
    description: 'Wallet created successfully',
    type: CreateWalletDto,
  })
  async createWallet(
    @Request() req,
    @Body() createWalletDto: CreateWalletDto,
  ): Promise<Wallet> {
    return this.walletService.createWallet(req.user.sub, createWalletDto);
  }

  @UseGuards(AuthGuard)
  @Get('wallet')
  @ApiOperation({ summary: 'Get Wallet' })
  @ApiResponse({
    status: 200,
    description: 'Retrieve user wallet',
    type: CreateWalletDto,
  })
  async getWallet(@Request() req): Promise<Wallet> {
    return this.walletService.getWalletByUserId(req.user.sub);
  }

  @UseGuards(AuthGuard)
  @Put('wallet')
  @ApiOperation({ summary: 'Update Wallet' })
  @ApiBody({ type: CreateWalletDto })
  @ApiResponse({
    status: 200,
    description: 'Wallet updated successfully',
    type: CreateWalletDto,
  })
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
