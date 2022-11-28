import React, { Fragment } from 'react';
import styled from 'styled-components';
import ApproveAll from './components/ApproveAll';
import Header from './components/Header';
import Summary from './components/Summary';

const ReportVrt: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <ApproveAll />
      <Wrapper>
        <Summary />
      </Wrapper>
    </Fragment>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export default ReportVrt;
