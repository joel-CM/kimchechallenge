import { ApolloClient, InMemoryCache } from "@apollo/client";

// client
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com",
  cache: new InMemoryCache(),
});

export default client;
