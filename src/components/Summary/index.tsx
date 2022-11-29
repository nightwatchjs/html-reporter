import React from 'react';
import Analytics from './Analytics';
import EnvironmentReport from './EnvironmentReport';
import {
  AnalyticsWrapper,
  EnvironmentReportWrapper,
  Header,
  Link,
  SubTitle,
  Title,
  Wrapper
} from './style';

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

export default Summary;
