import React from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import Search from '../Search';
import TestFileView from '../TestFileView';
import TestStatusBar from '../TestStatusBar';

const TestData: React.FC = () => {
  return (
    <Wrapper>
      <TestStatusBar />
      <TestDetailsWrapper>
        <Left>
          <Search placeholder="Spec, test, tag" />
          <Actions>
            <ExpandAll type="button">Expand all</ExpandAll>
            <Dropdown />
          </Actions>
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
  min-height: 1200px;
`;

const TestDetailsWrapper = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1 1 335px;
  background: var(--color-grey-10);
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  gap: 12px;
`;

const Right = styled.div`
  flex: 1 2 945px;
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

const ExpandAll = styled.button`
  padding: 4px 8px;
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  color: var(--color-grey-90);
  border: 1px solid var(--color-grey-50);
  border-radius: 4px;
  background: var(--color-grey-10);
  cursor: pointer;
`;

export default TestData;
