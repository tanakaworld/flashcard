import client from "~/graphql/client";
import { ApolloClient } from "@apollo/client";

test("client should be an instance", () => {
  expect(client instanceof ApolloClient).toBeTruthy();
});
