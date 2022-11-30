import React from 'react';
import { getPassedTestPercentage } from '../../utils';
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

type Props = {
  totalTests: number;
  passed: number;
  failed: number;
  skipped: number;
};

const Analytics: React.FC<Props> = ({ totalTests, passed, failed, skipped }) => {
  return (
    <Wrapper>
      <Header>Overall Performance</Header>
      <TestStatusWrapper>
        <Status>
          <PercentageText>{`${getPassedTestPercentage(
            totalTests,
            passed + skipped
          )}%`}</PercentageText>
          <PassedText>Passed</PassedText>
        </Status>
        <StatisticsWrapper>
          <DetailsWrapper>
            <TotalSpecCountWrapper>
              <TestCount>1080</TestCount>
              <Spacer size={6} />
              <Text fontSize="--font-size-16" lineHight="--line-height-24">
                Tests
              </Text>
            </TotalSpecCountWrapper>
            <Timer time={{ hour: 1, min: 12 }} color={'--color-grey-90'} />
          </DetailsWrapper>
          <ProgressLine
            visualPartition={[
              {
                percentage: 91,
                color: '--color-green-60'
              },
              {
                percentage: 5,
                color: '--color-red-50'
              },
              {
                percentage: 4,
                color: '--color-orange-50'
              }
            ]}
          />
          <Statistics>
            <MetricWrapper>
              <MetricCount>{passed}</MetricCount>
              <Spacer size={4} />
              <Text fontSize="--font-size-12" lineHight="--line-height-20">
                Passed
              </Text>
            </MetricWrapper>
            <MetricWrapper>
              <MetricCount>{failed}</MetricCount>
              <Spacer size={4} />
              <Text fontSize="--font-size-12" lineHight="--line-height-20">
                Failed
              </Text>
            </MetricWrapper>
            <MetricWrapper>
              <MetricCount>{skipped}</MetricCount>
              <Spacer size={4} />
              <Text fontSize="--font-size-12" lineHight="--line-height-20">
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
