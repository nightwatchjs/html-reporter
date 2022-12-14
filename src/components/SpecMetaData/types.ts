import { BeautifiedStack } from './../../types/nightwatch';

export interface ITrace {
  trace: {
    traceUrl: string;
    traceSnapshot: string;
  };
}
export interface IPassedTestSteps {
  name: string;
  time: number;
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
  httpLog: string;
  seleniumLog: string;
  traceView: boolean;
}
