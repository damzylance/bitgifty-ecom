import { z } from "zod";

export const dashBoardSignUpSchema = z.object({
  business_name: z.string().min(1, { message: "Business name is required" }),
  cac_number: z.string().min(1, { message: "CAC number is required" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  password: z
    .string()
    .refine(
      (value) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value ?? ""),
      "Password must have at least 8 characters, have at least a digit and at least an Upper case letter"
    ),
  confirm_password: z.string().min(1, { message: "Currency is required" }),
  remember_me: z.boolean().optional(),
});

export const dashBoardSignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email("This is not a valid email."),
  password: z
    .string()
    .refine(
      (value) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value ?? ""),
      "Password must have at least 8 characters, have at least a digit and at least an Upper case letter"
    ),
});
export const obtainTokenSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email("This is not a valid email."),
  password: z
    .string()
    .refine(
      (value) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value ?? ""),
      "Password must have at least 8 characters, have at least a digit and at least an Upper case letter"
    ),
});

export const forgetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email("This is not a valid email."),
});

export const resetPasswordSchema = z.object({
  password: z
    .string()
    .refine(
      (value) => /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(value ?? ""),
      "Password must have at least 8 characters, have at least a digit and at least an Upper case letter"
    ),
});
export const sendBankSchema = z.object({
  bank: z.string().min(1, { message: "Select bank" }),
  currency: z.string().min(1, { message: "Currency is required" }),
  amount_to_send: z.string().min(1, { message: "Enter amount to send" }),
});

export const depositViaMobileSchema = z.object({
  amount: z
    .string()
    .refine((amount) => parseFloat(amount) !== 0, "Zero amount not allowed"),
});

export const withdrawViaMobileSchema = z.object({
  amount: z
    .string()
    .refine(
      (amount) => parseFloat(amount) >= 1,
      "Amount must not be less than 1406"
    ),
});

export const withdrawPaymentSchema = z.object({
  amount: z.string().min(1, { message: "Enter amount" }),
  account_address: z.string().min(1, { message: "Address is required" }),
  chain: z.string().min(1, { message: "Chain is required" }),
});
