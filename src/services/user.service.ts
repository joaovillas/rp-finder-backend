import prisma from "../config/ORM";

const getUserById = async (id: string) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      permissions: {
        select: {
          permission: true,
        },
      },
    },
  });

  console.log(user);

  return user;
};

export default {
  getUserById,
};
