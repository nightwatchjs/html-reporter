import React from 'react';
import { TimerOutlined } from '@mui/icons-material';
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
        <TimerOutlined fontSize="inherit" />
      </TimerIconWrapper>
      <Time dateTime={`PT${hour}H${min}M`} color={color}>{`${hour}hr ${min} mins`}</Time>
    </Wrapper>
  );
};

export default Timer;
