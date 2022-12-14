import React from 'react';
import TestStepsView from '../TestStepsView';
import Header from './Header';
import { TestBody, Wrapper } from './style';
import TestDetailsVrt from '../TestDetailsVrt';
import { isVRT } from '../../constants';

const TestDetails: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <TestBody>
        {isVRT() ? <TestDetailsVrt /> : <TestStepsView />}
      </TestBody>
    </Wrapper>
  );
};

export default TestDetails;
