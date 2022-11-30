import styled from 'styled-components';
import { CheckCircle, Cancel, RemoveCircle } from '@mui/icons-material';

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
  padding: 4px;
  background-color: var(--color-grey-10);
  border: 1px solid var(--color-grey-50);
  border-radius: 3px;
`;

export const IconWithText = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 0 8px;
`;
