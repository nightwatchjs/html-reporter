import styled, { css } from 'styled-components';
import { Check, Close, RemoveCircleOutline } from '../../icons/index';

type WrapperProps = {
  highlight: boolean;
};

export const Wrapper = styled.button<WrapperProps>`
  display: flex;
  gap: var(--gap-8);
  background: var(--color-grey-10);
  border-top: var(--border-1) solid var(--color-grey-50);
  padding: var(--padding-8);
  ${(props) =>
    props.highlight &&
    css`
      background-color: var(--light-color-red-background-10);
    `}
  flex: 1;
`;

export const Left = styled.div`
  font-size: var(--font-size-16);
  display: inline-flex;
  flex-shrink: 0;
  align-items: baseline;
  margin-top: var(--margin-2);
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
