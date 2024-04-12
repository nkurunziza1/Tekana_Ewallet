"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionProviders = void 0;
const transaction_schema_1 = require("./schemas/transaction.schema");
exports.TransactionProviders = [
    {
        provide: 'TRANSACTION_MODEL',
        useFactory: (mongoose) => mongoose.model('Transaction', transaction_schema_1.TransactionSchema),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=transaction.provider.js.map