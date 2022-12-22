import styled from 'styled-components';
import * as Toggle from '@radix-ui/react-toggle';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: var(--margin-20);
`;

export const TestDetailsWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  border-bottom: var(--border-1) solid var(--color-grey-50);
`;

export const Left = styled.div`
  flex: 1 1 335px;
  background: var(--color-grey-10);
  display: flex;
  flex-direction: column;
  padding: var(--padding-12) var(--padding-20);
  gap: var(--gap-12);
  min-height: 100%;
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

export const ToggleRoot = styled(Toggle.Root)`
  padding: var(--padding-4) var(--padding-8);
  border: 1px solid var(--color-grey-50);
  border-radius: var(--border-radius-4);
  background: var(--color-grey-10);
  cursor: pointer;

  &[data-state='on'] {
    box-shadow: 0 0 0 1px var(--color-primary-60);
  }

  &:focus {
    box-shadow: 0 0 0 1px var(--color-primary-60);
  }
`;
