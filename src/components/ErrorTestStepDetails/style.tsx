import styled, { css } from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-10);
  padding: 12px;
  gap: 12px;
  border: 1px solid var(--color-grey-50);
  margin: 12px 12px 10px 12px;
`;

export const ErrorMessageWrapper = styled.div`
  background-color: var(--color-grey-20);
  padding: 8px;
`;

export const ErrorMessageText = styled.div`
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  font-family: var(--font-family-menlo);
  color: var(--color-grey-100);
`;

export const ErrorMessageBlock = styled.p``;
