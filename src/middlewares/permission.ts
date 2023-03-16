import { NextFunction, Request, Response } from "express";
import permissionsService from "../services/permissions.service";

export const isAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userId = req.headers["X-UserId"];

  if (!userId) {
    return res.status(401).send("Not authenticated.");
  }

  const permissions = await permissionsService.getPermissionByUserId(
    userId as string
  );


  if (!permissions) {
    return res.status(401).send("Not authenticated.");
  }

  if (permissions.length === 0) {
    return res.status(401).send("Not authenticated.");
  }

  const hasAdmin = permissions.find((p) => p.Permission?.name === "ADMIN");

  if (!hasAdmin) {
    return res.status(401).send("Not authenticated.");
  }

  next();
};
