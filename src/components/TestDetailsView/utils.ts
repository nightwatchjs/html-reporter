import { IFailedTestSteps, IPassedTestSteps } from '../SpecMetaData/types';

export const filterTestSteps = (
  passedTests: IPassedTestSteps[],
  failedTests: IFailedTestSteps[],
  query: string
) => {
  const passed = passedTests.filter((test) => {
    if (test.stepName.toLowerCase().includes(query.toLowerCase())) {
      return test;
    }
  });
  const failed = failedTests.filter((test) => {
    if (test.stepName.toLowerCase().includes(query.toLowerCase())) {
      return test;
    }
  });
  return {
    passed,
    failed
  };
};
