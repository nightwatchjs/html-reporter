import Fuse from 'fuse.js';
import { ITestSteps } from '../SpecMetaData/types';

export const filterTestSteps = (testStepsData: ITestSteps[], query: string) => {
  const options = {
    keys: ['name', 'args']
  };

  const fuse = new Fuse(testStepsData, options);

  const result = fuse.search(query);

  const filteredResult = result.reduce((result, test) => {
    result.push(test.item);
    return result;
  }, [] as ITestSteps[]);

  return query.length > 0 ? filteredResult : testStepsData;
};

export const validTestArgs = (args: string[] | undefined): boolean => {
  if (args === undefined) {
    return false;
  }

  if (args && args.length < 1) {
    return false;
  }

  if (args && args[0] === null) {
    return false;
  }

  return true;
};

export const joinArgs = (args: string[]): string => {
  if (args.length === 1) {
    return args.join('');
  }
  return args.filter((arg) => arg !== null).join(', ');
};
