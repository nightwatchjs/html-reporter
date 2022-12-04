import styled from 'styled-components';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const EnvironmentSelectorWrapper = styled.button`
  display: flex;
  gap: 12px;
  background-color: var(--light-color-red-background-10);
  border: 1px solid var(--color-primary-40);
  border-radius: var(--border-radius-4);
  padding: 8px 12px;
  color: var(--color-grey-100);
  align-items: center;
`;

export const EnvironmentDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 4;
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 0 12px;
`;

export const DropdownMenuContent = styled(DropdownMenu.Content)`
  margin-top: 4px;
  min-width: 646px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-grey-10);
  border-radius: var(--border-radius-3);
  color: var(--color-grey-100);
  gap: 12px;
  box-shadow: 0px 1px 4px var(--color-grey-50);
  filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.16));
  padding: 8px 0 0 0;
`;

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  &:focus {
    border: 2px solid var(--color-primary-50);
  }
`;

export const DropdownRadioItem = styled(DropdownMenu.RadioItem)`
  padding: 8px 12px;
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
`;
