import styled from 'styled-components';

export const Wrapper = styled.header`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  background: var(--color-grey-10);
  border-bottom: 1px solid #DDDDDD;
`;

export const Summary = styled.div`
  display: flex;
  height: 40px;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-100);
  line-height: var(--line-height-20);
  font-size: var(--font-size-14);
  font-weight: var(--font-weight-semi-light);
`;