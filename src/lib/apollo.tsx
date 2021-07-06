/* /lib/apollo.js */

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { getStrapiURL, server } from './api';

// const API_URL = `http://localhost:1337`;
const API_URL = server;

const token = process.env.JWT;

if (typeof window !== `undefined`) {
  console.log(window.localStorage.getItem(`token`));

  console.log(token);
}

const httpLink = createHttpLink({
  uri: `${API_URL}/graphql`,
  credentials: `same-origin`,
});

// export default withApollo(apolloClient);
const authLink = setContext((_, { headers }) =>
  // get the authentication token from local storage if it exists

  // return the headers to the context so httpLink can read them
  ({
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  }),
);
const client = new ApolloClient({
  link: authLink.concat(httpLink),

  cache: new InMemoryCache(),
});
export default client;
