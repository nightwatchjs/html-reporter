export interface IPassedTestSteps {
  stepName: string;
  time: number;
}

export interface IFailedTestSteps extends IPassedTestSteps {
  name: string;
  message: string;
  shortMessage: string[];
  stacktrace: string;
  screenshot: string | undefined;
}

export interface ITestResult {
  testSteps: {
    passed: IPassedTestSteps[];
    failed: IFailedTestSteps[];
  };
  httpLog: string;
  seleniumLog: string;
}
