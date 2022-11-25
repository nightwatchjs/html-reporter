import React from 'react';
import styled from 'styled-components';
import ProgressLine from '../ProgressLine';
import Spacer from '../Spacer';
import { Text } from '../Text';
import Timer from '../Timer';

type Props = {
  totalTests: number;
  passed: number;
  failed: number;
  skipped: number;
};

const getPassedTestPercentage = (totalTests: number, passedTests: number): string => {
  return ((passedTests / totalTests) * 100).toFixed();
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

const Wrapper = styled.article`
  padding: 12px 20px;
  border: 1px solid var(--color-grey-50);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  line-height: var(--line-height-24);
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-grey-100);
  opacity: 0.75;
`;

const Status = styled.div`
  width: 92px;
  height: 92px;
  border: 2px solid var(--color-blue-40);
  background: var(--color-blue-10);
  border-radius: 50%;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const PercentageText = styled.h2`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
`;

const PassedText = styled.p`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(--color-grey-90);
`;

const TestStatusWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const StatisticsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  gap: 8px;
  justify-content: flex-end;
`;

const Statistics = styled.div`
  display: flex;
  justify-content: space-between;
  background: var(--color-grey-20);
  border: 1px solid var(--color-grey-40);
  border-radius: 4px;
  min-height: 40px;
  padding: 7px;
`;

const MetricWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: baseline;
`;

const MetricCount = styled.h3`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  color: var(--color-grey-100);
`;

const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalSpecCountWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
const TestCount = styled.h2`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-26);
  line-height: var(--line-height-40);
  color: var(--color-grey-100);
`;

export default Analytics;
