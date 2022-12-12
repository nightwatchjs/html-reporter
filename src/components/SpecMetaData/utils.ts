import { IEnvironmentData, Status } from '../../transform';
import { IFailedTestSteps, IPassedTestSteps, ITestResult } from './types';

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

  const passedTestStep = testObj?.results.steps.reduce((result, test) => {
    test.status === 'pass' &&
      result.push({
        stepName: test.name,
        time: test.elapsedTime
      });
    return result;
  }, [] as IPassedTestSteps[]);

  const failedTestSteps = testObj?.results.steps.reduce((result, test) => {
    test.status === 'fail' &&
      result.push({
        name: test.name,
        stepName: test.name,
        message: test.result.message,
        stacktrace: test.result.stack,
        shortMessage: test.result.message.split('-'),
        time: test.elapsedTime,
        screenshot: test.screenshot
      });
    return result;
  }, [] as IFailedTestSteps[]);

  resultObj['testSteps'] = {} as ITestResult['testSteps'];
  resultObj['testSteps']['passed'] = passedTestStep ?? [];
  resultObj['testSteps']['failed'] = failedTestSteps ?? [];
  resultObj['httpLog'] = testObj?.results.httpLog ?? '';
  resultObj['seleniumLog'] = testObj?.results.seleniumLog ?? '';

  return resultObj;
};
