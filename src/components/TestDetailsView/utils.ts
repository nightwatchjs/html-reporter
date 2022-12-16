import { ITestSteps } from '../SpecMetaData/types';

const filterArgs = (query: string, args?: string[]) => {
  return (
    args && args.filter((arg) => arg !== null && (typeof arg == 'string') && arg.toLowerCase().includes(query.toLowerCase()))
  );
};

export const filterTestSteps = (testStepsData: ITestSteps[], query: string) => {
  return testStepsData.filter((test) => {
    const filteredArgs = filterArgs(query, test.args);

    if (test.name.toLowerCase().includes(query.toLowerCase())) {
      return test;
    }

    if (filteredArgs && filteredArgs.length >= 1) {
      return test;
    }
  });
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
