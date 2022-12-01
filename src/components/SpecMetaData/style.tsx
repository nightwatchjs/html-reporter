import styled from 'styled-components';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  gap: 5px;
  margin-right: auto;
`;

export const TagGroup = styled.div`
  display: flex;
  gap: 4px;
  margin-left: auto;
  align-items: center;
`;
