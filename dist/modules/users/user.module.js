"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
const user_provider_1 = require("./user.provider");
const database_module_1 = require("../../database/database.module");
const wallet_service_1 = require("../wallet/wallet.service");
const wallet_module_1 = require("../wallet/wallet.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule, wallet_module_1.WalletModule],
        controllers: [user_controller_1.UserController],
        providers: [user_service_1.UsersService, ...user_provider_1.usersProviders, wallet_service_1.WalletService],
        exports: [user_service_1.UsersService, ...user_provider_1.usersProviders],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map