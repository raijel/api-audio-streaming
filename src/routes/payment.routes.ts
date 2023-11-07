import { Router } from "express";
import {
  cancelPayment,
  newSuscription,
  paymentSuccess,
} from "../controllers/payment.controller";

const router = Router();

router.post("/create-suscription", newSuscription);
router.get("/success", paymentSuccess);
router.get("/cancel", cancelPayment);

export default router;
