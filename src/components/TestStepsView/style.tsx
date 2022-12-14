import * as Tabs from '@radix-ui/react-tabs';
import styled from 'styled-components';

export const TabsRoot = styled(Tabs.Root)`
  display: flex;
  flex-direction: column;
  flex: 1;
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

export const LogWrapper = styled.div`
  display: flex;
  margin: var(--margin-12);
  /* FIXME: Height should be based on the content? */
  height: 1444px;
`;

export const SeleniumLog = styled.iframe`
  display: flex;
  flex: 1;
  background-color: var(--list-color-secondary-background-10);
  white-space: pre-wrap;
  padding: var(--padding-12);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  color: var(--color-grey-100);
  border-radius: var(--border-radius-4);
`;
