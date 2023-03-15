import prisma from "../config/ORM";

const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });

  return user;
};

export default {
  getUserById,
};
