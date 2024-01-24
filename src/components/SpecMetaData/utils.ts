import { IEnvironmentData, Status } from '../../transform';
import { ITestResult, ITestSteps } from './types';

export const getMetadata = (data: IEnvironmentData, fileID: string, testID: string) => {
  const [fileType, fileLocation] = fileID.split('-') as [fileType: Status, fileLocation: number];

  const [, , , index] = testID.split('-');

  const testObj = data.files[fileType][fileLocation].tests[Number(index)];

  return {
    testName: testObj?.testName,
    status: testObj?.status,
    meta: testObj?.metadata
  };
};

export const getTestsSteps = (data: IEnvironmentData, fileID: string, testID: string) => {
  const [fileType, fileLocation] = fileID.split('-') as [fileType: Status, fileLocation: number];

  // file_status-index-test-status-index, we only want test index
  const [, , , index] = testID.split('-');

  const testObj = data.files[fileType][fileLocation].tests[Number(index)];

  const resultObj = {} as ITestResult;

  const testSteps = testObj?.results?.steps?.reduce((result, test) => {
    if (test.name !== 'saveScreenshot') {
      result.push({
        name: test.name,
        time: test.elapsedTime,
        args: test.args,
        status: test.status,
        ...(test.result?.message && { message: test.result.message }),
        ...(test.result?.beautifiedStack && { stacktrace: test.result.beautifiedStack }),
        ...(test.result?.message && {
          shortMessage: [
            test.result.message.split(' - ')[0],
            test.result.message.split(' - ').slice(1).join(' - '),
          ]
        }),
        ...(test?.screenshot && { screenshot: test.screenshot }),
        ...(test?.domSnapshot && { domSnapshot: test.domSnapshot })
      });
    }
    return result;
  }, [] as ITestSteps[]);

  resultObj['testSteps'] = testSteps ?? [];
  resultObj['httpLog'] = testObj?.results.httpLog ?? [['']];
  resultObj['seleniumLog'] = testObj?.results.seleniumLog ?? '';
  resultObj['traceView'] = testSteps?.some((test) => test?.domSnapshot);

  return resultObj;
};
