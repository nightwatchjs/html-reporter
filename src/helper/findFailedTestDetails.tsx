import { useGlobalContext } from '../hooks/GlobalContext';
import { IEnvironmentData } from '../transform';

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
  fileIndex: number;
  testIndex: number;
}

export const findFailedTestDetails = () => {
  const { environments } = useGlobalContext();
  const {
    name,
    data: { files }
  } = findMaximumFailedEnv(environments);

  const failedData = {
    name
  } as IFailedData;

  if (files.fail.length > 0) {
    failedData['fileIndex'] = 0;
    failedData['testIndex'] = files.fail[0].tests.reduce((index, test) => {
      if (test.status === 'fail') {
        return index;
      }
      return index;
    }, 0);
  } else if (files.skip.length > 0) {
    failedData['fileIndex'] = 0;
    failedData['testIndex'] = files.skip[0].tests.reduce((index, test) => {
      if (test.status === 'skip') {
        return index;
      }
      return index;
    }, 0);
  }

  return failedData;
};
