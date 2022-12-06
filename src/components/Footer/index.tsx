import React from 'react';
import { Logo } from '../../icons';
import Separator from '../Separator';
import { Text } from '../Text';
import { LogoWrapper, TextWrapper, Wrapper } from './style';

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo brand="nightwatch" />
        <Separator />
        <Logo brand="browserstack" />
      </LogoWrapper>
      <TextWrapper>
        <Text fontSize={14} lineHight={16} color="grey-30">
          &copy; {`${new Date().getFullYear()} BrowserStack Limited. All rights reserved.`}
        </Text>
      </TextWrapper>
    </Wrapper>
  );
};

export default Footer;
