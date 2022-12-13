import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import ApproveAll from './components/ApproveAll';
import Footer from './components/Footer';
import Header from './components/Header';
import Summary from './components/Summary';
import TestData from './components/TestData';
import { ReportContextProvider } from './contexts/ReportContext';

type WrapperProps = {
  vrt?: boolean;
};

const vrtReport = () => {
  const vrt = true;
  if (vrt) {
    return (
      <Wrapper vrt={vrt}>
        <ApproveAll />
        <TestData />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Summary />
        <TestData />
      </Wrapper>
    )
  }
}
const Report: React.FC = () => {
  return (
    <Fragment>
      <ReportContextProvider>
        <Header />
        {vrtReport()}
        <Footer />
      </ReportContextProvider>
    </Fragment>
  );
};

const Wrapper = styled.section<WrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${(props) =>
    !props.vrt &&
    css`
      gap: var(--gap-20);
  `}
  border-left: 1px solid var(--color-grey-50);
  border-right: 1px solid var(--color-grey-50);
`;

export default Report;
