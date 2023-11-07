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
exports.deleteVideo = exports.uploadVideo = exports.getVideo = void 0;
const prismaClient_1 = require("../utils/prismaClient");
const cloudinary_1 = require("../utils/cloudinary");
const fs_extra_1 = __importDefault(require("fs-extra"));
const getVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoFound = yield prismaClient_1.prisma.video.findFirst({
            where: { id: Number(req.params.videoId) },
        });
        if (!videoFound)
            return res.status(404).json({ message: "Video not found!" });
        return res.json(videoFound);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.getVideo = getVideo;
const uploadVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { title, year, category } = req.body;
        if (((_a = req.files) === null || _a === void 0 ? void 0 : _a.video) && req.user) {
            //@ts-ignore
            const result = yield (0, cloudinary_1.uploadFile)(req.files.video.tempFilePath);
            if (!result)
                return res.status(500).json({ message: "Error uploading video!" });
            const videoCreated = yield prismaClient_1.prisma.video.create({
                data: {
                    title,
                    year,
                    category,
                    secure_url: result.secure_url,
                    public_id: result.public_id,
                    userId: req.user.id,
                },
            });
            //@ts-ignore
            yield fs_extra_1.default.unlink(req.files.video.tempFilePath);
            return res.json(videoCreated);
        }
        return res.status(200).json({ message: "Video uploaded successfully!" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.uploadVideo = uploadVideo;
const deleteVideo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const videoFound = yield prismaClient_1.prisma.video.delete({
            where: { id: Number(req.params.videoId) },
        });
        if (!videoFound)
            return res.status(404).json({ message: "Video not found!" });
        if (videoFound.public_id)
            yield (0, cloudinary_1.deleteFile)(videoFound.public_id);
        return res.status(200).json({ message: "Video deleted successfully!" });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
exports.deleteVideo = deleteVideo;
//# sourceMappingURL=video.controller.js.map