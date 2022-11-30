import React from 'react';
import Dropdown from '../Dropdown';
import Search from '../Search';
import TestFileView from '../TestFileView';
import TestStatusBar from '../TestStatusBar';
import { Actions, ExpandAll, Left, Right, TestDetailsWrapper, Wrapper } from './style';

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

export default TestData;
