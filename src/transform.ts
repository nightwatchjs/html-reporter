import { Assertion, TestFile, VrtTestFile } from './types/nightwatch';

export const transformNightwatchReport = () => {
  return {
    environments: getEnvironmentReport(),
    stats: getSuiteStats(),
    metadata: getReportMetadata()
  };
};

export const transformNightwatchVrtReport = () => {
  return {
    environments: getVrtEnvironmentReport()
  };
};

const getSuiteStats = () => {
  return window.nightwatchReport.stats;
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

export interface IVrtFileStats {
  key: string;
  fileName: string;
  tests: IVrtTestStats[];
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
  const report = window.nightwatchReport.environments;
  Object.keys(report).forEach((envName) => {
    envData[envName] = {
      files: {}
    };

    const environmentData = report[envName];
    const environmentDataFiles = environmentData.modules;

    envData[envName]['metadata'] = environmentData.metadata;
    envData[envName]['stats'] = environmentData.stats;

    Object.keys(environmentDataFiles).forEach((fileName) => {
      const fileData = {} as IFileStats;
      const fileReport = environmentDataFiles[fileName];
      const metadata = envData[envName].metadata;

      fileData['fileName'] = fileName;
      fileData['status'] = fileReport.status;
      fileData['tests'] = getTestsStats(fileReport, envName, metadata);

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

  return getReverseSortedArray(envData);
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
    steps: Assertion[];
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
  };
}

export interface IVrtTestStats {
  key: string;
  testName: string;
  results: {
    completeBaselinePath: string;
    completeDiffPath: string;
    completeLatestPath: string;
  };
  status: string;
}

const getTestsStats = (
  fileReport: TestFile,
  envName: string,
  metadata: Pick<
    ITestStats['metadata'],
    'platformName' | 'device' | 'browserName' | 'browserVersion' | 'executionMode' | 'time'
  >
): ITestStats[] => {
  const resultData: ITestStats[] = [];
  const testReport = fileReport.completed;

  Object.keys(testReport).forEach((testName, index) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testData = {} as ITestStats;
    const singleTestReport = testReport[testName];

    // Add testName

    testData['key'] = `${singleTestReport.status}-${index}`;
    testData['testName'] = testName;

    // Add Results
    testData['results'] = {} as ITestStats['results'];
    testData['results']['steps'] = singleTestReport.assertions;
    // TODO: Verify httpOutput is string
    testData['results']['httpLog'] = fileReport.httpOutput.join(' ');
    // TODO: Replace '' to fileReport.seleniumLog
    testData['results']['seleniumLog'] = '';
    testData['results']['steps'] = singleTestReport.assertions;

    // Add Status
    testData['status'] = singleTestReport.status;

    //  Add Metadata
    testData['metadata'] = {
      ...metadata,
      ...{ filename: fileReport.fileName },
      ...{ filepath: fileReport.modulePath },
      ...{ time: fileReport.time },
      ...{ envName }
    };

    resultData.push(testData);
  });

  return resultData;
};

const getVrtEnvironmentReport = () => {
  const envData: any = {};
  const report = window.nightwatchVrtReport.reports;
  Object.keys(report).forEach((envName) => {
    envData[envName] = {
      files: {}
    };

    const environmentData = report[envName];
    const environmentDataFiles = environmentData.modules;

    envData[envName]['metadata'] = {};
    envData[envName]['stats'] = {};

    Object.keys(environmentDataFiles).forEach((fileName) => {
      const fileData = {} as IVrtFileStats;
      const fileReport = environmentDataFiles[fileName];

      fileData['fileName'] = fileName;
      fileData['status'] = 'fail';
      fileData['tests'] = getVrtTestsStats(fileReport);

      // File level data aggregation (i.e. file is passed/failed/skipped)

      if (fileReport.status === 'fail') {
        if (typeof envData[envName].files['fail'] === 'undefined') {
          envData[envName].files['fail'] = [];
        }
        const uniqueKey = envData[envName].files['fail'].length;
        fileData['key'] = `fail-${uniqueKey}`;
        envData[envName].files['fail'].push(fileData);
      }
      
    });
  });

  return envData;
};

const getVrtTestsStats = (
  fileReport: VrtTestFile
): IVrtTestStats[] => {
  const resultData: IVrtTestStats[] = [];
  const testReport = fileReport.completed;

  Object.keys(testReport).forEach((testName, index) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const testData = {} as IVrtTestStats;
    const singleTestReport = testReport[testName];
    const status = 'fail';

    // Add testName

    testData['key'] = `${status}-${index}`;
    testData['testName'] = testName;

    // Add Results
    testData['results'] = singleTestReport;

    // Add Status
    testData['status'] = 'fail';

    resultData.push(testData);
  });

  return resultData;
};
