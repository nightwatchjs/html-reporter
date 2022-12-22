import { Environments, IEnvironmentData, IFileStats, Status } from '../transform';
import { isVRT } from '../constants';

type FailedTest = {
  name: string;
  data: IEnvironmentData;
};

// TODO: Replace any with it's types
const findMaximumFailedEnv = (environments: Record<string, any>): FailedTest => {
  const [failedTests] = Object.entries(environments)
    .sort(([, a], [, b]) => {
      return b.stats.failed - a.stats.failed;
    })
    .reduce(
      (max, [name, data]) => {
        return data.stats.failed >= max[1]
          ? [
              {
                ...{ name: name },
                ...{ data: data }
              },
              data.stats.failed
            ]
          : [max[0], max[1]];
      },
      [{} as FailedTest, -Infinity]
    );

  return failedTests;
};

interface IFailedData {
  name: string;
  fileIndex: string;
  testIndex: string;
}

const findFailedTests = (file: IFileStats) => {
  const test = file.tests && file.tests.find((test) => test.status === file.status && test.key);
  if (test) {
    return test.key;
  }
  // Failed/Passed tests will always have tests array, failsafe mechanism for skip
  return file.status === 'skip' ? 'skip-0' : '';
};

const createDataObject = (name: string, status: Status, files: IFileStats[]): IFailedData => {
  const data = {
    name
  } as IFailedData;

  data['fileIndex'] = `${status}-${0}`;
  data['testIndex'] = findFailedTests(files[0]);

  return data;
};

export const findFailedTestDetails = (environments: Environments) => {
  const {
    name,
    data: {
      files: { pass, fail, skip }
    }
  } = isVRT ? findVrtData(environments) : findMaximumFailedEnv(environments);

  if (fail?.length > 0) {
    return createDataObject(name, 'fail', fail);
  } else if (skip?.length > 0) {
    return createDataObject(name, 'skip', skip);
  }
  return createDataObject(name, 'pass', pass);
};

export const findTestDetailsForEnv = (environments: Environments, envName: string) => {
  const {
    files: { pass, fail, skip }
  } = environments[envName];

  if (fail?.length > 0) {
    return createDataObject(envName, 'fail', fail);
  } else if (skip?.length > 0) {
    return createDataObject(envName, 'skip', skip);
  }
  return createDataObject(envName, 'pass', pass);
};

const findVrtData = (environments: Record<string, any>): FailedTest => {
  const failedTest = {} as FailedTest;
  const name = Object.keys(environments)[0];
  failedTest.name = name;
  failedTest.data = environments[name];
  return failedTest;
};
