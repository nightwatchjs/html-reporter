import React from 'react';
import { Logo } from '../../icons';
import Separator from '../Separator';
import { Text } from '../Text';
import { TextWrapper, Wrapper } from './style';

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

export default Footer;
