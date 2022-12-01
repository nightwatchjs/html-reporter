import React from 'react';
import TestResultCount from '../TestResultCount';
import Timer from '../Timer';
import { Wrapper } from './style';

const TestStatusBar: React.FC = () => {
  return (
    <Wrapper>
      <Timer time={{ min: 8, sec: 12 }} color={'--color-grey-100'} />
      <TestResultCount passed={163} failed={31} skipped={22} />
    </Wrapper>
  );
};

export default TestStatusBar;
