import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
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
  padding: 12px 20px;
  gap: 12px;
`;

export const Right = styled.div`
  border-left: 1px solid var(--color-grey-40);
  flex: 1 2 945px;
  display: flex;
  flex-direction: column;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
`;

export const ExpandAll = styled.button`
  padding: 4px 8px;
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
