import { ApolloServer } from "apollo-server";

export function getAllowOrigins() {
  const origin: ApolloServer["cors"]["origin"] = [];

  if (process.env.ORIGIN_NAME_WEB) origin.push(process.env.ORIGIN_NAME_WEB);
  if (process.env.ORIGIN_NAME_ADMIN) origin.push(process.env.ORIGIN_NAME_ADMIN);

  return origin;
}
