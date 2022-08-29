import fastify from "fastify";
import fastifyNow from "fastify-now";
import path from "path";
import dotenv from "dotenv";

import prismaPlugin from "@/plugins/prisma";

dotenv.config();

const server = fastify({
  logger: process.env.NODE_ENV === "development",
});

server.register(prismaPlugin);

server.register(fastifyNow, {
  routesFolder: path.join(__dirname, "./routes"),
  pathPrefix: "/api",
});

const port = Number(process.env.PORT) || 3000;

server.listen({ port: port }).then(() => {
  console.log(`[🏄‍♂️] The server is running at port ${port}`);
});
