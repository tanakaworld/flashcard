import { gql } from "@apollo/client";

export const MUTATION_CREATE_CARD = gql`
  mutation CreateCard($input: CreateCardInput) {
    createCard(input: $input) {
      id
      front
      back
      createdAt
      updatedAt
    }
  }
`;
