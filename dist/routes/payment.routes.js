"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controllers/payment.controller");
const router = (0, express_1.Router)();
router.get("/create-suscription", payment_controller_1.newSuscription);
router.get("/success", payment_controller_1.paymentSuccess);
router.get("/cancel", payment_controller_1.cancelPayment);
exports.default = router;
//# sourceMappingURL=payment.routes.js.map