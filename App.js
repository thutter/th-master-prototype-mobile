import 'react-native-gesture-handler';

import React from 'react';
import { ApolloProvider } from '@apollo/client/react';

import RootNavigation from './src/navigation/RootNavigation';
import client from './src/config/client';

const App = () => (
  <ApolloProvider client={client}>
    <RootNavigation />
  </ApolloProvider>
);

export default App;
