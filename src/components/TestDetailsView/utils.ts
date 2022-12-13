import { ITestSteps } from '../SpecMetaData/types';

export const filterTestSteps = (testStepsData: ITestSteps[], query: string) => {
  return testStepsData.filter((test) => {
    if (test.name.toLowerCase().includes(query.toLowerCase())) {
      return test;
    }
  });
};
