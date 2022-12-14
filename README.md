# hacky-node-template v2

🏄‍♂️ A type-safe Node.js template to quickly get started building with [Fastify](https://fastify.io).

## Tech-stack

- [Fastify](https://fastify.io) - Fast and low overhead web framework, for Node.js.
- [Prisma](https://prisma.io) - Type-safe ORM to ship code which doesn't break during production.
- [MongoDB](https://mongodb.com) - A NoSQL database.
- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager

## Getting started

1. If you haven't installed pnpm yet then go ahead and install it via npm/yarn.

   ```bash
   yarn add -g pnpm # yarn
   npm install -g pnpm # npm
   ```

2. Click on "Use this template" and you are ready to ship 🏄‍♂️
3. Install all the dependencies via `pnpm i` command.
4. Create `.env` file and add in your MongoDB connection URI

   ```
   DATABASE_URL=your-mongodb-connection-uri
   ```

5. Open a new terminal window and run `pnpm watch`, this would re-build all the files on any kind of file changes under the `src` folder.
6. Open a new terminal window and run `pnpm dev`, this would spin up a local development server at http://localhost:3000
7. The database schema is stored within the [`prisma/schema.prisma`](./prisma/schema.prisma) file. If you want to have cross-file model relations, then you would need to use something like [Prismix](https://github.com/jamiepine/prismix).
8. Deploy your Node.js application to [Railway](https://railway.app) within seconds

   [![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template/hAVE3a?referralCode=hhzWkP)

Made by [@0xMukesh](https://twitter.com/0xMukesh)
