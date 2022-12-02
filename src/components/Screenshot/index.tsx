import React from 'react';
import Zoom from 'react-medium-image-zoom';
import './react-medium-image-zoom.css';
import { Wrapper } from './style';
import { ZoomInMap, ZoomOutMap } from '@mui/icons-material';

type ScreenshotProps = {
  src: string;
};

const Screenshot: React.FC<ScreenshotProps> = ({ src }) => {
  return (
    <Wrapper>
      <Zoom zoomMargin={45} IconZoom={ZoomOutMap} IconUnzoom={ZoomInMap}>
        <img alt="That Wanaka Tree, New Zealand by Laura Smetsers" src={src} width="250" />
      </Zoom>
    </Wrapper>
  );
};

export default Screenshot;
