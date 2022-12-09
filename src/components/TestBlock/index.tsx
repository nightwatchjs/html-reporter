import React from 'react';
import { Text } from '../Text';
import { FailedIcon, Left, PassedIcon, SkippedIcon, Wrapper } from './style';

type TestBlockProps = {
  children: React.ReactNode;
  status: string;
  highlightBlock: boolean;
};

const TestBlock: React.FC<TestBlockProps> = ({ children, status, highlightBlock }) => {
  return (
    <Wrapper highlight={highlightBlock}>
      <Left>
        {/* FIXME:  Remove nested terniary operator */}
        {status === 'pass' ? <PassedIcon /> : status === 'skip' ? <SkippedIcon /> : <FailedIcon />}
      </Left>
      <Text fontSize={14} lineHight={20} color="grey-100">
        {children}
      </Text>
    </Wrapper>
  );
};

export default TestBlock;
