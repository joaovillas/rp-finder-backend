import { NextFunction, Request, Response } from "express";
import { getUUIDFromToken, isValidToken } from "../utils/jwt";

export const isAuth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");

  if (!authHeader) {
    const error = new Error("Not authenticated.");
    res.status(401);
    throw error;
  }

  const token = authHeader.split(" ")[1];

  if (!token || token === "") {
    const error = new Error("Not authenticated.");
    res.status(401);
    throw error;
  }
  const isValid = isValidToken(token);

  if (!isValid) {
    const error = new Error("Not authenticated.");
    res.status(401);
    throw error;
  }

  const userId = getUUIDFromToken(token);
  req.headers["X-UserId"] = userId;
  next();
};
