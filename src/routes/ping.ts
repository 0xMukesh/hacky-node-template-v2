import { NowRequestHandler } from "fastify-now";

export const GET: NowRequestHandler<{ Params: { id: string } }> = async (
  _req,
  res
) => {
  return res.status(200).send({
    message: "gm!",
  });
};
