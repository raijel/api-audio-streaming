import { Request, Response } from "express";
import prisma from "../utils/prismaClient";
import { deleteFile, uploadFile } from "../utils/cloudinary";
import fs from "fs-extra";

export const getAudio = async (req: Request, res: Response) => {
  try {
    const audioFound = await prisma.song.findFirst({
      where: { id: Number(req.params.songId) },
    });

    if (!audioFound)
      return res.status(404).json({ message: "Audio not found!" });

    return res.json(audioFound);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const uploadAudio = async (req: Request, res: Response) => {
  try {
    const { title, year } = req.body;
    if (req.files?.audio && req.user) {
      //@ts-ignore
      const result = await uploadFile(req.files.audio.tempFilePath);

      const audioCreated = await prisma.song.create({
        data: {
          title,
          year,
          secure_url: result.secure_url,
          public_id: result.public_id,
          userId: req.user.id,
        },
      });
      //@ts-ignore
      await fs.unlink(req.files.audio.tempFilePath);

      console.log(audioCreated);
    }
    return res.status(200).json({ message: "Audio uploaded successfully!" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteAudio = async (req: Request, res: Response) => {
  try {
    const audioFound = await prisma.song.delete({
      where: { id: Number(req.params.songId) },
    });
    if (!audioFound)
      return res.status(404).json({ message: "Audio not found!" });

    await deleteFile(audioFound.public_id);
    return res.status(200).json({ message: "Audio deleted successfully!" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
