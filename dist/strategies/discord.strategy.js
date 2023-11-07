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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const prismaClient_1 = require("../utils/prismaClient");
const passport_1 = __importDefault(require("passport"));
const passport_discord_1 = require("passport-discord");
passport_1.default.serializeUser((user, done) => {
    done(null, user.id);
});
passport_1.default.deserializeUser((id, done) => __awaiter(void 0, void 0, void 0, function* () {
    const userFound = yield prismaClient_1.prisma.user.findUnique({ where: { id: id } });
    done(null, userFound);
}));
passport_1.default.use(new passport_discord_1.Strategy({
    clientID: config_1.DISCORD_CLIENT_ID,
    clientSecret: config_1.DISCORD_CLIENT_SECRET,
    callbackURL: "/auth/redirect",
    scope: ["identify", "guilds"],
}, (acessToken, refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const guildId = (_a = profile.guilds) === null || _a === void 0 ? void 0 : _a.map((guild) => `id: ${guild.id}, name: ${guild.name}, icon: ${guild.icon}}`);
    try {
        const userFound = yield prismaClient_1.prisma.user.findFirst({
            where: { discordId: profile.id },
        });
        if (userFound)
            return done(null, userFound);
        const newUser = yield prismaClient_1.prisma.user.create({
            data: {
                discordId: profile.id,
                username: profile.username,
                guilds: guildId,
            },
        });
        done(null, newUser);
    }
    catch (err) {
        console.error(err);
        return done(err);
    }
})));
//# sourceMappingURL=discord.strategy.js.map