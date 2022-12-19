import styled from 'styled-components';

export const Wrapper = styled.article`
  margin: var(--margin-12);
  max-height: var(--log-view-height);
  overflow: auto;
`;

export const Log = styled.pre`
  background-color: var(--list-color-secondary-background-10);
  white-space: pre-wrap;
  padding: var(--padding-12);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  color: var(--color-grey-100);
  border-radius: var(--border-radius-4);
`;
