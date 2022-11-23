import React from 'react'
import ReactDOM from 'react-dom/client'
import Report from './Report'
import GlobalStyles from './components/GlobalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <Report />
  </React.StrictMode>
)
