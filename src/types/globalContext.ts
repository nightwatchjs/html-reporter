import { Environments } from '../transform';

export {};

export interface IGlobalContext {
  environments: Environments;
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
