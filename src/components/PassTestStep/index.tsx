import React from 'react';
import { ElapsedTime, Wrapper, Text, PassedIcon } from './style';

type TestStepProps = {
  time: number;
  children: React.ReactNode;
};

const PassTestStep: React.FC<TestStepProps> = ({ time, children }) => {
  return (
    <Wrapper>
      <PassedIcon />
      <Text>{children}</Text>
      <ElapsedTime>{`${time} ms`}</ElapsedTime>
    </Wrapper>
  );
};

export default PassTestStep;
