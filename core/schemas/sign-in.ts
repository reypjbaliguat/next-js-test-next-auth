import * as z from "zod";

const signInSchema = z.object({
  email: z
    .string({
      required_error: "This field is required.",
    })
    .min(1, { message: "This field is required." })
    .email({ message: "Invalid email format" })
    .max(124, "Email must only have maximum of 124 characters"),
  password: z
    .string({
      required_error: "This field is required.",
    })
    .min(1, { message: "This field is required." }),
});

export default signInSchema;

export type SignInFormData = z.infer<typeof signInSchema>;
