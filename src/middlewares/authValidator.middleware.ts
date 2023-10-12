import { Request, Response, NextFunction } from "express";



export const authRequire = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    next();
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
