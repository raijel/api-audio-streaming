"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelPayment = exports.paymentSuccess = exports.newSuscription = void 0;
const stripe_1 = __importDefault(require("stripe"));
const config_1 = require("../config");
const stripe = new stripe_1.default(config_1.STRIPE_SECRET_KEY, {
    apiVersion: "2023-10-16",
    typescript: true,
});
const newSuscription = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session = yield stripe.checkout.sessions.create({
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
                },
            ],
            mode: "subscription",
            success_url: "http://localhost:3000/api/success",
            cancel_url: "http://localhost:3000/api/cancel",
        });
        return res.status(200).json({ session });
    }
    catch (err) {
        return res.status(500).json({ messsage: err.messsage });
    }
});
exports.newSuscription = newSuscription;
const paymentSuccess = (req, res) => { };
exports.paymentSuccess = paymentSuccess;
const cancelPayment = (req, res) => { };
exports.cancelPayment = cancelPayment;
//# sourceMappingURL=payment.controller.js.map