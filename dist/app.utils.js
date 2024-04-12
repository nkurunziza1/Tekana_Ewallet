"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTINGS = exports.MESSAGES = exports.REGEX = void 0;
const common_1 = require("@nestjs/common");
const PASSWORD_RULE = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const PASSWORD_RULE_MESSAGE = 'Password should have 1 upper case, lowcase letter along with a number and special character.';
const VALIDATION_PIPE = new common_1.ValidationPipe({
    errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
});
exports.REGEX = {
    PASSWORD_RULE,
};
exports.MESSAGES = {
    PASSWORD_RULE_MESSAGE,
};
exports.SETTINGS = {
    VALIDATION_PIPE,
};
//# sourceMappingURL=app.utils.js.map