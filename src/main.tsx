import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Report from './Report';
import { StyledEngineProvider } from '@mui/material/styles';
import { GlobalContextProvider } from './contexts/GlobalContext';

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

window.addEventListener('load', () => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <React.StrictMode>
          <GlobalStyles />
          <Wrapper>
            <GlobalContextProvider>
              <Report />
            </GlobalContextProvider>
          </Wrapper>
        </React.StrictMode>
      </StyledEngineProvider>
    </ThemeProvider>
  );
});
