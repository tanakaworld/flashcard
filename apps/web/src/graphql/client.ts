import {
  ApolloClient,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GQL_SERVER_URI,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "x-graphql-operation-name": operation.operationName,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GQL_SERVER_URI,
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
