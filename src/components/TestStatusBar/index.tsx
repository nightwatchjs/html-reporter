import React from 'react';
import styled from 'styled-components';
import TestResultCount from '../TestResultCount';
import Timer from '../Timer';

const TestStatusBar: React.FC = () => {
  return (
    <Wrapper>
      <Timer time={{ min: 8, sec: 12 }} color={'--color-grey-100'} />
      <TestResultCount passed={163} failed={31} skipped={22} />
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
  gap: 20px;
  justify-content: flex-end;
`;

export default TestStatusBar;
