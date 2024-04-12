import { Wallet } from './interface/wallet.interface';
import { WalletService } from './wallet.service';
import { CreateWalletDto } from './dto/create-wallet.dto';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    createWallet(req: any, createWalletDto: CreateWalletDto): Promise<Wallet>;
    getWallet(req: any): Promise<Wallet>;
    updateWallet(req: any, createWalletDto: CreateWalletDto): Promise<Wallet>;
}
