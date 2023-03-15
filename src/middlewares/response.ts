import { NextFunction, Request, Response } from "express";

export const responseBody = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  const oldJson = res.json;

  res.json = (body) => {
    res.locals.body = body;
    return oldJson.call(res, {
      data: body,
    });
  };

  next();
};
