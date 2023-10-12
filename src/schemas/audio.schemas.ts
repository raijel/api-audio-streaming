import { z } from "zod";

export const uploadAudioSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  year: z.number({
    required_error: "Year is required",
  }),
});
