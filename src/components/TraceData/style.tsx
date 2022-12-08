import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--gap-12);
  flex: 1;
`;

export const Filters = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: var(--padding-4) 0px var(--padding-4) var(--padding-12);
  gap: 12px;
  background: var(--color-grey-30);

  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  color: var(--color-grey-90);
`;
