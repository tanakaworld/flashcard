import { gql } from "@apollo/client";

export const QUERY_CARDS = gql`
  query Cards {
    cards {
      id
      front
      back
      createdAt
      updatedAt
    }
  }
`;
