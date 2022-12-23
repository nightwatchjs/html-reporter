import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import Report from './Report';
import { StyledEngineProvider } from '@mui/material/styles';
import { GlobalContextProvider } from './contexts/GlobalContext';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback';

const Wrapper = styled.section`
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
          <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.reload()}>
            <Wrapper>
              <GlobalContextProvider>
                <Report />
              </GlobalContextProvider>
            </Wrapper>
          </ErrorBoundary>
        </React.StrictMode>
      </StyledEngineProvider>
    </ThemeProvider>
  );
});
