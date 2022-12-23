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
      min-height: 100%;
    }

    img, picture, video, canvas, svg {
      max-width: 100%;
    }

    input, button, textarea, select {
      font: inherit;
    }

    button {
      all: unset;
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
      height: 100vh;
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
      font-family: var(--font-family-source-sans-pro);
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
    --color-grey-10: ${COLORS.neutrals[10]};
    --color-grey-20: ${COLORS.neutrals[20]};
    --color-grey-30: ${COLORS.neutrals[30]};
    --color-grey-40: ${COLORS.neutrals[40]};
    --color-grey-50: ${COLORS.neutrals[50]};
    --color-grey-60: ${COLORS.neutrals[60]};
    --color-grey-70: ${COLORS.neutrals[70]};
    --color-grey-80: ${COLORS.neutrals[80]};
    --color-grey-90: ${COLORS.neutrals[90]};
    --color-grey-100: ${COLORS.neutrals[100]};
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
    --light-primary-background-10: hsla(25, 35%, 93%, 0.5);
    --light-color-red-background-10: hsla(0, 55%, 94%, 0.5);
    --list-color-secondary-background-10: hsla(180, 17%, 92%, 0.5);
    --color-dark-background-text: var(--color-grey-10);
    /* Font Weight */
    --font-weight-light: 300;
    --font-weight-semi-light: 400;
    --font-weight-regular: 500;
    --font-weight-bold: 600;
    /* Font Size */
    --font-size-10: calc(10 / 16 * 1rem);
    --font-size-12: calc(12 / 16 * 1rem);
    --font-size-14: calc(14 / 16 * 1rem);
    --font-size-16: calc(16 / 16 * 1rem);
    --font-size-18: calc(18 / 16 * 1rem);
    --font-size-20: calc(20 / 16 * 1rem);
    --font-size-24: calc(24 / 16 * 1rem);
    --font-size-26: calc(26 / 16 * 1rem);
    --font-size-32: calc(32 / 16 * 1rem);
    --font-size-36: calc(36 / 16 * 1rem);
    --font-size-42: calc(42 / 16 * 1rem);
    /* Line Height */
    --line-height-16: calc(16 / 16 * 1rem);
    --line-height-20: calc(20 / 16 * 1rem);
    --line-height-24: calc(24 / 16 * 1rem);
    --line-height-28: calc(28 / 16 * 1rem);
    --line-height-32: calc(32 / 16 * 1rem);
    --line-height-36: calc(36 / 16 * 1rem);
    --line-height-40: calc(40 / 16 * 1rem);
    --line-height-48: calc(48 / 16 * 1rem);
    --line-height-56: calc(56 / 16 * 1rem);
    --line-height-64: calc(64 / 16 * 1rem);
    /* Font family */
    --font-family-source-sans-pro: 'Source Sans Pro', -apple-system, sans-serif;
    --font-family-menlo: 'Menlo', -apple-system, sans-serif;

    /* Border Radius */
    --border-radius-3: calc(3 / 16 * 1rem);
    --border-radius-4: calc(4 / 16 * 1rem);
    --border-radius-5: calc(5 / 16 * 1rem);
    --border-radius-8: calc(8 / 16 * 1rem);

    /* Padding */
    --padding-4: calc(4 / 16 * 1rem);
    --padding-8: calc(8 / 16 * 1rem);
    --padding-9: calc(9 / 16 * 1rem);
    --padding-12: calc(12 / 16 * 1rem);
    --padding-16: calc(16 / 16 * 1rem);
    --padding-18: calc(18 / 16 * 1rem);
    --padding-20: calc(20 / 16 * 1rem);
    --padding-24: calc(24 / 16 * 1rem);
    --padding-40: calc(40 / 16 * 1rem);

    /* Gap */
    --gap-4: calc(4 / 16 * 1rem);
    --gap-5: calc(5 / 16 * 1rem);
    --gap-6: calc(6 / 16 * 1rem);
    --gap-8: calc(8 / 16 * 1rem);
    --gap-12: calc(12 / 16 * 1rem);
    --gap-16: calc(16 / 16 * 1rem);
    --gap-20: calc(20 / 16 * 1rem);

    /* Margin */
    --margin-2: calc(2 / 16 * 1rem);
    --margin-4: calc(4 / 16 * 1rem);
    --margin-8: calc(8 / 16 * 1rem);
    --margin-10: calc(10 / 16 * 1rem);
    --margin-12: calc(12 / 16 * 1rem);
    --margin-20: calc(20 / 16 * 1rem);
    --margin-40: calc(40 / 16 * 1rem);

    /* Border */
    --border-1: calc(1 / 16 * 1rem);
    --border-2: calc(2 / 16 * 1rem);

    --log-view-height: calc(1444 / 16 * 1rem);

    .blue-text-color {
      color: var(--color-blue-60);
    }

    .red-text-color {
      color: var(--color-red-60);
    }

    .green-text-color {
      color: var(--color-green-60);
    }
  }
`;
const GlobalStylesWrapper = () => {
  return <GlobalStyles />;
};

export default React.memo(GlobalStylesWrapper);
