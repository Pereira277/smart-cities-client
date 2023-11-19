import { z } from "zod";

// register schema
export const signUpSchema = z
  .object({
    email: z.string().email(),
    name: z.string().min(3).max(20),
    password: z
      .string()
      .min(6, "Password should have at least 6 digits")
      .max(20)
      .regex(
        /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Password too weak"
      ),
    confirmPassword: z.string().min(6).max(20),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

// login schema
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(20),
});
export type TSignInSchema = z.infer<typeof signInSchema>;
