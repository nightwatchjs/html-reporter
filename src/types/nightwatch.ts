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
  environments: Environments;
  stats: Stats;
  metadata: Metadata;
}

export type EnvironmentData = {
  metadata: TestMetadata;
  stats: TestStats;
  modules: Record<string, TestFile>;
};

export type Environments = Record<string, EnvironmentData>;

export interface TestMetadata {
  platformName: string;
  device: string;
  browserName: string;
  browserVersion: number;
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

export interface TestFile {
  reportPrefix: string;
  assertionsCount: number;
  status: 'pass' | 'fail' | 'skip';
  lastError: LastError;
  skipped: string[];
  time: number;
  timeMs: number;
  // TODO: replace any with it's types
  completed: Record<string, TestObject>;
  completedSections: Record<string, TestObject>;
  errmessages: any[];
  testsCount: number;
  skippedCount: number;
  failedCount: number;
  errorsCount: number;
  passedCount: number;
  group: string;
  modulePath: string;
  fileName: string;
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
  rawHttpOutput: string[][];
  globalErrorRegister: string[];
}

export interface TestObject {
  time: string;
  assertions: Assertion[];
  commands: Commands[];
  passed: number;
  errors: number;
  failed: number;
  skipped: number;
  tests: number;
  steps: string[];
  stackTrace: string;
  testcases: Testcases;
  lastError: LastError;
  timeMs: number;
  startTimestamp: string;
  endTimestamp: string;
  status: string;
}

export interface LastError {
  name: string;
  message: string;
  showDiff: boolean;
  abortOnFailure: boolean;
  stack: string;
}

export type Testcases = Record<string, TestObject>;

export interface Assertion {
  name: string;
  message: string;
  stackTrace: string;
  fullMsg: string;
  failure: any;
  status: string;
  screenshot: string;
}

export interface Commands {
  name: string;
  args: string[],
  startTime: number,
  endTime: number,
  elapsedTime: number,
  status: string,
  screenshot: string | undefined;
  result: any
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
  time: {
    hour?: number;
    min?: number;
    sec?: number;
  };
}

export interface Metadata {
  timestamp: number;
}
