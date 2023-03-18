import prisma from "../config/ORM";
import { AvaliationValidator } from "../types/Avaliation";

const createAvaliation = async (body: AvaliationValidator) => {
  const validAvaliation = await AvaliationValidator.parseAsync(body);

  const existsAvaliation = await prisma.serverAvaliation.findFirst({
    where: {
      serverId: validAvaliation.serverId,
      userId: validAvaliation.userId,
    },
  });

  if (existsAvaliation) {
    throw new Error("Avaliação já realizada");
  }

  const newAvaliation = await prisma.serverAvaliation.create({
    data: {
      avaliation: validAvaliation.grade,
      serverId: validAvaliation.serverId,
      userId: validAvaliation.userId,
    },
  });

  return newAvaliation;
};

const getAvaliations = async (
  serverUUID?: string,
  previousDays: number = 7
) => {
  const avaliations = await prisma.serverAvaliation.aggregate({
    _avg: {
      avaliation: true,
    },
    where: {
      serverId: serverUUID,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - previousDays)),
      },
    },
  });

  return avaliations;
};

export default {
  createAvaliation,
  getAvaliations,
};
