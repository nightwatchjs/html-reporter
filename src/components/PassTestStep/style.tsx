import styled from 'styled-components';
import { Check } from '../../icons';

export const Wrapper = styled.div`
  display: flex;
  padding: var(--padding-8);
  gap: var(--gap-8);
  border-bottom: var(--border-1) solid var(--color-grey-40);
  align-items: center;

  &:hover {
    border-color: transparent;
    box-shadow: inset 0 0 0 1px var(--color-primary-60);
  }
`;

export const Text = styled.p`
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  color: var(--color-grey-100);
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

export const PassedIcon = styled(Check)`
  color: var(--color-green-60);
`;
