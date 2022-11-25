import React from 'react';
import styled from 'styled-components';
import Analytics from './Analytics';
import EnvironmentReport from './EnvironmentReport';

const Summary: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Summary</Title>
        <SubTitle>(Executed 216 tests in 5 environments)</SubTitle>
        <Link href="#!">Hide summary</Link>
      </Header>
      <AnalyticsWrapper>
        <Analytics totalTests={1080} passed={986} failed={59} skipped={35} />
      </AnalyticsWrapper>
      <EnvironmentReportWrapper>
        <EnvironmentReport />
      </EnvironmentReportWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: var(--color-grey-50);
  border-radius: 0 0 8px 8px;
  padding: 12px 20px;
  margin: 0 20px;
  flex-direction: row;
  flex-wrap: wrap;
  background: var(--color-grey-10);
  max-width: 1240px;
`;

const AnalyticsWrapper = styled.div`
  flex: 1 1 0%;
  margin-right: 20px;
`;
const EnvironmentReportWrapper = styled.div`
  flex: 1 1 0%;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  line-height: var(--line-height-32);
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: calc(20 / 16 * 1rem);
  font-weight: var(--font-weight-bold);
  color: var(--color-grey-100);
  align-self: baseline;
`;

const SubTitle = styled.p`
  font-size: 10px;
  margin-right: auto;
  align-self: baseline;
  font-size: calc(12 / 16 * 1rem);
  font-weight: 400;
`;

const Link = styled.a`
  color: var(--color-blue-60);
`;

export default Summary;
