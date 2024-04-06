import { Module } from "@nestjs/common";

import { WalletController } from "./wallet.controller";
import { DatabaseModule } from "src/database/database.module";
import { WalletService } from "./wallet.service";
import { WalletProviders } from "./wallet.provider";

@Module({
 imports : [DatabaseModule],
 controllers: [WalletController],
 providers: [WalletService, ...WalletProviders],
 exports: [WalletService, ...WalletProviders]
})

export class WalletModule {}