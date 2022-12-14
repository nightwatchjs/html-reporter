import { BeautifiedStack } from './../../types/nightwatch';

export interface ITrace {
  domSnapshot: {
    snapshotUrl: string;
    snapshotFilePath: string;
  };
}
export interface IPassedTestSteps {
  name: string;
  time: number;
  args?: string[];
  status: string;
}

export interface IFailedTestSteps extends IPassedTestSteps {
  message?: string;
  shortMessage?: string[];
  stacktrace?: BeautifiedStack;
  screenshot?: string;
}

export interface ITestSteps extends IPassedTestSteps, IFailedTestSteps, ITrace {}

export interface ITestResult {
  testSteps: ITestSteps[];
  httpLog: string[][];
  seleniumLog: string;
  traceView: boolean;
}
