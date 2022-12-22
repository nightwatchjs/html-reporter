import { NightwatchHTMLReport } from './types/nightwatch';

export {};
declare global {
  interface Window {
    nightwatchReport: NightwatchHTMLReport;
  }
}
