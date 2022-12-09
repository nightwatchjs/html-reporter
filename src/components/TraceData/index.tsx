import React from 'react';
import { Wrapper, Filters, TraceWrapper } from './style';
import TraceIframe from '../TraceIframe';

const TraceData: React.FC = () => {
  return (
    <Wrapper>
      <Filters>
        https://www.ecosia.org/
      </Filters>
      <TraceWrapper>
        <TraceIframe />
      </TraceWrapper>
    </Wrapper>
  );
};

export default TraceData;