import styled from 'styled-components';
import { Cancel, CheckCircle } from '../../icons';

export const Wrapper = styled.div`
  display: flex;
  gap: var(--gap-8);
  font-weight: var(--font-weight-semi-light);
  align-items: center;
`;

export const PassedIcon = styled(CheckCircle)`
  color: var(--color-green-50);
`;

export const FailedIcon = styled(Cancel)`
  color: var(--color-red-50);
`;
