import React from 'react';
import Accordion from '../Accordion';
import FilterDropdown from '../FilterDropdown';
import Search from '../Search';
import TestCaseView from '../TestCaseView';
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
            <FilterDropdown />
          </Actions>
          <Accordion />
        </Left>
        <Right>
          <TestCaseView />
        </Right>
      </TestDetailsWrapper>
    </Wrapper>
  );
};

export default TestData;
