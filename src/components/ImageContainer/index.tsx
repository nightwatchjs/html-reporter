import React from 'react';
import { Wrapper, Header } from './style';

type ImageContainerProps = {
  imageType: string;
  imgPath: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({ imageType, imgPath }) => {
  return (
    <Wrapper>
      <Header>{imageType}</Header>
      <img src={imgPath} alt={`${imageType} Screenshot`} />
    </Wrapper>
  );
};

export default ImageContainer;
