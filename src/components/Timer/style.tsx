import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const TimerIconWrapper = styled.div`
  display: inline;
`;

export const Time = styled.time`
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(${(props) => props.color});
`;
