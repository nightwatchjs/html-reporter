import React from 'react';
import TestStepsView from '../TestStepsView';
import Header from './Header';
import { TestBody, Wrapper } from './style';
import TestDetailsVrt from '../TestDetailsVrt';
import { isVRT } from '../../constants';

const vrtReport = () => {
  if (isVRT()) {
    return <TestDetailsVrt />;
  } else {
    return <TestStepsView />;
  }
};

const TestDetails: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <TestBody>{vrtReport()}</TestBody>
    </Wrapper>
  );
};

export default TestDetails;
