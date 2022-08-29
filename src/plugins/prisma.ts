import fp from "fastify-plugin";
import { FastifyPluginAsync } from "fastify";
import { PrismaClient } from "@prisma/client";

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}

const prismaPlugin: FastifyPluginAsync = fp(async (server, _options) => {
  const prisma = new PrismaClient();

  server.decorate("prisma", prisma);

  server.addHook("onReady", async () => {
    try {
      await prisma.$connect();
      console.log("[📦] Connected to MongoDB");
    } catch (err) {
      console.error("[⚠] An error occurred while connecting to MongoDB");
      console.error(err);
    }
  });

  server.addHook("onClose", async (server) => {
    await server.prisma.$disconnect();
  });
});

export default prismaPlugin;
