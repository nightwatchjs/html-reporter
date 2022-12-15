import React from 'react';
import { Error } from '../../icons';
import { CodeSnippet } from '../../types/nightwatch';
import { cleanAnsi, wrapTextWithSpan } from '../../utils';
import AlertBanner from '../AlertBanner';
import CodeBlock from '../CodeBlock';
import { ErrorMessageText, ErrorMessageWrapper, Wrapper } from './style';
import { getFileNameFromFilePath } from './utils';

type ErrorStepDetailsProps = {
  errorDetails: {
    errorName: string;
    shortMessage: string[];
    stackTrace?: {
      filePath: string;
      error_line_number: number;
      codeSnippet: CodeSnippet[];
    };
  };
  tracePresent?: boolean;
};

const ErrorTestStepDetails: React.FC<ErrorStepDetailsProps> = ({
  errorDetails: { errorName, shortMessage, stackTrace },
  tracePresent
}) => {
  return (
    <Wrapper>
      <AlertBanner icon={<Error />}>{errorName}</AlertBanner>
      <ErrorMessageWrapper>
        <ErrorMessageText
          dangerouslySetInnerHTML={{
            __html: wrapTextWithSpan(
              cleanAnsi(shortMessage[0]),
              ['blue-text-color', 'blue-text-color'],
              ['arrow_regex', 'single_quote']
            )
          }}
        />
        <ErrorMessageText>{cleanAnsi(shortMessage[1])}</ErrorMessageText>
      </ErrorMessageWrapper>
      {stackTrace && (
        // FIXME: fileName is wrong, should be filePath
        <CodeBlock
          filename={getFileNameFromFilePath(stackTrace.filePath)}
          line_number={stackTrace.error_line_number}
          codeSnippet={stackTrace.codeSnippet}
          file_path={stackTrace.filePath}
          tracePresent={tracePresent}
        />
      )}
    </Wrapper>
  );
};

export default ErrorTestStepDetails;
