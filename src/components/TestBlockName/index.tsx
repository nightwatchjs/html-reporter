import React from 'react';
import { PassedIcon, FailedIcon, Wrapper } from './style';

export type TestBlockNameProps = {
  children: React.ReactNode;
  status: 'pass' | 'fail';
};

const TestStatusIcon = {
  pass: <PassedIcon />,
  fail: <FailedIcon />
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
