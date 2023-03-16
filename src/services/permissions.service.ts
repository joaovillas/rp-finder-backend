import prisma from "../config/ORM";
import { PermissionValidator } from "../types/Permission";

const getPermissions = async () => {
  const permissions = await prisma.permission.findMany();

  return permissions;
};

const createPermission = async (dto: PermissionValidator) => {
  const permission = await prisma.permission.create({
    data: {
      name: dto.name,
    },
  });

  return permission;
};

const getPermissionByUserId = async (userId: string) => {
  const permissions = await prisma.userHasPermission.findMany({
    where: {
      userId,
    },
    include: {
      Permission: true,
    },
  });

  return permissions;
};

const assignPermissionToUser = async (userId: string, permissionId: string) => {
  const permission = await prisma.userHasPermission.create({
    data: {
      userId,
      permissionId,
    },
  });

  return permission;
};

export default {
  getPermissions,
  createPermission,
  getPermissionByUserId,
  assignPermissionToUser,
};
