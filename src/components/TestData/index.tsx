import React from 'react';
import styled from 'styled-components';
import TestFileView from '../TestFileView';
import TestStatusBar from '../TestStatusBar';

const TestData: React.FC = () => {
  return (
    <Wrapper>
      <TestStatusBar />
      <TestDetailsWrapper>
        <Left>
          <TestFileView />
        </Left>
        <Right>Right</Right>
      </TestDetailsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TestDetailsWrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 3;
`;

export default TestData;
