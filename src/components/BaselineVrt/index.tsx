import React from 'react';
import ImageVrt from '../ImageVrt';
import { Baseline, Filters } from './style'

type Props = {
  imageType: string;
  imgPath: string;
}
const BaselineVrt: React.FC<Props> = ({ imageType, imgPath }) => {
  return (
    <Baseline>
      <Filters>
          {imageType}
      </Filters>
      <ImageVrt img_path = {imgPath}/>
    </Baseline>
  );
};

export default BaselineVrt;
