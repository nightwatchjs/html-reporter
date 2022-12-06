import styled from 'styled-components';

export const Wrapper = styled.section`
  display: flex;
  gap: var(--gap-12);
  padding: var(--padding-12);
  background: var(--color-grey-10);
  flex-direction: column;
`;

export const SearchWrapper = styled.div`
  display: block;
  width: calc(200 / 16 * 1rem);
`;

export const TestStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
