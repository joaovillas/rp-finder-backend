import prisma from "../config/ORM";

const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      permissions: true,
    },
  });

  return user;
};

export default {
  getUserById,
};
