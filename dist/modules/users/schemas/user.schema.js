"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
const user_enum_1 = require("../enums/user.enum");
exports.UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: user_enum_1.UserRoles,
        default: 'client',
    },
    telephone: String,
});
//# sourceMappingURL=user.schema.js.map