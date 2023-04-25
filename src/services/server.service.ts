import { Server } from "../../prisma/client";
import prisma from "../config/ORM";
import { BatchServerValidator, ServerValidator } from "../types/Server";
import serverTagsService from "./server-tags.service";

interface ServerResponse extends Server {
  relatedServers?: Server[];
}

const create = async (server: Server) => {
  const validatedServer = await ServerValidator.parseAsync(server);

  const newServer = await prisma.server.create({
    data: {
      discord_channel: validatedServer.discord_channel,
      name: validatedServer.name,
      contact: validatedServer.contact,
      description: validatedServer.description,
      logo: validatedServer.logo,
    },
  });

  if (validatedServer.tags) {
    await serverTagsService.createTags(validatedServer.tags, newServer.id);
  }

  return newServer;
};

const createBatch = async (server: ServerResponse[]) => {
  const validatedServer = await BatchServerValidator.parseAsync(server);

  const servers = await prisma.server.createMany({
    data: validatedServer.map((server) => {
      return {
        discord_channel: server.discord_channel,
        name: server.name,
        contact: server.contact,
        description: server.description,
        logo: server.logo,
      };
    }),
  });

  return servers;
};

const getAll = async () => {
  const servers = await prisma.server.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      ServerAvaliation: true,
    },
  });

  return servers;
};

const getServerByDiscord = async (discord: string) => {
  const server = await prisma.server.findFirst({
    where: {
      discord_channel: discord,
    },
  });

  return server;
};

const getServerById = async (
  id: string
): Promise<Server | ServerResponse | null> => {
  const server = await prisma.server.findFirst({
    where: {
      id,
    },
    include: {
      tags: true,
    },
  });

  if (!server) {
    return null;
  }

  const relatedServers = await prisma.server.findMany({
    where: {
      id: {
        not: server.id,
      },
      tags: {
        every: {
          name: {
            in: server.tags.map((tag) => tag.name),
          },
        },
      },
    },
  });

  const serverResponse: ServerResponse = {
    ...server,
    relatedServers,
  };

  return serverResponse;
};

const getServerByTags = async (tag: string) => {
  const servers = await prisma.server.findMany({
    where: {
      tags: {
        some: {
          name: {
            startsWith: tag,
            mode: "insensitive",
          },
        },
      },
    },
    include: {
      tags: true,
    },
  });
  return servers;
};

const getAllServerTags = async () => {
  const tags = await serverTagsService.getTags();

  return tags;
};

export default {
  getServerById,
  create,
  getAll,
  getServerByDiscord,
  getServerByTags,
  getAllServerTags,
  createBatch,
};
