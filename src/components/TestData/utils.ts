import { IEnvironmentData } from '../../transform';

export const getFailedTestsId = (testsData: IEnvironmentData): string[] => {
  return testsData.files.fail.reduce((data, test) => {
    return data.push(test.key), data;
  }, [] as string[]);
};

export const getAllExpandedFileIds = (data: IEnvironmentData): string[] => {
  const { files } = data;
  const result: string[] = [];
  Object.values(files).forEach((arr) => {
    arr.forEach((test) => result.push(test.key));
  });
  return result;
};
