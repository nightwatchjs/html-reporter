import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const TestFilterWrapper = styled.div`
  position: relative;
`;

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  cursor: pointer;
`;

export const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  padding-right: var(--padding-12);
  font-size: var(--font-size-12);
  color: var(--color-grey-80);
`;

export const TestFilterButton = styled.button`
  color: var(--color-grey-90);
  padding: var(--padding-4) var(--padding-40) var(--padding-4) var(--margin-8);
  border: var(--border-1) solid var(--color-grey-50);
  border-radius: var(--border-radius-4);
  display: flex;
  justify-content: flex-start;
  background: var(--color-grey-10);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  font-weight: var(--font-weight-semi-light);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);

  &:focus {
    box-shadow: 0 0 0 1px var(--color-primary-60);
  }
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 110px;
  background-color: var(--color-grey-10);
  border-radius: var(--border-radius-3);
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(--color-grey-100);
  display: flex;
  gap: var(--gap-8);

  box-shadow: 0px 1px 4px var(--color-grey-50);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
`;

export const DropdownMenuRadioGroup = styled(DropdownMenu.RadioGroup)`
  width: 100%;
  cursor: pointer;
`;

export const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: calc(1 / 16 * 1rem);
  border: var(--border-1) solid var(--color-grey-50);
`;

export const DropdownRadioItem = styled(DropdownMenu.RadioItem)`
  padding: var(--padding-8) var(--padding-12);
  font-weight: var(--font-weight-semi-light);
  user-select: none;
  outline: none;

  &:hover {
    color: var(--color-primary-60);
    font-weight: var(--font-weight-bold);
  }

  &:focus {
    border-color: transparent;
    box-shadow: inset 0 0 0 1px var(--color-primary-60);
  }
`;

export const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: var(--color-grey-10);
`;
