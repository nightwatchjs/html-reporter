import {  readFileSync } from 'fs';
import { join } from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

let sampleReportPath = join(__dirname, 'sample', 'report.json')

const vrt = true;
if (vrt) {
  sampleReportPath = join(__dirname, 'sample', 'vrtReport.json')
}

/**
 * @returns {import('vite').Plugin}
 */
export function bundle() {
  return {
    name: 'nightwatch-bundle',
    apply: 'serve',
    transformIndexHtml: {
      transform(html, _ctx) {
        const reportData = readFileSync(sampleReportPath,{ encoding: 'utf8' })
        return  html + `<script>window.nightwatchReport = ${reportData}</script>`
      }
    }
  };
}
