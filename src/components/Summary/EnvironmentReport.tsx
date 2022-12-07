import React, { useContext } from 'react';
import { GlobalContext } from '../../globalContext';
import { IGlobalContext } from '../../types/globalContext';
import EnvironmentDropdown from '../EnvironmentDropdown';
import { Title, SubTitle, Wrapper } from './EnvironmentReport.style';
import { getEnvironmentDropDownData } from './utils';

const EnvironmentReport: React.FC = () => {
  const { environment } = useContext<IGlobalContext>(GlobalContext);

  return (
    <Wrapper>
      <Title>Environment wise reports</Title>
      <SubTitle>Select an environment to view the report</SubTitle>
      <EnvironmentDropdown data={getEnvironmentDropDownData(environment)} />
    </Wrapper>
  );
};

export default EnvironmentReport;
