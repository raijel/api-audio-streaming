import app from "./app";
import { LOCAL_PORT } from "./config";
import { connectRedis } from "./utils/redis";

app.listen(LOCAL_PORT);


console.log(`>>> Server running on port: ${LOCAL_PORT} (1/1)`);
connectRedis();
