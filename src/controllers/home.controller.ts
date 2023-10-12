import { Response, Request } from "express";
import prisma from "../utils/prismaClient";

export const homePage = async (req: Request, res: Response) => {
  try {
    const songs = await prisma.song.findMany();
    if (songs.length === 0)
      return res.status(200).json({ message: "There are not songs yet!" });
    return res.status(200).json(songs);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
