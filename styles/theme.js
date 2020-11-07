import { Global, css } from '@emotion/core';
import { CSSReset, theme } from '@chakra-ui/core';

const breakpoints = [
  '320px',
  '375px',
  '425px',
  '768px',
  '1024px',
  '1440px',
  '2560px'
];

breakpoints.mobileS = breakpoints[0];
breakpoints.mobileM = breakpoints[1];
breakpoints.mobileL = breakpoints[2];
breakpoints.tablet = breakpoints[3];
breakpoints.laptop = breakpoints[4];
breakpoints.laptopL = breakpoints[5];
breakpoints.desktop = breakpoints[6];

const GlobalStyle = ({ children }) => {
  // const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ::selection {
            color: #fefefe;
            background-color: #47a3f3;
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      />
      {children}
    </>
  );
};

export { GlobalStyle };

export default {
  ...theme,
  breakpoints
};
