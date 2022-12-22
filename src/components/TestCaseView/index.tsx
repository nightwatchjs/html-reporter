import React from 'react';
import TestStepsView from '../TestStepsView';
import Header from './Header';
import { TestBody, Wrapper } from './style';
import VRTView from '../VRTView';
import { isVRT } from '../../constants';

export type TabValueProps = {
  tabValue: string;
  setTabValue: React.Dispatch<React.SetStateAction<string>>;
};

const TestCaseView: React.FC<TabValueProps> = ({ tabValue, setTabValue }) => {
  return (
    <Wrapper>
      <Header />
      <TestBody>
        {isVRT ? <VRTView /> : <TestStepsView tabValue={tabValue} setTabValue={setTabValue} />}
      </TestBody>
    </Wrapper>
  );
};

export default TestCaseView;
