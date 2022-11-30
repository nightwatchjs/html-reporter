import styled from 'styled-components';
import { Check, Close, RemoveCircleOutline } from '@mui/icons-material';

export const Wrapper = styled.article`
  display: flex;
  align-items: center;
  background: var(--color-grey-10);
  border-top: 1px solid var(--color-grey-50);
  padding: 8px;
  gap: 8px;
`;

export const Left = styled.div`
  display: flex;
  font-size: var(--font-size-16);
  justify-content: center;
  align-items: center;
  align-self: flex-start;
`;

export const PassedIcon = styled(Check)`
  color: var(--color-green-50);
`;

export const FailedIcon = styled(Close)`
  color: var(--color-red-50);
`;

export const SkippedIcon = styled(RemoveCircleOutline)`
  color: var(--color-orange-50);
`;
