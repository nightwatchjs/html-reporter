import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Summary from '../components/Summary';
import TestData from '../components/TestData';
import { ReportContextProvider } from '../contexts/ReportContext';

const Report: React.FC = () => {
  return (
    <Fragment>
      <ReportContextProvider>
        <Header />
        <Wrapper>
          <Summary />
          <TestData />
        </Wrapper>
        <Footer />
      </ReportContextProvider>
    </Fragment>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--gap-20);
  border-left: var(--border-1) solid var(--color-grey-50);
  border-right: var(--border-1) solid var(--color-grey-50);
`;

export default Report;
