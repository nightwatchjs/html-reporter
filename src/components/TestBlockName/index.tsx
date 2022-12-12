import React from 'react';
import { Text } from '../Text';
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
      <Text
        fontSize={20}
        lineHight={32}
        color={status === 'fail' ? 'red-60' : '-grey-100'}
        transformText>
        {children}
      </Text>
    </Wrapper>
  );
};

export default TestBlockName;
