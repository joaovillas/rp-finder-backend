import { NextFunction, Response } from "express";
import { z } from "zod";

export const responseHandler = (error: any, response: Response) => {
  if (error instanceof z.ZodError) {
    return response.status(422).send({ message: error });
  }

  return response.status(400).send({ message: error.message });
};

export const responseBody = (
  response: Response,
  next: NextFunction
) => {
  const status = response.statusCode;
  const body = response.json();

  console.log('to aqui');
  next();
};
