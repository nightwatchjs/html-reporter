import React from 'react';
import ErrorTestStep from '../ErrorTestStep';
import PassTestStep from '../PassTestStep';
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
            <PassTestStep key={index} time={data.time}>
              {data.stepName}
            </PassTestStep>
          );
        })}
        <ErrorTestStep time={24}>{`textContains('.layout__content', 'asdr.js');`}</ErrorTestStep>
        <PassTestStep time={6}>After Hooks</PassTestStep>
      </TestStepWrapper>
    </Wrapper>
  );
};

export default TestDetailsView;
