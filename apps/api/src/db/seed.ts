import { PrismaClient } from "@prisma/client";
import { Card } from "~/types/__generated__/graphql";

const prisma = new PrismaClient();

async function main() {
  const createdAt = new Date();
  const updatedAt = createdAt;

  const cards: Card[] = [
    {
      id: 1,
      front: "hold one's head up",
      back: "gain the strength need to hold one's head up",
      createdAt,
      updatedAt,
    },
    {
      id: 2,
      front: "roll over",
      back: "turn from lying on one's back to being on one's tummy and vice versa",
      createdAt,
      updatedAt,
    },
    {
      id: 3,
      front: "crawl",
      back: "move on one's hands and knees",
      createdAt,
      updatedAt,
    },
    {
      id: 4,
      front: "sit up",
      back: "sit independently",
      createdAt,
      updatedAt,
    },
  ];

  await prisma.card.createMany({
    data: cards,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
