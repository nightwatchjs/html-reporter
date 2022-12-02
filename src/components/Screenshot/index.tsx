import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { Wrapper } from './style';

type ScreenshotProps = {
  src: string;
};

const Screenshot: React.FC<ScreenshotProps> = ({ src }) => {
  return (
    <Wrapper>
      <Zoom>
        <img alt="That Wanaka Tree, New Zealand by Laura Smetsers" src={src} width="250" />
      </Zoom>
    </Wrapper>
  );
};

export default Screenshot;
