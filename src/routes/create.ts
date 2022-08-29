import { NowRequestHandler } from "fastify-now";
import { FastifyInstance } from "fastify";

export const POST: NowRequestHandler<{
  Body: {
    email: string;
  };
}> = async function (this: FastifyInstance, req, res) {
  try {
    await this.prisma.user.create({
      data: {
        email: req.body.email,
      },
    });

    return res.status(200).send({
      message: `Successfully created an user with email - ${req.body.email}`,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).send({
      message: `Internal server error`,
    });
  }
};
