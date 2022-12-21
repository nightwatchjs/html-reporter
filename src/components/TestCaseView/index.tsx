import React from 'react';
import TestStepsView from '../TestStepsView';
import Header from './Header';
import { TestBody, Wrapper } from './style';
import TestDetailsVrt from '../TestDetailsVrt';
import { isVRT } from '../../constants';

export type TabValueProps = {
  tabValue: string;
  setTabValue: React.Dispatch<React.SetStateAction<string>>;
};

const TestDetails: React.FC<TabValueProps> = ({ tabValue, setTabValue }) => {
  return (
    <Wrapper>
      <Header />
      <TestBody>
        {isVRT ? <TestDetailsVrt /> : <TestStepsView tabValue={tabValue} setTabValue={setTabValue} />}
      </TestBody>
    </Wrapper>
  );
};

export default TestDetails;
