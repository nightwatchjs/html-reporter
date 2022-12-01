import React from 'react';
import PassedTestStep from '../PassedTestStep';
import Search from '../Search';
import { SearchWrapper, TestStepWrapper, Wrapper } from './style';

const testStepData = [
  {
    stepName: 'Before Hooks',
    time: 12
  },
  {
    stepName: `waitForElementVisible('body')`,
    time: 4
  },
  {
    stepName: `titleContains('Ecosia')`,
    time: 2
  },
  {
    stepName: `visible('input[type=search]')`,
    time: 2
  },
  {
    stepName: `setValue('input[type=search]', 'nightwatch')`,
    time: 6
  },
  {
    stepName: `visible('button[type=submit]')`,
    time: 3
  },
  {
    stepName: `click('button[type=submit]')`,
    time: 2
  }
];

const TestDetailsView: React.FC = () => {
  return (
    <Wrapper>
      <SearchWrapper>
        <Search placeholder="Search test steps" />
      </SearchWrapper>
      <TestStepWrapper>
        {testStepData.map((data, index) => {
          return (
            <PassedTestStep key={index} time={data.time}>
              {data.stepName}
            </PassedTestStep>
          );
        })}
      </TestStepWrapper>
    </Wrapper>
  );
};

export default TestDetailsView;
