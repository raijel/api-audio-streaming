"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSong = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getSong = (req, res) => {
    try {
        const songFound = prisma.song.findFirst({
            where: { id: Number(req.params.songId) },
        });
        if (!songFound)
            return res.status(404).json({ message: "Song not found!" });
        return res.status(200).json(songFound);
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
};
exports.getSong = getSong;
