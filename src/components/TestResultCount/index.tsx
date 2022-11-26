import React from 'react';
import styled from 'styled-components';
import { FailedIcon } from '../../icons/FailedIcon';
import { PassedIcon } from '../../icons/PassedIcon';
import { SkippedIcon } from '../../icons/SkippedIcon';
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
        <PassedIcon />
        <Text fontSize="--font-size-14" lineHight="--line-height-20" color="--color-grey-100">
          {passed}
        </Text>
      </IconWithText>
      <IconWithText>
        <FailedIcon />
        <Text fontSize="--font-size-14" lineHight="--line-height-20" color="--color-grey-100">
          {failed}
        </Text>
      </IconWithText>
      <IconWithText>
        <SkippedIcon />
        <Text fontSize="--font-size-14" lineHight="--line-height-20" color="--color-grey-100">
          {skipped}
        </Text>
      </IconWithText>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  /* gap: 9px; */
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
