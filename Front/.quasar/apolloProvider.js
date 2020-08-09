import apolloClient from './apolloClient';
import VueApollo from 'vue-apollo';

export const apolloProvider = new VueApollo({
  // Multiple clients support
  // Use the 'client' option inside queries
  // or '$client' on the apollo definition
  clients: {
    // a: apolloClientA,
    // b: apolloClientB
  },
  // Default client
  defaultClient: apolloClient,
  // Default 'apollo' definition
  defaultOptions: {
    // See 'apollo' definition
    // For example: default query options
    $query: {
      loadingKey: 'loading',
      fetchPolicy: 'cache-and-network'
    }
  },
  // Watch loading state for all queries
  // See 'Smart Query > options > watchLoading' for detail
  watchLoading(isLoading, countModifier) {
    loading += countModifier;
    console.log('Global loading', loading, countModifier);
  },
  // Global error handler for all smart queries and subscriptions
  errorHandler(error) {
    console.log('Global error handler');
    console.error(error);
  },
  // Globally turn off prefetch ssr
  prefetch: Boolean
});
