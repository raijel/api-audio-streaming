import { Router } from "express";
import { authRequire } from "../middlewares/authValidator.middleware";
import {
  deleteVideo,
  getVideo,
  uploadVideo,
} from "../controllers/video.controller";
import { fileUploadMiddleware } from "../middlewares/fileUpload.middleware";

const router = Router();

router.get("/video/:videoId", getVideo);
router.post("/upload", fileUploadMiddleware, authRequire, uploadVideo);
router.put("/update/videoId", authRequire);
router.delete("/delete/videoId", authRequire, deleteVideo);

export default router;
