"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authValidator_middleware_1 = require("../middlewares/authValidator.middleware");
const stream_controller_1 = require("../controllers/stream.controller");
const router = (0, express_1.Router)();
router.get("/song/:songId", authValidator_middleware_1.authRequire, stream_controller_1.getSong);
exports.default = router;
