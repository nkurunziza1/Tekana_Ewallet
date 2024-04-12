"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConfig = void 0;
exports.jwtConfig = {
    useFactory: () => {
        return {
            secret: "bitwayeikise",
            signOptions: { expiresIn: '7d' },
        };
    },
};
//# sourceMappingURL=jwt.config.js.map