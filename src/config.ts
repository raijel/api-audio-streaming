import { config } from "dotenv";
config();

//BACKEND PORTS
export const LOCAL_PORT = process.env.LOCAL_PORT || 3000;
//DATABASE_URL
export const DATABASE_URL = process.env.DATABASE_URL || "";
//DISCORD AUTH
export const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID || "";
export const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET || "";
export const SECRET_KEY = process.env.SECRET_KEY || "";
//CLOUDINARY CONFIG
export const CLOUD_NAME = process.env.CLOUD_NAME || "";
export const API_KEY = process.env.API_KEY || "";
export const API_SECRET = process.env.API_SECRET || "";
