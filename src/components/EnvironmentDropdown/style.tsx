import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const EnvironmentSelectorWrapper = styled.button`
  display: flex;
  gap: var(--gap-12);
  background-color: var(--light-color-red-background-10);
  border: var(--border-1) solid var(--color-primary-40);
  border-radius: var(--border-radius-4);
  padding: var(--padding-8) var(--padding-12);
  color: var(--color-grey-100);
  align-items: center;
  position: relative;
`;

export const EnvironmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--gap-8);
  flex: 4;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: var(--gap-8);
  padding: 0 var(--padding-12);
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  margin-top: var(--margin-4);
  width: var(--radix-dropdown-menu-trigger-width);
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-10);
  border-radius: var(--border-radius-3);
  color: var(--color-grey-100);
  gap: var(--gap-12);
  box-shadow: 0px 1px 4px var(--color-grey-50);
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
  padding: var(--padding-8) 0 0 0;
  cursor: pointer;
`;

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  &:focus {
    border: var(--border-2) solid var(--color-primary-50);
  }
`;

export const DropdownRadioItem = styled(DropdownMenu.RadioItem)`
  padding: var(--padding-8) var(--padding-12);
  font-weight: var(--font-weight-semi-light);
  user-select: none;
  outline: none;

  &:hover {
    background-color: var(--light-primary-background-10);
  }

  &:focus {
    border-color: transparent;
    box-shadow: inset 0 0 0 1px var(--color-primary-60);
  }

  &:not(:last-child) {
    border-bottom: var(--border-1) solid var(--color-grey-50);
  }

  &[data-state='checked'] {
    background: var(--light-primary-background-10);

    h2 {
      font-weight: var(--font-weight-bold);
    }
  }
`;
