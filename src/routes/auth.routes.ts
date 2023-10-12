import { Router } from "express";
import passport from "passport";
import { alreadyAuth } from "../middlewares/alreadyAuth.middleware";
import { logOut } from "../controllers/auth.controller";
import { authRequire } from "../middlewares/authValidator.middleware";

const router = Router();

router.get("/login", alreadyAuth, passport.authenticate("discord"));
router.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "/api/home",
    failureRedirect: "/api/home",
  })
);
router.get("/logout", authRequire, logOut);

export default router;
