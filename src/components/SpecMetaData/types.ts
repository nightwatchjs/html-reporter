import { BeautifiedStack } from './../../types/nightwatch';
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

export interface ITestSteps extends IPassedTestSteps, IFailedTestSteps {}

export interface ITestResult {
  testSteps: ITestSteps[];
  httpLog: string;
  seleniumLog: string;
}
