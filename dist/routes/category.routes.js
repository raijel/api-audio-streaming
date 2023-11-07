"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authValidator_middleware_1 = require("../middlewares/authValidator.middleware");
const category_controller_1 = require("../controllers/category.controller");
const router = (0, express_1.Router)();
router.get("/category", authValidator_middleware_1.authRequire, category_controller_1.getCategories);
exports.default = router;
//# sourceMappingURL=category.routes.js.map