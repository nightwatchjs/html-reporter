import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';
import { NightwatchIcon } from '../../icons';

const Header = () => {
  return (
    <Wrapper>
      <Left>
        <NightwatchIcon />
      </Left>
      <Center aria-label='Test Reporter'>Test Reporter</Center>
      <Right>
        <Date>Sat, Jan 09 2022</Date>
        <Time>08:45:25 IST</Time>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: ${HEADER_HEIGHT}px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 20px;
  background: var(--color-dark-background);
  color: var(--color-dark-background-text);
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: baseline;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-weight: var(--font-weight-bold);
  font-size: calc(24 / 16 * 1rem);
  line-height: calc(36 / 16 * 1rem);
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  font-weight: var(--font-weight-semi-light);
`;

const Date = styled.div`
  font-size: 1rem;
  line-height: calc(24 / 16 * 1rem);
`;

const Time = styled.div`
  font-size: calc(12 / 16 * 1rem);
  line-height: calc(20 / 16 * 1rem);
  opacity: 0.75;
`;

export default React.memo(Header);
