import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './components/GlobalStyles';
import ReportVrt from './ReportVrt';

ReactDOM.createRoot(document.getElementById('root_vrt') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <ReportVrt />
  </React.StrictMode>
);
