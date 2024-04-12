"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const create_transaction_dto_1 = require("./dto/create-transaction.dto");
const transaction_service_1 = require("./transaction.service");
const wallet_service_1 = require("../wallet/wallet.service");
let TransactionController = class TransactionController {
    constructor(transactionService, walletService) {
        this.transactionService = transactionService;
        this.walletService = walletService;
    }
    async createTransaction(req, createTransactionDto, receiverId) {
        const senderId = req.user.sub;
        console.log('recieverId', req.params.receiverId);
        const senderWallet = await this.walletService.getWalletByUserId(senderId);
        const receiverWallet = await this.walletService.getWalletByUserId(receiverId);
        if (!senderWallet) {
            return {
                message: "You don't have a wallet. Please create a wallet first.",
            };
        }
        if (!receiverWallet) {
            return { message: "Receiver doesn't have a wallet." };
        }
        const senderBalance = senderWallet.amount;
        const receiverBalance = receiverWallet.amount;
        const amount = createTransactionDto.amount;
        if (senderBalance < amount) {
            return { message: 'Insufficient balance in your wallet.' };
        }
        const updatedSenderBalance = senderBalance - amount;
        const updatedReceiverBalance = receiverBalance + amount;
        await this.walletService.updateWalletBalance(senderId, updatedSenderBalance);
        await this.walletService.updateWalletBalance(receiverId, updatedReceiverBalance);
        await this.transactionService.createTransaction(senderId, receiverId, amount);
        return { message: 'Transaction completed successfully' };
    }
    async getYourTransaction(req) {
        const userId = req.user.sub;
        return this.transactionService.getYourTransaction(userId);
    }
    async getAllTransactions() {
        return this.transactionService.getAllTransactions();
    }
};
exports.TransactionController = TransactionController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('transaction/:receiverId'),
    (0, swagger_1.ApiOperation)({ summary: 'Create Transaction' }),
    (0, swagger_1.ApiBody)({ type: create_transaction_dto_1.CreateTransactionDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Transaction completed successfully',
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Param)('receiverId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_transaction_dto_1.CreateTransactionDto, String]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "createTransaction", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('transaction'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Your Transactions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of your transactions',
        type: [create_transaction_dto_1.CreateTransactionDto],
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getYourTransaction", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('transaction/all'),
    (0, swagger_1.ApiOperation)({ summary: 'Get All Transactions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of all transactions',
        type: [create_transaction_dto_1.CreateTransactionDto],
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TransactionController.prototype, "getAllTransactions", null);
exports.TransactionController = TransactionController = __decorate([
    (0, swagger_1.ApiTags)('Transaction'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('/api/v1/'),
    __metadata("design:paramtypes", [transaction_service_1.TransactionService,
        wallet_service_1.WalletService])
], TransactionController);
//# sourceMappingURL=transaction.controller.js.map