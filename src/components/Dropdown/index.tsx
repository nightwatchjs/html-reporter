import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styled from 'styled-components';
import { Arrow } from '../../icons';

const Dropdown: React.FC = () => {
  const [context, SetContext] = React.useState('All Tests');
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <TestFilterWrapper>
          <ArrowWrapper>{open ? <Arrow type="up" /> : <Arrow type="down" />}</ArrowWrapper>
          <TestFilterButton aria-label="Customise options">{context}</TestFilterButton>
        </TestFilterWrapper>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuRadioGroup value={context} onValueChange={SetContext}>
            <DropdownRadioItem value="All Tests">All Tests</DropdownRadioItem>
            <DropdownMenuSeparator />
            <DropdownRadioItem value="Passed">Passed</DropdownRadioItem>
            <DropdownMenuSeparator />
            <DropdownRadioItem value="Failed">Failed</DropdownRadioItem>
            <DropdownMenuSeparator />
            <DropdownRadioItem value="Skipped">Skipped</DropdownRadioItem>
          </DropdownMenuRadioGroup>
          <DropdownMenuArrow />
        </DropdownMenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const TestFilterWrapper = styled.div`
  position: relative;
`;

const ArrowWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  align-items: center;
  padding-right: 12px;
`;

const TestFilterButton = styled.button`
  color: var(--color-grey-90);
  padding: 4px 40px 4px 8px;
  border: 1px solid var(--color-grey-50);
  border-radius: 4px;
  display: flex;
  justify-content: flex-start;
  background: var(--color-grey-10);
  font-size: var(--font-size-12);
  line-height: var(--line-height-20);
  min-width: 104px;
`;

const DropdownMenuContent = styled(DropdownMenu.Content)`
  min-width: 110px;
  background-color: var(--color-grey-10);
  border-radius: 3px;
  font-size: var(--font-size-14);
  line-height: var(--line-height-20);
  color: var(--color-grey-100);
  display: flex;
  gap: 8px;

  box-shadow: 0px 1px 4px var(--color-grey-50);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`;

const DropdownMenuRadioGroup = styled(DropdownMenu.RadioGroup)`
  width: 100%;
`;

const DropdownMenuSeparator = styled(DropdownMenu.Separator)`
  height: 1px;
  border: 1px solid var(--color-grey-50);
`;

const DropdownRadioItem = styled(DropdownMenu.RadioItem)`
  padding: 8px 12px;
  font-weight: var(--font-weight-semi-light);
  user-select: none;
  outline: none;

  &:hover {
    color: var(--color-primary-60);
    font-weight: var(--font-weight-bold);
  }

  &:focus {
    border: 1px solid var(--color-primary-60);
  }
`;

const DropdownMenuArrow = styled(DropdownMenu.Arrow)`
  fill: var(--color-grey-10);
`;

export default Dropdown;
