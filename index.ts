import { appendFileSync, copyFileSync, mkdirSync } from 'fs';
import { join } from 'path';

export const writeNightwatchHTMLReport = (
  destFolder: string,
  destFileName: string,
  jsonReportObject: string,
  product = 'html'
): void => {
  // Create Destination Folder
  mkdirSync(destFolder, { recursive: true });

  const reportFile = join(__dirname, product, 'index.html');
  const destinationReportFile = join(destFolder, destFileName);
  copyFileSync(reportFile, destinationReportFile);

  appendFileSync(
    destinationReportFile,
    `<script>window.nightwatchReport = ${jsonReportObject}</script>`
  );
};
