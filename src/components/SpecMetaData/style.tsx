import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
  padding: var(--padding-12);
  flex: 1;
`;

export const Metadata = styled.div`
  display: flex;
`;

export const TestBlockDetails = styled.div`
  display: flex;
`;

export const EnvironmentAndSpecName = styled.div`
  display: flex;
  align-items: center;
  gap: var(--gap-5);
  margin-right: auto;
`;

export const TagGroup = styled.div`
  display: flex;
  gap: var(--gap-4);
  margin-left: auto;
  align-items: center;
`;
