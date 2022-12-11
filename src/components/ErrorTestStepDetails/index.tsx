import React from 'react';
import { Error } from '../../icons';
import { wrapTextWithSpan } from '../../utils';
import AlertBanner from '../AlertBanner';
import CodeBlock from '../CodeBlock';
import { ErrorMessageText, ErrorMessageWrapper, Wrapper } from './style';

type ErrorStepDetailsProps = {
  errorDetails: {
    errorName: string;
    shortMessage: string[];
    stackTrace?: {
      filename: string;
      line_number: number;
      codeSnippet: string[];
    };
  };
};

const ErrorTestStepDetails: React.FC<ErrorStepDetailsProps> = ({
  errorDetails: { errorName, shortMessage, stackTrace }
}) => {
  return (
    <Wrapper>
      <AlertBanner icon={<Error />}>{errorName}</AlertBanner>
      <ErrorMessageWrapper>
        <ErrorMessageText
          dangerouslySetInnerHTML={{
            __html: wrapTextWithSpan(
              shortMessage[0],
              ['blue-text-color', 'blue-text-color'],
              ['arrow_regex', 'single_quote']
            )
          }}
        />
        <ErrorMessageText>{shortMessage[1]}</ErrorMessageText>
      </ErrorMessageWrapper>
      {stackTrace && (
        <CodeBlock
          filename={stackTrace.filename}
          line_number={stackTrace.line_number}
          codeSnippet={stackTrace.codeSnippet}
          file_path="/Users/vaibhavsingh/Dev/nightwatch/examples/tests/ecosia.js"
        />
      )}
    </Wrapper>
  );
};

export default ErrorTestStepDetails;
