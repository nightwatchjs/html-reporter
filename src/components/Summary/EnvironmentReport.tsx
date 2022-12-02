import React from 'react';
import { Title, SubTitle, Wrapper } from './EnvironmentReport.style';

const EnvironmentReport: React.FC = () => {
  return (
    <Wrapper>
      <Title>Environment wise reports</Title>
      <SubTitle>Select an environment to view the report</SubTitle>
    </Wrapper>
  );
};

export default EnvironmentReport;
