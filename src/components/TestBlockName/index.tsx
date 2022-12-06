import React from 'react';
import { PassedIcon, FailedIcon, Wrapper } from './style';

type TestBlockNameProps = {
  children: React.ReactNode;
  status: 'passed' | 'failed';
};

const TestStatusIcon = {
  passed: <PassedIcon />,
  failed: <FailedIcon />
};

const TestBlockName: React.FC<TestBlockNameProps> = ({ status, children }) => {
  return (
    <Wrapper>
      {TestStatusIcon[status]}
      {children}
    </Wrapper>
  );
};

export default TestBlockName;
