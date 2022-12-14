import React from 'react';
import { Text } from '../Text';
import { FailedIcon, Left, PassedIcon, SkippedIcon, Wrapper } from './style';

type TestBlockProps = {
  children: React.ReactNode;
  status: string;
  highlightBlock: boolean;
  fileKey: string;
  testKey: string;
  setTestId: React.Dispatch<React.SetStateAction<string>>;
  setFileId: React.Dispatch<React.SetStateAction<string>>;
};

const TestBlock: React.FC<TestBlockProps> = ({
  children,
  status,
  highlightBlock,
  fileKey,
  testKey,
  setTestId,
  setFileId
}) => {
  return (
    <Wrapper
      highlight={highlightBlock}
      onClick={() => {
        setFileId(fileKey);
        setTestId(testKey);
      }}
    >
      <Left>
        {/* FIXME:  Remove nested terniary operator */}
        {status === 'pass' ? <PassedIcon /> : status === 'skip' ? <SkippedIcon /> : <FailedIcon />}
      </Left>
      <Text fontSize={14} lineHight={20} color="grey-100" transformText>
        {children}
      </Text>
    </Wrapper>
  );
};

export default TestBlock;
