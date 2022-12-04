import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  border: 1px solid var(--color-grey-50);
  border-radius: var(--border-radius-8);
`;

export const Title = styled.h2`
  font-size: var(--font-size-16);
  line-height: var(--line-height-24);
  font-weight: var(--font-weight-bold);
  color: var(--color-grey-100);
  opacity: 0.75;
  text-transform: lowercase;
  margin-bottom: 12px;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const SubTitle = styled.p`
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  color: var(--color-grey-90);
  margin-bottom: 8px;
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;
