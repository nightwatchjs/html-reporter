import React from 'react';
import { ITrace } from '../SpecMetaData/types';
import { ElapsedTime, Wrapper, Text, PassedIcon } from './style';

type TestStepProps = {
  time: number;
  children: React.ReactNode;
  traceData: ITrace['trace'];
  setTrace: React.Dispatch<
    React.SetStateAction<
      | {
          url?: string;
          snapshotPath?: string;
        }
      | undefined
    >
  >;
};

const PassTestStep: React.FC<TestStepProps> = ({
  time,
  children,
  traceData: { traceUrl, traceSnapshot },
  setTrace
}) => {
  return (
    <Wrapper
      onClick={() =>
        setTrace(
          traceSnapshot
            ? {
                ...(traceUrl && { url: traceUrl }),
                snapshotPath: traceSnapshot
              }
            : {
                ...(traceUrl && { url: traceUrl })
              }
        )
      }>
      <PassedIcon />
      <Text>{children}</Text>
      <ElapsedTime>{time < 1000 ? `${time} ms` : `${Math.round(time / 1000)} sec`}</ElapsedTime>
    </Wrapper>
  );
};

export default PassTestStep;
