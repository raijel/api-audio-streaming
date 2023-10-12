import { Router } from "express";
import { authRequire } from "../middlewares/authValidator.middleware";
import { deleteAudio, getAudio, uploadAudio } from "../controllers/audio.controller";
import { fileUploadMiddleware } from "../middlewares/fileUpload.middleware";

const router = Router();

router.get("/song/:songId", authRequire, getAudio);
router.post("/upload", fileUploadMiddleware, uploadAudio);
router.put("/update/songId", authRequire);
router.delete("/delete/songId", authRequire, deleteAudio);

export default router;
