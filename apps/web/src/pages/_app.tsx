import "~/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import client from "~/graphql/client";

function FlashcardApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default FlashcardApp;
