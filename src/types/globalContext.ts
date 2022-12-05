export {};

export interface IGlobalContext {
  stats: SuiteStats;
}

export interface SuiteStats {
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
