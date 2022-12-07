import { appendFileSync, copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export const writeNightwatchHTMLReport = (destFolder: string, jsonReportObject: string): void => {
  // Create Destination Folder
  mkdirSync(destFolder, { recursive: true });

  const indexFile = join(__dirname, 'dist', 'index.html');
  const destinationReportFile = join(destFolder, 'index.html');
  copyFileSync(indexFile, destinationReportFile);

  appendFileSync(
    destinationReportFile,
    `<script>window.nightwatchReport = ${jsonReportObject}</script>`
  );
};
