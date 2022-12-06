import React from 'react';
import { Text } from '../Text';
import { FailedIcon, Left, Wrapper } from './style';

type TestBlockProps = {
  children: React.ReactNode;
};

const TestBlock: React.FC<TestBlockProps> = ({ children }) => {
  return (
    <Wrapper>
      <Left>
        <FailedIcon />
      </Left>
      <Text fontSize={14} lineHight={20} color="grey-100">
        {children}
      </Text>
    </Wrapper>
  );
};

export default TestBlock;
