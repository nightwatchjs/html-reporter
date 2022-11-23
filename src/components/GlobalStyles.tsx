import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { COLORS } from '../constants';

const GlobalStyles = createGlobalStyle`
    /* CSS Reset */

    *, *::before, *::after {
      box-sizing: border-box;
    }

    * {
      margin: 0;
      line-height: 1.5;
      line-height: calc(1em + 0.725rem);
      -webkit-font-smoothing: antialiased;
    }

    html, body {
      height: 100%;
    }

    img, picture, video, canvas, svg {
      max-width: 100%;
    }

    input, button, textarea, select {
      font: inherit;
    }

    p, h1, h2, h3, h4, h5, h6 {
      overflow-wrap: break-word;
    }

    ul {
      padding: 0;
    }
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    body, input, button, select, option {
      font-family: var(--font-family);
      font-weight: var(--font-weight-light);
    }
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: var(--font-weight-bold);
    }
    code {
      font-size: 0.95em;
    }

  :root {
    /* Primary */
    --color-primary-10: ${COLORS.primary[10]};
    --color-primary-20: ${COLORS.primary[20]};
    --color-primary-30: ${COLORS.primary[30]};
    --color-primary-40: ${COLORS.primary[40]};
    --color-primary-50: ${COLORS.primary[50]};
    --color-primary-60: ${COLORS.primary[60]};
    --color-primary-70: ${COLORS.primary[70]};
    --color-primary-90: ${COLORS.primary[90]};
    --color-primary-100: ${COLORS.primary[100]};
    /* Secondary */
    --color-secondary-10: ${COLORS.secondary[10]};
    --color-secondary-20: ${COLORS.secondary[20]};
    --color-secondary-30: ${COLORS.secondary[30]};
    --color-secondary-40: ${COLORS.secondary[40]};
    --color-secondary-50: ${COLORS.secondary[50]};
    --color-secondary-60: ${COLORS.secondary[60]};
    --color-secondary-70: ${COLORS.secondary[70]};
    --color-secondary-90: ${COLORS.secondary[90]};
    --color-secondary-100: ${COLORS.secondary[100]};
    /* Neutrals */
    --color-neutrals-10: ${COLORS.neutrals[10]};
    --color-neutrals-20: ${COLORS.neutrals[20]};
    --color-neutrals-30: ${COLORS.neutrals[30]};
    --color-neutrals-40: ${COLORS.neutrals[40]};
    --color-neutrals-50: ${COLORS.neutrals[50]};
    --color-neutrals-60: ${COLORS.neutrals[60]};
    --color-neutrals-70: ${COLORS.neutrals[70]};
    --color-neutrals-90: ${COLORS.neutrals[90]};
    --color-neutrals-100: ${COLORS.neutrals[100]};
    /* Blue */
    --color-blue-10: ${COLORS.blue[10]};
    --color-blue-20: ${COLORS.blue[20]};
    --color-blue-30: ${COLORS.blue[30]};
    --color-blue-40: ${COLORS.blue[40]};
    --color-blue-50: ${COLORS.blue[50]};
    --color-blue-60: ${COLORS.blue[60]};
    --color-blue-70: ${COLORS.blue[70]};
    --color-blue-90: ${COLORS.blue[90]};
    --color-blue-100: ${COLORS.blue[100]};
    /* Red */
    --color-red-10: ${COLORS.red[10]};
    --color-red-20: ${COLORS.red[20]};
    --color-red-30: ${COLORS.red[30]};
    --color-red-40: ${COLORS.red[40]};
    --color-red-50: ${COLORS.red[50]};
    --color-red-60: ${COLORS.red[60]};
    --color-red-70: ${COLORS.red[70]};
    --color-red-90: ${COLORS.red[90]};
    --color-red-100: ${COLORS.red[100]};
    /* Green */
    --color-green-10: ${COLORS.green[10]};
    --color-green-20: ${COLORS.green[20]};
    --color-green-30: ${COLORS.green[30]};
    --color-green-40: ${COLORS.green[40]};
    --color-green-50: ${COLORS.green[50]};
    --color-green-60: ${COLORS.green[60]};
    --color-green-70: ${COLORS.green[70]};
    --color-green-90: ${COLORS.green[90]};
    --color-green-100: ${COLORS.green[100]};
    /* Orange */
    --color-orange-10: ${COLORS.orange[10]};
    --color-orange-20: ${COLORS.orange[20]};
    --color-orange-30: ${COLORS.orange[30]};
    --color-orange-40: ${COLORS.orange[40]};
    --color-orange-50: ${COLORS.orange[50]};
    --color-orange-60: ${COLORS.orange[60]};
    --color-orange-70: ${COLORS.orange[70]};
    --color-orange-90: ${COLORS.orange[90]};
    --color-orange-100: ${COLORS.orange[100]};

    --color-dark-background: ${COLORS['dark-background']};
    --color-dark-background-text: var(--color-neutrals-10);
    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-semi-light: 400;
    --font-weight-regular: 500;
    --font-weight-bold: 600;
    /* Font family */
    --font-family: 'Source Sans Pro', -apple-system, sans-serif;
  }
`;
const GlobalStylesWrapper = () => {
  return <GlobalStyles />;
};

export default React.memo(GlobalStylesWrapper);
