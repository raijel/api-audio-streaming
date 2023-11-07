"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config");
const redis_1 = require("./utils/redis");
app_1.default.listen(config_1.LOCAL_PORT);
console.log(`>>> Server running on port: ${config_1.LOCAL_PORT} (1/1)`);
(0, redis_1.connectRedis)();
//# sourceMappingURL=index.js.map