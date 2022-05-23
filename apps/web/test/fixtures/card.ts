import { Card } from "api";

export const mockCard = (modification: Partial<Card> = {}): Card => {
  const createdAt = new Date();
  const updatedAt = createdAt;

  const id = modification.id || 1;
  return {
    id,
    front: `Test Card ${id} Front`,
    back: `Test Card ${id} Back`,
    createdAt,
    updatedAt,
    ...modification,
  };
};
