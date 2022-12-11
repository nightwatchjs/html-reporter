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

type FilterDropdownProps = {
  filterContext: string;
  setFilterContext: React.Dispatch<React.SetStateAction<string>>;
};

const FilterDropdown: React.FC<FilterDropdownProps> = ({ filterContext, setFilterContext }) => {
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu.Root onOpenChange={(open) => setOpen(open)}>
      <DropdownMenu.Trigger asChild>
        <TestFilterWrapper>
          <ArrowWrapper>{open ? <ArrowDropUp /> : <ArrowDropDown />}</ArrowWrapper>
          <TestFilterButton aria-label="Customize options">{filterContext}</TestFilterButton>
        </TestFilterWrapper>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={filterContext} onValueChange={setFilterContext}>
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
