import React from 'react';
import ErrorTestStepDetails from '../ErrorTestStepDetails';
import Screenshot from '../Screenshot';
import { ElapsedTime, FailedIcon, FailedStepWrapper, Text, Wrapper } from './style';

export type TestStepProps = {
  time: number;
  children: React.ReactNode;
  errorName: string;
  shortMessage: string[];
  stacktrace?: {
    filename: string;
    lineNumber: number;
    codeSnippet: string[];
  };
  screenshot?: string;
};

const ErrorTestStep: React.FC<TestStepProps> = ({
  time,
  children,
  errorName,
  shortMessage,
  screenshot
}) => {
  return (
    <Wrapper>
      <FailedStepWrapper>
        <FailedIcon />
        <Text>{children}</Text>
        <ElapsedTime>{`${time} sec`}</ElapsedTime>
      </FailedStepWrapper>
      <ErrorTestStepDetails
        errorDetails={{
          errorName,
          shortMessage
        }}
      />
      {/* FIXME: Add alt */}
      {screenshot && <Screenshot src={screenshot} />}
    </Wrapper>
  );
};

export default ErrorTestStep;
