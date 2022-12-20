import { IFileStats } from './../../transform';
import { IEnvironmentData } from '../../transform';

export const getFailedTestsId = (testsData: IEnvironmentData): string[] => {
  const {
    files: { pass, fail, skip }
  } = testsData;

  let testFiles = [] as IFileStats[];

  if (fail) {
    testFiles = fail;
  } else if (skip) {
    testFiles = skip;
  } else if (pass) {
    testFiles = pass;
  }

  return testFiles?.reduce((data, test) => {
    return data.push(test.key), data;
  }, [] as string[]);
};

export const getAllExpandedFileIds = (data: IEnvironmentData): string[] => {
  const { files } = data;
  const result: string[] = [];
  Object.values(files).forEach((arr) => {
    arr.forEach((test) => {
      if (test.status !== 'skip') {
        result.push(test.key);
      }
    });
  });
  return result;
};
