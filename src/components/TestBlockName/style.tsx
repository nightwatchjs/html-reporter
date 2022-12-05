import styled from 'styled-components';
import { Cancel, CheckCircle } from '../../icons';

export const Wrapper = styled.div`
  display: flex;
  gap: var(--gap-8);
  font-size: var(--font-size-20);
  font-weight: var(--font-weight-semi-light);
  line-height: var(--line-height-32);
  color: var(--color-red-60);
  align-items: center;
`;

export const PassedIcon = styled(CheckCircle)`
  color: var(--color-green-50);
`;

export const FailedIcon = styled(Cancel)`
  color: var(--color-red-50);
`;
