import { z } from "zod";
import authService from "../services/auth.service";

export const UserValidator = z.object({
  name: z.string(),
  email: z
    .string()
    .email("E-mail inválido")
    .refine(async (email) => {
      const user = await authService.getUserByEmail(email);
      if (user) {
        return false;
      }
      return true;
    }, "email já cadastrado"),
  birth: z.string(),
  phone: z.string().optional(),
  password: z.string().min(6, "A senha precisa ter no mínimo 6 caracteres"),
});

export const LoginValidator = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string(),
});

export type Login = z.infer<typeof LoginValidator>;
