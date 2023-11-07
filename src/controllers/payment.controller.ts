import { Request, Response } from "express";
import Stripe from "stripe";
import { STRIPE_SECRET_KEY, LOCAL_PORT } from "../config";
import { prisma } from "../utils/prismaClient";

const stripe = new Stripe(STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
  typescript: true,
});

export const newSuscription = async (req: Request, res: Response) => {
  try {
    if (req.user) {
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            price_data: {
              product_data: {
                name: "Suscription",
                description: "Suscription to the app",
              },
              currency: "usd",
              unit_amount: 999, // $9.99
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        success_url: `http://localhost:${LOCAL_PORT}/api/success`,
        cancel_url: `http://localhost:${LOCAL_PORT}/api/cancel`,
      });

      await prisma.suscription.create({
        data: {
          userId: req.user.id,
          createdAt: new Date().setMonth(new Date().getMonth() + 1),
        },
      });
      return res.status(200).json(session);
    }
    return res.status(401).json({ message: "Unauthorized" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};
export const paymentSuccess = (req: Request, res: Response) => {
  return res.status(200).json({ message: "Payment success" });
};
export const cancelPayment = (req: Request, res: Response) => {
  return res.status(200).json({ message: "Payment canceled" });
};
