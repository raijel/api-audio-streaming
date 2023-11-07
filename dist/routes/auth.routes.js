"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const alreadyAuth_middleware_1 = require("../middlewares/alreadyAuth.middleware");
const auth_controller_1 = require("../controllers/auth.controller");
const authValidator_middleware_1 = require("../middlewares/authValidator.middleware");
const router = (0, express_1.Router)();
router.get("/login", alreadyAuth_middleware_1.alreadyAuth, passport_1.default.authenticate("discord"));
router.get("/redirect", passport_1.default.authenticate("discord", {
    successRedirect: "/api/home",
    failureRedirect: "/api/home",
}));
router.get("/logout", authValidator_middleware_1.authRequire, auth_controller_1.logOut);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map