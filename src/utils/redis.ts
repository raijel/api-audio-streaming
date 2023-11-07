import { createClient } from "redis";
import { REDIS_HOST, REDIS_PORT } from "../config";

export const redisClient = createClient({});

export const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log(">>> Connected to Redis");
  } catch (err: any) {
    console.log(`REDIS ERROR: ${err}`);
  }
};
