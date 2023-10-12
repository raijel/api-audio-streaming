"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_SECRET = exports.API_KEY = exports.CLOUD_NAME = exports.SECRET_KEY = exports.DISCORD_CLIENT_SECRET = exports.DISCORD_CLIENT_ID = exports.DATABASE_URL = exports.LOCAL_PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//BACKEND PORTS
exports.LOCAL_PORT = process.env.LOCAL_PORT || 3000;
//DATABASE_URL
exports.DATABASE_URL = process.env.DATABASE_URL || "";
//DISCORD AUTH
exports.DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "";
exports.DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "";
exports.SECRET_KEY = process.env.SECRET_KEY || "";
//CLOUDINARY CONFIG
exports.CLOUD_NAME = process.env.CLOUD_NAME || "";
exports.API_KEY = process.env.API_KEY || "";
exports.API_SECRET = process.env.API_SECRET || "";
