import { User } from "@prisma/client";
import prisma from "../config/ORM";
import { Login, LoginValidator, UserValidator } from "../types/User";
import { generateToken } from "../utils/jwt";

const createUser = async (dto: User) => {
  const validatedUser = await UserValidator.parseAsync(dto);

  const user = await prisma.user.create({
    data: {
      ...validatedUser,
      birth: new Date(validatedUser.birth),
    },
  });

  return {
    ...user,
    token: generateToken(user),
  };
};

const login = async (dto: Login) => {
  const validatedLogin = await LoginValidator.parseAsync(dto);

  const user = await prisma.user.findFirst({
    where: {
      email: validatedLogin.email,
      password: validatedLogin.password,
    },
  });

  if (!user) {
    throw new Error("Usuário ou senha incorretos");
  }

  return {
    ...user,
    token: generateToken(user),
  };
};

const getUserByEmail = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return user;
};

export default {
  createUser,
  getUserByEmail,
  login,
};
