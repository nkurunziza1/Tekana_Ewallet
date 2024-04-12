"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionSchema = void 0;
const mongoose = require("mongoose");
exports.TransactionSchema = new mongoose.Schema({
    amount: Number,
    senderId: String,
    receiverId: String,
});
//# sourceMappingURL=transaction.schema.js.map