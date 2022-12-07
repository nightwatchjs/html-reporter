import { appendFileSync } from 'fs';
import { join } from 'path';

export const writeNightwatchHTMLReport = (reportPath: string, jsonReport: string): void => {
  // TODO: copy report to destination folder
  appendFileSync(
    join(__dirname, 'dist', 'index.html'),
    `<script>window.nightwatchReport = ${jsonReport}</script>`
  );
};
