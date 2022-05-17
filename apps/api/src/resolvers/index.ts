import { Resolvers } from "../types/__generated__/graphql";
import * as Mutation from "./mutations";
import * as Query from "./queries";

const resolvers: Resolvers = {
  Mutation,
  Query,
};

export default resolvers;
