import React, { ReactElement } from 'react';
import { Text } from '../Text';
import { IconWrapper, Wrapper } from './style';

type Props = {
  icon: ReactElement;
  children: React.ReactNode;
  title?: string;
  transformText?: boolean;
};

const ChipWithIcon: React.FC<Props> = ({ icon, children, title, transformText }) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      <Text
        title={title}
        fontSize={12}
        lineHight={20}
        color="grey-100"
        transformText={transformText}
      >
        {children}
      </Text>
    </Wrapper>
  );
};

export default ChipWithIcon;
