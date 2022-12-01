import React, { ReactElement } from 'react';
import { Text } from '../Text';
import { IconWrapper, Wrapper } from './style';

type Props = {
  icon: ReactElement;
  children: React.ReactNode;
};

const ChipWithIcon: React.FC<Props> = ({ icon, children }) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Text fontSize={12} lineHight={20} color="grey-100" transformText>
        {children}
      </Text>
    </Wrapper>
  );
};

export default ChipWithIcon;
