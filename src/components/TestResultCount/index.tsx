import React from 'react';
import { Text } from '../Text';
import { FailedIcon, IconWithText, IconWrapper, PassedIcon, SkippedIcon, Wrapper } from './style';

type Props = {
  passed: number;
  failed?: number;
  skipped?: number;
};

const TestResultCount: React.FC<Props> = ({ passed, failed, skipped }) => {
  return (
    <Wrapper>
      <IconWithText>
        <IconWrapper>
          <PassedIcon />
        </IconWrapper>
        <Text fontSize={14} lineHight={20} color="grey-100">
          {passed}
        </Text>
      </IconWithText>
      <IconWithText>
        <IconWrapper>
          <FailedIcon />
        </IconWrapper>
        <Text fontSize={14} lineHight={20} color="grey-100">
          {failed}
        </Text>
      </IconWithText>
      <IconWithText>
        <IconWrapper>
          <SkippedIcon />
        </IconWrapper>
        <Text fontSize={14} lineHight={20} color="grey-100">
          {skipped}
        </Text>
      </IconWithText>
    </Wrapper>
  );
};

export default TestResultCount;
