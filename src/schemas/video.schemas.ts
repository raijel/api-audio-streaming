import { z } from "zod";

export const uploadAudioSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .refine(
      (value: string) => {
        return !/<|>/.test(value);
      },
      {
        message: "Title cannot contain < or >",
      }
    ),
  year: z.number({
    required_error: "Year is required",
  }),
});
