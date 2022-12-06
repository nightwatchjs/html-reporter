import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import React, { useState } from 'react';
import { ArrowDropDown, ArrowDropUp } from '../../icons/index';
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

const FilterDropdown: React.FC = () => {
  const [context, setContext] = useState('All Tests');
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <TestFilterWrapper>
          <ArrowWrapper>{open ? <ArrowDropUp /> : <ArrowDropDown />}</ArrowWrapper>
          <TestFilterButton aria-label="Customize options">{context}</TestFilterButton>
        </TestFilterWrapper>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent>
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

export default FilterDropdown;
