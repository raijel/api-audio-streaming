"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authValidator_middleware_1 = require("../middlewares/authValidator.middleware");
const video_controller_1 = require("../controllers/video.controller");
const fileUpload_middleware_1 = require("../middlewares/fileUpload.middleware");
const router = (0, express_1.Router)();
router.get("/video/:videoId", video_controller_1.getVideo);
router.post("/upload", fileUpload_middleware_1.fileUploadMiddleware, authValidator_middleware_1.authRequire, video_controller_1.uploadVideo);
router.put("/update/videoId", authValidator_middleware_1.authRequire);
router.delete("/delete/videoId", authValidator_middleware_1.authRequire, video_controller_1.deleteVideo);
exports.default = router;
//# sourceMappingURL=video.routes.js.map