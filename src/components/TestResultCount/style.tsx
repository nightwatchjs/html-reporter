import styled from 'styled-components';
import { CheckCircle, Cancel, RemoveCircle } from '../../icons/index';

export const IconWrapper = styled.div`
  font-size: var(--font-size-12);
  display: flex;
  align-self: center;
`;

export const PassedIcon = styled(CheckCircle)`
  color: var(--color-green-50);
`;

export const FailedIcon = styled(Cancel)`
  color: var(--color-red-50);
`;

export const SkippedIcon = styled(RemoveCircle)`
  color: var(--color-orange-50);
`;

export const Wrapper = styled.article`
  display: flex;
  padding: var(--padding-4);
  background-color: var(--color-grey-10);
  border: var(--border-1) solid var(--color-grey-50);
  border-radius: var(--border-radius-3);
`;

export const IconWithText = styled.div`
  display: flex;
  gap: var(--gap-5);
  align-items: center;
  padding: 0 var(--padding-8);
`;
