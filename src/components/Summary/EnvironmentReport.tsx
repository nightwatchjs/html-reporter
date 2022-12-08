import React from 'react';
import EnvironmentDropdown from '../EnvironmentDropdown';
import { Title, SubTitle, Wrapper } from './EnvironmentReport.style';

const EnvironmentReport: React.FC = () => {
  return (
    <Wrapper>
      <Title>Environment wise reports</Title>
      <SubTitle>Select an environment to view the report</SubTitle>
      <EnvironmentDropdown />
    </Wrapper>
  );
};

export default EnvironmentReport;
