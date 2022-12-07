import { NightwatchHTMLReport } from './types/nightwatch';

export {};
declare global {
  interface Window {
    nightwatchReport: NightwatchHTMLReport;

    // todo: change to nightwatchVrtHtmlReport
    nightwatchVrtReport: NightwatchHTMLReport;
  }
}
