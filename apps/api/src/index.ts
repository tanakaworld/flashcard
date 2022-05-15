import { join } from "path";
import { loadSchemaSync } from "@graphql-tools/load";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { addResolversToSchema } from "@graphql-tools/schema";
import { ApolloServer } from "apollo-server";
import { Card, Resolvers } from "./types/__generated__/graphql";

const cards: Card[] = [
  {
    id: "1",
    front: "hold one's head up",
    back: "gain the strength need to hold one's head up",
  },
  {
    id: "2",
    front: "roll over",
    back: "turn from lying on one's back to being on one's tummy and vice versa",
  },
  {
    id: "3",
    front: "crawl",
    back: "move on one's hands and knees",
  },
  {
    id: "4",
    front: "sit up",
    back: "sit independently",
  },
];

const schema = loadSchemaSync(join(__dirname, "./schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const resolvers: Resolvers = {
  Query: {
    cards: () => cards,
  },
};

const server = new ApolloServer({
  schema: addResolversToSchema({ schema, resolvers }),
});

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Server is ready at ${url}`);
});
