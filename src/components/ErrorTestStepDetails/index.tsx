import React from 'react';
import AlertBanner from '../AlertBanner';
import { ErrorMessageText, ErrorMessageWrapper, Wrapper } from './style';
import { Error } from '@mui/icons-material';
import { wrapTextWithSpan } from '../../utils';
import CodeBlock from '../CodeBlock';

type ErrorStepDetailsProps = {
  errorDetails: {
    errorName: string;
    shortMessage: string[];
    stackTrace: {
      filename: string;
      line_number: number;
      codeSnippet: string[];
    };
  };
};

const ErrorTestStepDetails: React.FC<ErrorStepDetailsProps> = ({
  errorDetails: {
    errorName,
    shortMessage,
    stackTrace: { filename, line_number, codeSnippet }
  }
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
      <CodeBlock filename={filename} line_number={line_number} codeSnippet={codeSnippet} />
    </Wrapper>
  );
};

export default ErrorTestStepDetails;
