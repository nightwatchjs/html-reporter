import styled from 'styled-components';

export const Wrapper = styled.footer`
  display: flex;
  padding: var(--padding-20) var(--padding-40);
  background: var(--color-dark-background);
  color: var(--color-dark-background-text);
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  gap: var(--gap-12);
  align-items: center;
`;

export const TextWrapper = styled.div`
  margin-left: var(--margin-40);
`;
