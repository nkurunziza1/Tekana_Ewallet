"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletSchema = void 0;
const mongoose = require("mongoose");
exports.walletSchema = new mongoose.Schema({
    amount: Number,
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});
//# sourceMappingURL=wallet.schema.js.map