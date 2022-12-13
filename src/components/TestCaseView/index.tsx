import React from 'react';
import TestStepsView from '../TestStepsView';
import Header from './Header';
import { TestBody, Wrapper } from './style';
import TestDetailsVrt from '../TestDetailsVrt';

const vrtReport = () => {
  // Will be replaced 
const vrt = true;
  if (vrt) {
      return <TestDetailsVrt />
  } else {
    return <TestStepsView />
  }
}

const TestDetails: React.FC = () => {
  // Will be replaced 
const vrt = true;
  return (
    <Wrapper>
      <Header />
      <TestBody>
        {vrtReport()}
      </TestBody>
    </Wrapper>
  );
};

export default TestDetails;
