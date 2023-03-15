import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../../prisma/client";

export const generateToken = (user: User) => {
  const token = jwt.sign(
    {
      data: user,
      exp: Math.floor(Date.now() / 1000) + 60 * 60,
    },
    "MySecretKey"
  );

  return token;
};

export const isValidToken = (token: string) => {
  try {
    return !!jwt.verify(token, "MySecretKey");
  } catch (err) {
    return false;
  }
};

export const getUUIDFromToken = (token: string) => {
  const decoded = jwt.verify(token, "MySecretKey");

  if (!decoded) {
    throw new Error("Token inválido");
  }
  return (decoded as JwtPayload).data.id;
};
