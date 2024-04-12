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
exports.WalletController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const auth_guard_1 = require("../auth/auth.guard");
const wallet_service_1 = require("./wallet.service");
const create_wallet_dto_1 = require("./dto/create-wallet.dto");
let WalletController = class WalletController {
    constructor(walletService) {
        this.walletService = walletService;
    }
    async createWallet(req, createWalletDto) {
        return this.walletService.createWallet(req.user.sub, createWalletDto);
    }
    async getWallet(req) {
        return this.walletService.getWalletByUserId(req.user.sub);
    }
    async updateWallet(req, createWalletDto) {
        return this.walletService.updateWalletBalance(req.user.sub, createWalletDto.amount);
    }
};
exports.WalletController = WalletController;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('wallet'),
    (0, swagger_1.ApiOperation)({ summary: 'Create Wallet' }),
    (0, swagger_1.ApiBody)({ type: create_wallet_dto_1.CreateWalletDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Wallet created successfully',
        type: create_wallet_dto_1.CreateWalletDto,
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_wallet_dto_1.CreateWalletDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "createWallet", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)('wallet'),
    (0, swagger_1.ApiOperation)({ summary: 'Get Wallet' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Retrieve user wallet',
        type: create_wallet_dto_1.CreateWalletDto,
    }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWallet", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)('wallet'),
    (0, swagger_1.ApiOperation)({ summary: 'Update Wallet' }),
    (0, swagger_1.ApiBody)({ type: create_wallet_dto_1.CreateWalletDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Wallet updated successfully',
        type: create_wallet_dto_1.CreateWalletDto,
    }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_wallet_dto_1.CreateWalletDto]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "updateWallet", null);
exports.WalletController = WalletController = __decorate([
    (0, swagger_1.ApiTags)('Wallet'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiSecurity)('bearerAuth'),
    (0, common_1.Controller)('/api/v1/'),
    __metadata("design:paramtypes", [wallet_service_1.WalletService])
], WalletController);
//# sourceMappingURL=wallet.controller.js.map