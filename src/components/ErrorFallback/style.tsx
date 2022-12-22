import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--color-primary-10);
  align-items: center;
`;

export const ErrorAlert = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: var(--gap-16);
`;

export const ErrorContext = styled.pre`
  font-family: monospace;
  border: var(--border-1) solid var(--color-orange-50);
  background-color: var(--color-orange-20);
  padding: var(--padding-8);
  border-radius: var(--border-radius-4);
  color: var(--color-orange-100);
  line-height: var(--line-height-20);
`;

export const Action = styled.div`
  display: flex;
  width: 100%;
  gap: var(--gap-16);
  justify-content: center;
`;

export const Button = styled.button`
  padding: var(--padding-8);
  cursor: pointer;
  border-radius: var(--border-radius-3);
  border: var(--border-1) solid var(--color-primary-50);
  display: flex;
  gap: var(--gap-4);
  transition: 0.4s background-color;

  &:hover {
    background-color: var(--color-primary-20);
  }
`;
