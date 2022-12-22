import { appendFileSync, copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export const writeNightwatchHTMLReport = (destFolder: string, jsonReportObject: string, product = 'HTML'): void => {
  // Create Destination Folder
  mkdirSync(destFolder, { recursive: true });

  const indexFile = join(__dirname, product, 'index.html');
  const destinationReportFile = join(destFolder, 'index.html');
  copyFileSync(indexFile, destinationReportFile);

  appendFileSync(
    destinationReportFile,
    `<script>window.nightwatchReport = ${jsonReportObject}</script>`
  );
};
