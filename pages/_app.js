import App from 'next/app';
import { ApolloProvider } from 'react-apollo';
import withApollo from '../lib/withApollo';

class WhaleScout extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(WhaleScout);
