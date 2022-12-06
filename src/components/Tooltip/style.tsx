import styled from 'styled-components';
import * as Tooltip from '@radix-ui/react-tooltip';

export const TooltipContent = styled(Tooltip.Content)`
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
  background-color: var(--color-grey-10);
  border-radius: var(--border-radius-3);
  padding: var(--padding-12);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  color: var(--color-grey-100);
`;

export const TooltipArrow = styled(Tooltip.Arrow)`
  fill: var(--color-grey-10);
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
`;
