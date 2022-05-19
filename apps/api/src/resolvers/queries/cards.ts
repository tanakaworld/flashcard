import { QueryResolvers } from "~/types/__generated__/graphql";
import { prisma } from "~/db";

export const cards: QueryResolvers["cards"] = async () => {
  const cards = await prisma.card.findMany();
  return cards;
};
