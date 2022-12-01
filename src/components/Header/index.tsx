import React from 'react';
import { NightwatchIcon } from '../../icons';
import { Center, Date, Left, Right, Time, Wrapper } from './style';

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <NightwatchIcon />
      </Left>
      <Center aria-label="Test Reporter">Test Reporter</Center>
      <Right>
        <Date>Sat, Jan 09 2022</Date>
        <Time>08:45:25 IST</Time>
      </Right>
    </Wrapper>
  );
};

export default React.memo(Header);
