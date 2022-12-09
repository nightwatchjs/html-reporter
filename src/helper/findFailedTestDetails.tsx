import { useGlobalContext } from '../hooks/GlobalContext';
import { IEnvironmentData, IFileStats, Status } from '../transform';

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

const createDataObject = (name: string, status: Status, files: IFileStats[]): IFailedData => {
  const data = {
    name
  } as IFailedData;

  const failedTest = files[0].tests.find((test) => {
    return test.status === 'fail' && test.key;
  });

  data['fileIndex'] = `${status}-${0}`;
  data['testIndex'] = failedTest!.key;

  return data;
};

export const findFailedTestDetails = () => {
  const { environments } = useGlobalContext();
  const {
    name,
    data: {
      files: { pass, fail, skip }
    }
  } = findMaximumFailedEnv(environments);

  if (fail.length > 0) {
    return createDataObject(name, 'fail', fail);
  } else if (skip.length > 0) {
    return createDataObject(name, 'skip', skip);
  }
  return createDataObject(name, 'pass', pass);
};
