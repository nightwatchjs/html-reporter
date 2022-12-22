import React, { Fragment } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import TestData from '../components/TestData';
import { ReportContextProvider } from '../contexts/ReportContext';
import { Text } from '../components/Text';
import { totalFailedVRTTests } from '../utils';
import { useGlobalContext } from '../hooks/GlobalContext';

const VrtReporterComponent: React.FC = () => {
  const { environments } = useGlobalContext();
  const changes = totalFailedVRTTests(environments);

  return (
    <Fragment>
      <ReportContextProvider>
        <Header />
        <Wrapper>
          <TextWrapper>
            <Text fontSize={14} lineHight={20} color="grey-100">
              {`${changes} changes detected`}
            </Text>
          </TextWrapper>
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
  border-left: var(--border-1) solid var(--color-grey-50);
  border-right: var(--border-1) solid var(--color-grey-50);
`;

export const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: var(--border-1) solid var(--color-grey-50);
  background: var(--color-grey-10);
  padding: var(--padding-8) var(--padding-20);
  justify-content: center;
`;

export default VrtReporterComponent;
