import { Global, css } from '@emotion/core';
import { extendTheme, useColorMode } from '@chakra-ui/core';

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light'
};

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
};

const customTheme = extendTheme({ config, colors });

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            scroll-behavior: smooth;
          }

          #__next {
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  );
};

export { customTheme, GlobalStyle };
