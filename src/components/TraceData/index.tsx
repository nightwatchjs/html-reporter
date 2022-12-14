import React from 'react';
import { Wrapper, URL, TraceWrapper } from './style';
const traceFilepath = '../../../sample/trace.html';

const TraceData: React.FC = () => {
  return (
    <Wrapper>
      <URL>https://www.ecosia.org/</URL>
      <TraceWrapper>
        <iframe title="static_html" src={traceFilepath} scrolling="yes" height="500px"></iframe>
      </TraceWrapper>
    </Wrapper>
  );
};

export default TraceData;
