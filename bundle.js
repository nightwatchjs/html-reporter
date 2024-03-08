import { readFileSync } from 'fs';
import { join } from 'path';
import * as url from 'url';
import process from 'process';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const htmlReportPath = join(__dirname, 'sample', 'htmlReport.json');
const vrtReportPath = join(__dirname, 'sample', 'vrtReport.json');

const isVRT = process.env.VITE_PRODUCT === 'vrt';
const sampleReportPath = isVRT ? vrtReportPath : htmlReportPath;

/**
 * @returns {import('vite').Plugin}
 */
export function bundle() {
  return {
    name: 'nightwatch-bundle',
    apply: 'serve',
    transformIndexHtml: {
      transform(html) {
        const reportData = readFileSync(sampleReportPath, { encoding: 'utf8' });
        return html + `<script>window.nightwatchReport = ${reportData}</script>`;
      }
    }
  };
}
