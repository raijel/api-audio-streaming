import { config } from "dotenv";
config();

//BACKEND PORTS
export const LOCAL_PORT = process.env.LOCAL_PORT || 3000;
//DATABASE_URL
export const DATABASE_URL = process.env.DATABASE_URL || "";
//DISCORD AUTH
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "";
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "";
export const DISCORD_SECRET_KEY = process.env.DISCORD_SECRET_KEY || "";
//CLOUDINARY CONFIG
export const CLOUDINARY_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME || "";
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY || "";
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET || "";
//REDIS CONFIG
export const REDIS_HOST = process.env.REDIS_HOST || "";
export const REDIS_PORT = process.env.REDIS_PORT || "";
//STRIPE CONFIG
export const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
