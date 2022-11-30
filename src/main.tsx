import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Report from './Report';

const Wrapper = styled.section`
  max-width: 1280px;
  margin: auto;
  background: var(--color-grey-20);
`;

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: 'inherit'
      }
    }
  }
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyles />
      <Wrapper>
        <Report />
      </Wrapper>
    </React.StrictMode>
  </ThemeProvider>
);
