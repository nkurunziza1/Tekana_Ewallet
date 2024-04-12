"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const mongoose = require("mongoose");
exports.databaseProviders = [
    {
        provide: "DATABASE_CONNECTION",
        useFactory: async () => await mongoose.connect(process.env.DATABASE_DEV || 'mongodb+srv://calvinbukarani:gi0HhfrWCQwj55yc@devcluster.icfoodw.mongodb.net/igitego')
    }
];
//# sourceMappingURL=database.providers.js.map