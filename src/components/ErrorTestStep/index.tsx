import React from 'react';
import ErrorTestStepDetails from '../ErrorTestStepDetails';
import Screenshot from '../Screenshot';
import { ElapsedTime, FailedIcon, FailedStepWrapper, Text, Wrapper } from './style';

type TestStepProps = {
  time: number;
  children: React.ReactNode;
};

const ErrorTestStep: React.FC<TestStepProps> = ({ time, children }) => {
  return (
    <Wrapper>
      <FailedStepWrapper>
        <FailedIcon />
        <Text>{children}</Text>
        <ElapsedTime>{`${time} sec`}</ElapsedTime>
      </FailedStepWrapper>
      <ErrorTestStepDetails
        errorDetails={{
          errorName: 'NightwatchAssertError',
          shortMessage: [
            `Testing if element <.layout__content> contains text 'asdr.js' in 5000ms`,
            `Expected "contains text 'asdr.js'" but got: "does not contain 'asdr.js'" (2s)`
          ],
          stackTrace: {
            filename: 'ecosia',
            line_number: 12,
            codeSnippet: [
              `.click('button[type=submit]')`,
              `.assert.textContains('.layout__content', 'asdr.js');`,
              '     });'
            ]
          }
        }}
      />
      <Screenshot src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </Wrapper>
  );
};

export default ErrorTestStep;
