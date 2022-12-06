import React from 'react';
import SpecMetaData from '../../SpecMetaData';
import { Wrapper } from './style';

const Header: React.FC = () => {
  return (
    <Wrapper>
      <SpecMetaData />
    </Wrapper>
  );
};

export default Header;
