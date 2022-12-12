import { Environments } from '../transform';

export {};

export interface IGlobalContext {
  environments: Environments;
  stats: SuiteStats;
  metadata: ReportMetadata;
}

export interface IGlobalVrtContext {
  environments: Environments;
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
