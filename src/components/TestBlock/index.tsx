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
      <Text fontSize="--font-size-14" lineHight="--line-height-20" color="--color-grey-100">
        {children}
      </Text>
    </Wrapper>
  );
};

export default TestBlock;
