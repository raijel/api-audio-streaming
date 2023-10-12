"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInSchema = exports.signUpSchema = void 0;
const zod_1 = require("zod");
exports.signUpSchema = zod_1.z.object({
    username: zod_1.z
        .string({
        required_error: "Username is required",
    })
        .max(20, { message: "Username must be less than 20 characters" })
        .min(6, { message: "Username must be at least 6 character" })
        .refine((value) => !/\s/.test(value) && /^[a-zA-Z0-9]+$/.test(value), {
        message: "Only numbers & letters",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email({
        message: "Invalid email",
    }),
    password: zod_1.z
        .string({
        required_error: "Password is required",
    })
        .min(8, {
        message: "Password must be at least 8 character",
    })
        .refine((password) => {
        return (/[A-Z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*]/.test(password) &&
            !/\s/.test(password));
    }, {
        message: "Password must contain at least one uppercase letter, one number, one symbol and no spaces",
    }),
});
exports.signInSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email({ message: "Invalid email" }),
    password: zod_1.z.string({
        required_error: "Password is required",
    }),
});
