import { Router } from "express";
import { authRequire } from "../middlewares/authValidator.middleware";
import { getCategories } from "../controllers/category.controller";

const router = Router();

router.get("/category", authRequire, getCategories);

export default router;
