import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";

import { getAllowOrigins } from "~/utils/cors";
import resolvers from "./resolvers";

async function main() {
  const schema = loadSchemaSync(join(__dirname, "./schema.graphql"), {
    loaders: [new GraphQLFileLoader()],
  });

  const server = new ApolloServer({
    schema: addResolversToSchema({ schema, resolvers }),
    cors: {
      origin: getAllowOrigins(),
    },
  });

  const { url } = await server.listen({ port: process.env.PORT || 4000 });
  console.log(`🚀 Server is running at ${url}`);
}

main();
