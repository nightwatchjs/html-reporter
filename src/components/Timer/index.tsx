import React from 'react';
import styled from 'styled-components';
import { TimerIcon } from '../../icons';

type Props = {
  time: {
    hour?: number;
    min?: number;
    sec?: number;
  };
  color: string;
};

const Timer: React.FC<Props> = ({ time: { hour, min, sec }, color }) => {
  const getTime = (hour?: number, min?: number, sec?: number): string => {
    return `${hour ? `${hour} hr` : ''} ${min ? `${min} mins` : ''} ${sec ? `${sec} secs` : ''}`;
  };

  return (
    <Wrapper>
      <TimerIconWrapper>
        <TimerIcon />
      </TimerIconWrapper>
      <Time dateTime={`PT${hour ?? 0}H${min}M${sec ?? 0}S`} color={color}>
        {getTime(hour, min, sec)}
      </Time>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const TimerIconWrapper = styled.div`
  display: flex;
`;

const Time = styled.time`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(${(props) => props.color});
`;

export default Timer;
