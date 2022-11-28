import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../icons';
import Separator from '../Separator';
import { Text } from '../Text';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Logo brand="nightwatch" />
      <Separator />
      <Logo brand="browserstack" />
      <TextWrapper>
        <Text fontSize="--font-size-14" lineHight="--line-height-16" color="--color-grey-30">
          &copy; {`${new Date().getFullYear()} BrowserStack Limited. All rights reserved.`}
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  padding: 20px 40px;
  background: var(--color-dark-background);
  color: var(--color-dark-background-text);
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin-left: 40px;
`;

export default Footer;
