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
        <Text fontSize="--font-size-14" lineHight="--line-height-20" color="--color-grey-100">
          {passed}
        </Text>
      </IconWithText>
      <IconWithText>
        <IconWrapper>
          <FailedIcon />
        </IconWrapper>
        <Text fontSize="--font-size-14" lineHight="--line-height-20" color="--color-grey-100">
          {failed}
        </Text>
      </IconWithText>
      <IconWithText>
        <IconWrapper>
          <SkippedIcon />
        </IconWrapper>
        <Text fontSize="--font-size-14" lineHight="--line-height-20" color="--color-grey-100">
          {skipped}
        </Text>
      </IconWithText>
    </Wrapper>
  );
};

export default TestResultCount;
