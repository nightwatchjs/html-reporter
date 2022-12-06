import React from 'react';

import { Time, TimerIcon, TimerIconWrapper, Wrapper } from './style';

type Props = {
  time: {
    hour?: number;
    min?: number;
    sec?: number;
  };
  color: string;
  fontSize?: string;
  gap?: number;
};

const Timer: React.FC<Props> = ({ time: { hour, min, sec }, color, fontSize, gap }) => {
  const getTime = (hour?: number, min?: number, sec?: number): string => {
    return `${hour ? `${hour} hr` : ''} ${min ? `${min} min` : ''} ${sec ? `${sec} sec` : ''}`;
  };

  return (
    <Wrapper gap={gap}>
      <TimerIconWrapper fontSize={fontSize}>
        <TimerIcon />
      </TimerIconWrapper>
      <Time dateTime={`PT${hour ?? 0}H${min}M${sec ?? 0}S`} color={color} fontSize={fontSize}>
        {getTime(hour, min, sec)}
      </Time>
    </Wrapper>
  );
};

export default Timer;
