import React, { ReactElement } from 'react';
import { IconWrapper, Wrapper } from './style';

type AlertProps = {
  children: React.ReactNode;
  icon: ReactElement;
};

const AlertBanner: React.FC<AlertProps> = ({ icon, children }) => {
  return (
    <Wrapper>
      <IconWrapper>{icon}</IconWrapper>
      {children}
    </Wrapper>
  );
};

export default AlertBanner;
