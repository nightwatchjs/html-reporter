import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  gap: var(--gap-12);
`;

export const TabsList = styled(Tabs.List)`
  flex-shrink: 0;
  display: flex;
  border-bottom: var(--border-1) solid var(--color-grey-50);
`;

export const TabsTrigger = styled(Tabs.Trigger)`
  padding: var(--padding-12) var(--padding-16);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(--color-grey-90);
  font-weight: var(--font-weight-semi-light);
  user-select: none;

  &[data-state='active'] {
    color: var(--color-primary-60);
    font-weight: var(--font-weight-bold);
    box-shadow: inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor;
  }

  &:hover {
    background: var(--light-primary-background-10);
    box-shadow: inset 0 -1px 0 0 var(--color-primary-20), 0 1px 0 0 var(--color-primary-20);
  }

  &:focus {
    position: relative;
    box-shadow: 0 0 0 1px var(--color-primary-60);
  }
`;

export const Error = styled.div`
  display: flex;
  gap: var(--gap-20);
`;

export const Wrapper = styled.div`
  background: var(--color-grey-10);
  border-left: var(--border-1) solid var(--color-grey-40);
`;

export const Details = styled.div`
  padding: 0 var(--padding-12) var(--padding-12);
`;
