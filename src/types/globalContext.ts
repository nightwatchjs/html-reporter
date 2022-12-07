import { Environment } from '../transform';

export {};

export interface IGlobalContext {
  environment: Environment;
  stats: SuiteStats;
  metadata: ReportMetadata;
}

interface SuiteStats {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  time: {
    hour?: number;
    min?: number;
    sec?: number;
  };
}

interface ReportMetadata {
  timestamp: number;
  date: number;
}
