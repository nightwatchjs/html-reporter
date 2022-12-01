import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import {
  ArrowWrapper,
  DropdownMenuArrow,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownRadioItem,
  TestFilterButton,
  TestFilterWrapper
} from './style';

const Dropdown: React.FC = () => {
  const [context, setContext] = useState('All Tests');
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <TestFilterWrapper>
          <ArrowWrapper>{open ? <ArrowDropUp /> : <ArrowDropDown />}</ArrowWrapper>
          <TestFilterButton aria-label="Customise options">{context}</TestFilterButton>
        </TestFilterWrapper>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuRadioGroup value={context} onValueChange={setContext}>
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

export default Dropdown;
