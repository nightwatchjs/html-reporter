import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: var(--margin-20);
`;

export const TestDetailsWrapper = styled.div`
  display: flex;
  /* TODO: Should be removed */
  min-height: 1080px;
`;

export const Left = styled.div`
  flex: 1 1 335px;
  background: var(--color-grey-10);
  display: flex;
  flex-direction: column;
  padding: var(--padding-12) var(--padding-20);
  gap: var(--gap-12);
`;

export const Right = styled.div`
  border-left: var(--border-1) solid var(--color-grey-40);
  flex: 1 2 945px;
  display: flex;
  flex-direction: column;
  background: var(--color-grey-10);
`;

export const Actions = styled.div`
  display: flex;
  gap: var(--gap-12);
`;

export const ExpandAll = styled.button`
  padding: var(--padding-4) var(--padding-8);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  color: var(--color-grey-90);
  border: 1px solid var(--color-grey-50);
  border-radius: var(--border-radius-4);
  background: var(--color-grey-10);
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 1px var(--color-primary-60);
  }
`;
