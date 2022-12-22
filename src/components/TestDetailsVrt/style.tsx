import styled from 'styled-components';

export const Error = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: var(--gap-20);
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: var(--color-grey-10);
  border-left: var(--border-1) solid var(--color-grey-40);
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 var(--padding-12) var(--padding-12);
  gap: var(--gap-12);
  isolation: isolate;
`;
