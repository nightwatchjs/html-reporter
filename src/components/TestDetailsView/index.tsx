import React from 'react';
import ErrorTestStep from '../ErrorTestStep';
import PassTestStep from '../PassTestStep';
import Search from '../Search';
import { IFailedTestSteps, IPassedTestSteps } from '../SpecMetaData/types';
import { SearchWrapper, TestStepWrapper, Wrapper } from './style';

type TestDetailsViewProps = {
  passedStepsData: IPassedTestSteps[];
  failedStepsData: IFailedTestSteps[];
};

const TestDetailsView: React.FC<TestDetailsViewProps> = ({ passedStepsData, failedStepsData }) => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Search placeholder="Search test steps" />
      </SearchWrapper>
      <TestStepWrapper>
        {passedStepsData &&
          passedStepsData.map((data, index) => {
            return (
              <PassTestStep key={index} time={data.time}>
                {data.stepName}
              </PassTestStep>
            );
          })}
        {failedStepsData &&
          failedStepsData.map((data, index) => {
            return (
              <ErrorTestStep
                key={index}
                time={data.time}
                errorName={data.name}
                shortMessage={data.shortMessage}>
                {data.message}
              </ErrorTestStep>
            );
          })}
        <PassTestStep time={6}>After Hooks</PassTestStep>
      </TestStepWrapper>
    </Wrapper>
  );
};

export default TestDetailsView;
