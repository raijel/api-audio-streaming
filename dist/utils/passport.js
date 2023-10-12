"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passportConfig = void 0;
const express_session_1 = __importDefault(require("express-session"));
const connect_pg_simple_1 = __importDefault(require("connect-pg-simple"));
const config_1 = require("../config");
const PgSession = (0, connect_pg_simple_1.default)(express_session_1.default);
exports.passportConfig = {
    secret: config_1.SECRET_KEY,
    name: "discord-oauth",
    saveUninitialized: false,
    resave: false,
    store: new PgSession({
        tableName: "session",
        conString: config_1.DATABASE_URL,
    }),
    cookie: {
        maxAge: 60000 * 60 * 24, // 1 day
    },
};
