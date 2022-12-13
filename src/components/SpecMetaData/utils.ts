import { IEnvironmentData, Status } from '../../transform';
import { ITestResult, ITestSteps } from './types';

export const getMetadata = (data: IEnvironmentData, fileID: string, testID: string) => {
  const [fileType, fileLocation] = fileID.split('-') as [fileType: Status, fileLocation: number];

  const testObj = data.files[fileType][fileLocation].tests.find((test) => test.key === testID);

  return {
    testName: testObj?.testName,
    status: testObj?.status,
    meta: testObj?.metadata
  };
};

export const getTestsSteps = (data: IEnvironmentData, fileID: string, testID: string) => {
  const [fileType, fileLocation] = fileID.split('-') as [fileType: Status, fileLocation: number];

  const testObj = data.files[fileType][fileLocation].tests.find((test) => test.key === testID);

  const resultObj = {} as ITestResult;

  const testSteps = testObj?.results.steps.reduce((result, test) => {
    result.push({
      name: test.name,
      time: test.elapsedTime,
      status: test.status,
      ...(test.result?.message && { message: test.result.message }),
      ...(test.result?.beautifiedStack && { stacktrace: test.result.beautifiedStack }),
      ...(test.result?.message && { shortMessage: test.result.message.split('-') }),
      ...(test?.screenshot && { screenshot: test.screenshot })
    });
    return result;
  }, [] as ITestSteps[]);

  resultObj['testSteps'] = testSteps ?? [];
  resultObj['httpLog'] = testObj?.results.httpLog ?? '';
  resultObj['seleniumLog'] = testObj?.results.seleniumLog ?? '';

  return resultObj;
};
