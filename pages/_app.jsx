import React from 'react';
import PropTypes from 'prop-types';
import App from 'next/app';
import Head from 'next/head';
import withRedux from '../src/components/hoc/withRedux';

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href="/static/css/global.css" />
        <title>Pokemon PokeApi</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

CustomApp.getInitialProps = async appContext => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

CustomApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired
};

export default withRedux(CustomApp);
