import { css } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    ${() => css`
      background: ${theme.colors.primaryBg};
    `}
  }
`;
