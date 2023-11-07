"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STRIPE_SECRET_KEY = exports.REDIS_PORT = exports.REDIS_HOST = exports.CLOUDINARY_API_SECRET = exports.CLOUDINARY_API_KEY = exports.CLOUDINARY_CLOUD_NAME = exports.DISCORD_SECRET_KEY = exports.DISCORD_CLIENT_SECRET = exports.DISCORD_CLIENT_ID = exports.DATABASE_URL = exports.LOCAL_PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
//BACKEND PORTS
exports.LOCAL_PORT = process.env.LOCAL_PORT || 3000;
//DATABASE_URL
exports.DATABASE_URL = process.env.DATABASE_URL || "";
//DISCORD AUTH
exports.DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "";
exports.DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "";
exports.DISCORD_SECRET_KEY = process.env.DISCORD_SECRET_KEY || "";
//CLOUDINARY CONFIG
exports.CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
exports.CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
exports.CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
//REDIS CONFIG
exports.REDIS_HOST = process.env.REDIS_HOST || "";
exports.REDIS_PORT = process.env.REDIS_PORT || "";
//STRIPE CONFIG
exports.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
//# sourceMappingURL=config.js.map