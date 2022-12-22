export interface NightwatchHTMLReport {
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
  seleniumLog: string;
  globalErrorRegister: string[];
  testEnv: string;
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
  vrt: {
    completeBaselinePath: string;
    completeDiffPath: string;
    completeLatestPath: string;
    diff: string;
  };
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
  args: string[];
  startTime: number;
  endTime: number;
  elapsedTime: number;
  status: string;
  screenshot: string | undefined;
  result: CommandsResult;
  domSnapshot: Trace;
}

export interface Trace {
  snapshotUrl: string;
  snapshotFilePath: string;
}

export interface BeautifiedStack {
  filePath: string;
  error_line_number: number;
  codeSnippet: CodeSnippet[];
}

export interface CodeSnippet {
  line_number: number;
  code: string;
}

export interface CommandsResult {
  value?: unknown;
  status?: number;
  returned: number;
  passed: boolean;
  abortOnFailure?: boolean;
  message?: string;
  name?: string;
  showDiff?: boolean;
  stack?: string;
  beautifiedStack?: BeautifiedStack;
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
  [key: string]: unknown;
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
  date: Date;
  timestamp: number;
}
