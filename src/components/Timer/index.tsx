import React from 'react';
import styled from 'styled-components';
import { TimerIcon } from '../../icons';

type Props = {
  time: {
    hour: number;
    min: number;
  };
  color: string;
};

const Timer: React.FC<Props> = ({ time: { hour, min }, color }) => {
  return (
    <Wrapper>
      <TimerIconWrapper>
        <TimerIcon />
      </TimerIconWrapper>
      <Time dateTime={`PT${hour}H${min}M`} color={color}>{`${hour}hr ${min} mins`}</Time>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const TimerIconWrapper = styled.div`
  display: inline;
`;

const Time = styled.time`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(${(props) => props.color});
`;

export default Timer;
