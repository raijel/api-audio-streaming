"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadAudioSchema = void 0;
const zod_1 = require("zod");
exports.uploadAudioSchema = zod_1.z.object({
    title: zod_1.z
        .string({
        required_error: "Title is required",
    })
        .refine((value) => {
        return !/<|>/.test(value);
    }, {
        message: "Title cannot contain < or >",
    }),
    year: zod_1.z.number({
        required_error: "Year is required",
    }),
});
