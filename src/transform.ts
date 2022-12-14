import { Commands, TestFile, Stats } from './types/nightwatch';
import { VRT } from './constants';
export const transformNightwatchReport = () => {
  return {
    environments: getEnvironmentReport(),
    stats: getSuiteStats(),
    metadata: getReportMetadata()
  };
};

const getSuiteStats = () => {
  return window.nightwatchReport.stats || ({} as Stats);
};

const getReportMetadata = () => {
  return window.nightwatchReport.metadata;
};

export interface IFileStats {
  key: string;
  fileName: string;
  tests: ITestStats[];
  status: string;
}

export type Environments = Record<string, IEnvironmentData>;

export type Status = 'pass' | 'fail' | 'skip';

// TODO: Files can have only pass or fail or skip. Rn, types expect all three needed to be there
export interface IEnvironmentData {
  files: Record<Status, IFileStats[]>;
  metadata: ITestStats['metadata'];
  stats: {
    passed: number;
    failed: number;
    skipped: number;
    time: number;
  };
}

const getEnvironmentReport = () => {
  // TODO: Replace any with the types
  const envData: any = {};
  // use process.env
  // Will be replaced
  const report = window.nightwatchReport.environments;
  Object.keys(report).forEach((envName) => {
    envData[envName] = {
      files: {}
    };

    const environmentData = report[envName];
    const environmentDataFiles = environmentData.modules;

    envData[envName]['metadata'] = environmentData.metadata;
    envData[envName]['stats'] = environmentData.stats || ({} as Stats);

    Object.keys(environmentDataFiles).forEach((fileName) => {
      const fileData = {} as IFileStats;
      const fileReport = environmentDataFiles[fileName];
      const metadata = envData[envName].metadata;

      if (VRT) {
        fileReport.status = 'fail';
        fileReport.fileName = fileName;
      }
      fileData['fileName'] = fileName;
      fileData['status'] = fileReport.status;
      fileData['tests'] = getTestsStats(fileName, fileReport, envName, metadata);

      // File level data aggregation (i.e. file is passed/failed/skipped)
      if (fileReport.status === 'pass') {
        if (typeof envData[envName].files['pass'] === 'undefined') {
          envData[envName].files['pass'] = [];
        }
        const uniqueKey = envData[envName].files['pass'].length;
        fileData['key'] = `pass-${uniqueKey}`;
        envData[envName].files['pass'].push(fileData);
      }

      if (fileReport.status === 'fail') {
        if (typeof envData[envName].files['fail'] === 'undefined') {
          envData[envName].files['fail'] = [];
        }
        const uniqueKey = envData[envName].files['fail'].length;
        fileData['key'] = `fail-${uniqueKey}`;
        envData[envName].files['fail'].push(fileData);
      }

      if (fileReport.status === 'skip') {
        if (typeof envData[envName].files['skip'] === 'undefined') {
          envData[envName].files['skip'] = [];
        }
        const uniqueKey = envData[envName].files['skip'].length;
        fileData['key'] = `skip-${uniqueKey}`;
        envData[envName].files['skip'].push(fileData);
      }
    });
  });

  return VRT ? envData : getReverseSortedArray(envData);
};

export const getReverseSortedArray = (environments: Record<string, any>) => {
  // TODO: Sort by Skipped after fail
  return Object.entries(environments)
    .sort(([, a], [, b]) => {
      return b.stats.failed - a.stats.failed;
    })
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
};

export interface ITestStats {
  key: string;
  testName: string;
  results: {
    steps: Commands[];
    httpLog: string;
    seleniumLog: string;
  };
  status: string;
  metadata: {
    platformName: string;
    device: string;
    browserName: string;
    browserVersion: string;
    executionMode: string;
    time: number;
    filename: string;
    filepath: string;
    envName: string;
    diff: string;
  };
  stats: {
    passed: number;
    failed: number;
    skipped: number;
    total: number;
    time: number;
  };
  vrt: IVrtData;
}

export interface IVrtData {
  completeBaselinePath: string;
  completeDiffPath: string;
  completeLatestPath: string;
}

const normalizeTestName = (testName: string): string => {
  switch (testName) {
    case '__before_hook':
      return 'Before';
    case '__after_hook':
      return 'After';
    default:
      return testName;
  }
};

const getTestsStats = (
  fileName: string,
  fileReport: TestFile,
  envName: string,
  metadata: Pick<
    ITestStats['metadata'],
    'platformName' | 'device' | 'browserName' | 'browserVersion' | 'executionMode' | 'time'
  >
): ITestStats[] => {
  const resultData: ITestStats[] = [];
  const testReport = fileReport.completedSections;

  Object.keys(testReport).forEach((testName, index) => {
    if (testName == '__global_beforeEach_hook' || testName == '__global_afterEach_hook') return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testData = {} as ITestStats;
    const singleTestReport = testReport[testName];
    if (VRT) {
      singleTestReport.status = 'fail';
    }

    // Add testName

    testData['key'] = `${singleTestReport.status}-${index}`;
    testData['testName'] = normalizeTestName(testName);

    // Add Results
    testData['results'] = {} as ITestStats['results'];
    testData['results']['steps'] = singleTestReport.commands;
    // TODO: Verify httpOutput is string
    testData['results']['httpLog'] = fileReport.httpOutput ? fileReport.httpOutput.join(' ') : '';
    // TODO: Replace '' to fileReport.seleniumLog
    testData['results']['seleniumLog'] = '';
    testData['results']['steps'] = singleTestReport.commands;

    // Add Status
    testData['status'] = singleTestReport.status;

    //  Add Metadata
    testData['metadata'] = {
      ...metadata,
      ...{ filename: fileName },
      ...{ filepath: fileReport.modulePath },
      ...{ time: fileReport.timeMs },
      ...{ envName },
      ...{ envName },
      ...{ diff: singleTestReport.diff }
    };

    // Add vrt data
    testData['vrt'] = singleTestReport.vrt;

    resultData.push(testData);
  });

  return resultData;
};
