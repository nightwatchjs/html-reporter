import React, { ReactElement } from 'react';
import { Text } from '../Text';
import { IconWrapper, Wrapper } from './style';

type Props = {
  icon: ReactElement;
  children: React.ReactNode;
  title?: string;
};

const ChipWithIcon: React.FC<Props> = ({ icon, children, title }) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Text title={title} fontSize={12} lineHight={20} color="grey-100" transformText>
        {children}
      </Text>
    </Wrapper>
  );
};

export default ChipWithIcon;
