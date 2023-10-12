import { Request, Response, NextFunction } from "express";

export const alreadyAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user) {
    res.redirect("/api/home");
  } else {
    next();
  }
};
