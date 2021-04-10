"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var auth_1 = require("./auth");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use("/auth", auth_1.auth);
exports.default = app;
//# sourceMappingURL=app.js.map