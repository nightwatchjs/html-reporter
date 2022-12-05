import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  height: calc(44 / 16 * 1rem);
  border-top: var(--border-1) solid var(--color-grey-50);
  border-bottom: var(--border-1) solid var(--color-grey-50);
  background: var(--color-grey-10);
  padding: var(--padding-8) var(--padding-20);
  align-items: center;
  gap: var(--gap-20);
  justify-content: flex-end;
`;
