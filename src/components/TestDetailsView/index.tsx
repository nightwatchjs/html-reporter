import React, { useState } from 'react';
import ErrorTestStep from '../ErrorTestStep';
import PassTestStep from '../PassTestStep';
import Search from '../Search';
import { IFailedTestSteps, IPassedTestSteps } from '../SpecMetaData/types';
import { SearchWrapper, TestStepWrapper, Wrapper } from './style';
import { filterTestSteps } from './utils';

type TestDetailsViewProps = {
  passedStepsData: IPassedTestSteps[];
  failedStepsData: IFailedTestSteps[];
};

const TestDetailsView: React.FC<TestDetailsViewProps> = ({ passedStepsData, failedStepsData }) => {
  const [query, setQuery] = useState<string>('');

  const { passed, failed } = filterTestSteps(passedStepsData, failedStepsData, query);
  return (
    <Wrapper>
      <SearchWrapper>
        <Search
          placeholder="Search test steps"
          onChange={(event) => setQuery((event.target as HTMLInputElement).value)}
        />
      </SearchWrapper>
      <TestStepWrapper>
        {passed &&
          passed.map((data, index) => {
            return (
              <PassTestStep key={index} time={data.time}>
                {data.stepName}
              </PassTestStep>
            );
          })}
        {failed &&
          failed.map((data, index) => {
            return (
              <ErrorTestStep
                key={index}
                time={data.time}
                errorName={data.name}
                shortMessage={data.shortMessage}
                screenshot={data.screenshot}>
                {data.message}
              </ErrorTestStep>
            );
          })}
      </TestStepWrapper>
    </Wrapper>
  );
};

export default TestDetailsView;
