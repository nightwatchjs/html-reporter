import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { NightwatchIcon } from '../../icons';
import { Center, Date as DateComponent, Left, Right, Time, Wrapper } from './style';

const Header = () => {
  const {
    metadata: { date }
  } = useGlobalContext();

  const parsedDate = new Date(date);
  const formattedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(parsedDate);

  const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return (
    <Wrapper>
      <Left>
        <NightwatchIcon />
      </Left>
      <Center>Test Reporter</Center>
      <Right>
        <DateComponent>{formattedDate}</DateComponent>
        <Time>{`${parsedDate.toLocaleTimeString()} (${timezoneName})`}</Time>
      </Right>
    </Wrapper>
  );
};

export default React.memo(Header);
