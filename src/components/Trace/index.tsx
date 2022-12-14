import React from 'react';
import { TraceWrapper, Wrapper, URL, IFrame, ImageWrapper } from './style';
import NoResult from '../../icons/NoResult';

type TraceProps = {
  url?: string;
  src?: string;
};

const Trace: React.FC<TraceProps> = ({ url, src }) => {
  return (
    <Wrapper>
      <URL>{url}</URL>
      <TraceWrapper>
        {src ? (
          <IFrame title="Trace Viewer" src={src} scrolling="yes" height="700px" />
        ) : (
          <ImageWrapper>
            <NoResult />
          </ImageWrapper>
        )}
      </TraceWrapper>
    </Wrapper>
  );
};

export default Trace;
