export {};

export interface NightwatchHTMLReport {
  passed: number;
  failed: number;
  errors: number;
  skipped: number;
  tests: number;
  assertions: number;
  errmessages: any[];
  // TODO: Replace any with it's types
  modules: any;
  envs: Environments;
  stats: Stats;
  metadata: Metadata;
}

export type Environments = Record<
  string,
  {
    metadata: TestMetadata;
    stats: TestStats;
    modules: Record<string, TestModule>;
  }
>;

export interface TestMetadata {
  platformName: string;
  device: string;
  browserName: string;
  browserVersion: string;
  time: number;
  executionMode: string;
}

export interface TestStats {
  passed: number;
  failed: number;
  skipped: number;
  tests: number;
  time: string;
}

export interface TestModule {
  reportPrefix: string;
  assertionsCount: number;
  lastError: LastError;
  skipped: string[];
  time: string;
  // TODO: replace any with it's types
  completed: any;
  errmessages: any[];
  testsCount: number;
  skippedCount: number;
  failedCount: number;
  errorsCount: number;
  passedCount: number;
  group: string;
  modulePath: string;
  startTimestamp: string;
  endTimestamp: string;
  sessionCapabilities: SessionCapabilities;
  sessionId: string;
  projectName: string;
  buildName: string;
  tests: number;
  failures: number;
  errors: number;
  httpOutput: string[][];
  globalErrorRegister: string[];
}

export interface SessionCapabilities {
  acceptInsecureCerts: boolean;
  browserName: string;
  browserVersion: string;
  chrome: {
    chromedriverVersion: string;
    userDataDir: string;
  };
  'goog:chromeOptions': {
    debuggerAddress: string;
  };
  networkConnectionEnabled: boolean;
  pageLoadStrategy: string;
  platformName: string;
  proxy: Record<string, unknown>;
  setWindowRect: boolean;
  strictFileInteractability: boolean;
  timeouts: {
    implicit: number;
    pageLoad: number;
    script: number;
  };
  unhandledPromptBehavior: string;
  'webauthn:extension:credBlob': boolean;
  'webauthn:extension:largeBlob': boolean;
  'webauthn:virtualAuthenticators': boolean;
}

export interface LastError {
  name: string;
  message: string;
  showDiff: boolean;
  abortOnFailure: boolean;
  stack: string;
}

export interface Stats {
  total: number;
  passed: number;
  failed: number;
  skipped: number;
  time: string;
}

export interface Metadata {
  timestamp: number;
}
