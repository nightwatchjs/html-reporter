import React from 'react';
import styled from 'styled-components';
import TestStatusBar from '../TestStatusBar';

const TestData: React.FC = () => {
  return (
    <Wrapper>
      <TestStatusBar />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default TestData;
