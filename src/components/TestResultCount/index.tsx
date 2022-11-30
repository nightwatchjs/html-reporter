import React from 'react';
import styled from 'styled-components';
import { CheckCircle, Cancel, RemoveCircle } from '@mui/icons-material';
import { Text } from '../Text';

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

const IconWrapper = styled.div`
  font-size: var(--font-size-12);
  display: flex;
  align-self: center;
`;

const PassedIcon = styled(CheckCircle)`
  color: var(--color-green-50);
`;

const FailedIcon = styled(Cancel)`
  color: var(--color-red-50);
`;

const SkippedIcon = styled(RemoveCircle)`
  color: var(--color-orange-50);
`;

const Wrapper = styled.article`
  display: flex;
  padding: 4px;
  background-color: var(--color-grey-10);
  border: 1px solid var(--color-grey-50);
  border-radius: 3px;
`;

const IconWithText = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 8px;
`;

export default TestResultCount;
