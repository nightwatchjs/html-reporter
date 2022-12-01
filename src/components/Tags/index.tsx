import React from 'react';
import { Wrapper } from './style';

type TagProps = {
  children: React.ReactNode;
};

const Tags: React.FC<TagProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Tags;
