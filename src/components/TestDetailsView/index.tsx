import React, { useState } from 'react';
import ErrorTestStep from '../ErrorTestStep';
import PassTestStep from '../PassTestStep';
import Search from '../Search';
import { ITestSteps } from '../SpecMetaData/types';
import { SearchWrapper, TestDiv, TestSteps, TestStepWrapper, Wrapper } from './style';
import { filterTestSteps } from './utils';

type TestDetailsViewProps = {
  testStepsData: ITestSteps[];
};

const TestDetailsView: React.FC<TestDetailsViewProps> = ({ testStepsData }) => {
  const [query, setQuery] = useState<string>('');

  const filteredTestsSteps = filterTestSteps(testStepsData, query);

  return (
    <Wrapper>
      <SearchWrapper>
        <Search
          placeholder="Search test steps"
          onChange={(event) => setQuery((event.target as HTMLInputElement).value)}
        />
      </SearchWrapper>
      <TestStepWrapper>
        <TestSteps>
          {filteredTestsSteps.map((test, index) => {
            if (test.status === 'pass') {
              return (
                <PassTestStep key={index} time={test.time}>
                  {test.name}
                </PassTestStep>
              );
            }
            if (test.status === 'fail') {
              // FIXME: Replace NightwatchAssertError to dynamic value
              return (
                <ErrorTestStep
                  key={index}
                  time={test.time}
                  errorName={'NightwatchAssertError'}
                  shortMessage={test.shortMessage ?? ['']}
                  stacktrace={test.stacktrace}
                  screenshot={test.screenshot}>
                  {test.name}
                </ErrorTestStep>
              );
            }
          })}
        </TestSteps>
        <TestDiv>Lorem ipsum</TestDiv>
      </TestStepWrapper>
    </Wrapper>
  );
};

export default TestDetailsView;
