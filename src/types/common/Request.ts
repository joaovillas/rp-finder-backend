import { Request } from "express";

export interface RequestValidation<T> extends Request {
  body: T;
}
