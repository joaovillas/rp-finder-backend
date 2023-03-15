import prisma from "../config/ORM";

const createTags = async (tags: string[], serverUUID: string) => {
  const tagsArray = tags.map((tag) => {
    return {
      name: tag,
      serverId: serverUUID,
    };
  });

  const newTags = await prisma.serverTags.createMany({
    data: tagsArray,
  });

  return newTags;
};

const getTags = async (serverUUID?: string) => {
  const tags = await prisma.serverTags.findMany({
    select: {
      name: true,
    },
    distinct: ["name"],
  });

  return tags;
};

export default {
  createTags,
  getTags,
};
