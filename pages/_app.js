import Head from 'next/head';
import SEO from 'next-seo.config';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider } from '@chakra-ui/core';
import { customTheme, GlobalStyle } from '@/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <GlobalStyle>
        <Head>
          <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>

        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </GlobalStyle>
    </ChakraProvider>
  );
}

export default MyApp;
