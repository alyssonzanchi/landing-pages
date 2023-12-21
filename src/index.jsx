import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom/client';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/App';
import { theme } from './styles/theme';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: red;

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Container>
        <Home />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  </React.StrictMode>,
);
