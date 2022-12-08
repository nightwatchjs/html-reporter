import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  gap: var(--gap-16);
  align-items: center;
  flex: 4;
`;

export const EnvironmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
  flex: 4;
`;

export const EnvironmentHeading = styled.h2`
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-bold);
  text-transform: capitalize;
`;
