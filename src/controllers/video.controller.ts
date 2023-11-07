import { Request, Response } from "express";
import { prisma } from "../utils/prismaClient";
import { uploadFile, deleteFile } from "../utils/cloudinary";
import fs from "fs-extra";

export const getVideo = async (req: Request, res: Response) => {
  try {
    const videoFound = await prisma.video.findFirst({
      where: { id: Number(req.params.videoId) },
    });

    if (!videoFound)
      return res.status(404).json({ message: "Video not found!" });

    return res.json(videoFound);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const uploadVideo = async (req: Request, res: Response) => {
  try {
    const { title, year, category } = req.body;
    if (req.files?.video && req.user) {
      //@ts-ignore
      const result = await uploadFile(req.files.video.tempFilePath);
      if (!result)
        return res.status(500).json({ message: "Error uploading video!" });

      const videoCreated = await prisma.video.create({
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
      await fs.unlink(req.files.video.tempFilePath);

      return res.json(videoCreated);
    }
    return res.status(200).json({ message: "Video uploaded successfully!" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteVideo = async (req: Request, res: Response) => {
  try {
    const videoFound = await prisma.video.delete({
      where: { id: Number(req.params.videoId) },
    });
    if (!videoFound)
      return res.status(404).json({ message: "Video not found!" });
    if (videoFound.public_id) await deleteFile(videoFound.public_id);

    return res.status(200).json({ message: "Video deleted successfully!" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
