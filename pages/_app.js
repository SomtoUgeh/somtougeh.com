import Head from 'next/head';
import SEO from 'next-seo.config';
import { DefaultSeo } from 'next-seo';
import customTheme, { GlobalStyle } from '@/styles/theme';
import { ColorModeProvider, ThemeProvider } from '@chakra-ui/core';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider value="light">
        <GlobalStyle>
          <Head>
            <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
          </Head>

          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
