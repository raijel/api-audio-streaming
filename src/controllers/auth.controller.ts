import { Response, Request, NextFunction } from "express";

export const logOut = (req: Request, res: Response, next: NextFunction) => {
  req.logout((err) => {
    if (err) return next(err);
    return res.status(200).json({ message: "Logged out" });
  });
};
