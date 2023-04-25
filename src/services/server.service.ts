import { Server, ServerTags } from "../../prisma/client";
import prisma from "../config/ORM";
import { BatchServerValidator, ServerValidator } from "../types/Server";
import serverTagsService from "./server-tags.service";

interface ServerResponse extends Server {
  relatedServers?: Server[];
}

const create = async (server: Server) => {
  const validatedServer = await ServerValidator.parseAsync(server);

  const newServer = await prisma.server.create({
    include: {
      tags: true,
      ServerAvaliation: true,
      ServerPlayers: true,
    },
    data: {
      fivem_id: validatedServer.fivem_id,
      discord_channel: validatedServer.discord_channel,
      name: validatedServer.name,
      contact: validatedServer.contact,
      description: validatedServer.description,
      logo: validatedServer.logo,
      ServerPlayers: {
        create: {
          totalPlayers: validatedServer.players_count,
        },
      },
      tags: {
        createMany: {
          skipDuplicates: true,
          data:
            validatedServer.tags?.map((tag) => {
              return {
                name: tag,
              };
            }) || [],
        },
      },
    },
  });

  return newServer;
};

const getAll = async () => {
  const servers = await prisma.serverPlayers.findMany({
    select: {
      totalPlayers: true,
      Server: {
        include: {
          tags: true,
        },
      },
    },
    orderBy: {
      totalPlayers: "desc",
    },
  });

  const serversTreated = servers.map((s) => {
    const server = s.Server;
    return {
      ...server,
      totalPlayers: s.totalPlayers,
    };
  });

  return serversTreated;
};

const getServerByDiscord = async (discord: string) => {
  const server = await prisma.server.findFirst({
    where: {
      discord_channel: discord,
    },
  });

  return server;
};

const getServerByFivemId = async (id: string) => {
  const server = await prisma.server.findFirst({
    where: {
      fivem_id: id,
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
  getServerByFivemId,
};
