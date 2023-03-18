import { z } from "zod";
import serverService from "../services/server.service";

export const AvaliationValidator = z.object({
  serverId: z.string().refine(async (value) => {
    const server = await serverService.getServerById(value);
    console.log(server);
    if (!server) {
      return false;
    }

    return true;
  }),

  userId: z.string().refine(async (value) => {
    const user = await serverService.getServerById(value);

    if (user) {
      return false;
    }

    return true;
  }),

  grade: z
    .number()
    .min(0, "A nota deve ser maior ou igual a 0")
    .max(10, "A nota deve ser menor ou igual a 10"),
});

export type AvaliationValidator = z.infer<typeof AvaliationValidator>;
