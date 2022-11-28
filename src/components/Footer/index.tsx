import React from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT } from '../../constants';
import { NightwatchBrowserstackIcon } from '../../icons';

const Footer = () => {
  return (
    <Wrapper>
      <Copyright>
        <NightwatchBrowserstackIcon />
        <span>
        © 2022 BrowserStack Limited. All rights reserved.
        </span>
      </Copyright>
    </Wrapper>
  );
};
const Copyright = styled.footer `
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 40px;
    height: 25.07px;
`;
const Wrapper = styled.header`
    height: ${HEADER_HEIGHT}px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;
    background: var(--color-dark-background);
    color: var(--color-dark-background-text);
`;


export default Footer;
