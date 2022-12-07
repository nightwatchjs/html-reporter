import React, { useContext } from 'react';
import { GlobalContext } from '../../globalContext';
import { NightwatchIcon } from '../../icons';
import { IGlobalContext } from '../../types/globalContext';
import { convertMsToTime } from '../../utils';
import { Center, Date, Left, Right, Time, Wrapper } from './style';
import { getDateFromMillisecond } from './util';

const Header = () => {
  const {
    metadata: { timestamp, date }
  } = useContext<IGlobalContext>(GlobalContext);

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
