import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Summary from './components/Summary';
import TestData from './components/TestData';
import { ReportContextProvider } from './contexts/ReportContext';

const HtmlReporterComponent: React.FC = () => {
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
  border-left: 1px solid var(--color-grey-50);
  border-right: 1px solid var(--color-grey-50);
`;

export default HtmlReporterComponent;
