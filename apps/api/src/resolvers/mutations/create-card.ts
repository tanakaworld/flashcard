import { MutationResolvers } from "~/types/__generated__/graphql";
import { prisma } from "~/db";

export const createCard: MutationResolvers["createCard"] = async (
  _,
  { input: { front, back } }
) => {
  const card = await prisma.card.create({
    data: {
      front,
      back,
    },
  });
  return card;
};
