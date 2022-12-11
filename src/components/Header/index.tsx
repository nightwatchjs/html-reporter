import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { NightwatchIcon } from '../../icons';
import { convertMsToTime } from '../../utils';
import { Center, Date, Left, Right, Time, Wrapper } from './style';
import { getDateFromMillisecond } from './util';

const Header = () => {
  const {
    metadata: { timestamp, date }
  } = useGlobalContext();

  return (
    <Wrapper>
      <Left>
        <NightwatchIcon />
      </Left>
      <Center>Test Reporter</Center>
      <Right>
        <Date>{getDateFromMillisecond(date)}</Date>
        <Time>{convertMsToTime(timestamp).paddedTime}</Time>
      </Right>
    </Wrapper>
  );
};

export default React.memo(Header);
