"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletProviders = void 0;
const wallet_schema_1 = require("./schemas/wallet.schema");
exports.WalletProviders = [
    {
        provide: 'WALLET_MODEL',
        useFactory: (mongoose) => mongoose.model('Wallet', wallet_schema_1.walletSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=wallet.provider.js.map