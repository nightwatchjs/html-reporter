import React from 'react';
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
      <img src = {imgPath} />
    </Baseline>
  );
};

export default BaselineVrt;