import React from 'react';
import { TimerIcon } from '../../icons';
import { Time, TimerIconWrapper, Wrapper } from './style';

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

export default Timer;
