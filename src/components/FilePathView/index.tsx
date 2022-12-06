import React from 'react';
import { Wrapper } from './style';

type FilePathProps = {
  children: React.ReactNode;
};

const FilePathView: React.FC<FilePathProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default FilePathView;
