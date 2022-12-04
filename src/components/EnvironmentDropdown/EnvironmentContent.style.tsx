import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  flex: 4;
`;

export const EnvironmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 4;
`;

export const EnvironmentHeading = styled.h2`
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-bold);
  text-transform: lowercase;

  &::first-letter {
    text-transform: uppercase;
  }
`;
