\import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import GlobalStyles from './components/GlobalStyles';
import ReportVrt from './ReportVrt';
import { StyledEngineProvider } from '@mui/material/styles';
import { GlobalContext } from './globalContext';
import { transformNightwatchVrtReport } from './transform';

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
  ReactDOM.createRoot(document.getElementById('root_vrt') as HTMLElement).render(
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <React.StrictMode>
          <GlobalStyles />
          <Wrapper>
            <GlobalContext.Provider value={transformNightwatchVrtReport()}>
              <ReportVrt />
            </GlobalContext.Provider>
          </Wrapper>
        </React.StrictMode>
      </StyledEngineProvider>
    </ThemeProvider>
  );
});

