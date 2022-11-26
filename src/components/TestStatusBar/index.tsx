import React from 'react';
import styled from 'styled-components';
import TestResultCount from '../TestResultCount';
import Timer from '../Timer';

const TestStatusBar: React.FC = () => {
  return (
    <Wrapper>
      <div>Environment</div>
      <Right>
        <Timer time={{ min: 8, sec: 12 }} color={'--color-grey-100'} />
        <TestResultCount passed={163} failed={31} skipped={22} />
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 44px;
  border: 1px solid var(--color-grey-50);
  background: var(--color-grey-10);
  padding: 8px 20px;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;

export default TestStatusBar;
