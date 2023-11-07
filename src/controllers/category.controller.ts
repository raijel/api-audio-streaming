import { prisma } from "../utils/prismaClient";
import { Request, Response } from "express";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categoriesFound = await prisma.category.findMany();
    if (categoriesFound.length === 0)
      return res
        .status(204)
        .json({ message: "There are not categories on database" });
    return res.json(categoriesFound);
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
