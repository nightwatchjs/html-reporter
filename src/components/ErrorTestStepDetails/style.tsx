import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-10);
  padding: var(--padding-12);
  gap: var(--gap-12);
  border: var(--border-1) solid var(--color-grey-50);
  margin: var(--margin-12) var(--margin-12) var(--margin-10) var(--margin-12);
`;

export const ErrorMessageWrapper = styled.div`
  background-color: var(--color-grey-20);
  padding: var(--padding-8);
`;

export const ErrorMessageText = styled.div`
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  font-family: var(--font-family-menlo);
  color: var(--color-grey-100);
`;

export const ErrorMessageBlock = styled.p``;
