import React from 'react';
import TestStepsView from '../TestStepsView';
import Header from './Header';
import { TestBody, Wrapper } from './style';

export type TabValueProps = {
  tabValue: string;
  setTabValue: React.Dispatch<React.SetStateAction<string>>;
};

const TestDetails: React.FC<TabValueProps> = ({ tabValue, setTabValue }) => {
  return (
    <Wrapper>
      <Header />
      <TestBody>
        <TestStepsView tabValue={tabValue} setTabValue={setTabValue} />
      </TestBody>
    </Wrapper>
  );
};

export default TestDetails;
