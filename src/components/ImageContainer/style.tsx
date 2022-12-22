import styled from 'styled-components';

export const Header = styled.div`
  padding: var(--padding-4) 0 var(--padding-4) var(--padding-12);
  gap: var(--gap-12);
  background: var(--color-grey-30);
  color: var(--color-grey-90);
  line-height: var(--line-height-20);
  font-size: var(--font-size-12);
  font-weight: var(--font-weight-semi-light);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--padding-12) var(--padding-12);
  gap: var(--gap-12);
  border: var(--border-1) solid var(--color-grey-50);
  flex: 1;
`;
