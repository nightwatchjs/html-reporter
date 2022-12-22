export const makeLink = (stacktrace?: string) => {
  const urlToEncode = `https://github.com/nightwatchjs/html-reporter/issues/new?title=[Bug]: Report failed to Render&amp;body=
    
  [Enter feedback here]
    
  ---

  **Error Details**
  \`\`\`javascript
  ${stacktrace}
  \`\`\`

  <!-- Nightwatch report is available in window object \`window.nightwatchReport\`. Providing this report will help us debug faster. -->

  <details>
  <summary>Nightwatch Report</summary>
  \`\`\`json
  \`\`\`
</details>    
    `;
  window.open(encodeURI(urlToEncode));
};
