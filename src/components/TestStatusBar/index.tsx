import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { useReportContext } from '../../hooks/ReportContext';
import { convertMsToTime } from '../../utils';
import TestResultCount from '../TestResultCount';
import Timer from '../Timer';
import { Wrapper } from './style';

const TestStatusBar: React.FC = () => {
  const { environmentName } = useReportContext();
  const { environments } = useGlobalContext();

  const { time } = environments[environmentName].metadata;
  const { passed, failed, skipped } = environments[environmentName].stats;

  return (
    <Wrapper>
      <Timer time={convertMsToTime(time).time} color={'--color-grey-100'} />
      <TestResultCount passed={passed} failed={failed} skipped={skipped} />
    </Wrapper>
  );
};

export default TestStatusBar;
