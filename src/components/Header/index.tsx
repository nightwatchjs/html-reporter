import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { NightwatchIcon } from '../../icons';
import { Center, Date as DateComponent, Left, Right, Time, Wrapper } from './style';
import { getDateFromMillisecond } from './util';

const Header = () => {
  const {
    metadata: { date }
  } = useGlobalContext();

  const parsedDate = new Date(date);

  return (
    <Wrapper>
      <Left>
        <NightwatchIcon />
      </Left>
      <Center>Test Reporter</Center>
      <Right>
        <DateComponent>{getDateFromMillisecond(parsedDate)}</DateComponent>
        <Time>{parsedDate.toLocaleDateString ()}</Time>
      </Right>
    </Wrapper>
  );
};

export default React.memo(Header);
