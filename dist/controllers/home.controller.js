"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const prismaClient_1 = require("../utils/prismaClient");
const redis_1 = require("../utils/redis");
const homePage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reply = yield redis_1.redisClient.get("videos");
        if (reply)
            return res.json(JSON.parse(reply));
        const videos = yield prismaClient_1.prisma.video.findMany();
        yield redis_1.redisClient.set("videos", JSON.stringify(videos));
        yield redis_1.redisClient.expire("videos", 10);
        if (videos.length === 0)
            return res.status(200).json({ message: "There are not videos yet!" });
        return res.json(videos);
    }
    catch (err) {
        return res.status(500).json({ message: "server error" });
    }
});
exports.homePage = homePage;
//# sourceMappingURL=home.controller.js.map