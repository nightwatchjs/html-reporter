import styled from 'styled-components';
import { Check, Close, RemoveCircleOutline } from '@mui/icons-material';

export const Wrapper = styled.article`
  display: flex;
  gap: 8px;
  background: var(--color-grey-10);
  border-top: 1px solid var(--color-grey-50);
  padding: 8px;
`;

export const Left = styled.div`
  font-size: var(--font-size-16);
  display: inline-flex;
  flex-shrink: 0;
  align-items: baseline;
  margin-top: 2px;
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
