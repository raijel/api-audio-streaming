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
exports.uploadAudio = exports.getAudio = void 0;
const prismaClient_1 = __importDefault(require("../utils/prismaClient"));
const cloudinary_1 = require("../utils/cloudinary");
const getAudio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const audioFound = yield prismaClient_1.default.song.findFirst({
            where: { id: Number(req.params.songId) },
        });
        if (!audioFound)
            return res.status(404).json({ message: "Audio not found!" });
        return res.json(audioFound);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.getAudio = getAudio;
const uploadAudio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (((_a = req.files) === null || _a === void 0 ? void 0 : _a.audio) && req.user) {
            //@ts-ignore
            const result = yield (0, cloudinary_1.uploadFile)(req.files.audio.tempFilePath);
            yield prismaClient_1.default.song.create({
                data: {
                    secure_url: result.secure_url,
                    public_id: result.public_id,
                    userId: req.user.id,
                },
            });
        }
        return res.status(200).json({ message: "Audio uploaded successfully!" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.uploadAudio = uploadAudio;
