import { z } from "zod";
import serverService from "../services/server.service";

export const ServerValidator = z.object({
  name: z.string(),
  discord_channel: z.string(),
  contact: z.string().optional(),
  description: z.string().optional(),
  logo: z.string().optional(),
  tags: z
    .array(z.string())
    .optional(),
});

export type ServerRequest = z.infer<typeof ServerValidator>;

export const BatchServerValidator = ServerValidator.array();
