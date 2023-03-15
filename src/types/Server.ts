import { z } from "zod";
import serverService from "../services/server.service";

export const ServerValidator = z.object({
  name: z.string(),
  discord_channel: z.string().refine(async (value) => {
    const discord = await serverService.getServerByDiscord(value);

    if (discord) {
      return false;
    }

    return true;
  }, "Discord já cadastrado"),
  contact: z.string().optional(),
  description: z.string().optional(),
  logo: z.string().optional(),
  tags: z
    .array(z.string().max(30, "Utilize tags com tamanho até 30"))
    .max(10, "Utilize até 10 tags")
    .optional(),
});
