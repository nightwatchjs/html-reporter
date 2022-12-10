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
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
}

interface ReportMetadata {
  timestamp: number;
  date: number;
}
