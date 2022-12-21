import styled from 'styled-components';
import { Close } from '../../icons';

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  background-color: var(--light-color-red-background-10);

  &:hover {
    border-color: transparent;
    box-shadow: inset 0 0 0 1px var(--color-red-60);
  }
`;

export const FailedStepWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: var(--padding-8);
  gap: var(--gap-8);
`;

export const FailedIcon = styled(Close)`
  color: var(--color-red-60);
`;

export const Text = styled.p`
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  color: var(--color-grey-100);
  overflow-wrap: anywhere;
`;

export const ElapsedTime = styled.div`
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  text-align: right;
  color: var(--color-grey-80);
  margin-left: auto;
  flex-shrink: 0;
`;
