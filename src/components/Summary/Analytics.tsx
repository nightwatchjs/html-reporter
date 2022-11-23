import React from 'react';
import styled from 'styled-components';

type Props = {
  passed: number;
  failed: number;
  skipped: number;
};

const Analytics = ({ passed, failed, skipped }: Props) => {
  return (
    <Wrapper>
      <div>Passed: {passed}</div>
      <div>Failed: {failed}</div>
      <div>Skipped: {skipped}</div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: block;
  height: 152px;
  width: 484px;
`

export default Analytics;
