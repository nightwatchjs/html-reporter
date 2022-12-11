import React from 'react';
import { Log, Wrapper } from './style';

type LogViewProps = {
  log: string;
};

const LogView: React.FC<LogViewProps> = ({ log }) => {
  return (
    <Wrapper>
      <Log>{String(log)}</Log>
    </Wrapper>
  );
};

export default LogView;
