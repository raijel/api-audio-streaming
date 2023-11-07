import { Response, Request } from "express";
import { prisma } from "../utils/prismaClient";
import { redisClient } from "../utils/redis";

export const homePage = async (req: Request, res: Response) => {
  try {
    const reply = await redisClient.get("videos");
    if (reply) return res.json(JSON.parse(reply));

    const videos = await prisma.video.findMany();
    await redisClient.set("videos", JSON.stringify(videos));
    await redisClient.expire("videos", 10);
    if (videos.length === 0)
      return res.status(200).json({ message: "There are not videos yet!" });
    return res.json(videos);
  } catch (err: any) {
    return res.status(500).json({ message: "server error" });
  }
};
