import React from 'react';
import TestStepsView from '../TestStepsView';
import Header from './Header';
import { TestBody, Wrapper } from './style';

const TestDetails: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <TestBody>
        <TestStepsView />
      </TestBody>
    </Wrapper>
  );
};

export default TestDetails;
