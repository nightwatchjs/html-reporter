import React from 'react';
import { CodeSnippet } from '../../types/nightwatch';
import ErrorTestStepDetails from '../ErrorTestStepDetails';
import Screenshot from '../Screenshot';
import { ITrace } from '../SpecMetaData/types';
import { ElapsedTime, FailedIcon, FailedStepWrapper, Text, Wrapper } from './style';

export type TestStepProps = {
  testStepKey: number;
  time: number;
  active: boolean;
  setActiveTestStep: React.Dispatch<React.SetStateAction<number | undefined>>;
  children: React.ReactNode;
  errorName: string;
  shortMessage: string[];
  stacktrace?: {
    filePath: string;
    error_line_number: number;
    codeSnippet: CodeSnippet[];
  };
  screenshot?: string;
  traceData: ITrace['domSnapshot'];
  setTrace: React.Dispatch<
    React.SetStateAction<
      | {
          url?: string;
          snapshotPath?: string;
        }
      | undefined
    >
  >;
  tracePresent?: boolean;
};

const ErrorTestStep: React.FC<TestStepProps> = ({
  testStepKey,
  time,
  active,
  setActiveTestStep,
  children,
  errorName,
  shortMessage,
  screenshot,
  stacktrace,
  tracePresent,
  traceData: { snapshotUrl, snapshotFilePath },
  setTrace
}) => {
  return (
    <Wrapper
      tracePresent={active}
      onClick={() => {
        setActiveTestStep(testStepKey);
        setTrace(
          snapshotFilePath
            ? {
                ...(snapshotUrl && { url: snapshotUrl }),
                snapshotPath: snapshotFilePath
              }
            : {
                ...(snapshotUrl && { url: snapshotUrl })
              }
        );
      }}>
      <FailedStepWrapper>
        <FailedIcon />
        <Text>{children}</Text>
        <ElapsedTime>{time < 1000 ? `${time} ms` : `${Math.round(time / 1000)} sec`}</ElapsedTime>
      </FailedStepWrapper>
      <ErrorTestStepDetails
        errorDetails={{
          errorName,
          shortMessage,
          stackTrace: stacktrace
        }}
        tracePresent={tracePresent}
      />
      {screenshot && <Screenshot src={screenshot} alt={shortMessage.join('')} />}
    </Wrapper>
  );
};

export default ErrorTestStep;
