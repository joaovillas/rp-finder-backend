import { z } from "zod";

/**
 * 
 * model Permission {
  id         String              @unique @default(uuid())
  name       String
  createdAt  DateTime            @default(now())
  Permission UserHasPermission[]
}
 * 
 */


export const PermissionValidator = z.object({
  name: z.string(),
});

export type PermissionValidator = z.infer<typeof PermissionValidator>;