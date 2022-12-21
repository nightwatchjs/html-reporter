import React from 'react';
import { Status } from '../../transform';
import { Text } from '../Text';
import { Left, Wrapper } from './style';
import { statusIcon } from './utils';

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
      clickable={status !== 'skip'}
      onClick={() => {
        if (status !== 'skip') {
          setFileId(fileKey);
          setTestId(testKey);
        }
      }}>
      <Left>{statusIcon(status as Status)}</Left>
      <Text fontSize={14} lineHight={20} color="grey-100" transformText>
        {children}
      </Text>
    </Wrapper>
  );
};

export default TestBlock;
