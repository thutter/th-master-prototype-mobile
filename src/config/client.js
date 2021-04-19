import { ApolloClient, InMemoryCache } from '@apollo/client';
import { STRAPI_BASE_URL } from './constants';

const client = new ApolloClient({
  uri: `${STRAPI_BASE_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default client;
