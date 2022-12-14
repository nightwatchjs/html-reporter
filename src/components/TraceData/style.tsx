import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-12);
`;

export const URL = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--padding-4) 0px var(--padding-4) var(--padding-12);
  gap: 12px;
  background: var(--color-grey-30);
  width: 100%;

  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  color: var(--color-grey-90);
`;

export const TraceWrapper = styled.div`
  display: flex;
  height: auto;
  width: auto;
  overflow: scroll;
`;
