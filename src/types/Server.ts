import { z } from "zod";
import serverService from "../services/server.service";

export const ServerValidator = z.object({
  name: z.string(),
  discord_channel: z.string(),
  contact: z.string().optional(),
  description: z.string().optional(),
  logo: z.string().optional(),
  fivem_id: z.string().refine(async (value) => {
    const existantServer = await serverService.getServerByFivemId(value);
    return existantServer === null;
  }, "Fivem id já registrado"),
  tags: z.array(z.string()).optional(),
  players_count: z.number().optional(),
});

export type ServerRequest = z.infer<typeof ServerValidator>;

export const BatchServerValidator = ServerValidator.array();
