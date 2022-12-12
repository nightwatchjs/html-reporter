import React from 'react';
import { useGlobalContext } from '../../hooks/GlobalContext';
import { convertMsToTime, getPassedTestPercentage } from '../../utils';
import ProgressLine from '../ProgressLine';
import Spacer from '../Spacer';
import { Text } from '../Text';
import Timer from '../Timer';

import {
  DetailsWrapper,
  Header,
  MetricCount,
  MetricWrapper,
  PassedText,
  PercentageText,
  Statistics,
  StatisticsWrapper,
  Status,
  TestCount,
  TestStatusWrapper,
  TotalSpecCountWrapper,
  Wrapper
} from './Analytics.style';
import { getTestPercentage } from './utils';

const Analytics: React.FC = () => {
  const {
    stats: { passed, failed, skipped, total, time }
  } = useGlobalContext();

  const TestStatsInPercent = getTestPercentage(total, passed, failed, skipped);

  return (
    <Wrapper>
      <Header>Overall Performance</Header>
      <TestStatusWrapper>
        <Status>
          <PercentageText>{`${getPassedTestPercentage(total, passed + skipped)}%`}</PercentageText>
          <PassedText>Passed</PassedText>
        </Status>
        <StatisticsWrapper>
          <DetailsWrapper>
            <TotalSpecCountWrapper>
              <TestCount>{total}</TestCount>
              <Spacer size={6} />
              <Text fontSize={16} lineHight={24}>
                Tests
              </Text>
            </TotalSpecCountWrapper>
            <Timer time={convertMsToTime(time).time} color={'--color-grey-90'} />
          </DetailsWrapper>
          <ProgressLine
            visualPartition={[
              {
                percentage: TestStatsInPercent['passed'],
                color: '--color-green-60'
              },
              {
                percentage: TestStatsInPercent['failed'],
                color: '--color-red-50'
              },
              {
                percentage: TestStatsInPercent['skipped'],
                color: '--color-orange-50'
              }
            ]}
          />
          <Statistics>
            <MetricWrapper>
              <MetricCount>{passed}</MetricCount>
              <Spacer size={4} />
              <Text fontSize={12} lineHight={20}>
                Passed
              </Text>
            </MetricWrapper>
            <MetricWrapper>
              <MetricCount>{failed}</MetricCount>
              <Spacer size={4} />
              <Text fontSize={12} lineHight={20}>
                Failed
              </Text>
            </MetricWrapper>
            <MetricWrapper>
              <MetricCount>{skipped}</MetricCount>
              <Spacer size={4} />
              <Text fontSize={12} lineHight={20}>
                Skipped
              </Text>
            </MetricWrapper>
          </Statistics>
        </StatisticsWrapper>
      </TestStatusWrapper>
    </Wrapper>
  );
};

export default Analytics;
