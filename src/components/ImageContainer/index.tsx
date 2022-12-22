import React from 'react';
import { Baseline, Header } from './style';

type Props = {
  imageType: string;
  imgPath: string;
};

const ImageContainer: React.FC<Props> = ({ imageType, imgPath }) => {
  return (
    <Baseline>
      <Header>{imageType}</Header>
      <img src={imgPath} alt={`${imageType} Screenshot`} />
    </Baseline>
  );
};

export default ImageContainer;
