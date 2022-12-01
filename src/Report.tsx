import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Summary from './components/Summary';

const Report: React.FC = () => {
  return (
    <Fragment>
      <Header />
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

export default Report;
