import React from 'react';

import { Time, TimerIcon, TimerIconWrapper, Wrapper } from './style';

type Props = {
  time: {
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
  color: string;
  fontSize?: string;
  gap?: number;
};

const Timer: React.FC<Props> = ({ time: { hours, minutes, seconds }, color, fontSize, gap }) => {
  const getTime = (hours?: number, minutes?: number, seconds?: number): string => {
    return `${hours ? `${hours} hr` : ''} ${minutes ? `${minutes} min` : ''} ${
      seconds ? `${seconds} sec` : ''
    }`;
  };

  return (
    <Wrapper gap={gap}>
      <TimerIconWrapper fontSize={fontSize}>
        <TimerIcon />
      </TimerIconWrapper>
      <Time
        dateTime={`PT${hours ?? 0}H${minutes}M${seconds ?? 0}S`}
        color={color}
        fontSize={fontSize}
      >
        {getTime(hours, minutes, seconds)}
      </Time>
    </Wrapper>
  );
};

export default Timer;
